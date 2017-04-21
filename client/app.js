const multiply = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
			.addEventListener(
				'submit',
				this.onSubmitCalculate.bind(this));

		document.getElementById('new-factor')
			.addEventListener(
				'submit',
				this.onSubmitAddFactor);
	}
	
	onSubmitCalculate(event) {
		event.preventDefault();
		
		let htmlCollectionOfDivs = document.getElementById('factors').children;
		let divs = Array.from(htmlCollectionOfDivs);
		let factors = [];
		divs.forEach(div => {
			factors.push(parseInt(div.children[0].value, 10));
		});
		
		const product = multiply(factors);
		this.renderProduct(product);
	}

	renderProduct(product) {
		document.querySelector('.product').textContent = product;
	}

	onSubmitAddFactor(event) {
		event.preventDefault();
		// add a new input box 
		let factors = document.getElementById('factors');
		let newDiv = document.createElement('div');
		let newFactor = document.createElement('input');
		newFactor.className = 'input-factor';
		newFactor.type = 'text';
		newFactor.size = 3;
		newFactor.autocomplete = 'off';
		newDiv.appendChild(newFactor);
		factors.appendChild(newDiv);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

