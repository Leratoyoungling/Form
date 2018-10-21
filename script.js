feedback_form = function(){
	valid = true;

        if ( document.feedback_form.name.value == "" &&  document.feedback_form.email.value == "")
        {
                document.write ( "Please fill in the 'Your Name' box." );
                valid = false;
        }

        return valid;
	
}

$(document).ready(function() {
	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 10;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		key: "dc6zaTOxFJmzC",
		tag: "fail",
		type: "random",
		rating: "pg-13"
	};
	// Target gif-wrap container
	const $gif_wrap = $("#gif-wrap");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.key +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		// Set gif as bg image
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});

		// Start duration countdown
		refreshRate();
	};

	// Call for new gif after duration
	var refreshRate = () => {
		// Reset set intervals
		clearInterval(refresh);
		refresh = setInterval(function() {
			// Call Giphy API for new gif
			newGif();
		}, duration);
	};

	// Call Giphy API for new gif
	newGif();
});


 function results() {
	 
 
 
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 
 if (document.getElementById('poll1').checked) {
  poll = document.getElementById('poll1').value;
 } else if (document.getElementById('poll2').checked) {
  poll = document.getElementById('poll2').value;
 } else {
   poll = document.getElementById('poll3').value;
 }
 
 var comments = document.getElementById('comments').value;
	 
 
  document.write("<h1>Thank You!</h1>".fontcolor('red'));
  document.write("<p>You have successfully submitted the feedback form.</p>".fontcolor('red'));
 
  document.write("<h3>Here is your data:</h3>");
 
 document.write(name + "<br/>");
 document.write(email + "<br/>");
 document.write(poll + "<br/>");
 document.write(comments + "<br/>");
 
  }




