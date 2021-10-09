<?php

namespace App\Controller;

use Stripe\Stripe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DefaultController extends AbstractController
{
    /**
     * @Route("/paiement", name="default")
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }
    /**
     * @Route("/success", name="success")
     */
    public function success(): Response
    {
        return $this->render('default/success.html.twig');
    }
    /**
     * @Route("/error", name="error")
     */
    public function error(): Response
    {
        return $this->render('default/error.html.twig');
    }

    /**
     * @Route("/create-checkout-session", name="checkout")
     */
    public function checkout()
    {

        \Stripe\Stripe::setApiKey('sk_test_51IzkkNKiBLndEiVgL5QpsDNungn1ffu8JBwMGY4EcHhmIgOfTkHzzF2R3wbLExS3n4eKNWfuPG2OmMkRCNWcyc6r00DjufbQfx');

        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                'currency' => 'eur',
                'product_data' => [
                    'name' => 'T-shirt',
                ],
                'unit_amount' => 3000,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => $this->generateUrl('success', [], UrlGeneratorInterface::ABSOLUTE_URL),
            'cancel_url' => $this->generateUrl('error', [], UrlGeneratorInterface::ABSOLUTE_URL),
            ]);

        return new JsonResponse(['id'=>$session->id]);
    }
}
