$(document).ready(function () {
    $("select").change(function () {
        x = $("#nbp").val()
        switch (x) {
            case '-1':
                y = null;
                break;
            case '1':
                y = 1;
                break;
            case '2':
                y = 2;
                break;
            case '4':
                y = 4;
                break;
            case '6':
                y = 6;
                break;
        }

        $("#chaises").empty();
        for (var i = 0; i < y; i++) {
            var image = "<img src='images/chaise.png'/>";
            $("#chaises").append(image);
        }
    });

    var date;
    $('#date').Zebra_DatePicker({
        format: 'd/m/Y', onSelect: function () {
            var dt = $(this).context.value;
            date = dt;
        }
    });

    $("#b1").click(function () {

        var civilite = "aucune"
        var x = $("input[name=civilite]:checked").each(
            function () {
                var civ = $(this).val();
                if (civ === "mme") {
                    a = "Madamme";
                } else if (civ === "mlle") {
                    a = "Mademoiselle";
                } else if (civ === "m") {
                    a = "Monsieur";
                }

                civilite = a;
            });

        var nbp = $('#nbp').val();
        if (nbp == -1) {
            alert("veuillez sélectionner les nombres des places");
        }
        if (civilite === "aucune") {
            alert("la civilité est obligatoire")
        }
        var nom = $('#nom').val();
        if (nom.length < 10 || isNaN(nom) === false) {
            alert(' Nom et Prenom trop court !');
        }
        var tel = $('#tel').val();
        if (tel.length != 8) {
            alert(' N de tel invalide !!');
        }

        if (tel.length != 8 || nom.length < 10 || nbp == -1 || civilite === "aucune"  ) {
        } else {
            var text1 = '<div> Bonjour ' + civilite + '<strong> ' + nom + '</strong> ';
            $("#nomtic").empty();
            $("#nomtic").append(text1);
            var text2 = '</br><div>  Votre commande du ' + date + ' a ete bien validée:</div></br>';
            $("#Acommande").empty();
            $("#Acommande").append(text2);
            $("#commande").empty();
            $("#commande").append('Les plats commandés sont :')

            var prix = 0;
            var px = 0;
            var text3, px;
            $("#plat").empty();
            var x = $("input[name=cmd]:checked").each(
                function () {        

                    var p = $(this).data('prix');
                    prix = prix + parseFloat(p);
                    px = prix;
                    var dinar = $(this).context.value;
                    text3 = dinar ;
                  
                       $("#plat").append(text3 + '<br>');
              
                });
              
            $("#price").empty();
            $("#price").append(px + ' Dinar');

        }
    })
})