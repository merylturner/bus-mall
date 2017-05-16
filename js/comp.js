  getIndex: function (arr) {
        // create empty array
        var selectedIndex = [];
        //if item is not in selected index array, add to it
        while (selectedIndex.length < 3) {
            var item = this.randomIndex(arr);

            if (selectedIndex.indexOf(item) === -1) {
                selectedIndex.push(item);
            }
        }
        //returns items in selectedIndex array
        return selectedIndex;
    },

    displayOptions: function () {
        //get 3 random items from selected index
        var randItem = this.getIndex(allItems);
        var item1 = randItem[0];
        var item2 = randItem[1];
        var item3 = randItem[2];

        var product1 = allItems[item1];
        var product2 = allItems[item2];
        var product3 = allItems[item3];





//old code to reference

//get 3 random items
        var randNum = [this.randomIndex(), this.randomIndex(), this.randomIndex()];
        conditional if pictures are matching


        run for loop through firstRound array to check against randNum array
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