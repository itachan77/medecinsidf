<?php

namespace App\Entity;

use App\Repository\PharmacieRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PharmacieRepository::class)
 */
class Pharmacie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titre;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresseVoie1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresseVoie2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresseCodepostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresseVille;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $modalitesAccueil;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getAdresseVoie1(): ?string
    {
        return $this->adresseVoie1;
    }

    public function setAdresseVoie1(?string $adresseVoie1): self
    {
        $this->adresseVoie1 = $adresseVoie1;

        return $this;
    }

    public function getAdresseVoie2(): ?string
    {
        return $this->adresseVoie2;
    }

    public function setAdresseVoie2(?string $adresseVoie2): self
    {
        $this->adresseVoie2 = $adresseVoie2;

        return $this;
    }

    public function getAdresseCodepostal(): ?string
    {
        return $this->adresseCodepostal;
    }

    public function setAdresseCodepostal(?string $adresseCodepostal): self
    {
        $this->adresseCodepostal = $adresseCodepostal;

        return $this;
    }

    public function getAdresseVille(): ?string
    {
        return $this->adresseVille;
    }

    public function setAdresseVille(?string $adresseVille): self
    {
        $this->adresseVille = $adresseVille;

        return $this;
    }

    public function getModalitesAccueil(): ?string
    {
        return $this->modalitesAccueil;
    }

    public function setModalitesAccueil(?string $modalitesAccueil): self
    {
        $this->modalitesAccueil = $modalitesAccueil;

        return $this;
    }
}
