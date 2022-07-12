CREATE TABLE IF NOT EXISTS Cuenta(
    nombreUsuario VARCHAR(30) NOT NULL,
    tokenUsuario VARCHAR(30) PRIMARY KEY
);



/*------------------------------------------------------------------------*/
/*Tabla para el manejo de las lista con referencias a los usuarios        */
/*------------------------------------------------------------------------*/

CREATE TABLE IF NOT EXISTS Lista(
    _id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    listaUsuario VARCHAR(30) 
);
/*------------------------------------------------------------------------*/
/* Modificaciones para establecer las llaves foraneas de las listas       */
ALTER TABLE Lista ADD CONSTRAINT Lista_Usuario 
FOREIGN KEY (listaUsuario) REFERENCES Cuenta(tokenUsuario);



/*------------------------------------------------------------------------*/
/*Tabla para el manejo de las tareas con referencias a las listas         */
/*------------------------------------------------------------------------*/

CREATE TABLE IF NOT EXISTS Tarea(
    _id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT,
    urgenciaString VARCHAR(30),
    urgenciaNumber INT,
    fechaVencimiento DATE,
    estado VARCHAR(30),
    posicion INT,
    datosContacto TEXT,
    categoriaLista INT --STRING
);
/*------------------------------------------------------------------------*/
/* Modificaciones para establecer las llaves foraneas de las tareas       */
ALTER TABLE Tarea ADD CONSTRAINT Tarea_Lista 
FOREIGN KEY (categoriaLista) REFERENCES Lista(_id);





