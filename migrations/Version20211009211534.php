<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211009211534 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX cpville_department_code_foreign ON cpville');
        $this->addSql('ALTER TABLE cpville CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE department_code department_code VARCHAR(3) DEFAULT NULL, CHANGE code_postal code_postal VARCHAR(10) DEFAULT NULL, CHANGE ville ville VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cpville CHANGE id id INT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE department_code department_code VARCHAR(3) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE code_postal code_postal VARCHAR(5) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE ville ville VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE INDEX cpville_department_code_foreign ON cpville (department_code)');
    }
}
