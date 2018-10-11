function feedback_form ()
{
	valid = true;

        if ( document.contact_form.contact_name.value == "" )
        {
                document.write ( "Please fill in the 'Your Name' box." );
                valid = false;
        }

        return valid;
}




