export class HabilidadModel {

    idHabilidad? : number;
    nombreHabilidad: string;
    cantidadHabilidad: number;

    constructor(nombreHabilidad: string, cantidadHabilidad: number ) {
        this.nombreHabilidad = nombreHabilidad;
        this.cantidadHabilidad = cantidadHabilidad;
    }

    
    


}