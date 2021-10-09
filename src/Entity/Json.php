<?php

namespace App\Entity;

use App\Repository\JsonRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=JsonRepository::class)
 */
class Json
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
    private $ajaxNom;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAjaxNom(): ?string
    {
        return $this->ajaxNom;
    }

    public function setAjaxNom(?string $ajaxNom): self
    {
        $this->ajaxNom = $ajaxNom;

        return $this;
    }
}
