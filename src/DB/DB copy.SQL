  -- phpMyAdmin SQL Dump
  -- version 5.2.1
  -- https://www.phpmyadmin.net/
  --
  -- Host: 127.0.0.1:3306
  -- Tempo de geração: 19/12/2023 às 01:11
  -- Versão do servidor: 8.2.0
  -- Versão do PHP: 8.2.13

  SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
  START TRANSACTION;
  SET time_zone = "-03:00";


  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;

  --
  -- Banco de dados: `teste`
  --

  -- --------------------------------------------------------

  --
  -- Estrutura para tabela `contratação`
  --

  DROP TABLE IF EXISTS `contratacao`;
  CREATE TABLE IF NOT EXISTS `contratacao` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Dia` int NOT NULL,
    `Pessoa` int NOT NULL,
    `Cargo` varchar(100) NOT NULL,
    `Chefe` int NOT NULL,
    PRIMARY KEY (`ID`),
    KEY `Contratacao_fk0` (`Dia`),
    KEY `Contratacao_fk1` (`Pessoa`),
    KEY `Contratacao_fk2` (`Chefe`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  -- --------------------------------------------------------

  --
  -- Estrutura para tabela `dia_evento`
  --

  DROP TABLE IF EXISTS `dia_evento`;
  CREATE TABLE IF NOT EXISTS `dia_evento` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Evento` int NOT NULL,
    `IngressosPre` int NOT NULL,
    `IngressosDia` int NOT NULL,
    `IngressosTotal` int NOT NULL,
    `Data` date NOT NULL,
    PRIMARY KEY (`ID`),
    KEY `Dia_Evento_fk0` (`Evento`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  -- --------------------------------------------------------

  --
  -- Estrutura para tabela `endereço`
  --

  DROP TABLE IF EXISTS `endereco`;
  CREATE TABLE IF NOT EXISTS `endereco` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Nome` varchar(50) NOT NULL,
    `CEP` varchar(10) NOT NULL,
    `Bairro` varchar(100) NOT NULL,
    `Rua` varchar(100) NOT NULL,
    `Numero` varchar(50) NOT NULL,
    `Complemento` varchar(255) NOT NULL,
    `Cidade` varchar(50) NOT NULL,
    `UF` varchar(2) NOT NULL,
    PRIMARY KEY (`ID`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  -- --------------------------------------------------------

  --
  -- Estrutura para tabela `evento`
  --

  DROP TABLE IF EXISTS `evento`;
  CREATE TABLE IF NOT EXISTS `evento` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Local` int NOT NULL,
    `Edicao` varchar(60) NOT NULL,
    `IngressosTotal` int NOT NULL,
    PRIMARY KEY (`ID`),
    KEY `Evento_fk0` (`Local`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  -- --------------------------------------------------------

  --
  -- Estrutura para tabela `ponto`
  --

  DROP TABLE IF EXISTS `ponto`;
  CREATE TABLE IF NOT EXISTS `ponto` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Pessoa` int NOT NULL,
    `Horario` datetime NOT NULL,
    PRIMARY KEY (`ID`),
    KEY `Ponto_fk0` (`Pessoa`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  -- --------------------------------------------------------

  --
  -- Estrutura para tabela `usuario`
  --

  DROP TABLE IF EXISTS `usuario`;
  CREATE TABLE IF NOT EXISTS `usuario` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `Login` varchar(25) NOT NULL,
    `Senha` varchar(60) NOT NULL,
    `Nome` varchar(60) NOT NULL,
    `CPF` varchar(11) NOT NULL,
    `Genero` varchar(20) NOT NULL,
    `Email` varchar(60) NOT NULL,
    `Telefone` varchar(9) NOT NULL,
    `Nascimento` date NOT NULL,
    `Endereco` int NOT NULL,
    `Criado` datetime NOT NULL,
    `UltLogin` datetime NOT NULL,
    `Desde` datetime NOT NULL,
    `Permissoes` text NOT NULL,
    PRIMARY KEY (`ID`),
    UNIQUE KEY `ID` (`ID`),
    UNIQUE KEY `Login` (`Login`),
    UNIQUE KEY `Email` (`Email`),
    KEY `Usuario_fk0` (`Endereco`)
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;


INSERT INTO `usuario` (`ID`, `Login`, `Senha`, `Nome`, `CPF`, `Genero`, `Email`, `Telefone`, `Nascimento`, `Endereco`, `Criado`, `UltLogin`, `Desde`, `Permissoes`) VALUES
(2, 'leyed', '$2y$10$fm8FKZ2NfEO3YEkTmW8M6uHMIVCbhwvG8ICtg/hxJ1gSSCVWY5BAq', '', '', '', 'leyed94@gmail.com', '', '1994-08-12', 0, '2023-12-18 22:24:10', '2023-12-21 23:46:32', '2023-12-18 22:24:10', ''),
(5, 'smkassist', '$2y$10$V0R5p8GsGCiGaGZkW1Th0.7Cy4yhpaxI7Gmsw4vX7ykh/HvF9Yd5a', '', '', '', 'smkassist@gmail.com', '', '1994-08-12', 0, '2023-12-21 23:16:14', '2023-12-22 01:27:57', '2023-12-21 23:16:14', ''),
(6, 'tixa', '$2y$10$P3t.IwIP5HzFfxQfmvujaOg1NbYq4wBoma4BWfWLASV/VaNp7Wk96', '', '', '', 'larissajurupin@gmail.com', '', '1994-08-12', 0, '2023-12-21 23:16:22', '2023-12-22 01:27:57', '2023-12-21 23:16:22', ''),
(7, 'orley', '$2y$10$T6liL/RonfdKhvi.Kk1rA.DOqQMLAtafugTNIxr339THeegMB1QYS', '', '', '', 'orley1994@hotmail.com', '', '1994-08-12', 0, '2023-12-22 01:10:59', '2023-12-22 01:13:29', '2023-12-22 01:10:59', '');
