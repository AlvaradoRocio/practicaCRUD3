-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-10-2021 a las 23:52:28
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `mail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tel` varchar(250) NOT NULL,
  `comentar` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `nombre`, `mail`, `tel`, `comentar`) VALUES
(1, 'rocio', 'rocio@gonna.com', '12321', 'Prueba1'),
(2, 'Javier', 'javier@hotmsi.com', '12321', 'Prueba2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`titulo`, `subtitulo`, `cuerpo`, `id`) VALUES
('Yahoo celebra los 25 años de Pokémon en un entorno 3D “ciberpunk” para fans', 'Junto a la diseñadora londinense, Charli Cohen, diseñaron una plataforma inmersiva denominada brandiverse, que permite comprar prendas físicas y virtuales', 'PRUEBA DE MODIFICADO: Yahoo ha tenido que reinventarse y hoy está apostando al mundo del metaverso. Así, ha creado Electric/City, un nuevo entorno digital al mejor estilo “ciberpunk” (subgénero de la ciencia ficción) inspirado en el aniversario 25 de Pokémon. Se trata de una plataforma que permite experimentar el universo 3D en donde las personas pueden comprar prendas de una edición limitada de la diseñadora londinense, Charli Cohen (quien figura en la lista de 30 menores de 30 años de Forbes). También, habrá una colección en gama digital (algo así como skins de los videojuegos), en donde los fans pueden crear sus propios avatares con las prendas de Charli Cohen para verlas en AR (realidad aumentada) y compartirlas socialmente. Además, es posible utilizar su colección más amplia para los avatares virtuales de los usuarios en más de 500 plataformas', 19),
('Yahoo celebra los 25 años de Pokémon en un entorno 3D “ciberpunk” para fans', 'Junto a la diseñadora londinense, Charli Cohen, diseñaron una plataforma inmersiva denominada brandiverse, que permite comprar prendas físicas y virtuales', 'HOLA. Yahoo ha tenido que reinventarse y hoy está apostando al mundo del metaverso. Así, ha creado Electric/City, un nuevo entorno digital al mejor estilo “ciberpunk” (subgénero de la ciencia ficción) inspirado en el aniversario 25 de Pokémon. Se trata de una plataforma que permite experimentar el universo 3D en donde las personas pueden comprar prendas de una edición limitada de la diseñadora londinense, Charli Cohen (quien figura en la lista de 30 menores de 30 años de Forbes).\r\n\r\nTambién, habrá una colección en gama digital (algo así como skins de los videojuegos), en donde los fans pueden crear sus propios avatares con las prendas de Charli Cohen para verlas en AR (realidad aumentada) y compartirlas socialmente. Además, es posible utilizar su colección más amplia para los avatares virtuales de los usuarios en más de 500 plataformas', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'rocio', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
