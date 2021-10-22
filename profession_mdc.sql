-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 20 oct. 2021 à 13:46
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `laboratoirecovid`
--

-- --------------------------------------------------------

--
-- Structure de la table `profession_mdc`
--

DROP TABLE IF EXISTS `profession_mdc`;
CREATE TABLE IF NOT EXISTS `profession_mdc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_profession` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_profession` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `profession_mdc`
--

INSERT INTO `profession_mdc` (`id`, `libelle_profession`, `code_profession`) VALUES
(31, 'Toute profession', NULL),
(32, 'Médecin généraliste', 45),
(33, 'Chirurgien-dentiste', 18),
(34, 'Dermatologue et vénérologue', 22),
(35, 'Radiologue', NULL),
(36, 'Psychiatre\r\n', NULL),
(37, 'Cardiologue', NULL),
(38, 'Ophtalmologiste\r\n', NULL),
(39, 'Anesthésiste réanimateur', NULL),
(40, 'Gynécologue obstétricien', NULL),
(41, 'Sage-femme', NULL),
(42, 'Chirurgien orthopédiste et traumatologue', NULL),
(43, 'Dermatologue et vénérologue', NULL),
(44, 'Gastro-entérologue et hépatologue', NULL),
(45, 'Oto-Rhino-Laryngologue (ORL) et chirurgien cervico-facial', NULL),
(46, 'Rhumatologue', NULL),
(47, 'Chirurgien-dentiste spécialiste en orthopédie dento-faciale\r\n', NULL),
(48, 'Pneumologue\r\n', NULL),
(49, 'Chirurgien urologue', NULL),
(50, 'Chirurgien général\r\n', NULL),
(51, '\r\nGynécologue médical', NULL),
(52, 'Neurologue', NULL),
(53, 'Endocrinologue-diabétologue', NULL),
(54, 'Chirurgien plasticien', NULL),
(55, '\r\nChirurgien viscéral', NULL),
(56, 'Stomatologist', NULL),
(57, 'Néphrologue', NULL),
(58, 'Chirurgien vasculaire', NULL),
(59, 'Médecin spécialiste en médecine nucléaire', NULL),
(60, 'Spécialiste en médecine physique et de réadaptation', NULL),
(61, 'Chirurgien maxillo-facial et stomatologiste', NULL),
(62, '\r\nGynécologue médical et obstétricien', NULL),
(63, 'Neurochirurgien', NULL),
(64, 'Spécialiste en médecine interne', NULL),
(65, 'Chirurgien thoracique et cardio-vasculaire', NULL),
(66, 'Cancérologue médical', NULL),
(67, 'Chirurgien infantile', NULL),
(68, 'Neuropsychiatre', NULL),
(69, 'Chirurgiens-dentistes spécialiste en chirurgie orale', NULL),
(70, 'Psychiatre de l\'enfant et de l\'adolescent', NULL),
(71, 'Chirurgien maxillo-facial', NULL),
(72, 'Gériatre', NULL),
(73, 'Hématologue', NULL),
(74, 'Cancérologue radiothérapeute', NULL),
(75, 'Réanimateur médical', NULL),
(76, 'Obstétricien', NULL),
(77, 'Radiothérapeute', NULL),
(78, 'Chirurgiens-dentistes spécialiste en médecine bucco-dentaire\r\n', NULL),
(79, 'Médecin biologiste', NULL),
(80, 'Médecin généticien', NULL),
(81, 'Médecin spécialiste en santé publique et médecine sociale', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
