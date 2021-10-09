<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MedecinsController extends AbstractController
{
    /**
     * @Route("/medecins", name="medecins")
     */
    public function index(): Response
    {
        return $this->render('medecins/index.html.twig', [
            'controller_name' => 'MedecinsController',
        ]);
    }
}
