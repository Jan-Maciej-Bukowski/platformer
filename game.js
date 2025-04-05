const wys = window.innerHeight / 2;
const szer = window.innerWidth / 2;
const mapa = new tilemap(
  "platformer",
  3800,
  800,
  szer - 600,
  wys - 400,
  50,
  50,
  "mapa"
);
const gracz = new player(mapa, 0, 9, "gracz", 80, 3);

// Podstawowa platforma
for (let y = 13; y < 16; y++) {
  for (let x = 0; x < 76; x++) {
    new thing(mapa, x, y, "dirt");
  }
}

// Dodaj więcej elementów do mapy
new thing(mapa, 64, 5, "win");
new thing(mapa, 0, 11, "grass_top");
new thing(mapa, 1, 11, "grass_top_right");
new thing(mapa, 0, 12, "dirt");
new thing(mapa, 1, 12, "dirt_rog_pg");
new thing(mapa, 2, 12, "grass_top");
new thing(mapa, 3, 12, "grass_top");
new thing(mapa, 4, 12, "grass_top");
new thing(mapa, 5, 12, "grass_top");
new thing(mapa, 6, 13, "dirt_right");
new thing(mapa, 7, 13, "trap");
new thing(mapa, 8, 13, "trap");
new thing(mapa, 9, 13, "trap");
new thing(mapa, 6, 12, "grass_top_right");
new thing(mapa, 10, 13, "dirt_left");
new thing(mapa, 10, 12, "grass_top_left");
new thing(mapa, 11, 12, "grass_top");
new thing(mapa, 12, 12, "grass_top");

for (let x = 14; x < 18; x++) {
  new thing(mapa, x, 10, "grass_top");
  new thing(mapa, x, 11, "dirt");
}

for (let x = 20; x < 24; x++) {
  new thing(mapa, x, 8, "grass_top");
  new thing(mapa, x, 9, "dirt");
}

new thing(mapa, 20, 8, "grass_top_left");
new thing(mapa, 20, 9, "dirt_left");

new thing(mapa, 20, 10, "dirt_left");
new thing(mapa, 21, 10, "dirt");
new thing(mapa, 22, 10, "dirt");
new thing(mapa, 23, 10, "dirt");
new thing(mapa, 20, 11, "dirt_left");
new thing(mapa, 21, 11, "dirt");
new thing(mapa, 22, 11, "dirt");
new thing(mapa, 23, 11, "dirt");

for (let x = 14; x < 24; x++) {
  new thing(mapa, x, 12, "dirt");
}

new thing(mapa, 13, 12, "grass_top");
new thing(mapa, 14, 11, "dirt_left");
new thing(mapa, 14, 10, "grass_top_left");

new thing(mapa, 11, 8, "box");
new thing(mapa, 8, 6, "box");

new thing(mapa, 0, 5, "grass_top_bottom");
new thing(mapa, 1, 5, "grass_top_bottom");
new thing(mapa, 2, 5, "grass_top_bottom");
new thing(mapa, 3, 5, "grass_top_bottom");
new thing(mapa, 4, 5, "grass_top_bottom");

new thing(mapa, 5, 5, "grass_top_right_bottom");

new thing(mapa, 0, 0, "dirt_bottom");
new thing(mapa, 1, 0, "dirt_bottom");
new thing(mapa, 2, 0, "dirt_bottom");
new thing(mapa, 3, 0, "dirt_bottom");
new thing(mapa, 4, 0, "dirt_bottom");
new thing(mapa, 5, 0, "dirt_bottom_right");

new thing(mapa, 2, 1, "laser_top");
new thing(mapa, 4, 1, "laser_top");
new thing(mapa, 2, 2, "laser");
new thing(mapa, 4, 2, "laser");
new thing(mapa, 2, 3, "laser");
new thing(mapa, 4, 3, "laser");
new thing(mapa, 2, 4, "laser_bottom");
new thing(mapa, 4, 4, "laser_bottom");

new thing(mapa, 18, 10, "grass_top_right");
new thing(mapa, 18, 11, "dirt_right");

