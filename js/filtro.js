$("#champagne").click(function() {
            $(".row .card.red, .row .card.white").hide(500);
            $(".row .card.champagne").show(500);
        });

        $("#white").click(function() {
            $(".row .card.red, .row .card.champagne").hide(500);
            $(".row .card.white").show(500);
        });

        $("#red").click(function() {
            $(".row .card.champagne, .row .card.white").hide(500);
            $(".row .card.red").show(500);
        });

        $("#all").click(function() {

            $(".row .card").show(500);
        });
