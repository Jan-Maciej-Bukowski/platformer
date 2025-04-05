function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class tilemap {
  constructor(type, width, height, x, y, tileWidth, tileHeight, id) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.tiles = [];
    this.tilesAmountX = Math.floor(this.width / this.tileWidth);
    this.tilesAmountY = Math.floor(this.height / this.tileHeight);

    this.przenikalne = ["ydek_tile"];

    this.tlo = document.createElement("div");
    this.tlo.className = "ydek_tlo";

    this.div = document.createElement("div");
    this.div.style.position = "absolute";
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.div.id = id;
    
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(this.div);

    let divi = document.getElementById("mapa");
    

    divi.appendChild(this.tlo);
    
    

    for (let i = 0; i < this.tilesAmountY; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < this.tilesAmountX; j++) {
        let tile = document.createElement("div");
        this.div.appendChild(tile);
        tile.className = "ydek_tile";
        this.tiles[i][j] = { state: "ydek_tile", element: tile };
      }
    }
    this.upd();
  }

  returnTile(tileX, tileY) {
    return this.tiles[tileY][tileX];
  }

  upd() {
    this.div.innerHTML = "";
    for (let i = 0; i < this.tilesAmountY; i++) {
      for (let j = 0; j < this.tilesAmountX; j++) {
        let div = document.createElement("div");
        this.div.appendChild(div);
        //div.innerText = "x: " + j + " y: " + i;
        div.className = this.tiles[i][j].state;
      }
    }
  }
}

class thing {
  constructor(tm, tileX, tileY, type) {
    this.tilemap = tm;
    this.tileX = tileX;
    this.tileY = tileY;
    this.type = type;
    this.div = document.createElement("div");
    this.div.className = type;

    this.tilemap.tiles[this.tileY][this.tileX].state = this.type;
    this.tilemap.tiles[this.tileY][this.tileX].element = this.div;
    this.tilemap.upd();
  }

  remove() {
    this.tilemap.tiles[this.tileY][this.tileX].state = "ydek_tile";
    this.tilemap.tiles[this.tileY][this.tileX].element =
      document.createElement("div");
    this.tilemap.upd();
  }
}

class player {
  constructor(tm, tileX, tileY, clas, gravity, jumpHeight) {
    this.tilemap = tm;
    this.startedX = tileX;
    this.startedY = tileY;
    this.tileX = tileX;
    this.tileY = tileY;
    this.gravity = gravity;
    this.gravity2 = gravity;
    this.jumpHeight = jumpHeight;
    this.jumpHeight2 = jumpHeight;
    this.actualJumpHeight = 0;

    this.nextToLeft = this.checkNextTileState(-1, 0);
    this.nextToRight = this.checkNextTileState(1, 0);
    this.nextToUp = this.checkNextTileState(0, -1);
    this.nextToDown = this.checkNextTileState(0, 1);

    this.isJumping = false;
    this.isFaling = false;
    this.isAlive = true;
    this.playerDiv = document.getElementsByClassName(clas);

    this.tilemap.tiles[this.tileY][this.tileX] = {
      state: "player",
    };
    this.tilemap.upd();

    if (this.tilemap.type == "platformer") {
      this.platformerMove();
    } else {
      this.defaultMove();
    }

    this.startPhysicsLoop();
  }

  checkNextTileState(whereX, whereY) {
    const newX = this.tileX + whereX;
    const newY = this.tileY + whereY;
    if (
      newX >= 0 &&
      newX < this.tilemap.tilesAmountX &&
      newY >= 0 &&
      newY < this.tilemap.tilesAmountY
    ) {
      const nextState = this.tilemap.tiles[newY][newX].state;
      if (this.tilemap.przenikalne.includes(nextState)) {
        return "ydek_tile"; // Treat przenikalne tiles as passable
      }
      return nextState;
    }
    return null;
  }

