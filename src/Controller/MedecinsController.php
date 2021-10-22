<?php

namespace App\Controller;

use App\Service\CallApiService;
use App\Repository\CpvilleRepository;
use App\Repository\RegionsRepository;
use App\Repository\DepartmentsRepository;
use App\Repository\ProfessionMdcRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MedecinsController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index(Request $request): Response
    {


        return $this->render('medecins/index.html.twig', [
            'controller_name' => 'ComposantsController',
        ]);
  
    }  



    /**
     * @Route("/regions", name="region")
     */
    public function regions(RegionsRepository $regionsRepository): Response
    {

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
//        $dataRegion = json_encode($region);
        
        //JsonResponse retourne une valeur en Json. ex: {"id":11,"nomDiscipline":"Anglais","isDone":false}
        $response = new JsonResponse();

        return $response->setData($region); //(le paramètre comme $discipline correspond toujours à un tableau)
        
        
    }
    
    
    /**
     * @Route("/departements/{codeRegion}", name="departement")
     */
    public function departements(DepartmentsRepository $departementsRepository, $codeRegion): Response
    {

        //la donnée $codeRegion vient de reactjs quand je choisis une région
            /***********DATA REGION */
            
        if ($codeRegion != "aucune selection") {
            
            $departements=$departementsRepository->findBy(["regionCode"=>$codeRegion]);
        }
        else {
            $departements=$departementsRepository->findAll();
        }
        
        
        $departement=[];
        if ($departements)
        {
            foreach($departements as $val) {
                $departement[]=[
                    'id'=>$val->getId(),
                    'code'=>$val->getCode(),
                    'name'=>$val->getName(),
                    'regionCode'=>$val->getRegionCode(),];
            }
        }
//        $datadepartement = json_encode($departement);
        
        //JsonResponse retourne une valeur en Json. ex: {"id":11,"nomDiscipline":"Anglais","isDone":false}
        $response = new JsonResponse();

        return $response->setData($departement); //(le paramètre comme $discipline correspond toujours à un tableau)
  
    }  
    

    /**
     * @Route("/villes/{codeDpt}", name="ville")
     */
    public function villes(CpvilleRepository $cpvillesRepository, $codeDpt): Response
    {

            /***********DATA REGION */
        $cpvilles=$cpvillesRepository->findBy(["departmentCode" => $codeDpt]);
        $ville=[];
        if ($cpvilles)
        {
            foreach($cpvilles as $val) {
                $ville[]=[
                    'id'=>$val->getId(),
                    'ville'=>$val->getVille(),
                    'codePostal'=>$val->getCodePostal(),
                    'departmentCode'=>$val->getDepartmentCode(),];
            }
        }
//        $dataville = json_encode($ville);
        
        //JsonResponse retourne une valeur en Json. ex: {"id":11,"nomDiscipline":"Anglais","isDone":false}
        $response = new JsonResponse();

        return $response->setData($ville); //(le paramètre comme $discipline correspond toujours à un tableau)
  
    }  


        /**
     * @Route("/specialite/", name="specialite")
     */
    public function specialite(ProfessionMdcRepository $professionMdcRepository): Response
    {

            /***********DATA REGION */
        $specialite=$professionMdcRepository->findByASC();
        $tabSpecialite=[];

        if ($specialite)
        {
            foreach($specialite as $val) {
                $tabSpecialite[]=[
                    'id'=>$val->getId(),
                    'libelleProfession'=>$val->getLibelleProfession(),
                    'codeProfession'=>$val->getCodeProfession()];
            }
        }

        $response = new JsonResponse();

        return $response->setData($tabSpecialite); 

    }  

    /**
     * @Route("/medecins", name="med")
     */
    public function med(CallApiService $callApiService): Response
    
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



        //J'appelle l'api qui se trouve dans le service CallApiService
        $tabMed=$callApiService->getMed();
        dd($tabMed);
  

        return $this->render('covid/med.html.twig', [
            'tabMed'=>$tabMed,

        ]);
    }
    
    
    
    
    
}
