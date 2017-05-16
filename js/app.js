'use strict';
console.log( Chart );
//          DATA            //
var allItems = [];

//          CONSTRUCTOR FUNCTION & INSTANCES            //

function Item(name, filepath, numShown, numClicked, id) {
    this.name = name;
    this.filepath = 'imgs/' + filepath;
    this.numShown = 0;
    this.numClicked = 0;
    this.id = id;
    this.votes = 0;

    allItems.push(this);

};

function instantiateItems() {
    var bag = new Item('bag', 'bag.jpg', 'bag');
    var banana = new Item('banana', 'banana.jpg', 'banana');
    var bathroom = new Item('bathroom', 'bathroom.jpg', 'bathroom');
    var boots = new Item('boots', 'boots.jpg', 'boots');
    var breakfast = new Item('breakfast', 'breakfast.jpg', 'breakfast');
    var bubblegum = new Item('bubblegum', 'bubblegum.jpg', 'bubblegum');
    var chair = new Item('chair', 'chair.jpg', 'chair');
    var cthulhu = new Item('cthulhu', 'cthulhu.jpg', 'cthulhu');
    var dogDuck = new Item('dog duck', 'dog-duck.jpg', 'dog-duck');
    var dragon = new Item('dragon', 'dragon.jpg', 'dragon');
    var pen = new Item('pen', 'pen.jpg', 'pen');
    var petSweep = new Item('pet sweep', 'pet-sweep.jpg', 'pet-sweep');
    var scissors = new Item('scissors', 'scissors.jpg', 'scissors');
    var shark = new Item('shark', 'shark.jpg','shark');
    var sweep = new Item('sweep', 'sweep.png', 'sweep');
    var tauntaun = new Item('tauntaun', 'tauntaun.jpg', 'tauntaun');
    var unicorn = new Item('unicorn', 'unicorn.jpg', 'unicorn');
    var usb = new Item('usb', 'usb.gif', 'usb');
    var waterCan = new Item('water can', 'water-can.jpg', 'water-can');
    var wineGlass = new Item('wine glass', 'wine-glass.jpg', 'wine-glass');
}


//          DISPLAY & VOTING FUNCTIONS            //
//literal notation
var tracker = {
    //get DOM elements by class name for images and IDs for descriptions
    option1: document.getElementsByClassName('option1')[0],
    option2: document.getElementsByClassName('option2')[0],
    option3: document.getElementsByClassName('option3')[0],

    //ADD product descriptions??
    // opt1description: document.getElementById('opt1description')[0],
    // opt2description: document.getElementById('opt2description')[0],
    // opt3description: document.getElementById('opt3description')[0],

    displaySection: document.getElementById('display'),
    firstRound: [],

    // get random number within allItems array.length
    randomIndex: function (arr) {
        return Math.floor(Math.random() * allItems.length);
    },


    // // get random index and push to selected index array
    
    //display three options of products, using properties of tracker object

    displayOptions: function () {
        //get 3 random items
        var randNum = [this.randomIndex(), this.randomIndex(), this.randomIndex()];
        //conditional if pictures are matching


        //run for loop through firstRound array to check against randNum array
        for (var i = 0; i < this.firstRound.length; i++) {
            //check if item in randNum array matches item in this.firstRound array
            if (randNum.indexOf(this.firstRound[i]) !== -1) {
                randNum[i] = this.randomIndex();
                console.log(randNum.indexOf(this.firstRound[i]));
            }
        }

        var theseDoMatch = randNum[0] === randNum[1] || randNum[0] === randNum[2] || randNum[1] === randNum[2];

        while (theseDoMatch) {
            //reassign value to variables
            randNum[0] = this.randomIndex();
            randNum[1] = this.randomIndex();
            randNum[2] = this.randomIndex();
            //rerun 
            theseDoMatch = randNum[0] === randNum[1] || randNum[0] === randNum[2] || randNum[1] === randNum[2];
        };

        var item1 = allItems[randNum[0]];
        var item2 = allItems[randNum[1]];
        var item3 = allItems[randNum[2]];

        //create array of firstRound results
        this.firstRound = [randNum[0], randNum[1], randNum[2]];


        // append items to DOM
        this.option1.src = item1.filepath;
        this.option2.src = item2.filepath;
        this.option3.src = item3.filepath;

        //append descriptions to DOM
        // this.opt1description.innerText = item1.name;
        // this.opt2description.innerText = item2.name;
        // this.opt3description.innerText = item3.name;


        this.option1.id = item1.id;
        this.option2.id = item2.id;
        this.option3.id = item3.id;

    },

    tallyVote: function (id) {
        this.votes += 1;

        allItems.forEach(function foo (item) {
            if (item.id === id) {
                item.votes += 1;
            }
        });

        if (this.votes > 25) {
            this.showResults();
        }
    },

    showResults: function () {
        this.displaySection.removeEventListener('click', showResults);
        console.log( allItems );

    }

};

//            EVENT LISTENERS         //

tracker.displaySection.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id !== 'display')
        tracker.tallyVote(event.target.id);
    console.log(event.target.id);
    tracker.displayOptions();
};


instantiateItems();
tracker.displayOptions();