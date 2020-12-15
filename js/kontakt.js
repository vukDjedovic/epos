alert("Popunite email i antispam obavezno!");


document.getElementById('broj1').textContent = Math.floor(Math.random() * 10);
document.getElementById('broj2').textContent = Math.floor(Math.random() * 10);

$( "form" ).submit(function( event ) {
    event.preventDefault();
    var email = $('#email')[0].value;

    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if(!pattern.test(email)){
        alert('Morate popuniti email pravilno!');
        return;
    }

    var poruka = $('textarea')[0].value;

    if(poruka.length < 10){
        alert('Poruka mora imati barem 10 slova!');
        return;
    }

    var zbir = parseInt($('#broj1').text()) + parseInt($('#broj2').text());

    var spamTest = $('#antispam')[0].value;

    console.log(zbir, spamTest);

    if(spamTest != zbir){
        alert('Pogrešan odgovor na SPAM testu!');
        return;
    }


    $('form').html("<div class='poruka-poslata'><p style='color: green; font-size: 32px'>Poruka je poslata!</p><p>Pokušaćemo da Vam odgovorimo u najkraćem roku.</p></div>");
  });