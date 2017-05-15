'use strict';
//          DATA            //
var allItems = [];

//          CONSTRUCTOR FUNCTION & INSTANCES            //

function Item (name, filepath, numShown, numClicked, id) {
    this.name = name;
    this.filepath = filepath;
    this.numShown = numShown;
    this.numClicked = numClicked;
    this.id = id;
}

var bag = new Item ('bag', 'imgs/bag.jpg',0,0,'bag' );
var banana = new Item ('banana', 'imgs/banana.jpg',0,0,'banana' );
var bathroom = new Item ('bathroom', 'imgs/bathroom.jpg',0,0,'bathroom' );
var boots = new Item ('boots', 'imgs/boots.jpg',0,0,'boots' );
var breakfast = new Item ('breakfast', 'imgs/breakfast.jpg',0,0,'breakfast' );
var bubblegum = new Item ('bubblegum', 'imgs/bubblegum.jpg',0,0,'bubblegum' );
var chair = new Item ('chair', 'imgs/chair.jpg',0,0,'chair' );
var cthulhu = new Item ('cthulhu', 'imgs/cthulhu.jpg', 0,0,'cthulhu');
var dogDuck = new Item ('dog duck', 'imgs/dog-duck.jpg',0,0,'dog-duck' );
var dragon = new Item ('dragon', 'imgs/dragon.jpg',0,0,'dragon' );
var pen = new Item ('pen', 'imgs/pen.jpg',0,0,'pen' );
var petSweep = new Item ('pet sweep', 'imgs/pet-sweep.jpg',0,0,'pet-sweep' );
var scissors = new Item ('scissors', 'imgs/scissors.jpg',0,0,'scissors' );
var shark = new Item ('shark', 'imgs/shark.jpg',0,0,'shark' );
var sweep = new Item ('sweep', 'imgs/sweep.jpg',0,0,'sweep' );
var tauntaun = new Item ('tauntaun', 'imgs/tauntaun.jpg',0,0,'tauntaun' );
var unicorn = new Item ('unicorn', 'imgs/unicorn.jpg',0,0,'unicorn' );
var usb = new Item ('usb', 'imgs/usb.gif',0,0,'usb' );
var waterCan = new Item ('water can', 'imgs/water-can.jpg',0,0,'water-can' );
var wineGlass = new Item ('wine glass', 'imgs/wine-glass.jpg',0,0,'wine-glass' );



//          DISPLAY & VOTING FUNCTIONS            //

var tracker = {
    option 1: document.getElementsByClassName(option1)[0];
    option 2: document.getElementsByClassName(option2)[0];
    option 3: document.getElementsByClassName(option3)[0];
    displaySection: document.getElementById('display');
    votes: 0;
}







