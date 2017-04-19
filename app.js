const multiply = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		// wire up event handler for form submit
		document.getElementById('form-numbers')
			.addEventListener(
				'submit',
				this.onSubmitCalculate
				);
		document.getElementById('add-factor')
			.addEventListener(
				'submit',
				this.onSubmitAddFactor
				);
	}
	onSubmitCalculate(event) {
		// block form from actually submitting (refreshing page)
		event.preventDefault();
		
		let htmlCollectionOfDivs = document.getElementById('factors')
			.children;
		let divsContainingFactors = [];
		for(let i = 0; i < htmlCollectionOfDivs.length; i++) {
			divsContainingFactors.push(htmlCollectionOfDivs[i]);
		}
		let divs = Array.from(divsContainingFactors);
		//console.log(divs[1].children[0].value);
		let factors = [];
		divs.forEach(div => {
			factors.push(div.children[0].value);
		});
		factors = factors.map(stringNum => parseInt(stringNum, 10));
		console.log(factors);
		// convert them to ints
		

		// multiply
		//const product = multiply([num1, num2]);

		// output
		//alert(product);
	}
	onSubmitAddFactor(event) {
		event.preventDefault();
		//add a new input box 
		let factors = document.getElementById('factors');
		let newDiv = document.createElement('div');
		let newFactor = document.createElement('input');
		newFactor.type = 'text';
		newFactor.size = 3;
		newDiv.appendChild(newFactor);
		factors.appendChild(newDiv);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

