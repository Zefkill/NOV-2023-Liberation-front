const timeLeft = document.querySelector('#time-left')
const clickSound = document.getElementById('clickSound');

let car = document.getElementById("car");
let car2 = document.getElementById("car2");
let car3 = document.getElementById("car3");
let car4 = document.getElementById("car4");
let topPX = 550;
let topPX2 = 280;
let leftPX = 800;
let leftPX2 = 400;
let speed = 5;
let speed2 = 5;
let speed3 = 5;
let speed4 = 5;
let drive;
let currentTime = 60;
let timerId = null
let cars = ["car", "car2", "car3", "car4"]
let result = 0

/* hier is de funcites en de mechanisme van de game*/

function start() {
    topPX -= speed;
    car.style.top = topPX + "px";
  
    if (topPX <= -50) {
      topPX = 900;
    }
  
    topPX2 += speed2;
    car2.style.top = topPX2 + "px";
  
    if (topPX2 >= 880) {
      topPX2 = -20;
    }
  
    leftPX -= speed3;
    car3.style.left = leftPX + "px";
  
    if (leftPX <= 0) {
      leftPX = 2000;
    }
  
    leftPX2 += speed4;
    car4.style.left = leftPX2 + "px";
  
    if (leftPX2 >= 2000) {
      leftPX2 = 0;
    }
  
    drive = setTimeout(start, 14);
  }


/* de stop function*/

function stop(){
  clearTimeout(drive);
}

/* de explode function*/

function explodeCar() {
  car.src = "./img/explode-boom.gif"
  setTimeout(function(){
    car.src = "./img/car_green.png"
  }, 1000)
}

function explodeCar2() {
  car2.src = "./img/explode-boom.gif"
  setTimeout(function(){
    car2.src = "./img/car_red.png"
  }, 1000)
}

function explodeCar3() {
  car3.src = "./img/explode-boom.gif"
  setTimeout(function(){
    car3.src = "./img/car_blue.png"
  }, 1000)
}

function explodeCar4() {
  car4.src = "./img/explode-boom.gif"
  setTimeout(function(){
    car4.src = "./img/fire.png"
  }, 1000)
}

/* boom sound*/

car.addEventListener('click', function() {
  clickSound.play();
});

car2.addEventListener('click', function() {
  clickSound.play();
});

car3.addEventListener('click', function() {
  clickSound.play();
});

car4.addEventListener('click', function() {
  clickSound.play();
});

/* function countdown*/

function time() {
  currentTime--
  timeLeft.textContent = currentTime
 
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(start())
    alert('GAME OVER!')
  }
 }
 
 let countDownTimerId = setInterval(time, 1000)

/* dropdowncontent*/

function toggleContent(contentId) {
  let dropdownContent = document.getElementById(contentId);
  if (
    dropdownContent.style.display === "none" ||
    dropdownContent.style.display === ""
  ) {
    dropdownContent.style.display = "flex";
  } else {
    dropdownContent.style.display = "none";
  }
}
