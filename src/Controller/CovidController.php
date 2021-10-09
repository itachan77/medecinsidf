<?php

namespace App\Controller;

use App\Entity\Json;
use App\Service\CallApiService;
use App\Repository\JsonRepository;
use App\Repository\CpvilleRepository;
use App\Repository\RegionsRepository;
use App\Repository\PharmacieRepository;
use App\Repository\DepartmentsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CovidController extends AbstractController
{


    /**
     * @Route("/home", name="covid")
     */
    public function index(CallApiService $callApiService): Response
    {

        //dd($callApiService->getFranceData());
        $franceData=$callApiService->getFranceDataBis();


        return $this->render('covid/index.html.twig', [
            'covidTab'=>$franceData,
        ]);
    }


    /**
     * @Route("/med", name="med")
     */
    public function med(CallApiService $callApiService, RegionsRepository $regionsRepository, 
    DepartmentsRepository $departRepo, CpvilleRepository $cpVilleRepo, JsonRepository $JsonRep): Response
    
    {

            //persistance adresse précédente 
            // $json = new Tuteur();

            // if (isset($_POST["per"]))
            // {$per = $_POST["per"];
            // $json->setPrenomTuteur($per);
            // $em->persist($json);
            // $em->flush();}

            // //persistance du nom de l'ordinateur
            // $json->setNomTuteur($_SERVER['REMOTE_ADDR']);
            // $em->persist($json);
            // $em->flush();

            //fin javascript sauvegarde

$choixDep="";
$choixVille="";
$rstDep="";
$codePostal="";

//J'appelle l'api qui se trouve dans le service CallApiService
$tabMed=$callApiService->getMed();
        
/***********DATA REGION */
$regions=$regionsRepository->findAll();
$region=[];
if ($regions)
{
    foreach($regions as $val) {
        $region[]=[
            'id'=>$val->getId(),
            'code'=>$val->getCode(),
            'name'=>$val->getName(),];
    }
}
$dataRegion = json_encode($region);

        
/***********DATA DPT */
$lesDpt=$departRepo->findAll();
$dpt=[];
if ($lesDpt)
{
    foreach($lesDpt as $val) {
        $dpt[]=[
            'id'=>$val->getId(),
            'code'=>$val->getCode(),
            'name'=>$val->getName(),
            'regionCode'=>$val->getRegionCode(),];
    }
}
$dataDpt = json_encode($dpt);


/***********DATA VILLE */
$lesVilles=$cpVilleRepo->findAll();
$villes=[];
if ($lesVilles)
{
    foreach($lesVilles as $val) {
        $villes[]=[
            'id'=>$val->getId(),
            'villes'=>$val->getVille(),
            'codePostal'=>$val->getCodePostal(),
            'departmentCode'=>$val->getDepartmentCode(),];
    }
}
$dataVille = json_encode($villes);


/***********FONCTION DE POSTE SI J'UTILISE LE POST PHP POUR AVOIR LE RESULTAT PLUTOT QUE JAVASCRIPT************* */
if (isset($_POST["region"])) {

    $choixRegion = $_POST["region"]["code"];
    
    for ($i=0; $i < count($_POST["region"]) ; $i++) { 
        if ($choixRegion == $choixRegion) {$departements=$departRepo->findBy(['regionCode'=>$choixRegion]);}
    }
}
else {
$departements=[];
}
/***** */

// if (isset($_POST["departement"])) {
//     $choixDep = $_POST["departement"]["code"];
    
//     for ($i=0; $i < count($_POST["departement"]) ; $i++) { 
//         if ($choixDep == $choixDep) {
//         $codeVilles=$cpVilleRepo->findBy(['departmentCode'=>$choixDep]);
//         $response = new JsonResponse();
        
//         }
//     }
    
// }
// else {
//     $codeVilles=[];
// }
/***** */
$codeVilles=[];

if (isset($_POST["ville"]) || isset ($_POST["departement"])) {
    //Fonction qui permet de persister en base le code postal de la ville recherchée
    // $js=$JsonRep->find(19);
    // $js->setAjaxNom($_POST["ville"]["code"]);
    // $em=$this->getDoctrine()->getManager();
    // $em->persist($js);
    // $em->flush();
    if (isset($_POST["departement"])) {
        //récupération de la value du formulaire équivalante à 11-93
        $rstDep = $_POST["departement"];
        $rstDep = str_split($rstDep,3);
        $rstDep = $rstDep[1];
        $choixDep = $rstDep;
        
    }


    if (isset($_POST["ville"])) {
    //coupure du code postal qui est reçu au format 93600-93
    $choixVille = $_POST["ville"]["code"];
    
    $codePostalAr = str_split($choixVille, 5);
    $codePostal = $codePostalAr[0];
    
    //coupure pour récupérer le département à partir du code postal récupéré ci-dessus
    $choix = str_split($codePostal,2);
    $choixDep = $choix[0];
    }
    
    
    
    // for ($i=0; $i < $_POST["ville"]["code"] ; $i++) {
    //     if ($choixDep == $choixDep) {
    //         $codeVilles=$cpVilleRepo->findBy(['departmentCode'=>$choixDep]); }
    // }
    
    $codeVilles=$cpVilleRepo->findBy(['departmentCode'=>$choixDep]); //pour récupérer la liste de toutes les villes d'un département
    $recuCodeRegion1=$departRepo->findOneBy(['code'=>$choixDep]); //pour récupérer le code région d'un département
    $recuCodeRegion2=$recuCodeRegion1->getRegionCode(); //pour récupérer  le code région d'un département (suite et fin)
    $departements=$departRepo->findBy(['regionCode'=>$recuCodeRegion2]); //pour récupérer la liste de tous les départements
    $choixDep?$choixDep=$recuCodeRegion1->getName():""; //pour que le département soit sélectionné (selected) dans le champs dans twig
    
    if (isset($_POST["ville"])) {
    $choixDep?$choixVille=$cpVilleRepo->findOneBy(["codePostal"=>$codePostal])->getVille():""; //pour que la ville soit sélectionnée (selected) dans le champs dans twig

    }
    
    // $response = new JsonResponse(); //cette réponse peut être récupérée en ajax avec (MaRequest.responseText) qui transforme ce résultat de tableau en json.
    // return $response->setData(array(
    //     'codePostal'=>$codePostal, 
    // ));

}

else {
    if (isset ($codePostal)){
    if ($codePostal != "") {$codePostal = $codePostal;}
    }
    else $codePostal="";
    
}


    //Juste pour les médecins
    
    if (isset($_POST["laville"])) {
    //coupure du code postal qui est reçu au format 93600-93
    $choixVille = $_POST["laville"]["code"];
    $codePostalAr = str_split($choixVille, 5);
    $codePostal = $codePostalAr[0];
    $queVille0 = $cpVilleRepo->findOneBy(['codePostal'=>$codePostal]);
    $queVille = $queVille0->getVille();
    }
    
    else {
    $queVille = "hello"; }


        return $this->render('covid/med.html.twig', [
            'tabMed'=>$tabMed,
            'regions'=>$regions, 
            'departements'=>$departements, 
            'codeVilles'=>$codeVilles, 
            'codePostal'=>$codePostal, 
            'dataVille' => $dataVille,
            'dataRegion' => $dataRegion,
            'dataDpt' => $dataDpt,
            'choixDep' => $choixDep,
            'choixVille' => $choixVille,
            'codeDep' => $rstDep,
            'queVille' => $queVille,

        ]);
    }
    
    
    
    
    /**
     * @Route("/", name="medecins")
     */
    public function medecin(CallApiService $callApiService, RegionsRepository $regionsRepository, 
    DepartmentsRepository $departRepo, CpvilleRepository $cpVilleRepo, JsonRepository $JsonRep): Response
    
    {

$choixDep="";
$choixVille="";
$rstDep="";
$codePostal="";

//J'appelle l'api qui se trouve dans le service CallApiService
$tabMed=$callApiService->getMed();
        
/***********DATA REGION */
$regions=$regionsRepository->findAll();
$region=[];
if ($regions)
{
    foreach($regions as $val) {
        $region[]=[
            'id'=>$val->getId(),
            'code'=>$val->getCode(),
            'name'=>$val->getName(),];
    }
}
$dataRegion = json_encode($region);

        
/***********DATA DPT */
$lesDpt=$departRepo->findAll();
$dpt=[];
if ($lesDpt)
{
    foreach($lesDpt as $val) {
        $dpt[]=[
            'id'=>$val->getId(),
            'code'=>$val->getCode(),
            'name'=>$val->getName(),
            'regionCode'=>$val->getRegionCode(),];
    }
}
$dataDpt = json_encode($dpt);


/***********DATA VILLE */
$lesVilles=$cpVilleRepo->findAll();
$villes=[];
if ($lesVilles)
{
    foreach($lesVilles as $val) {
        $villes[]=[
            'id'=>$val->getId(),
            'villes'=>$val->getVille(),
            'codePostal'=>$val->getCodePostal(),
            'departmentCode'=>$val->getDepartmentCode(),];
    }
}
$dataVille = json_encode($villes);



$departements=$departRepo->findBy(['regionCode'=>11]);

$codeVilles=[];

if (isset($_POST["ville"]) || isset ($_POST["departement"])) {
    //Fonction qui permet de persister en base le code postal de la ville recherchée
    // $js=$JsonRep->find(19);
    // $js->setAjaxNom($_POST["ville"]["code"]);
    // $em=$this->getDoctrine()->getManager();
    // $em->persist($js);
    // $em->flush();
    if (isset($_POST["departement"])) {
        //récupération de la value du formulaire équivalante à 11-93
        $rstDep = $_POST["departement"];
        $rstDep = str_split($rstDep,3);
        $rstDep = $rstDep[1];
        $choixDep = $rstDep;
        
    }


    if (isset($_POST["ville"])) {
    //coupure du code postal qui est reçu au format 93600-93
    $choixVille = $_POST["ville"]["code"];
    
    $codePostalAr = str_split($choixVille, 5);
    $codePostal = $codePostalAr[0];
    
    //coupure pour récupérer le département à partir du code postal récupéré ci-dessus
    $choix = str_split($codePostal,2);
    $choixDep = $choix[0];
    }
    
    
    
    // for ($i=0; $i < $_POST["ville"]["code"] ; $i++) {
    //     if ($choixDep == $choixDep) {
    //         $codeVilles=$cpVilleRepo->findBy(['departmentCode'=>$choixDep]); }
    // }
    
    $codeVilles=$cpVilleRepo->findBy(['departmentCode'=>$choixDep]); //pour récupérer la liste de toutes les villes d'un département
    $recuCodeRegion1=$departRepo->findOneBy(['code'=>$choixDep]); //pour récupérer le code région d'un département
    $recuCodeRegion2=$recuCodeRegion1->getRegionCode(); //pour récupérer  le code région d'un département (suite et fin)
    $departements=$departRepo->findBy(['regionCode'=>$recuCodeRegion2]); //pour récupérer la liste de tous les départements
    $choixDep?$choixDep=$recuCodeRegion1->getName():""; //pour que le département soit sélectionné (selected) dans le champs dans twig
    
    if (isset($_POST["ville"])) {
    $choixDep?$choixVille=$cpVilleRepo->findOneBy(["codePostal"=>$codePostal])->getVille():""; //pour que la ville soit sélectionnée (selected) dans le champs dans twig

    }
    
    // $response = new JsonResponse(); //cette réponse peut être récupérée en ajax avec (MaRequest.responseText) qui transforme ce résultat de tableau en json.
    // return $response->setData(array(
    //     'codePostal'=>$codePostal, 
    // ));

}

else {
    if (isset ($codePostal)){
    if ($codePostal != "") {$codePostal = $codePostal;}
    }
    else $codePostal="";
    
}


    //Juste pour les médecins
    
    if (isset($_POST["laville"])) {
    //coupure du code postal qui est reçu au format 93600-93
    $choixVille = $_POST["laville"]["code"];
    $codePostalAr = str_split($choixVille, 5);
    $codePostal = $codePostalAr[0];
    $queVille0 = $cpVilleRepo->findOneBy(['codePostal'=>$codePostal]);
    $queVille = $queVille0->getVille();
    }
    
    else {
    $queVille = "hello"; }


        return $this->render('covid/med.html.twig', [
            'tabMed'=>$tabMed,
            'regions'=>$regions, 
            'departements'=>$departements,
            'codeVilles'=>$codeVilles, 
            'codePostal'=>$codePostal, 
            'dataVille' => $dataVille,
            'dataRegion' => $dataRegion,
            'dataDpt' => $dataDpt,
            'choixDep' => $choixDep,
            'choixVille' => $choixVille,
            'codeDep' => $rstDep,
            'queVille' => $queVille,

        ]);
    }
    

    /**
     * @Route("/med2/{codePostal}", name="med2")
     */
    public function med2($codePostal, CallApiService $callApiService, RegionsRepository $regionsRepository, DepartmentsRepository $departRepo, CpvilleRepository $cpVilleRepo): Response
    {

        $em=$this->getDoctrine()->getManager();
        
        $cpville=$cpVilleRepo->findOneBy(array('codePostal' => $codePostal));
        
        if ($cpville) {
        $nomVille=$cpville->getVille();
        }
        
        else 
        $nomVille="";

        $response = new JsonResponse();
        return $response->setData(array('ville'=>$nomVille, 'codePostal'=>$codePostal));

    }



    /**
     * @Route("/medi", name="medi")
     */
    public function medi(CallApiService $callApiService, RegionsRepository $regionsRepository, DepartmentsRepository $departRepo, CpvilleRepository $cpVilleRepo): Response
    {
        $lesVilles=$cpVilleRepo->findBy(array('departmentCode' => "93"));
        
        
        $villes=[];
        
        if ($lesVilles)
        {
            foreach($lesVilles as $val) {
                $villes[]=[
                    'id'=>$val->getId(),
                    'villes'=>$val->getVille(),
                    'departmentCode'=>$val->getDepartmentCode(),];
            }
        }

        else 
        $lesVilles="";
        
        //JsonResponse retourne une valeur en Json. ex: {"ville":"Aulnay-sous-Bois"}
        $response = new JsonResponse();
        $data = json_encode($villes);
        //affichage au format json (paramètre (comme ville) obligatoire)
        return $response->setData(array('dataville'=>$villes));
    }



    /**
     * @Route("/pharmacieCovid", name="pharmacieCovid")
     */
    public function pharmacieCovid(PharmacieRepository $pharmacieRepository): Response
    {

        $pharmacie=$pharmacieRepository->findAll();

        return $this->render('covid/pharmacie.html.twig', [
            'pharmacie'=>$pharmacie,

        ]);
    }


    /**
     * @Route("/api", name="api")
     */
    public function api(PharmacieRepository $pharmacieRepository, Request $request): Response
    {

        //dd($callApiService->getFranceData());

        $pharmacie=$pharmacieRepository->findAll();

        $tabPharmacie=[];

        foreach ($pharmacie as $val) {

            $tabPharmacie[]=[
            'nomPharmacie'=>$val->getTitre(),
            'adressePharmacie1'=>$val->getAdresseVoie1(),
            'adressePharmacie2'=>$val->getAdresseVoie2(),
            'adresseCodePostal'=>$val->getAdresseCodepostal(),
            'adresseVille'=>$val->getAdresseVille(),
            'modaliteAccueil'=>$val->getModalitesAccueil(),
        ];

        }

        $reponse=new JsonResponse($tabPharmacie);

        return $reponse;

    }








}