new thing(mapa, 19, 12, "ydek_tile");
new thing(mapa, 19, 13, "ydek_tile");
new thing(mapa, 19, 14, "ydek_tile");

new thing(mapa, 15, 12, "ydek_tile");
new thing(mapa, 16, 12, "ydek_tile");
new thing(mapa, 17, 12, "ydek_tile");
new thing(mapa, 18, 12, "ydek_tile");

new thing(mapa, 15, 13, "ydek_tile");
new thing(mapa, 16, 13, "ydek_tile");
new thing(mapa, 17, 13, "ydek_tile");
new thing(mapa, 18, 13, "ydek_tile");

new thing(mapa, 15, 14, "ydek_tile");
new thing(mapa, 16, 14, "ydek_tile");
new thing(mapa, 17, 14, "ydek_tile");
new thing(mapa, 18, 14, "ydek_tile");

new thing(mapa, 20, 12, "dirt_left");
new thing(mapa, 20, 13, "dirt_left");
new thing(mapa, 20, 14, "dirt_left");
new thing(mapa, 14, 12, "dirt_rog_lg");

new thing(mapa, 15, 15, "dirt");
new thing(mapa, 16, 15, "dirt");
new thing(mapa, 17, 15, "dirt");
new thing(mapa, 18, 15, "dirt");
new thing(mapa, 19, 15, "dirt");

new thing(mapa, 15, 15, "grass_top");

new thing(mapa, 14, 13, "dirt_right");
new thing(mapa, 14, 14, "dirt_right");
new thing(mapa, 14, 15, "dirt_rog_pg");
new thing(mapa, 15, 12, "dirt_bottom_right");
new thing(mapa, 15, 11, "dirt_rog_pd");
new thing(mapa, 20, 15, "dirt_rog_lg");
new thing(mapa, 15, 13, "klucz");

new thing(mapa, 24, 13, "dirt_rog_pg");
new thing(mapa, 43, 13, "dirt_rog_lg");
new thing(mapa, 62, 12, "dirt_rog_pg");

new thing(mapa, 19, 14, "sprenzyna");
new thing(mapa, 16, 11, "dirt_bottom");
new thing(mapa, 17, 11, "dirt_bottom");
new thing(mapa, 18, 11, "dirt_bottom_right");

new thing(mapa, 12, 4, "dirt_bottom_left");
new thing(mapa, 13, 4, "dirt_rog_ld");
new thing(mapa, 14, 4, "dirt_right");
new thing(mapa, 15, 4, "grass_top_right_bottom");
new thing(mapa, 17, 4, "grass_top_bottom_left");
new thing(mapa, 18, 4, "grass_top_bottom");
new thing(mapa, 19, 4, "grass_top_bottom");
new thing(mapa, 20, 4, "grass_top_bottom");
new thing(mapa, 21, 4, "grass_top_bottom");
new thing(mapa, 22, 4, "grass_top_bottom");
new thing(mapa, 23, 4, "grass_top_bottom");

new thing(mapa, 13, 5, "dirt_bottom_left");
new thing(mapa, 14, 5, "dirt_bottom_right");

new thing(mapa, 16, 9, "sprenzyna");

new thing(mapa, 12, 3, "dirt_left");
new thing(mapa, 12, 2, "dirt_left");
new thing(mapa, 12, 1, "dirt_left");
new thing(mapa, 12, 0, "dirt_left");

new thing(mapa, 13, 3, "dirt");
new thing(mapa, 13, 2, "dirt");
new thing(mapa, 13, 1, "dirt");
new thing(mapa, 13, 0, "dirt");

new thing(mapa, 15, 15, "grass_top");
new thing(mapa, 16, 15, "grass_top");
new thing(mapa, 17, 15, "grass_top");
new thing(mapa, 18, 15, "grass_top");
new thing(mapa, 19, 15, "grass_top");

new thing(mapa, 14, 3, "dirt_right");
new thing(mapa, 14, 2, "dirt_right");
new thing(mapa, 14, 1, "dirt_right");
new thing(mapa, 14, 0, "dirt_right");

