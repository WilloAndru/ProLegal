-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2024 a las 00:57:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prolegal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transactions`
--

CREATE TABLE `transactions` (
  `id` int(7) NOT NULL,
  `idCliente` int(7) NOT NULL,
  `valor` int(15) NOT NULL,
  `tipo` int(1) NOT NULL,
  `descripcion` varchar(1024) NOT NULL,
  `mensaje` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transactions`
--

INSERT INTO `transactions` (`id`, `idCliente`, `valor`, `tipo`, `descripcion`, `mensaje`) VALUES
(1, 4, 50000, 1, 'Me estrello un carro, y el usuario culpable no quiere responder...', 'conectemonos en este link: ...');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(7) NOT NULL,
  `usuario` varchar(63) NOT NULL,
  `identificacion` varchar(15) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `telefono` text NOT NULL,
  `rol` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `identificacion`, `contraseña`, `fechaNacimiento`, `telefono`, `rol`) VALUES
(1, 'Admin', '100000001', '$2y$10$IX7VfqMtIzO75yOpkKGvruo8Xxl0qkyNyCm4xXrZC9NZs91ZJYdiy', '0000-00-00', '0000000000', 1),
(2, 'Sergio', '100000001', '$2y$10$v5chb.qSgcAe.9zjXONT9uvCUDjrFkf1p5dbD4K1.p7/p5TixOfLG', '2024-12-05', '3025177001', 2),
(3, 'Camila', '1000000002', '$2y$10$J7leB1.O39MUkYFNjKJX7.9UwDFTHGUNy7w8.VVeH7pLePW.q.D5C', '2024-11-02', '30251779100', 2),
(4, 'Wilson', '1000077381', '$2y$10$Q.AmeHEByhzRaGiyalr/puT5vgj1gaDj7g7W99P2x/YOwPlvzwjuK', '2024-11-02', '3025177000', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
