<?php
namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;


class CallApiService {


    
    private $client;

    public function __construct (HttpClientInterface $client)
    {

        $this->client=$client;
    }

    

    public function getFranceDataBis():array
    {

        $response=$this->client->request(
            'GET',
            'https://coronavirusapi-france.now.sh/FranceLiveGlobalData',

        );

        return $response->toArray();
    }
    

    public function getMed():array
    {
        //https://pole-emploi.io/compte/applications/1963
        //Identifiant client
        //PAR_appliessai_b3a4b2325ab238dce625b0a07dd6734387eaf659e3b5503e662515f7c94ceef3

        //Clé secrète
        //5f3fb492350ab00684730bb4ba43de742cb1309882f6df7c0f62ccfb575850e8



        $response=$this->client->request(
            'GET',
            // 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search',
            // 'https://calendrier.api.gouv.fr/jours-feries/metropole',
            // 'https://www.data.gouv.fr/api/1/swagger.json',
            //'https://samples.openweathermap.org/data/2.5/weather?q=Paris&appid=439d4b804bc8187953eb36d2a8c26a02',
            //"https://koumoul.com/s/data-fair/api/v1/datasets/les-aides-financieres-de-l'ademe/api-docs.json",
            
            //centres de vaccination
            //"https://www.data.gouv.fr/fr/datasets/r/d0566522-604d-4af6-be44-a26eefa01756",
            
            //Site touristiques d'ile de france
            //"https://data.iledefrance.fr/api/records/1.0/search/?dataset=principaux-sites-touristiques-en-ile-de-france0&q=&rows=500",
            
            //Tous les professionnels de santé d'ile de france
            //"https://data.iledefrance.fr/api/records/1.0/search/?dataset=annuaire-et-localisation-des-professionnels-de-sante&q=&rows=50&facet=civilite&facet=exercice_particulier&facet=nature_exercice&facet=convention&facet=sesam_vitale&facet=types_actes&facet=codes_ccam&facet=nom_epci&facet=nom_dep&facet=nom_reg&facet=nom_com",
            "https://public.opendatasoft.com/api/records/1.0/search/?dataset=medecins&q=",
            //"https://public.opendatasoft.com/api/records/1.0/search/?dataset=annuaire-des-professionnels-de-sante@public",
            //Tous les professionnels de santé de france 
            //"https://www.data.gouv.fr/fr/datasets/r/ca9e498b-4064-40b8-8cf0-953c34f5779c",
            
            //Tous les musées de france
            //"https://www.data.gouv.fr/fr/datasets/r/a5c5d76e-979a-4073-ba0d-0844bb3c1398",
            
            //Les hotels d'ile de france 
            //"https://data.iledefrance.fr/api/records/1.0/search/?dataset=les_hotels_classes_en_ile-de-france&q=&rows=20&facet=departement&facet=classement",
            
            
            //"https://randomuser.me/api/",
            
            
            //tous les professionnels de santé de france 2396506
            //"https://public.opendatasoft.com/api/records/1.0/search/?dataset=medecins&q=&rows=20&facet=civilite&facet=column_12&facet=column_13&facet=column_14&facet=column_16&facet=libelle_profession&facet=type_dacte_realise&facet=commune&facet=nom_epci&facet=nom_dep&facet=nom_reg&facet=insee_reg&facet=insee_dep&facet=libelle_regroupement&facet=libelle&facet=libelle_acte_clinique",
            
        );

        return $response->toArray();
    }




    public function getFranceData():array
    {
        return $this->getApi('franceLiveGlobalData');
    }

    public function getAllData():array
    {
    return $this->getApi('AllLiveData');
    }

    private function getApi():array
    {

        $response=$this->client->request(
            'GET',
            'https://coronavirusapi-france.now.sh/',

        );

        return $response->toArray();
    }








}