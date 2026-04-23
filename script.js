let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  timer += deltaTime;

  // Màu đỏ đô (chữ chính) và màu xanh Cyan (hình vẽ)
  let redColor = color(130, 25, 45); 
  let blueColor = color(60, 185, 195);
  let darkColor = color(45, 65, 75);

  // --- TIMELINE CHUẨN VIDEO ---

  // 0s - 0.7s: Hiện chữ "Tớ"
  if (timer > 200 && timer < 5000) {
    drawText("Tớ", width/2 - 120, height/2 - 160, redColor, 65);
  }

  // 0.7s - 5s: Hiện "Không muốn"
  if (timer > 700 && timer < 5000) {
    drawText("Không muốn", width/2 + 20, height/2 - 120, redColor, 75);
  }

  // 1.5s - 5s: Hiện "chúng ta"
  if (timer > 1500 && timer < 5000) {
    drawText("chúng ta", width/2, height/2, redColor, 75);
  }

  // 2.5s - 5s: Hiện "bỏ lỡ nhau" + Vẽ ngôi sao xanh
  if (timer > 2500 && timer < 5000) {
    drawText("bỏ lỡ nhau", width/2, height/2 + 120, redColor, 75);
    drawSketch(width/2 + 190, height/2 + 10, blueColor);
  }

  // 5s - 5.8s: Khoảng nghỉ (Màn hình trắng - Transition)

  // 5.8s trở đi: Cảnh cuối "muốn bên"
  if (timer > 5800) {
    drawText("muốn", width/2, height/2 - 60, darkColor, 100);
    drawText("bên", width/2, height/2 + 70, darkColor, 100);
    drawSketch(width/2 + 160, height/2 - 90, blueColor);
  }
}

function drawText(txt, x, y, c, s) {
  push();
  fill(c);
  noStroke();
  textSize(s);
  textStyle(BOLD);
  // Hiệu ứng nét vẽ tay hơi rung nhẹ
  text(txt, x + random(-0.5, 0.5), y + random(-0.5, 0.5));
  pop();
}

function drawSketch(x, y, c) {
  push();
  noFill();
  stroke(c);
  strokeWeight(5);
  strokeCap(ROUND);
  
  // Vẽ hình icon nguệch ngoạc giống video
  beginShape();
  for(let i=0; i<12; i++) {
    let ang = TWO_PI / 12 * i;
    let r = (i % 2 === 0) ? 35 : 20;
    let vx = x + cos(ang) * r + random(-2, 2);
    let vy = y + sin(ang) * r + random(-2, 2);
    curveVertex(vx, vy);
  }
  endShape(CLOSE);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