new thing(mapa, 17, 3, "enemy");
new thing(mapa, 22, 2, "klucz");
new thing(mapa, 24, 3, "dirt_left_right");

new thing(mapa, 23, 5, "laser_top");
new thing(mapa, 23, 6, "laser");
new thing(mapa, 23, 7, "laser_bottom");

new thing(mapa, 24, 8, "grass_top_right");

new thing(mapa, 24, 9, "dirt_right");
new thing(mapa, 24, 10, "dirt_right");
new thing(mapa, 24, 11, "dirt_right");
new thing(mapa, 24, 12, "dirt_right");

new thing(mapa, 24, 4, "dirt_bottom_left_right");
new thing(mapa, 24, 3, "dirt_left_right");
new thing(mapa, 24, 2, "dirt_left_right");
new thing(mapa, 24, 1, "dirt_left_right");
new thing(mapa, 24, 0, "dirt_left_right");

new thing(mapa, 25, 13, "woda_top");
new thing(mapa, 26, 13, "woda_top");
new thing(mapa, 27, 13, "woda_top");
new thing(mapa, 28, 13, "woda_top");
new thing(mapa, 25, 14, "woda");
new thing(mapa, 26, 14, "woda");
new thing(mapa, 27, 14, "woda");
new thing(mapa, 28, 14, "woda");
new thing(mapa, 29, 13, "grass_top");
new thing(mapa, 30, 13, "grass_top");
new thing(mapa, 31, 13, "grass_top");
new thing(mapa, 32, 13, "grass_top");
new thing(mapa, 33, 13, "grass_top");
new thing(mapa, 34, 13, "grass_top");
new thing(mapa, 35, 13, "grass_top");
new thing(mapa, 36, 13, "grass_top");
new thing(mapa, 37, 13, "grass_top");
new thing(mapa, 38, 13, "grass_top");
new thing(mapa, 30, 12, "trzon_grzyba");
new thing(mapa, 30, 11, "grzyb_top");
new thing(mapa, 29, 11, "grzyb_left");
new thing(mapa, 31, 11, "grzyb_right");
new thing(mapa, 32, 13, "woda_top");
new thing(mapa, 33, 13, "woda_top");
new thing(mapa, 34, 13, "woda_top");
new thing(mapa, 35, 13, "woda_top");
new thing(mapa, 32, 14, "woda");
new thing(mapa, 33, 14, "woda");
new thing(mapa, 34, 14, "woda");
new thing(mapa, 35, 14, "woda");
new thing(mapa, 37, 12, "trzon_grzyba");
new thing(mapa, 37, 11, "grzyb_top");
new thing(mapa, 36, 11, "grzyb_left");
new thing(mapa, 38, 11, "grzyb_right");
new thing(mapa, 39, 13, "woda_top");
new thing(mapa, 40, 13, "woda_top");
new thing(mapa, 41, 13, "woda_top");
new thing(mapa, 42, 13, "woda_top");
new thing(mapa, 39, 14, "woda");
new thing(mapa, 40, 14, "woda");
new thing(mapa, 41, 14, "woda");
new thing(mapa, 42, 14, "woda");

new thing(mapa, 43, 11, "grass_top_left");
new thing(mapa, 43, 12, "dirt_left");
new thing(mapa, 44, 11, "grass_top");
new thing(mapa, 45, 11, "grass_top");
new thing(mapa, 46, 11, "grass_top");
new thing(mapa, 47, 11, "grass_top");
new thing(mapa, 48, 11, "grass_top");
new thing(mapa, 49, 11, "grass_top");
new thing(mapa, 50, 11, "grass_top");
new thing(mapa, 44, 12, "dirt");
new thing(mapa, 45, 12, "dirt");
new thing(mapa, 46, 12, "dirt");
new thing(mapa, 47, 12, "dirt");
new thing(mapa, 48, 12, "dirt");
new thing(mapa, 49, 12, "dirt");
new thing(mapa, 50, 12, "dirt");

