export class ProyectoModel {

    idProyecto? : number;
    nombreProyecto : string;
    descripcionProyecto : string;
    anio : string;
    linkProyecto : string;

    constructor(nombreProyecto: string, descripcionProyecto: string, anio : string, 
        linkProyecto : string) {
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.anio = anio;
        this.linkProyecto = linkProyecto;
    }


}