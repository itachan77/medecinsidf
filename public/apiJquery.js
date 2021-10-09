



//Transforme notre api rest json en objet. Ainsi, on peut voir le contenu de l'objet ainsi créé dans la console. 
/*
$.ajax({
    url: 'https://www.data.gouv.fr/fr/datasets/r/d0566522-604d-4af6-be44-a26eefa01756',
    dataType: 'json',
    success: function(data) {
    console.log(data);
    }
    });


class monClick {

    //Méthode constructor
    constructor(monAlert, monAlert2) {
        this.monAlert=monAlert;
        this.monAlert2=monAlert2;
    }

    afficheBonjour(){
        alert(this.monAlert);
        alert(this.monAlert2);
    }

    changeColor(){
        document.getElementById('button').style.backgroundColor="yellow";
    }

    delai() {
        setTimeout(afficheBonjour(),5000);
    }

    monForm() {

        var pharma2 = document.getElementById('pharma2');

        for (let i=0; i<document.forms.pharmacies.pharma1.options.length;i++) {

            // if (document.forms.pharmacies.pharma1.options[i].selected) {
            //     alert(document.forms.pharmacies.pharma1.options[i].text)
            // }

            //id des pharmacies
                if (document.forms.pharmacies.pharma1.options[i].selected) {
                    var idPharmacie = document.forms.pharmacies.pharma1.options[i].value;
                    var idVille = document.forms.pharmacies.pharma2.options[i].value;
                    if (idVille == idPharmacie) {
                    var villePharma = document.getElementById('villePharma' + idPharmacie);
                    //console.log(villePharma);
                    
                    let recupVille = villePharma.getAttribute("data-ville");
                    let recupId = villePharma.getAttribute("id");
                    let recupValue = villePharma.getAttribute("value");
                    pharma2.innerHTML="<option id='"+ recupId + "' data-ville='"+recupVille+"' value='"+recupValue+"' selected='selected' >" + recupVille + "</option>";
                    //villePerma.innerHTML="<option id='villePharma' value='villePharma'>encore</option>";
                    
                    }
                }
        }
    }


    taille() {
        let idPharmacie = document.forms.pharmacies.pharma1.options[15].value;

    }

}
*/



document.getElementById('pharma1').addEventListener('change', function() {

    var pharma2 = document.getElementById('pharma2');

    for (let i=0; i<document.forms.pharmacies.pharma1.options.length;i++) {

        
        // if (document.forms.pharmacies.pharma1.options[i].selected) {
        //     alert(document.forms.pharmacies.pharma1.options[i].text)
        // }

        //id des pharmacies
        

            if (document.forms.pharmacies.pharma1.options[i].selected) {
                var idPharmacie = document.forms.pharmacies.pharma1.options[i].value;
                var idVille = document.forms.pharmacies.pharmaTwo.options[i].value;

                if (idVille == idPharmacie) {

                var villePharma = document.getElementById('villePharma' + idPharmacie);
                //console.log(villePharma);
                
                let recupVille = villePharma.getAttribute("data-ville");
                let recupId = villePharma.getAttribute("id");
                let recupValue = villePharma.getAttribute("value");

                pharma2.innerHTML="<option id='"+ recupId + "' data-ville='"+recupVille+"' value='"+recupValue+"' selected='selected' >" + recupVille + "</option>";

                //villePerma.innerHTML="<option id='villePharma' value='villePharma'>encore</option>";
                
                }

            }

    }

            
});



var ancienContainer = document.getElementById("container");

var nouvelleDiv = document.createElement("div");

var texteDiv = document.createTextNode("bonjour");

var integrationDiv = nouvelleDiv.appendChild(texteDiv);

var nouveauContainer = ancienContainer.appendChild(nouvelleDiv);

//container.innerText += "Bonjour le monde";

/*************** */
//retour à la ligne avec write avec et sans break

document.write("<pre>");
document.write("Ligne n°1<br/>");
document.write("Ligne n°2<br/>");
document.write("Ligne n°3<br/><br/>");
document.writeln("Ligne n°4");
document.writeln("Ligne n°5");
document.write("</pre>");

//nombre de lien hypertexte dans le document
document.write("<pre>");

document.write(document.links.length);

document.write("</pre>");

//affichage de l'identifiant du 2ème lien hypertexte
document.write("<pre>");
//document.write(document.links[1].style);
document.write("</pre>");

//Exercices links

document.write("<pre>");
document.writeln("Moteur de recherche <a href='google.fr'>Google</a>");
document.writeln("Site d'information <a id='monYahoo' href='yahoo.fr'>Yahoo</a>");
document.writeln("Encyclopédie <a href='https://www.wikipedia.fr'>Wikipedia</a>");
document.writeln("");
document.writeln("Nombre de lien hypertexte du document : " + document.links.length);
document.writeln("Identifiant du 2ème lien hypertexte du document: " + document.links[1].id);
document.writeln("URL du 3ème lien hypertexte du document: " + document.links[2].href);
document.writeln("texte du 3ème lien du document: " + document.links[4].text);
document.write("</pre>");

//Exercices images

document.write("<pre>");
document.writeln("<img id='van_van1' border='1' src='van_01.jpg' width='150' height='100'></img>");
document.writeln("<img id='van_van2' border='2' src='van_02.jpg' width='150' height='100'></img>");
document.writeln("<img id='van_van3' border='1' src='van_03.jpg' width='150' height='100'></img>");
document.writeln("<img id='van_van4' border='2' src='van_04.jpg' width='220' height='150'></img>");
document.writeln("");
document.writeln("Nombre d'images du document : " + document.images.length);
document.writeln("identifiant de la 1ère image : " + document.images[0].id);
document.writeln("attribut border de la 2ème image : " + document.images[1].border);
document.writeln("attribut src de la 3ème image : " + document.images[2].src);
document.writeln("attribut width de la 4ème image : " + document.images[3].width);
document.writeln("attribut height de la 4ème image : " + document.images[3].height);

document.write("</pre>");


//Exercices formulaires

document.write("<pre>");
document.writeln("Nombre de formulaires : " + document.forms.length);
document.writeln("Nombre de select du formulaire : " + document.forms[0].getElementsByTagName("select").length);
document.writeln("Nombre de formulaire 2ème facon : " + document.getElementsByTagName("form").length);



document.writeln("nom du formulaire : " + document.forms[0].name);
document.writeln("id du formulaire : " + document.forms[0].id);
//document.writeln("Nombre d'input : " + document.forms.input.length);

document.write("</pre>");

//Exercices anchors
document.write("<pre>");
document.writeln("Nombre anchors : " + document.anchors.length );
document.writeln("texte anchors du 1er anchors : " + document.anchors[0].text );
document.write("</pre>");


document.getElementById('nom').innerHTML = "MANETTE";
document.getElementById('prenom').innerHTML = "Chantal";
document.getElementById('location').innerHTML = document.referrer;


var macontente = document.getElementById('monmail').textContent;
var location2 = document.getElementById('location').textContent;

var avant = {
    mail:document.getElementById('monmail').textContent,
    precedent:location2,
}

var varJson = JSON.stringify(avant);

//document.write(varJson);

