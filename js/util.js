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
            //$("#div1").html($("#div1").html() + image);
            $("#chaises").append(image);
        }
    });
    var d;
    $('#date').Zebra_DatePicker({
        format: 'd/m/Y', onSelect: function () {
            var dt = $(this).context.value;
            d = dt;
        }
    });
    $("#b1").click(function () {
       var civilite = "aucune"
        var x = $("input[name=civilite]:checked").each(
            function () {
               
                var v = $(this).val();
                if (v === "mme") {
                    a = "Madamme";
                } else if (v === "mlle") {
                   a = "Mademoiselle";
                } else if (v === "m") {
                    a = "Monsieur";
                }  
              
                civilite = a;
         
            });
            var date = $('#date').val();

        var nbp = $('#nbp').val();
        if (nbp == -1) {
            alert("veuillez sélectionner les nombres des places");
        }

        if(civilite ==="aucune"){
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

        if (tel.length != 8 || nom.length < 10 || nbp == -1 || civilite === "aucune") {
        } else {
   
            var large = '<div> bonjour ' + civilite + '<strong> ' + nom + '</strong> ';
            $("#nomtic").empty();
            $("#nomtic").append(large);
            var ttt ='</br> Votre commande du ' + date +' a ete bien validée:</div></br>';
            $("#aaa").empty();
            $("#aaa").append(ttt);
            $("#commande").empty();
            $("#commande").append(' les plats commandés sont ')
            var prix = 0;
            var px =0;
            var man, px;
            var x = $("input[name=cmd]:checked").each(
                function () {
                 
                    var p = $(this).data('prix');
                    prix = prix + parseFloat(p);
                    px = prix;
                    var dt = $(this).context.value;
                    man = dt;
                    var large1 = '<ul> <li>' + man + '</li> </ul>';
              
                    $("#plat").append(large1);

                });
       
                $("#price").empty();
            $("#price").append(px+'£');

        }
    })
})