export class Tarea{
    date:Date = new Date();

    constructor(name:string, date:Date){
        this.date = new Date(date)
    }
}