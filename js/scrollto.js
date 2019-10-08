
    $(".ancora").click(function(event){
        //blocco il comportamento di default del link in html(redirect)
        event.preventDefault();
        //Leggo l'url del link cliccato e lo memorizzo in una variabile
        var destination = $(this).attr("href");
        
        //Faccio una animazione con scrollTo verso quell'elemento di un secondo
        $.scrollTo($(destination),1500);
    });
