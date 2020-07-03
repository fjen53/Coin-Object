let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

        this.state = (Math.floor(Math.random() * 2) == 0);
        if (this.state) {
            flip("1");
        } else {
            flip("0");
        }
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return Heads;
        } else {
            return Tails
        }

    },
    toHTML: function () {
        let image = document.createElement('img');
        let bodyElement = document.createElement('body')
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        bodyElement.append(image)
        image.setAttribute('src', 'images.jpg')

        function allFlips() {
            let results = [];

            for (let index = 0; index < 2; index++) {
                if (index % 2) {
                    results[index] = 'heads';
                } else {
                    results[index] = 'tails';
                }
                console.log(results[index])
            }
        }
        function allImages() {
            let results = [];

        }
        return image;
    }
}