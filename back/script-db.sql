-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ze_solutions
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ze_solutions
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ze_solutions` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ze_solutions` ;

-- -----------------------------------------------------
-- Table `ze_solutions`.`perguntas_respostas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ze_solutions`.`perguntas_respostas` (
  `idperguntas` INT NOT NULL AUTO_INCREMENT,
  `perguntas` VARCHAR(255) NOT NULL,
  `respostas` LONGTEXT NOT NULL,
  PRIMARY KEY (`idperguntas`))
ENGINE = InnoDB
AUTO_INCREMENT = 44
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
