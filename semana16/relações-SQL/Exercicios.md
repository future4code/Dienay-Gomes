## Exercicio 1
**a.**
É a forma de referenciar uma tabela em outra
**b.**
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
		"Muito bom!",
		7,
		"001"
);
**c.**
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-dienay-gomes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não foi possível associar pois a chave estrangeira não bateu com nenhuma da tabela Movie
## Exercicio 2
## Exercicio 3
## Exercicio 4
## Exercicio 5
## Exercicio 6