'use strict';
console.log(Chart);
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
    var shark = new Item('shark', 'shark.jpg', 'shark');
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

    opt1description: document.getElementById('opt1description'),
    opt2description: document.getElementById('opt2description'),
    opt3description: document.getElementById('opt3description'),
        
    displaySection: document.getElementById('display'),
    previousItems: [],

    // get random number within allItems array.length
    randomIndex: function (arr) {
        return Math.floor(Math.random() * allItems.length);
    },


    getIndex: function (arr) {
        //create array that your selected images will be pushed to
        var selectedIndex = [];

        //call randomIndex function to generate the random number 
        while (selectedIndex.length < 3) {
            var item = this.randomIndex(arr);
            console.log(item);

            // get random index and push to selected index array
            if (selectedIndex.indexOf(item) === -1) {
                selectedIndex.push(item);
            }
        }
        //return items in the index array(items on the screen)
        return selectedIndex;
    },
    
    //display three options of products, using properties of tracker object
    displayOptions: function () {
        //TODO get 3 random items from allItems
        var randomItems = this.getIndex(allItems);
        console.log(randomItems);

        var rand1 = randomItems[0];
        var rand2 = randomItems[1];
        var rand3 = randomItems[2];
            console.log(rand1);
            console.log(rand2);
            console.log(rand3);

        var item1 = allItems[rand1];
        var item2 = allItems[rand2];
        var item3 = allItems[rand3];
            console.log(item1);
            console.log(item2);
            console.log(item3);

        //TODO append these items to the DOM
        this.option1.src = item1.filepath;
        this.option2.src = item2.filepath;
        this.option3.src = item3.filepath;

        console.log(this.opt1description);
        this.opt1description.innerText = item1.name;
        this.opt2description.innerText = item2.name;
        this.opt3description.innerText = item3.name;
    },

    // tallyVote: function (id) {
    //     this.votes += 1;

    //     allItems.forEach(function foo (item) {
    //         if (item.id === id) {
    //             item.votes += 1;
    //         }
    //     });

    //     if (this.votes > 25) {
    //         this.showResults();
    //     }
    // },

    // showResults: function () {
    //     this.displaySection.removeEventListener('click', showResults);
    //     console.log( allItems );

    // }

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