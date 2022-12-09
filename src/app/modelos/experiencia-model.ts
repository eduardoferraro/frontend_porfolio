export class ExperienciaModel {

    idExperiencia? : number;
    nombreEmpresa : string;
    descripcionExperiencia : string;
    anioDesde : string;
    anioHasta : string;
    mesDesde : string;
    mesHasta : string;
    esActual : boolean;

    constructor(nombreEmpresa: string, descripcionExperiencia: string, anioDesde : string, 
            anioHasta : string, mesDesde : string, mesHasta : string, esActual :boolean ) {
        this.nombreEmpresa = nombreEmpresa;
        this.descripcionExperiencia = descripcionExperiencia;
        this.anioDesde = anioDesde;
        this.anioHasta = anioHasta;
        this.mesDesde = mesDesde;
        this.mesHasta = mesHasta;
        this.esActual = esActual;
    }


}