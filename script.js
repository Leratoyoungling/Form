Submit = function(){
 
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 
 if (document.getElementById('poll1').checked) {
  poll = document.getElementById('poll1').value;
 } else if (document.getElementById('poll2').checked) {
  poll = document.getElementById('poll2').value;
 } else {
   poll = document.getElementById('poll3').value;
 }
  document.write("<h1>Thank You!</h1>");
  document.write("<p>Your Data is sent to us via email</p>");
 
  document.write("<h3>Here is your data:</h3>");
 
 document.write(name + "<br/>");
 document.write(email + "<br/>");
 document.write(poll + "<br/>");
 
  }
