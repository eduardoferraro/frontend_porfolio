export class PersonaModel {
    id?: number;
    nombre: string;
    apellido: string;
    residencia: string;
    edad: string;
    telefono: string;
    email: string;
    imagenPersona: string;
    textoPersona: string;
    textoHabilidad: string;

    constructor(nombre:string, apellido:string, residencia: string, edad: string, telefono: string, email: string, imagenPersona: string, textoPersona: string, textoHabilidad: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.residencia = residencia;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
        this.imagenPersona = imagenPersona;
        this.textoPersona = textoPersona;
        this.textoHabilidad = textoHabilidad;
    

    }
    
    


    




}