import { Injectable, ɵisListLikeIterable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})


export class ImagenService {

    url :string = "";
    nombreTemp :string = "";
    
        
    constructor(private storage: Storage) { }

    public uploadImagen($event: any, nombre: string) {
        //const archivoImagen = $event.target.files[0];
        //const referenciaImagen = ref(this.storage, 'imagenes/' + nombre);
        
        const imagenLocal = $event.target.files[0];
        const imagenRemota = ref(this.storage, 'imagenes/' + nombre);

        //guarda el nombre del archivo subido
        this.nombreTemp = nombre;
        
        
       //se sube la imagen
        uploadBytes(imagenRemota, imagenLocal)
            .then(response => { this.obtenerImagen() })
            .catch(error => console.log(error))


    }

    obtenerImagen() {
        const imagenesRemotas = ref(this.storage, 'imagenes/');
        
        list(imagenesRemotas)
        .then(async response => {
            for (let item of response.items){
                
                if (this.nombreTemp == item.name) {
                    this.url = await getDownloadURL(item);
                    console.log(this.url);
                }
            }
        })
        .catch(error => console.log(error))

    }

}


