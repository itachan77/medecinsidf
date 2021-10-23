-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 23 oct. 2021 à 08:26
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `profession_mdc`
--

INSERT INTO `profession_mdc` (`id`, `libelle_profession`, `code_profession`) VALUES
(32, 'Médecin généraliste', 45),
(33, 'Chirurgien-dentiste', 18),
(34, 'Dermatologue et vénérologue', 22),
(35, 'Radiologue', 67),
(36, 'Psychiatre de l\'enfant et de l\'adolescent\r\n', 66),
(37, 'Cardiologue', 6),
(38, 'Ophtalmologiste\r\n', 56),
(39, 'Anesthésiste réanimateur', 3),
(40, 'Gynécologue obstétricien', 37),
(41, 'Sage-femme', 71),
(42, 'Chirurgien orthopédiste et traumatologue', 12),
(43, 'Dermatologue et vénérologue', 22),
(44, 'Gastro-entérologue et hépatologue', 33),
(45, 'Oto-Rhino-Laryngologue (ORL) et chirurgien cervico-facial', 59),
(46, 'Rhumatologue', 70),
(47, 'Chirurgien-dentiste spécialiste en orthopédie dento-faciale\r\n', 19),
(48, 'Pneumologue\r\n', 64),
(49, 'Chirurgien urologue', 15),
(50, 'Chirurgien général\r\n', 7),
(51, 'Gynécologue médical', 35),
(52, 'Neurologue', 53),
(53, 'Endocrinologue-diabétologue', 23),
(54, 'Chirurgien plasticien', 13),
(55, 'Chirurgien viscéral', 17),
(56, 'Stomatologiste', 74),
(57, 'Néphrologue', 51),
(58, 'Chirurgien vasculaire', 16),
(59, 'Médecin spécialiste en médecine nucléaire', 49),
(60, 'Spécialiste en médecine physique et de réadaptation', 73),
(61, 'Chirurgien maxillo-facial et stomatologiste', 10),
(62, 'Gynécologue médical et obstétricien', 36),
(63, 'Neurochirurgien', 52),
(64, 'Spécialiste en médecine interne', 72),
(65, 'Chirurgien thoracique et cardio-vasculaire', 14),
(66, 'Cancérologue médical', 5),
(67, 'Chirurgien infantile', 8),
(68, 'Neuropsychiatre', 54),
(69, 'Chirurgiens-dentistes spécialiste en chirurgie orale', 20),
(71, 'Chirurgien maxillo-facial', 9),
(72, 'Gériatre', 34),
(73, 'Hématologue', 38),
(74, 'Cancérologue radiothérapeute', 4),
(75, 'Réanimateur médical', 69),
(76, 'Obstétricien', 55),
(77, 'Radiothérapeute', 68),
(78, 'Chirurgiens-dentistes spécialiste en médecine bucco-dentaire\r\n', 21),
(79, 'Médecin biologiste', 44),
(80, 'Médecin généticien', 48),
(81, 'Médecin spécialiste en santé publique et médecine sociale', 50),
(82, 'Psychiatre', 65),
(84, 'Pédiatre', 60);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
