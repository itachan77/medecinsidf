<?php

namespace App\Controller;

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
        $dataRegion = json_encode($region);
        
        //JsonResponse retourne une valeur en Json. ex: {"id":11,"nomDiscipline":"Anglais","isDone":false}
        $response = new JsonResponse();

        return $response->setData($infoApis); //(le paramètre comme $discipline correspond toujours à un tableau)
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
