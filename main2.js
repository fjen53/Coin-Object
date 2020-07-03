let coin = {
    state: 0,
    flip: function () {
        const headsOrTails = calculateRandomOneOrZero()
        coinState = headsOrTails
    }
function coinStatetoString() {
        if (coinState === 1) {
    return "Heads"
} else {
    return "Tails"
}
}
/* 1. Randomly set your coin object's "state" property to be either 
   0 or 1: use "this.state" to access the "state" property on this object.*/
flipUp = () => {
    this.state({ count: this.state.count + 1 })
}

FlipDown = () => {
    this.state({ count: this.state.count - 1 })
}
render() {
    return (
    },
toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
       "this.state" is 0 or 1. */
},
toHTML: function () {
    let image = document.createElement('img');
    /* 3. Set the properties of this image element to show either face-up
       or face-down, depending on whether this.state is 0 or 1.*/
    return image;
}
    };


state: 0,
    flip: function() {

        this.state = Math.floor(Math.random() * 2);

    },
toString: function() {

    if (this.state === 0) {
        return Heads;
    } else {
        return Tails
    }


},
toHTML: function() {
    const image = document.createElement('img');

    image.src = `$this.toString()}.png`
    image.alt = this.toString()

    return image;
}
};
function display20Flips() {
    const results = [];
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
    for (let i = 0; i < 20; i++) {
        if (i % 2) {
            results[i] = 'heads';
        } else {
            results[i] = 'tails';
        }
        console.log(results[i])
    }
}

display20Flips();
function display20Images() {
    const results = [];
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

