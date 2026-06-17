let cols, rows;
let scl = 20;
let w = 600;
let h = 600;

let terrain = [];
let flying = 0;

function setup() {
  let container = document.getElementById('terrain-container');
  w = container.offsetWidth;
  h = container.offsetHeight;

  createCanvas(w, h, WEBGL).parent('terrain-container');

  cols = Math.floor(w / scl);
  rows = Math.floor(h / scl);

  terrain = Array.from({ length: cols }, () =>
    Array.from({ length: rows }, () => 0)
  );
  // Initialize 2D array
  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  flying -= 0.1;

  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
}

  background(0);
  stroke(255);
  noFill();

  rotateX(PI / 3);
  translate(-width / 2, -height / 2); //used to be w and h

  for (let x = 0; x < cols - 1; x++) {
    beginShape(TRIANGLE_STRIP);
    for (let y = 0; y < rows; y++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex((x + 1) * scl, y * scl, terrain[x + 1][y]);
    }
    endShape();
  }
}

function windowResized() {
  let container = document.getElementById('terrain-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);

  cols = Math.floor(container.offsetWidth / scl);
  rows = Math.floor(container.offsetHeight / scl);

  // Reinitialize terrain
  terrain = Array.from({ length: cols }, () =>
    Array.from({ length: rows }, () => 0)
  );
  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}