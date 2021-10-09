<?php

namespace App\Repository;

use App\Entity\Cpville;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Cpville|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cpville|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cpville[]    findAll()
 * @method Cpville[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CpvilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cpville::class);
    }

    // /**
    //  * @return Cpville[] Returns an array of Cpville objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Cpville
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
