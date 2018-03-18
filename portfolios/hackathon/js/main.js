$('.question-container').first().show().addClass('animated bounceInUp');

$('.btn--next').on('click', function() {
   var $currentQuestion = $(this).parents('.question-container'),
       $nextQuestion = $currentQuestion.next();
        
   $currentQuestion.addClass('animated bounceOutUp');
   setTimeout(function(){
   		$currentQuestion.hide();
   }, 500);
   $nextQuestion.show().addClass('animated bounceInUp');
});

$('.btn--first').on('click', function(){
	var name = $('input[name="name"]').val(),
		goalLabel = $('.goal-label');

		goalLabel.html('Nice to meet you, <span class="colored-span">' + name + '</span>! What\'s your goal for today?')
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$('.btn--final').on('click', function() {
		var childName = $('input[name="child-name"]').val(),
			childAge = $('input[name="child-age"').val(),
			childSchool = $('input[name="child-school"').val(),
			childSchoolYear = $('input[name="child-schoolyear"').val(),
			childProfession = $('input[name="child-profession"').val(),
			userName = $('input[name="email"]').val();

		var goal = $('.question-2').data('goal');
		var country = $('.question-country').data('country');
		var faculty = $('.question-profession').data('faculty');


		var finalMessage = '<span class="colored-span">' + childName + 
				' </span> would need <span class="colored-span"> S$ 500/month </span> ' + 
				' to pursue ' + childProfession + ' in ' + childSchool + ' by the year of ' + 
				childSchoolYear + '. We can help you fund <span class="colored-span">' + childName + 
				' </span>\'s education. What do you say?';

			$('.message').html(finalMessage);

})

function addUserGoal(userGoal) {
			$.ajax({
			url: 'https://ikhednuox0.execute-api.ap-southeast-1.amazonaws.com/v1/user/goal',
			method: 'POST',
			contentType: 'text/plain',
			dataType: 'json',
			data: JSON.stringify(userGoal)
		}).done(function (data) {
			console.log('SUCCESS');
		}).fail(function () {
			console.log('LOL');
		});
}

$.getJSON("https://ikhednuox0.execute-api.ap-southeast-1.amazonaws.com/v1/goal?q=edu", function(result){
   //response data are now in the result variable
   console.log(result);
});

// TYPEAHEAD
$('.question-2').typeahead({
	items: 20,
	minLength: 3,
	source: function (query, process) {
		return $.get('https://ikhednuox0.execute-api.ap-southeast-1.amazonaws.com/v1/goal?q=' + query, function (data) {
			var stringData = data.map(function (item) {
				var newItem = {
					description: item.description,
					category: item.category
				};

				return JSON.stringify(newItem);
			});

			return process(stringData);
		});
	},
	matcher: function (item) {
		return 1;
	},
	highlighter: function (item) {
		var newItem = JSON.parse(item);
		return newItem.description;
	},
	updater: function (item) {
		var newItem = JSON.parse(item);
		$('.question-2').data('goal', newItem.category);
		return newItem.description;
	}
});

$('.question-country').typeahead({
	items: 20,
	minLength: 3,
	source: function (query, process) {
		return $.get('https://ikhednuox0.execute-api.ap-southeast-1.amazonaws.com/v1/country?q=', function (data) {
			var stringData = data.map(function (item) {
				var newItem = {
					name: item.name,
					isoCode: item.isoCode
				};
				return JSON.stringify(newItem);
			});

			return process(stringData);
		});
	},
	highlighter: function (item) {
		var newItem = JSON.parse(item);
		return newItem.name;
	},
	updater: function (item) {
		var newItem = JSON.parse(item);
		$('.question-country').data('country', newItem.isoCode);
		initProfTypeAhead(newItem.isoCode);
		return newItem.name;
	}
});

function initProfTypeAhead (country) {
		$('.question-profession').val('');
		$('.question-profession').typeahead('destroy');

		$.get('https://ikhednuox0.execute-api.ap-southeast-1.amazonaws.com/v1/country/faculty/' + country, function (data) {
			var source = data.map(function (item) {
				return item.name;
			});

			$('.question-profession').typeahead({
				items: 20,
				minLength: 3,
				source: source,
				updater: function (item) {
					for (var index = 0, length = data.length; index < length; index++) {
						var innerData = data[index];
						if (innerData.name === item) {
							$('.question-profession').data('faculty', innerData.code);
							return innerData.name;
						}
					}
				}
			});
		});
}