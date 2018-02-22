function letter(letters,hidden){
	this.letters = letters;
	this.hidden = hidden;
	this.hide = function(){
		this.hidden = true;
	}
	this.show = function(){
		this.hidden = false;
	}
	this.render = function(){
		if(this.hidden){
			return "_";
		} else {
			return this.letters;
		}
	}

}

var guessOne = new letter('lizard', true);

guessOne.render();


function word(letters){
	this.letters = [];
	this.getLetters = function(newWord){
		newWord = str.split();
		console.log(newWord.push(letters));
	}
	this.isFound = function(){
		if(this.letters.length() === 0){
			return true;
		} else{

		}

	}

	this.try = function(letter){
		letter = '';
		return true;		
	}

	this.render = function(){

	}
}

function game(){
	this.guesses = guesses;
	this.guessedLetters = [];
	this.words = [];
	this.currentWord = currentWord;
	this.startGame = function(wordsArray){
		guesses = 10;
		guessedLetters = [];
		words = [];
		words.push(wordsArray);
		randomNum = Math.floor(Math.random() * currentWord.length());
	}
}

function guess(letter){
	if(letter){
		this.try(letter);
		this.letter.push();
	} else{

	}
}