new thing(mapa, 46, 8, "chmura");
new thing(mapa, 49, 9, "chmura");
new thing(mapa, 49, 6, "chmura");
new thing(mapa, 46, 4, "chmura");
new thing(mapa, 42, 4, "chmura");
new thing(mapa, 38, 4, "chmura");
new thing(mapa, 34, 4, "chmura");
new thing(mapa, 30, 4, "chmura");
new thing(mapa, 26, 4, "platforma");
new thing(mapa, 25, 4, "platforma");
new thing(mapa, 27, 4, "platforma");

new thing(mapa, 26, 2, "klucz");

new thing(mapa, 51, 11, "grass_top");
new thing(mapa, 52, 11, "grass_top");
new thing(mapa, 53, 11, "grass_top");
new thing(mapa, 54, 11, "grass_top");
new thing(mapa, 55, 11, "grass_top");
new thing(mapa, 56, 11, "grass_top");
new thing(mapa, 57, 11, "grass_top");
new thing(mapa, 58, 11, "grass_top");
new thing(mapa, 59, 11, "grass_top");
new thing(mapa, 60, 11, "grass_top");
new thing(mapa, 61, 11, "grass_top");
new thing(mapa, 62, 11, "grass_top_right");

new thing(mapa, 63, 12, "grass_top");
new thing(mapa, 64, 12, "grass_top");
new thing(mapa, 65, 12, "grass_top_right");

new thing(mapa, 66, 13, "grass_top");
new thing(mapa, 67, 13, "grass_top");
new thing(mapa, 68, 13, "grass_top");
new thing(mapa, 69, 13, "grass_top");

new thing(mapa, 70, 13, "grass_top");
new thing(mapa, 71, 13, "grass_top");
new thing(mapa, 72, 13, "grass_top");
new thing(mapa, 73, 13, "grass_top");
new thing(mapa, 74, 13, "grass_top");

new thing(mapa, 51, 12, "dirt");
new thing(mapa, 52, 12, "dirt");
new thing(mapa, 53, 12, "dirt");
new thing(mapa, 54, 12, "dirt");
new thing(mapa, 55, 12, "dirt");
new thing(mapa, 56, 12, "dirt");
new thing(mapa, 57, 12, "dirt");
new thing(mapa, 58, 12, "dirt");
new thing(mapa, 59, 12, "dirt");
new thing(mapa, 60, 12, "dirt");
new thing(mapa, 61, 12, "dirt");
new thing(mapa, 62, 12, "dirt");

new thing(mapa, 57, 10, "trzon_drzewa");
new thing(mapa, 57, 9, "pien_drzewa");
new thing(mapa, 57, 9, "pien_drzewa");
new thing(mapa, 57, 8, "pien_drzewa");
new thing(mapa, 57, 7, "galoz3_drzewa");
new thing(mapa, 58, 7, "wypierd2");
new thing(mapa, 56, 7, "wypierd");
new thing(mapa, 57, 6, "pien_drzewa");
new thing(mapa, 57, 5, "wypierd3");
new thing(mapa, 59, 7, "wypierd4");
new thing(mapa, 57, 4, "rozgalenzienie");
new thing(mapa, 57, 3, "liscie");
new thing(mapa, 57, 2, "liscie");
new thing(mapa, 56, 3, "liscie_bottom_right");
new thing(mapa, 55, 3, "liscie_bottom"); //
new thing(mapa, 54, 3, "liscie_bottom_left");
new thing(mapa, 54, 2, "liscie_top_left");
new thing(mapa, 55, 2, "liscie_top");
new thing(mapa, 56, 2, "liscie_top_right");
new thing(mapa, 57, 0, "liscie_top");
new thing(mapa, 56, 0, "liscie_top");
new thing(mapa, 55, 0, "liscie_top_left");
new thing(mapa, 58, 0, "liscie_top_right");
new thing(mapa, 58, 1, "liscie");
new thing(mapa, 57, 1, "liscie");
new thing(mapa, 58, 2, "liscie_left");
new thing(mapa, 58, 3, "liscie_bottom_left");
new thing(mapa, 59, 3, "liscie_bottom");
new thing(mapa, 60, 3, "liscie_bottom_right");
new thing(mapa, 60, 2, "liscie_right");
new thing(mapa, 59, 2, "liscie");
new thing(mapa, 60, 1, "liscie_top_right");
new thing(mapa, 59, 1, "liscie_top");
new thing(mapa, 58, 1, "liscie_top_left");
new thing(mapa, 56, 4, "liscie_bottom_left");
new thing(mapa, 55, 1, "liscie_bottom_left");
new thing(mapa, 56, 1, "liscie_bottom");
new thing(mapa, 58, 4, "liscie_bottom_right");
new thing(mapa, 75, 13, "grass_top_right");
new thing(mapa, 75, 14, "dirt_right");
new thing(mapa, 75, 15, "dirt_right");

