CREATE TABLE `logintable`.`formelement` 
  ( 
     `id`       INT NOT NULL auto_increment, 
     `name`     VARCHAR(255) NOT NULL, 
     `email`    VARCHAR(255) NOT NULL, 
     `password` VARCHAR(120) NOT NULL, 
     `extra`    INT NOT NULL, 
     PRIMARY KEY (`id`) 
  ) 
engine = innodb; 