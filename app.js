const multiply = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		// wire up event handler for form submit
		document.getElementById('form-numbers')
			.addEventListener(
				'submit',
				this.onSubmit
				);
	}
	onSubmit(event) {
		// block form from actually submitting (refreshing page)
		event.preventDefault();
		// get the inputted numbers -- this is probably going to be a
		// forEach or for loop in the future once i figure out how to 
		// add additional elements and the number of input nums is 
		// not known and therefore can't be hard coded. 
		let num1 = document.getElementById('input-factor1').value;
		let num2 = document.getElementById('input-factor2').value;

		// convert them to ints
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		// multiply
		const product = multiply([num1, num2]);

		// output
		alert(product);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

