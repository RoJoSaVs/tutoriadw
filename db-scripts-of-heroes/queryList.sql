SELECT * FROM 
Lista INNER JOIN  Cuenta ON lista.listaUsuario = cuenta.tokenUsuario
WHERE cuenta.tokenUsuario = 'token';
-- WHERE cuenta.nombreUsuario = 'nombre';