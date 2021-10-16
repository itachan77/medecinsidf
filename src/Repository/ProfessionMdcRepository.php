<?php

namespace App\Repository;

use App\Entity\ProfessionMdc;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProfessionMdc|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProfessionMdc|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProfessionMdc[]    findAll()
 * @method ProfessionMdc[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProfessionMdcRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProfessionMdc::class);
    }

    // /**
    //  * @return ProfessionMdc[] Returns an array of ProfessionMdc objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProfessionMdc
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
