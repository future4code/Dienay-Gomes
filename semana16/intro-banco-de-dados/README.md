USE `turing-dienay-gomes`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

/* Exercicio 1
	a. NOT NULL quer dizer que não aceita um valor nulo
    b. mostra o banco de dados e tabelas criadas
    c. SHOW Actor deu erro de sintaxe
*/
SHOW DATABASES;

SHOW TABLES;
 
-- Exercicio 2
-- a.
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

/* b. 
	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

/* c. 
	Error Code: 1136. Column count doesn't match
    value count at row 1
    A quantidade de colunas não corresponde ao esperado.
    flatava ( birth_date e gender)
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

/* d. 
	Error Code: 1364. Field 'name' doesn't have a default value
	faltou o campo nome
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Celton Mello",
  400000,
  "1972-12-30", 
  "male"
);

/* e.
	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
	A data de nascimento não foi passada como string e os (-)
    foram reconhecidos como sinais de subtração.
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

/*	f. 
	Error Code: 1062. Duplicate entry '005' for key 'PRIMARY'
	id estava repetido
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Exercicio 3
-- a.
SELECT id, name from Actor WHERE gender = "female";

-- b.
SELECT id, salary from Actor WHERE name = "Tony Ramos";

/* c. Não retornou nenhum pois deu erro quando
	tentei criar sem o um timo campo
*/
SELECT id, name from Actor WHERE gender = "invalid";

-- d. não tem nenhum ator/atriz com salário com o valor pedido
SELECT id, name from Actor WHERE salary = 500000;

/* e.
	Error Code: 1054. Unknown column 'nome' in 'field list'
	não entendi
*/
SELECT id, nome from Actor WHERE id = "002";

