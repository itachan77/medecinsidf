//Il s'agit de la fonction native de ajax pour mieux comprendre (plutot que jquery)
//ATTENTION il ne faudra JAMAIS JAMAIS oublier de mettre "httpRequest.send" pour que notre ajax fonctionne

function ajaxJson() {

    //Si le navigateur prend en charge l'objet XMLHttpRequest, on instancie un objet appelé aléatoirement httpRequest à partir de XMLttpRequest sinon
    //ce sera à partir de ActiveXObject
    if(window.XMLHttpRequest) {
        var httpRequest = new XMLHttpRequest();
    }

    else {
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }


    //je fais appel à la méthode native open pour spécifier le type de requete (ici GET), le fichier json (qui peut aussi être une requête http (dit aussi api rest), true signifie qu'on 
    // est en mode asynchrone c'est à dire que le fichier n'a pas besoin d'être téléchargé entièrement pour être traité)

    //création d'un json 

    let jo =
    {   jj : 
        [
            {"livre":"Apprendre à développer",
            "auteur":"Vigouroux Christian",
            "edition":"eni"
            }
        ]
    }

    httpRequest.open("GET", "https://www.data.gouv.fr/fr/datasets/r/d0566522-604d-4af6-be44-a26eefa01756", true);


    //la fonction onreadystatechange se réitère en permanence jusqu'à ce que l'état et le statut soit ceux attendus
    httpRequest.onreadystatechange = function() {

        //Si le fichier est totalement disponible, donc sur changement d'état, la réponse est disponible et visible grace à la propriété responseText 
        //qui renvoie le format json récupéré 
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {

            var rst = "bonjour";

            //la réponse est disponible et visible grace à la propriété responseText qui renvoie le format json récupéré 
            var reponseJson = httpRequest.responseText;

            //la réponse au format json est convertie en objet grace à la méthode JSON.parse qui convertit tout format JSON en objet  
            var donneesJson = JSON.parse(reponseJson);

            //ce console.log est très utile pour voir la composition de notre json transformé en objet. ensuite, pour accéder à une propriété
            //particulière, il suffit de faire un click droit avec la souris sur la console du navigateur pour prendre la propriété affichant la valeur dont j'ai besoin.
            //exemple : donneesJson.features[0].geometry.coordinates[0][1] pour l'adresse json https://www.data.gouv.fr/fr/datasets/r/d0566522-604d-4af6-be44-a26eefa01756
            console.log(donneesJson);
            
        }

        //tant que le statut n'est pas près, rst est indéfini. Il faut donc mettre else pour que le client voit autre chose que le message natif "undefined"
        
        //Si le fichier n'est pas encore disponible, donneesJson prend la valeur : "en attente du résultat" qui ne sera plus 
        //si cette fois ci le résultat est celui attendu
        else {
            donneesJson = "En attente du résultat";

        }

        console.log(donneesJson);
        //document.write("resultat json : " + donneesJson.features[2].properties.c_rdv_site_web);

        var sauv = donneesJson.features[2].properties.c_rdv_site_web;

        localStorage.setItem("siteWeb", sauv);

    }

    var ref = document.referrer;
    alert (ref);

    httpRequest.send(null);

}

var sauv = localStorage.getItem("siteWeb");
var propriete = localStorage.getItem("propriete");

for (row in propriete) {
    document.write(row);
}


function persistJson() {

    if(window.XMLHttpRequest) {
        var Request = new XMLHttpRequest();
    }

    else {
        var Request = new ActiveXObject("Microsoft.XMLHTTP");
    }


    let url =  document.getElementById("pathName").getAttribute("data-path");
    Request.open("POST", url, true);

    Request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    //la fonction onreadystatechange se réitère en permanence jusqu'à ce que l'état et le statut soit ceux attendus
    Request.onreadystatechange = function() {    

        if (Request.readyState == 4 && Request.status == 200) {
            
        }

    }

        var prec = document.referrer;
        var per = "per=" + prec;
        //var per = "per=coucou"
        
        console.log(per)

        Request.send(per);

        

}



