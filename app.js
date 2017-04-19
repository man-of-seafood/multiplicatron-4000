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
		event.preventDefault();
		
		let htmlCollectionOfDivs = document.getElementById('factors').children;
		console.log(htmlCollectionOfDivs);
		let divs = Array.from(htmlCollectionOfDivs);
		console.log(divs);
		//console.log(divs[1].children[0].value);
		let factors = [];
		divs.forEach(div => {
			factors.push(parseInt(div.children[0].value, 10));
		});
		
		const product = multiply(factors);

		// output
		alert(product);
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

