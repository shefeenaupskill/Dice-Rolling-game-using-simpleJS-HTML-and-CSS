


document.getElementById('roll').onclick = () => {
    let images = [];
    let diceArray = [];
    let no = document.getElementById('number').value;

    diceArray = randomGenerator(parseInt(no));
    for (let i = 0; i < diceArray.length; i++) {
        console.log('diceArray[i]-->' + diceArray[i])
        images.push(`<img src="/images/${diceArray[i]}.svg" alt="${diceArray[i]}" height="120px" width="120px">`);
    }
    document.getElementById('output-text').textContent = `Dice: ${diceArray}`;
    document.getElementById('output').innerHTML = images.join(' ');

}


function randomGenerator(no) {
    let numArray = [];
    for (let i = 0; i < no; i++) {
        numArray[i] = Math.floor(Math.random() * 6) + 1;
    }
    return numArray;
}

