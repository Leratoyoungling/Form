function feedback_form ()
{
	valid = true;

        if ( document.feedback_form.name.value == "" &&  document.feedback_form.email.value == "")
        {
                document.write ( "Please fill in the 'Your Name' box." );
                valid = false;
        }

        return valid;
}




