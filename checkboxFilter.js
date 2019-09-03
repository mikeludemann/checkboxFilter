function checkboxFilter(elements, main, sub) {

	let results = Array.from(document.querySelectorAll(elements)),
		mainCheck = document.querySelectorAll(main),
			subCheck = document.querySelectorAll(sub);

	// Hide all results
	results.forEach(function(result) {

		result.style.display = 'none';

  });

	// Filter results to only those that meet ALL requirements: 
	mainSubFiltering(mainCheck);

	if (subCheck.length != 0) {

		mainSubFiltering(subCheck);

	}

	function mainSubFiltering(mainSubChecking) {

		results = Array.from(mainSubChecking).reduce(function(sum, input) {

			const inputRef = input.getAttribute('rel');

			return sum.concat(results.filter(function(result) {

				return result.classList.contains(inputRef);

      }));

    }, []);

  }

	// Show those filtered results:
	results.forEach(function(result) {

		result.style.display = 'block';

  });

}

checkboxFilter('.result > div','.filter input.models:checked','.filter input.processors:checked');
