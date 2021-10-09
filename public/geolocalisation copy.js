//Gestion de l'ajax sur les villes et codes postaux
$("document").ready(function() 
{

    // $('.cp').on('blur', function(){

        var urlVille = "/medi";

        let dataVille = $("#inputVille").attr("data-city");
        let dataObjet = JSON.parse(dataVille);
        let inputVille = $("#inputVille");
        
        
        let dataRegion = $("#inputRegion").attr("data-region");
        let dataObjetRegion = JSON.parse(dataRegion);
        let inputRegion = $("#inputRegion");
        console.log(dataObjetRegion);

        let dataDpt = $("#inputDpt").attr("data-dpt");
        let dataObjetDpt = JSON.parse(dataDpt);
        let inputDpt = $("#inputDpt");
        

        let btnVille = document.getElementById("btnVille");
        let btnRegion = document.getElementById("btnRegion");
        let btnDpt = document.getElementById("btnDpt");
        
        

        console.log(document.getElementById("inputVille").getElementsByTagName("option")[0].parentNode.options[0].value);


        // [0].attributes.selected.ownerDocument.all.inputVille.childNodes[0].nextElementSibling.attributes.selected.value
        // [0].attributes.selected.value
            
            
        // document.querySelector(".btnRegion").addEventListener("click",function () {
            
        //     if (document.forms[1].getElementsByTagName("option").length > 2 ) {
                
                
        //         let dtdpt = document.getElementById("dtdpt");
                

                

        //         document.getElementById("inputDpt").innerHTML = '<option value="{{departement.code}}">'+ +'</option>"';
                
        //     }
        // });
            
            
        document.querySelector(".btnRegion").addEventListener("change",function () {
            
            // console.log(document.forms[1].getElementsByTagName("option").length);
            // console.log(document.forms.departementSelect.departement.options.length);
            
                //DANS LE CHAMP DE SELECTION DE LA REGION dataObjetRegion (dataObjetRegion = toutes les régions au format JSON transformé en objet...)
                for (obj in dataObjetRegion) {
    
                    //inputRegion.value = la classe du select et value permettent d'avoir le résultat.
                    //cette ligne if est comme si je disais quand tu arrives par la boucle à 11, ...suite : affiche tous les départements d'ile de france
                    if(dataObjetRegion[obj].code == document.querySelector(".btnRegion").value && document.forms.departementSelect.departement.options.length == 1) {
                    
                        for (obj in dataObjetDpt) {
                            
                                //si le code region du champs des départememnts correspond au code que j'ai sélectionné sur le champs des régions, alors affiche dans les départements tous les départements correspondant à cette région
                                if(dataObjetDpt[obj].regionCode==document.querySelector(".btnRegion").value) {
                                    document.forms.departementSelect.departement.options[document.forms.departementSelect.departement.options.length] = new Option(dataObjetDpt[obj].name,dataObjetDpt[obj].regionCode +'-' + dataObjetDpt[obj].code);
                                    //autre facon moins propre d'ajouter une option :
                                    //document.getElementById("inputDpt").innerHTML += "<option class='optionId' value='"+ dataObjetDpt[obj].code +"'>" + dataObjetDpt[obj].name + "</option>";
                            }
                            
                        }
                        
                    }
                    
                    
                    //cette fonction doit supprimer ce qu'il y a déjà dans le select puis rajouter le nouveau select donc les nouveaux départements d'une région
                    else {
                    
                            if (document.forms.departementSelect.departement.options[2] != null) {
                            
                                //Transforme la value fixe du champs des départements au format codeRegion-codeDépartement en tableau
                                var selectValueDpt = document.forms.departementSelect.departement.options[2].value;
                                //Transforme selectValueDpt en tableau array de cette facon : ['codeRegion','codeDépartement']
                                var selectValueDptArray = selectValueDpt.split("-");
                                //Maintenant, il ne me reste plus qu'à sélectionner le array que je veux : 
                                var codeValueRegion = selectValueDptArray[0];
                                var codeValueDpt = selectValueDptArray[1];
                
                                //codeRegion-codeDépartement différent de codeRegion
                                if (codeValueRegion != document.querySelector(".btnRegion").value) {
                                
                                    // console.log("codeRegion du département : " + document.forms.departementSelect.departement.options[2].value);
                                    // console.log("codeRegion de la région sélectionnée : " + document.querySelector(".btnRegion").value);
                                    
                                    for (obj in dataObjetDpt) {
            
                                        //si le code region correspond au code que j'ai sélectionné sur le champs select lors de ma sélection, alors affiche dans les départements tous les départements correspondant à cette région
                                        if(dataObjetDpt[obj].regionCode==document.querySelector(".btnRegion").value) {
                                        
                                            //Cette boucle est très très importante (plusieurs heures) car elle supprime ce qui était déjà saisi dans le champs
                                            //du département, ce qui permet de sortir du système d'ajout (+= ou add)
                                            for(let o = 1 ; o < document.forms.departementSelect.departement.options.length; o ++ ) {
                                                document.forms.departementSelect.departement.options[o] = null;

                                            }                                                

                                        }
            
                                    }
                                }
                                
                            }
                    
                    }

                }
            

            
        }); 

        
        
        document.querySelector(".btnDpt").addEventListener("change",function (a) {
        a.preventDefault;
        console.log("département selectionné" + document.querySelector(".btnDpt").value);
        
        //DANS LE CHAMP DE SELECTION DES DEPARTEMENTS dataObjetDpt (dataObjetDpt = toutes les régions au format JSON transformé en objet...)
        for (obj in dataObjetDpt) {
            
            //Récupération du value du champs des départements (document.querySelector(".btnDpt").value) est au format codeRegion-codeDépartement) 
            var selectValueDpt2 = document.querySelector(".btnDpt").value;
            //Transforme selectValueDpt en tableau array de cette facon : ['codeRegion','codeDépartement']
            var selectValueDptArray2 = selectValueDpt2.split("-");
            //Maintenant, il ne me reste plus qu'à sélectionner le array que je veux : 
            var codeValueRegion2 = selectValueDptArray2[0];
            var codeValueDpt2 = selectValueDptArray2[1];
            
            //document.getElementById("inputVille").getElementsByTagName("option").length correspondant au nombre de select dans le champs ville
            if(dataObjetDpt[obj].code == codeValueDpt2 && document.getElementById("inputVille").getElementsByTagName("option").length == 1) {
            
                for (obj in dataObjet) {
                        
                        //si le code ville du champs des villes correspond au code que j'ai sélectionné sur le champs des départements, alors affiche dans les départements tous les départements correspondant à cette région
                        if(dataObjet[obj].departmentCode==codeValueDpt2) {
                            
                            //document.getElementById("inputVille").getElementsByTagName("option").length correspondant au nombre de select dans le champs ville
                            document.getElementById("inputVille").getElementsByTagName("option")[0].parentNode.options[document.getElementById("inputVille").getElementsByTagName("option").length] = new Option(dataObjet[obj].villes + '-' + dataObjet[obj].codePostal, dataObjet[obj].codePostal + "-" + dataObjet[obj].departmentCode);
                            
                            //autre facon moins propre d'ajouter une option :
                            //document.getElementById("inputDpt").innerHTML += "<option class='optionId' value='"+ dataObjetDpt[obj].code +"'>" + dataObjetDpt[obj].name + "</option>";
                        
                    }
                    
                    
                }
                
            }
            
            
            //cette fonction doit supprimer ce qu'il y a déjà dans le select du champs des villes puis rajouter le nouveau select donc les nouveaux départements d'une région
            else {
                
                    //s'il existe des selects de villes dans le champs concerné...
                    if (document.getElementById("inputVille").getElementsByTagName("option")[0].parentNode.options[2] != null) {
                        document.getElementById("inputVille").getElementsByTagName("option")
                            //console.log ("département des villes indiquées dans le champs ville : " +document.getElementById("inputVille").getElementsByTagName("option")[0].parentNode.options[2].value);
                            //console.log("département sélectionné dans le champs des ddépartements : " +codeValueDpt2)
                            
                            
                    let codePostalCode = document.getElementById("inputVille").getElementsByTagName("option")[0].parentNode.options[2].value;
                    let codePostalCodeArray = codePostalCode.split("-");
                    let codePostalValue = codePostalCodeArray[0];
                    let codeValue = codePostalCodeArray[1];
                    console.log("value du code postal :" + codePostalCode);

                        //Si la value du champs des villes (ex:93 ou 75)
                        //est différent du département que je sélectionne dans le champs des départements (codeValueDpt2 correspondant à la valeur du champs sélectionné (document.querySelector(".btnDpt").value) )
                        //efface tout ce qu'il y a dans le champs des villes                        
                        if (codeValue != codeValueDpt2) {
                        
                            
                            for (obj in dataObjet) {
    
                                //si le code département des villes (ex:93,75) correspond au code que j'ai sélectionné sur le champs select lors de ma sélection, alors affiche dans les départements tous les départements correspondant à cette région
                                if(dataObjet[obj].departmentCode==codeValueDpt2) {
                                
                                    //Cette boucle est très très importante (plusieurs heures) car elle supprime ce qui était déjà saisi dans le champs
                                    //du département, ce qui permet de sortir du système d'ajout (+= ou add)
                                    
                                    //document.getElementById("inputVille").getElementsByTagName("option").length correspondant au nombre de select dans le champs ville
                                    for(let b = 1 ; b < document.getElementById("inputVille").getElementsByTagName("option").length; b ++ ) {
                                        document.getElementById("inputVille").getElementsByTagName("option")[0].parentNode.options[b] = null;

                                    }                                                

                                }
    
                            }
                        }
                        
                    }
            }
            
        }
        
        }); 
        


        document.querySelector(".btnVille").addEventListener("change",function () {
        
            let codePostalCode2 = document.querySelector(".btnVille").value;
            let codePostalCode2Array = codePostalCode2.split("-");
            let codePostalValue2 = codePostalCode2Array[0];
            let codeValue2 = codePostalCode2Array[1];
            

            function ajaxJ() {
                if(window.XMLHttpRequest) {var httpRequest = new XMLHttpRequest();} else {var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");}

                httpRequest.open("POST", "/med", true);
                //la fonction onreadystatechange se réitère en permanence jusqu'à ce que l'état et le statut soientt ceux attendus
                
                httpRequest.onreadystatechange = function() {
                    //Si le fichier est totalement disponible, donc sur changement d'état, la réponse est disponible et visible grace à la propriété responseText qui renvoie le format json récupéré 
                    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                        console.log("Requete ajax ok");
                        
                        
                    } else {
                        console.log("Requete ajax pas ok");
                    }
                }
            
                ville="93600";
                let cp = 'ville="'+codePostalValue2+'"';
                console.log(cp);
                httpRequest.send(cp);
            }
            


        });




});
