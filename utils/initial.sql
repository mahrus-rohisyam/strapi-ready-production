CREATE DATABASE IF NOT EXISTS `strapi-ready`;
CREATE USER IF NOT EXISTS 'strapi-ready'@'localhost' IDENTIFIED WITH mysql_native_password BY 'STRAPI_READY#2023';
GRANT ALL ON `strapi-ready`.* TO 'strapi-ready'@'localhost';