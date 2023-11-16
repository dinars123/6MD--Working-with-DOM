function colorChange() {
  const box = document.getElementById('box1') as HTMLElement;
  const currentColor = box.style.backgroundColor;

  if (currentColor === 'rgb(31, 194, 174)') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'rgb(31, 194, 174)';
  }
}

const buttOne = document.getElementById('button1');
buttOne.addEventListener('click', colorChange);

function changeText() {
  const box = document.getElementById('box2') as HTMLElement;
  if (box.innerHTML === 'Fail') {
    box.innerHTML = 'Success';
  } else {
    box.innerHTML = 'Fail';
  }
}

const buttTwo = document.getElementById('button2') as HTMLElement;
buttTwo.addEventListener('click', changeText);

function disappear() {
  const box = document.getElementById('box3') as HTMLElement;
  if (box.style.visibility === 'visible') {
    box.style.visibility = 'hidden';
  } else {
    box.style.visibility = 'visible';
  }
}

const buttThree = document.getElementById('button3') as HTMLElement;
buttThree.addEventListener('click', disappear);

function disappear1() {
  const box = document.getElementById('box4') as HTMLElement;
  if (box.style.visibility === 'visible') {
    box.style.visibility = 'hidden';
  } else {
    box.style.visibility = 'visible';
  }
}

const buttFour = document.getElementById('button4') as HTMLElement;
buttFour.addEventListener('click', disappear1);

function randomColor1() {
  const box = document.getElementById('box5') as HTMLElement;
  const colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 165, 0)',
    'rgb(128, 0, 128)',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
}

const bttFive = document.getElementById('button5') as HTMLElement;
bttFive.addEventListener('click', randomColor1);

let counter: any;
function counting() {
  const box = document.getElementById('box6') as HTMLElement;
  let count = 0;
  if (counter) {
    clearInterval(counter);
  }
  counter = setInterval(() => {
    count += 1;
    box.innerHTML = count.toString();
    if (count === 10) {
      clearInterval(counter);
    }
  }, 3000);
}

const bttSix = document.getElementById('button6') as HTMLElement;
bttSix.addEventListener('click', counting);

function allBoxColor() {
  const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    if (box.style.backgroundColor === 'rgb(31, 194, 174)') {
      box.style.backgroundColor = 'pink';
      document.body.style.backgroundColor = 'rgb(0 , 0, 0)';
    } else {
      box.style.backgroundColor = 'rgb(31, 194, 174)';
      document.body.style.backgroundColor = 'antiquewhite';
    }
  });
}

const buttSeven = document.getElementById('button7') as HTMLElement;
buttSeven.addEventListener('click', allBoxColor);

function mouseoverFunction() {
  const box = document.getElementById('box1') as HTMLElement;
  box.style.backgroundColor = 'red';
}

function mouseoutFunction() {
  const box = document.getElementById('box1') as HTMLElement;
  box.style.backgroundColor = 'rgb(31, 194, 174)';
}

const x = document.getElementById('box1') as HTMLElement;
x.addEventListener('mouseover', mouseoverFunction);
x.addEventListener('mouseout', mouseoutFunction);

function mouseoverBox5Function() {
  const box = document.getElementById('box5') as HTMLElement;
  let i = 0;
  const intervalId = setInterval(() => {
    box.innerHTML = i.toString();
    i += 1;
    if (i > 10) {
      clearInterval(intervalId);
    }
  }, 1000);
}

const y = document.getElementById('box5') as HTMLElement;
y.addEventListener('mouseover', mouseoverBox5Function);
