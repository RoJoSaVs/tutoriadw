import { IList } from "./IList";

export interface ITask{
    _id: number;
    nombre: string;
    descripcion: string;
    urgenciaString: string;
    urgenciaNumber: number;
    fechaVencimiento: string;
    estado: string;
    posicion: number;
    datosContacto: string;
    Lista: IList;
}