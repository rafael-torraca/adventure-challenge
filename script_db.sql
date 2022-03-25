CREATE SCHEMA qyon;

CREATE TABLE `competidores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `sexo` char(1) NOT NULL,
  `temperatura_media_corpo` decimal(10,2) NOT NULL,
  `peso` decimal(10,2) NOT NULL,
  `altura` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `pista_corrida` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `historico_corrida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `competidor_id` int(11) DEFAULT NULL,
  `pista_corrida_id` int(11) DEFAULT NULL,
  `data_corrida` datetime(6) NOT NULL,
  `tempo_gasto` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_competidores_id_idx` (`competidor_id`),
  KEY `fk_pista_corrida_id_idx` (`pista_corrida_id`),
  CONSTRAINT `fk_competidores_id` FOREIGN KEY (`competidor_id`) REFERENCES `competidores` (`id`) ON DELETE
  SET
    NULL ON
  UPDATE
    CASCADE,
    CONSTRAINT `fk_pista_corrida_id` FOREIGN KEY (`pista_corrida_id`) REFERENCES `pista_corrida` (`id`) ON DELETE
  SET
    NULL ON
  UPDATE
    CASCADE
);
