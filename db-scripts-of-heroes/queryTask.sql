SELECT * FROM
(
    (
        Tarea INNER JOIN Lista ON Lista._id = Tarea.categoriaLista
    ) 
    INNER JOIN Cuenta ON lista.listaUsuario = cuenta.tokenUsuario
) 
WHERE cuenta.tokenUsuario = 'token';


SELECT * FROM 
Tarea INNER JOIN Lista ON Lista._id = Tarea.categoriaLista
WHERE Lista._id = 11;