  platformerMove() {
    document.addEventListener("keydown", (event) => {
      this.tilemap.tiles[this.tileY][this.tileX].state = "ydek_tile"; // Reset current tile state
      switch (event.key) {
        case "w":
          if (
            (this.checkNextTileState(0, -1) == "ydek_tile" &&
              this.checkNextTileState(0, 1) != "ydek_tile" &&
              this.tileY > 0 &&
              !this.isJumping) ||
            (this.checkNextTileState(0, -1) == "klucz" &&
              this.checkNextTileState(0, 1) != "klucz" &&
              this.tileY > 0 &&
              !this.isJumping)
          ) {
            this.jump();
          }
          break;
        case "a":
          if (this.tileX > 0 && this.checkNextTileState(-1, 0) == "ydek_tile") {
            this.nextToLeft = this.checkNextTileState(-1, 0);
            this.tileX--;
          }
          break;
        case "d":
          if (
            this.tileX < this.tilemap.tilesAmountX - 1 &&
            this.checkNextTileState(1, 0) == "ydek_tile"
          ) {
            this.nextToRight = this.checkNextTileState(1, 0);
            this.tileX++;
          }
          break;
        case "s":
          if (this.checkNextTileState(0, 1) == "rura_top" && this.tileX == 55) {
            this.tileX = 59;
            this.tileY = 9;
          } else if (
            this.checkNextTileState(0, 1) == "rura_top" &&
            this.tileX == 59
          ) {
            this.tileX = 55;
            this.tileY = 9;
          }
          break;
        default:
          break;
      }
      this.tilemap.tiles[this.tileY][this.tileX].state = "player"; // Set new tile state
      this.tilemap.upd();
      window.scrollTo(this.tileX * 50 - 550, 0);
    });
  }

  async jump() {
    this.isJumping = true;
    let i = 1;
    const increment = 0.05;
    if (this.checkNextTileState(0, 1) == "sprenzyna") {
      this.jumpHeight *= 2;
      this.gravity /= 2;
    }
    if (this.checkNextTileState(0, -1) == "klucz") {
      this.tilemap.tiles[this.tileY - 1][this.tileX].state = "ydek_tile";
      this.isJumping = false;
      return;
    }
    while (
      this.checkNextTileState(0, -1) == "ydek_tile" &&
      this.tileY > 0 &&
      this.actualJumpHeight < this.jumpHeight
    ) {
      this.actualJumpHeight++;
      this.tilemap.tiles[this.tileY][this.tileX].state = "ydek_tile";
      this.tileY--;
      this.tilemap.tiles[this.tileY][this.tileX].state = "player";
      this.tilemap.upd();
      await sleep(this.gravity * i);
      i += increment;
    }
    await sleep(this.gravity * 1.5);
    this.isJumping = false;
    this.jumpHeight = this.jumpHeight2;
    this.gravity = this.gravity2;
  }

  defaultMove() {
    document.addEventListener("keydown", (event) => {
      this.tilemap.tiles[this.tileY][this.tileX].state = "ydek_tile";
      switch (event.key) {
        case "w":
          if (this.tileY > 0 && this.checkNextTileState(0, -1) == "ydek_tile") {
            this.tileY--;
          }
          break;
        case "s":
          if (
            this.tileY < this.tilemap.tilesAmountY - 1 &&
            this.checkNextTileState(0, 1) == "ydek_tile"
          ) {
            this.tileY++;
          }
          break;
        case "a":
          if (this.tileX > 0 && this.checkNextTileState(-1, 0) == "ydek_tile") {
            this.tileX--;
          }
          break;
        case "d":
          if (
            this.tileX < this.tilemap.tilesAmountX - 1 &&
            this.checkNextTileState(1, 0) == "ydek_tile"
          ) {
            this.tileX++;
          }
          break;
        default:
          break;
      }
      this.tilemap.tiles[this.tileY][this.tileX].state = "player";
      this.tilemap.upd();
    });
  }

  async physics() {
    if (this.isJumping) {
      return;
    }
    while (
      this.checkNextTileState(0, 1) == "ydek_tile" &&
      this.tileY < this.tilemap.tilesAmountY - 1
    ) {
      const currentTileState = this.tilemap.tiles[this.tileY][this.tileX].state;
      if (!this.tilemap.przenikalne.includes(currentTileState)) {
        this.tilemap.tiles[this.tileY][this.tileX].state = "ydek_tile";
      }
      this.tileY++;
      this.tilemap.tiles[this.tileY][this.tileX].state = "player";
      this.tilemap.upd();
      await sleep(this.gravity);
    }
    this.actualJumpHeight = 0;
    this.isJumping = false;
  }

  startPhysicsLoop() {
    const loop = async () => {
      await this.physics();
      requestAnimationFrame(loop);
    };
    loop();
  }
}
window.onload = () => {
  window.scrollTo(10000, 0);
  console.log("udane ładowanie");
};
