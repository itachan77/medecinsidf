<?php

namespace App\Controller;

use App\Repository\CpvilleRepository;
use App\Repository\RegionsRepository;
use App\Repository\DepartmentsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MedecinsController extends AbstractController
{
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
     * @Route("/departements", name="departement")
     */
    public function departements(DepartmentsRepository $departementsRepository): Response
    {

            /***********DATA REGION */
        $departements=$departementsRepository->findAll();
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
     * @Route("/villes", name="ville")
     */
    public function villes(CpvilleRepository $cpvillesRepository): Response
    {

            /***********DATA REGION */
        $cpvilles=$cpvillesRepository->findAll();
        $ville=[];
        if ($cpvilles)
        {
            foreach($cpvilles as $val) {
                $ville[]=[
                    'id'=>$val->getId(),
                    'villes'=>$val->getVille(),
                    'codePostal'=>$val->getCodePostal(),
                    'departmentCode'=>$val->getDepartmentCode(),];
            }
        }
//        $dataville = json_encode($ville);
        
        //JsonResponse retourne une valeur en Json. ex: {"id":11,"nomDiscipline":"Anglais","isDone":false}
        $response = new JsonResponse();

        return $response->setData($ville); //(le paramètre comme $discipline correspond toujours à un tableau)
  
    }  
    
    
    
    
    
}
