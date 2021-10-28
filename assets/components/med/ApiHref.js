import axios from 'axios';

//j'implémente la clef d'api youtube que j'ai récupéré

//chantalmanette741
//console.developers.google.com
//https://public.opendatasoft.com/explore/?sort=modified&q=annuaire+des+professionnels+de+sante

// Il faut faire npm install axios pour que axios fonctionne
export default axios.create({
    //API off
    baseURL: 'https://data.opendatasoft.com/api/records/1.0/',
    
    //API ameliorée
    //baseURL: 'https://public.opendatasoft.com/api/records/1.0/',
    
    // baseURL: 'https://data.iledefrance.fr/api/records/1.0/',

    params: {
        //part veut dire qu'on récupère une partie de l'information. Ces propriétés sont indiquées dans la doc de l'api en question. Ici,
        //on peut savoir quel info mettre grace à la doc en question qui se trouve à cette adresse : 
        //developers.google.com/youtube/v3/docs/search/list

        // dataset: "annuaire-et-localisation-des-professionnels-de-sante",

        //API off
        dataset: "annuaire-des-professionnels-de-sante@public",

        //API ameliorée
        //dataset: "medecins",
        
    }
})