let checkbox;
let slider;
let selection;

let input;
let submitButton;
let questions;
let listQuestions = [];
let greeting;




function setup() {
  createCanvas(800, 800);
  checkbox = createCheckbox();
  checkbox.position(100,100);

  slider = createSlider(0,200);
  slider.position(100,300)
  slider.size(400);

  selection = createSelect();
  selection.position(400,100);
  selection.option('up high');
  selection.option('down low');
  selection.option('around the side');
  selection.option('too slow')
  rect(200,300,300,100,499);

  input = createInput();
  input.position (400,400);
  submitButton = createButton('YES Please');
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(askSomething);

  greeting = createElement('h2', 'all good?');
  greeting.style('color','red');
  greeting.position(input.x, input.y - 50);

}

function askSomething(){
  question = input.value();
  input.value('');
  listQuestions.push(question);

}



function draw() {
  background(22,44,100);
  for (x = 0; x < listQuestions.length; x++){
    text(listQuestions[x], 100, 200 + x * 50);

  }

  if (checkbox.checked()){
    let r = random(rect);
    rect(100,200,200,100,100);
    let value = slider.value();
    //background (value);
    
    }

  }
  


