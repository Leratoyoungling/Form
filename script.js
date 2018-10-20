feedback_form = function(){
	valid = true;

        if ( document.feedback_form.name.value == "" &&  document.feedback_form.email.value == "")
        {
                document.write ( "Please fill in the 'Your Name' box." );
                valid = false;
        }

        return valid;
	
}

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
 
  var txt = "Thank You!";
  document.write("<h1>txt.color("green")</h1>");
 
  document.write("<h3>Here is your data:</h3>");
 
 document.write(name + "<br/>");
 document.write(email + "<br/>");
 document.write(poll + "<br/>");
 document.write(comments + "<br/>");
 
  }




