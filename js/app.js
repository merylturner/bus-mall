'use strict';
console.log(Chart);
//          DATA            //
var allItems = [];
var selectedIndex = [];

//          CONSTRUCTOR FUNCTION & INSTANCES            //

function Item(name, filepath, id) {
    this.name = name;
    this.filepath = 'imgs/' + filepath;
    this.shown = 0;
    this.clicked = 0;
    this.id = id;
    this.votes = 0;

    allItems.push(this);

};

function instantiateItems() {
    if (localStorage.voteData) {
        //reassigning the value of our allItems array to this data
        allItems = JSON.parse(localStorage.getItem('voteData'));
    }

    else {
        var bag = new Item('bag', 'bag.jpg', 'bag');
        var banana = new Item('banana', 'banana.jpg', 'banana');
        var bathroom = new Item('bathroom', 'bathroom.jpg', 'bathroom');
        var boots = new Item('boots', 'boots.jpg', 'boots');
        var breakfast = new Item('breakfast', 'breakfast.jpg', 'breakfast');
        var bubblegum = new Item('bubblegum', 'bubblegum.jpg', 'bubblegum');
        var chair = new Item('chair', 'chair.jpg', 'chair');
        var cthulhu = new Item('cthulhu', 'cthulhu.jpg', 'cthulhu');
        var dogDuck = new Item('dog duck', 'dog-duck.jpg', 'dog duck');
        var dragon = new Item('dragon', 'dragon.jpg', 'dragon');
        var pen = new Item('pen', 'pen.jpg', 'pen');
        var petSweep = new Item('pet sweep', 'pet-sweep.jpg', 'pet sweep');
        var scissors = new Item('scissors', 'scissors.jpg', 'scissors');
        var shark = new Item('shark', 'shark.jpg', 'shark');
        var sweep = new Item('sweep', 'sweep.png', 'sweep');
        var tauntaun = new Item('tauntaun', 'tauntaun.jpg', 'tauntaun');
        var unicorn = new Item('unicorn', 'unicorn.jpg', 'unicorn');
        var usb = new Item('USB', 'usb.gif', 'USB');
        var waterCan = new Item('water can', 'water-can.jpg', 'water can');
        var wineGlass = new Item('wine glass', 'wine-glass.jpg', 'wine glass');
    };


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

    imageDisplay: document.getElementById('imageDisplay'),
    votes: 0,
    shown: 0,

    // get random number within allItems array.length
    randomIndex: function (arr) {
        return Math.floor(Math.random() * allItems.length);
    },


    getIndex: function (arr) {
        console.log('the three previous items were: ' + selectedIndex);
        //create array that your selected images will be pushed to
        var previousItems = selectedIndex;
        selectedIndex = [];
        // create array of selectedIndex's items
        // var previousItems = [selectedIndex[0], selectedIndex[1], selectedIndex[2]];

        //call randomIndex function to generate the random number 
        while (selectedIndex.length < 3) {
            var itemIndex = this.randomIndex(arr);


            // get random index and push to selected index array
            if (selectedIndex.indexOf(itemIndex) === -1 && previousItems.indexOf(itemIndex) === -1) {
                selectedIndex.push(itemIndex);
                // console.log(allItems[itemIndex]);
                allItems[itemIndex].shown += 1;
            }
        };
        //return items in the index array(items on the screen)
        return selectedIndex;
    },

    //display three options of products, using properties of tracker object
    displayOptions: function () {
        //TODO get 3 random items from allItems
        var randomItems = this.getIndex(allItems);
        // console.log(randomItems);

        var rand1 = randomItems[0];
        var rand2 = randomItems[1];
        var rand3 = randomItems[2];


        var item1 = allItems[rand1];
        var item2 = allItems[rand2];
        var item3 = allItems[rand3];


        //TODO append these items to the DOM
        this.option1.id = item1.id;
        this.option2.id = item2.id;
        this.option3.id = item3.id;

        this.option1.src = item1.filepath;
        this.option2.src = item2.filepath;
        this.option3.src = item3.filepath;

        this.opt1description.innerText = item1.name;
        this.opt2description.innerText = item2.name;
        this.opt3description.innerText = item3.name;



    },


    tallyVote: function (id) {
        this.votes += 1;
        // adding to this item's count every time it is clicked

        allItems.forEach(function run(item) {

            if (item.id === id) {
                // console.log(item.id);
                item.votes += 1;
                item.clicked += 1;
            }
        });
        //after 25 clicks/votes, show results
        if (this.votes > 25) {
            this.showResults();
            //add alert to user they've completed their votes
        };

    },

    showResults: function () {
        this.imageDisplay.removeEventListener('click', voteHandler);
        alert('You\'ve used all of your votes!');
        var resultsArrayIds = [];
        var resultsArrayClicks = [];

        for (var i = 0; i < allItems.length; i++) {
            resultsArrayIds.push(allItems[i].id);
            resultsArrayClicks.push(allItems[i].clicked);

        }


        var canvas = document.getElementById('resultschart');
        var itemsClicked = new Chart (canvas, {
            type: 'bar',
            data: {
                labels: resultsArrayIds,
                datasets: [{
                    label: 'Number of clicks',
                    data: resultsArrayClicks,
                    backgroundColor: 'rgba(24, 127, 225, .5)',
                }],

            },
            options: {
                title: {
                    display: true,
                    text: 'Most Popular Items'
                },
                responsive: false,
                maintainAspectRatio: true,
            }

        })
        //create message to the user under chart thanking for input


    }
}
//            EVENT LISTENERS         //

tracker.imageDisplay.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id) {
        // console.log('clicks');
        tracker.displayOptions();
        tracker.tallyVote(event.target.id);
    }

    localStorage.setItem('voteData', JSON.stringify(allItems));
};

instantiateItems();
tracker.displayOptions();
tracker.tallyVote();
