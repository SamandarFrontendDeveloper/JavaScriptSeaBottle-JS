let view = {
    diplayMessage: function(msg) {
        var message = document.getElementById("messageArea");
        message.innerHTML = msg
    },
    displayHit: function(location) {
        const cell = document.getElementById(location)
        cell.classList.add('hit')
    },
    displayMiss: function(location){
        const cell = document.getElementById(location)
        cell.classList.add('miss')
    }
}

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk:0,
    ships: [
        ship1 = {location: ['10', '20', '30'], hits: ['', '','']},
        ship2 = {location: ['40', '50', '25'], hits: ['', '','']},
        ship3 = {location: ['15', '23', '22'], hits: ['', '','']}
    ],
    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            const ship = this.ships[i];
            let index = ship.location.indexOf(guess)
            if (index >= 0) {
                ship.hits[index] = 'hit'
                view.displayHit(guess)
                view.diplayMessage('HIT!!!')
                if (this.isSunk(ship)) {
                    this.shipsSunk++
                    
                }
                console.log(guess);
                console.log('попал');
                
                return true
            }
        }
        view.displayMiss(guess)
        view.diplayMessage('Miss!!!')

    },
    isSunk: function(ship){
        for (let i = 0; i < this.ship; i++) {
            if (ship.hits[i] !== 'hit') {
                return false
            }
            
        }
        false
    }
               
    
    
}


let controler = {
    guess: 0,


    processGuess: function(guess){
        let location = parseGuess(guess)
        if (location) {
            this.guess++
           let hit =  model.fire(location)
           if (hit && model.shipsSunk === model.numShips) {
            view.diplayMessage('Вы потопили' + model.numShips + 'кораблей за' + controler.guess + 'выстрелов')
           }
            
        }
        model.fire(location)
        
    }
    
}




function parseGuess(guess) {

    let alphabet = ['A','B','C','D','E','F','G']

    if (guess === null) {
        alert('no results')
    }else{

        firstChar = guess.charAt(0)
        row = alphabet.indexOf(firstChar)
        column = guess.charAt(1)
        console.log(firstChar);
        console.log(row);
        if (isNaN(row) || isNaN(column)) {
            console.log('no results');
        }else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize ){
            console.log('no results');
        }else{
            return row + column
        }
    }
    return null


}





function init() {
    let fireButton = document.getElementById('fireButton')
    fireButton.addEventListener('click', handleFireButton)
}

const handleFireButton= () => {
    const guessInput = document.getElementById('guessInput')
    const guess = guessInput.value
    guessInput.value = ''
    console.log(guess);
    controler.processGuess(guess)
}
init()
















            












