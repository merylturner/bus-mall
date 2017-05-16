'use strict';
//          DATA            //
var allItems = [];

//          CONSTRUCTOR FUNCTION & INSTANCES            //

function Item(name, filepath, numShown, numClicked, id) {
    this.name = name;
    this.filepath = 'imgs/' + filepath;
    this.numShown = numShown;
    this.numClicked = numClicked;
    this.id = id;

    allItems.push(this);

};

var bag = new Item('bag', 'bag.jpg', 0, 0, 'bag');
var banana = new Item('banana', 'banana.jpg', 0, 0, 'banana');
var bathroom = new Item('bathroom', 'bathroom.jpg', 0, 0, 'bathroom');
var boots = new Item('boots', 'boots.jpg', 0, 0, 'boots');
var breakfast = new Item('breakfast', 'breakfast.jpg', 0, 0, 'breakfast');
var bubblegum = new Item('bubblegum', 'bubblegum.jpg', 0, 0, 'bubblegum');
var chair = new Item('chair', 'chair.jpg', 0, 0, 'chair');
var cthulhu = new Item('cthulhu', 'cthulhu.jpg', 0, 0, 'cthulhu');
var dogDuck = new Item('dog duck', 'dog-duck.jpg', 0, 0, 'dog-duck');
var dragon = new Item('dragon', 'dragon.jpg', 0, 0, 'dragon');
var pen = new Item('pen', 'pen.jpg', 0, 0, 'pen');
var petSweep = new Item('pet sweep', 'pet-sweep.jpg', 0, 0, 'pet-sweep');
var scissors = new Item('scissors', 'scissors.jpg', 0, 0, 'scissors');
var shark = new Item('shark', 'shark.jpg', 0, 0, 'shark');
var sweep = new Item('sweep', 'sweep.png', 0, 0, 'sweep');
var tauntaun = new Item('tauntaun', 'tauntaun.jpg', 0, 0, 'tauntaun');
var unicorn = new Item('unicorn', 'unicorn.jpg', 0, 0, 'unicorn');
var usb = new Item('usb', 'usb.gif', 0, 0, 'usb');
var waterCan = new Item('water can', 'water-can.jpg', 0, 0, 'water-can');
var wineGlass = new Item('wine glass', 'wine-glass.jpg', 0, 0, 'wine-glass');



//          DISPLAY & VOTING FUNCTIONS            //
//literal notation
var tracker = {
    option1: document.getElementsByClassName('option1')[0],
    option2: document.getElementsByClassName('option2')[0],
    option3: document.getElementsByClassName('option3')[0],
    displaySection: document.getElementById('display'),
    votes: 0,
    firstRound: [],

    // get random number within allItems array.length
    randomIndex: function (arr) {
        return Math.floor(Math.random() * allItems.length);
    },


    // get random index and push to selected index array
    getIndex: function (arr) {
        var selectedIndex = [];
    },


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


        // console.log(allItems);

        //create array of firstRound results
        this.firstRound = [randNum[0], randNum[1], randNum[2]];

        // console.log(this.firstRound);



        // append items to DOM
        this.option1.src = item1.filepath;
        this.option2.src = item2.filepath;
        this.option3.src = item3.filepath;

        // console.log(this.option1);

    },

    tallyVote: function (id) {
        this.votes += 1;

        for (var i = 0; i < allItems.length; i++) {
            var item = allItems[i];
            if (item.id === id) {
                item.votes += 1;

            }
        }
    },

    showResults: function () {
        this.displaySection.removeEventListener('click', voteHandler);
        for (var i = 0; i < 26; i++) {
            // var item = allItems[i];
            console.log(item.name + ': ' + item.votes);
        }
    }

}

//            EVENT LISTENERS         //

tracker.displaySection.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id !== 'display')
        tracker.tallyVote(event.target.id);
    console.log(event.target.id);
    tracker.displayOptions();
};


tracker.displayOptions();




