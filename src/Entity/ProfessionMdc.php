<?php

namespace App\Entity;

use App\Repository\ProfessionMdcRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProfessionMdcRepository::class)
 */
class ProfessionMdc
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $libelleProfession;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $codeProfession;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelleProfession(): ?string
    {
        return $this->libelleProfession;
    }

    public function setLibelleProfession(string $libelleProfession): self
    {
        $this->libelleProfession = $libelleProfession;

        return $this;
    }

    public function getCodeProfession(): ?int
    {
        return $this->codeProfession;
    }

    public function setCodeProfession(?int $codeProfession): self
    {
        $this->codeProfession = $codeProfession;

        return $this;
    }
}