new thing(mapa, 62, 10, "laser_bottom");
new thing(mapa, 62, 9, "laser");
new thing(mapa, 62, 8, "laser");
new thing(mapa, 62, 7, "laser_top");

new thing(mapa, 62, 12, "dirt_rog_pg");
new thing(mapa, 65, 13, "dirt_rog_pg");

new thing(mapa, 62, 6, "dirt_bottom_left");
new thing(mapa, 62, 5, "dirt_left_right");
new thing(mapa, 62, 4, "dirt_left_right");
new thing(mapa, 62, 3, "dirt_left_right");
new thing(mapa, 62, 2, "dirt_left");
new thing(mapa, 62, 1, "dirt_left");
new thing(mapa, 62, 0, "dirt_left");

new thing(mapa, 63, 6, "grass_top_bottom");
new thing(mapa, 64, 6, "grass_top_bottom");
new thing(mapa, 65, 6, "grass_top_bottom");
new thing(mapa, 66, 7, "dirt_bottom_left");
new thing(mapa, 67, 7, "dirt_bottom");
new thing(mapa, 68, 7, "dirt_bottom");
new thing(mapa, 69, 7, "dirt_bottom");
new thing(mapa, 70, 7, "dirt_bottom_right");

new thing(mapa, 63, 2, "dirt_bottom_right");

new thing(mapa, 66, 6, "grass_top");
new thing(mapa, 67, 6, "grass_top");
new thing(mapa, 68, 6, "grass_top");
new thing(mapa, 69, 6, "grass_top");
new thing(mapa, 70, 6, "grass_top_right");

new thing(mapa, 63, 0, "dirt");
new thing(mapa, 63, 1, "dirt_rog_pd");
new thing(mapa, 64, 0, "dirt");
new thing(mapa, 64, 1, "dirt_bottom");
new thing(mapa, 65, 0, "dirt_rog_pd");
new thing(mapa, 65, 1, "dirt_bottom_right");
new thing(mapa, 66, 0, "dirt_bottom");
new thing(mapa, 67, 0, "dirt_bottom");
new thing(mapa, 68, 0, "dirt_bottom");
new thing(mapa, 69, 0, "dirt_bottom");
new thing(mapa, 70, 0, "dirt_bottom");
new thing(mapa, 71, 0, "dirt_bottom");
new thing(mapa, 72, 0, "dirt_bottom");
new thing(mapa, 72, 0, "dirt_rog_ld");
new thing(mapa, 73, 0, "dirt");
new thing(mapa, 74, 0, "dirt");
new thing(mapa, 75, 0, "dirt");
new thing(mapa, 72, 1, "dirt_bottom_left");
new thing(mapa, 73, 1, "dirt_bottom");
new thing(mapa, 74, 1, "dirt_rog_ld");
new thing(mapa, 75, 1, "dirt");

new thing(mapa, 74, 2, "dirt_bottom_left");
new thing(mapa, 75, 2, "dirt_rog_ld");
new thing(mapa, 75, 3, "dirt_left");
new thing(mapa, 75, 4, "dirt_bottom_left");

