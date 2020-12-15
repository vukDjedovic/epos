
$( "form" ).submit(function( event ) {
    console.log(event);
    event.preventDefault();
   
    var checked = $('#checkbox')[0].checked;
    var email = $('#email')[0].value;
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

  
    if(!pattern.test(email)){
        alert('Morate popuniti email pravilno!');
        return;
    }

    if(checked){

        $('.prijava').slideUp();
        $('.prijava-uspesna').slideDown(1400);
    }

    else alert('Morate prihvatiti uslove.');
  });