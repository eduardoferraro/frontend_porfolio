export class EducacionModel {

    idEducacion? : number;
    nombreInstitucion : string;
    nombreTitulo : string;
    anioDesde : string;
    anioHasta : string;
    imagenInstitucion: string;

    constructor(nombreInstitucion: string, nombreTitulo: string, anioDesde : string, 
            anioHasta : string, imagenInstitucion: string) {
        
        this.nombreInstitucion= nombreInstitucion;
        this.nombreTitulo = nombreTitulo;
        this.anioDesde = anioDesde;
        this.anioHasta = anioHasta;
        this.imagenInstitucion = imagenInstitucion;

    }

}


