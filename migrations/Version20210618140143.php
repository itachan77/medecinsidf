<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210618140143 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pharmacie (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) DEFAULT NULL, adresse_voie1 VARCHAR(255) DEFAULT NULL, adresse_voie2 VARCHAR(255) DEFAULT NULL, adresse_codepostal VARCHAR(255) DEFAULT NULL, adresse_ville VARCHAR(255) DEFAULT NULL, modalites_accueil LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE pharmacies');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pharmacies (COL 1 VARCHAR(1612) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 2 VARCHAR(676) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 3 VARCHAR(467) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 4 VARCHAR(444) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 5 VARCHAR(388) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 6 VARCHAR(180) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 7 VARCHAR(308) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 8 VARCHAR(305) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 9 VARCHAR(464) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 10 VARCHAR(430) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 11 VARCHAR(842) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 12 VARCHAR(182) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 13 VARCHAR(1841) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 14 VARCHAR(182) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`, COL 15 VARCHAR(1394) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = MyISAM COMMENT = \'\' ');
        $this->addSql('DROP TABLE pharmacie');
    }
}
