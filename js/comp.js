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



