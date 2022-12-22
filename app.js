// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");

function increment() {
	count++;
	countEl.textContent = count;
}

function save() {
	let savedCount = count + " - ";
	saveEl.textContent += savedCount;
	countEl.textContent = 0;
	count = 0;
}

// comment



