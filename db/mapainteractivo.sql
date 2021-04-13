-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-04-2021 a las 01:39:02
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mapainteractivo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logar`
--

CREATE TABLE `logar` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `latitud` varchar(50) NOT NULL,
  `longitud` varchar(50) NOT NULL,
  `imagen` text NOT NULL,
  `estadoid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `logar`
--

INSERT INTO `logar` (`id`, `nombre`, `descripcion`, `fecha`, `latitud`, `longitud`, `imagen`, `estadoid`) VALUES
(1, 'Lugar X', 'Lugar x', '2021-04-13', '5.6038129622112285', '-76.4290856127427', 'xvxcv', 1),
(2, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(3, 'xvxcv', 'xvxcv', '2021-04-13', 'xvxcv', 'xvxcv', 'xvxcv', 1),
(4, 'xvxcv', 'xvxcv', '2021-04-13', 'xvxcv', 'xvxcv', 'xvxcv', 1),
(5, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(6, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(7, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(8, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(9, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(10, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(11, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(12, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(13, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(14, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(15, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1),
(16, 'sedfsdf', 'sedfsdf', '2021-04-13', 'sedfsdf', 'sedfsdf', 'sedfsdf', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `usuaro` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `estadoid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `logar`
--
ALTER TABLE `logar`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `logar`
--
ALTER TABLE `logar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