new thing(mapa, 66, 12, "boss");

new thing(mapa, 74, 12, "sprenzyna");

new thing(mapa, 71, 6, "platforma");
new thing(mapa, 72, 6, "platforma");
new thing(mapa, 73, 6, "platforma");

new thing(mapa, 0, 3, "klucz");

new thing(mapa, 55, 10, "rura_top");

new thing(mapa, 59, 10, "rura_top");
/////////////////////////////////////
let laser_zamk = true;
async function laserowanie() {
  if (laser_zamk == true) {
    new thing(mapa, 17, 12, "ydek_tile");
    new thing(mapa, 17, 13, "ydek_tile");
    new thing(mapa, 17, 14, "ydek_tile");
    laser_zamk = false;
  } else {
    new thing(mapa, 17, 12, "laser2");
    new thing(mapa, 17, 13, "laser2");
    new thing(mapa, 17, 14, "laser2");
    laser_zamk = true;
  }
  await sleep(2000);
  requestAnimationFrame(() => {
    laserowanie();
  });
}
laserowanie();
////////////////////////////////////
let brama1_usunieta = false;
async function usun_brame() {
  if (mapa.returnTile(15, 13).state == "ydek_tile") {
    new thing(mapa, 4, 1, "ydek_tile");
    new thing(mapa, 4, 2, "ydek_tile");
    new thing(mapa, 4, 3, "ydek_tile");
    new thing(mapa, 4, 4, "ydek_tile");
    brama1_usunieta = true;
  }
  if (brama1_usunieta == false) {
    await sleep(1000);
    requestAnimationFrame(() => {
      usun_brame();
    });
  }
}
usun_brame();
/////////////////////////////////////
let brama2_usunieta = false;
async function usun_brame2() {
  if (mapa.returnTile(22, 2).state == "ydek_tile") {
    new thing(mapa, 2, 1, "ydek_tile");
    new thing(mapa, 2, 2, "ydek_tile");
    new thing(mapa, 2, 3, "ydek_tile");
    new thing(mapa, 2, 4, "ydek_tile");
    brama2_usunieta = true;
  }
  if (brama2_usunieta == false) {
    await sleep(1000);
    requestAnimationFrame(() => {
      usun_brame2();
    });
  }
}
usun_brame2();
////////////////////////////////////////
let brama3_usunieta = false;
async function usun_brame3() {
  if (mapa.returnTile(0, 3).state == "ydek_tile") {
    new thing(mapa, 23, 5, "ydek_tile");
    new thing(mapa, 23, 6, "ydek_tile");
    new thing(mapa, 23, 7, "ydek_tile");
    brama3_usunieta = true;
  }
  if (brama3_usunieta == false) {
    await sleep(1000);
    requestAnimationFrame(() => {
      usun_brame3();
    });
  }
}
usun_brame3();
///////////////////////////////////////////
let brama4_usunieta = false;
async function usun_brame4() {
  if (mapa.returnTile(26, 2).state == "ydek_tile") {
    new thing(mapa, 62, 7, "ydek_tile");
    new thing(mapa, 62, 8, "ydek_tile");
    new thing(mapa, 62, 9, "ydek_tile");
    new thing(mapa, 62, 10, "ydek_tile");
    brama4_usunieta = true;
  }
  if (brama4_usunieta == false) {
    await sleep(1000);
    requestAnimationFrame(() => {
      usun_brame4();
    });
  }
}
usun_brame4();
////////////////////////////////////////////
async function ruch_stwora1() {
  if (mapa.returnTile(17, 3).state == "enemy") {
    new thing(mapa, 17, 3, "ydek_tile");
    new thing(mapa, 18, 3, "enemy");
    if (gracz.tileX == 18 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    if (gracz.tileX == 18 && gracz.tileY == 2) {
      new thing(mapa, 18, 3, "ydek_tile");
      stwor_zywy = false;
    }
    await sleep(1000);
    new thing(mapa, 18, 3, "ydek_tile");
    new thing(mapa, 19, 3, "enemy");
    if (gracz.tileX == 19 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    new thing(mapa, 19, 3, "ydek_tile");
    new thing(mapa, 20, 3, "enemy");
    if (gracz.tileX == 20 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    new thing(mapa, 20, 3, "ydek_tile");
    new thing(mapa, 21, 3, "enemy");
    if (gracz.tileX == 21 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    new thing(mapa, 21, 3, "ydek_tile");
    new thing(mapa, 20, 3, "enemy");
    if (gracz.tileX == 20 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    new thing(mapa, 20, 3, "ydek_tile");
    new thing(mapa, 19, 3, "enemy");
    if (gracz.tileX == 19 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    new thing(mapa, 19, 3, "ydek_tile");
    new thing(mapa, 18, 3, "enemy");
    if (gracz.tileX == 18 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    new thing(mapa, 18, 3, "ydek_tile");
    new thing(mapa, 17, 3, "enemy");
    if (gracz.tileX == 17 && gracz.tileY == 3) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(1000);
    requestAnimationFrame(() => {
      ruch_stwora1();
    });
  }
}
ruch_stwora1();
//////////////////////////////////
async function ruch_stwora2() {
  if (mapa.returnTile(66, 12).state == "boss") {
    new thing(mapa, 66, 12, "ydek_tile");
    new thing(mapa, 67, 12, "boss");
    if (gracz.tileX == 67 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 67, 12, "ydek_tile");
    new thing(mapa, 68, 12, "boss");
    if (gracz.tileX == 68 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 68, 12, "ydek_tile");
    new thing(mapa, 69, 12, "boss");
    if (gracz.tileX == 69 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 69, 12, "ydek_tile");
    new thing(mapa, 70, 12, "boss");
    if (gracz.tileX == 70 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 70, 12, "ydek_tile");
    new thing(mapa, 71, 12, "boss");
    if (gracz.tileX == 71 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 71, 12, "ydek_tile");
    new thing(mapa, 72, 12, "boss");
    if (gracz.tileX == 72 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 72, 12, "ydek_tile");
    new thing(mapa, 71, 12, "boss");
    if (gracz.tileX == 71 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 71, 12, "ydek_tile");
    new thing(mapa, 70, 12, "boss");
    if (gracz.tileX == 70 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 70, 12, "ydek_tile");
    new thing(mapa, 69, 12, "boss");
    if (gracz.tileX == 69 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 69, 12, "ydek_tile");
    new thing(mapa, 68, 12, "boss");
    if (gracz.tileX == 68 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 68, 12, "ydek_tile");
    new thing(mapa, 67, 12, "boss");
    if (gracz.tileX == 67 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    new thing(mapa, 67, 12, "ydek_tile");
    new thing(mapa, 66, 12, "boss");
    if (gracz.tileX == 66 && gracz.tileY == 12) {
      alert("przegrałeś!");
      window.location.reload();
    }
    await sleep(300);
    requestAnimationFrame(() => {
      ruch_stwora2();
    });
  }
}
ruch_stwora2();
/////////////////////////
async function checkTraps() {
  await sleep(300);
  if (
    gracz.checkNextTileState(0, 1) == "trap" ||
    gracz.checkNextTileState(0, 1) == "woda_top"
  ) {
    alert("przegrałeś!");
    window.location.reload();
  }
  requestAnimationFrame(() => {
    checkTraps();
  });
}
checkTraps();
///////////////////
async function scroling() {
  if (this.tileX > 10) {
    window.scrollTo(this.tileX * 50 - 550, 0);
  }
  if (this.tileX < 10) {
    window.scrollTo(0, 0);
  }
  await sleep(100);
  requestAnimationFrame(() => {
    scroling();
  });
}
scroling();
////////////////
function checkWin() {
  if (gracz.tileX >= 63 && gracz.tileY == 5 && gracz.tileX <= 66) {
    alert("Wygrałeś!");
    window.location.reload();
  }
  requestAnimationFrame(() => {
    checkWin();
  });
}
checkWin();
