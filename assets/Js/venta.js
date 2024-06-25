    /* Propiedades en venta */
    const propiedadesEnVenta = [
        {
            imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            titulo: 'Apartamento de lujo en zona excluica',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            baño: 4,
            precio: 255.000,
            smoke: false,
            pets: false 
        },
        {
            imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
            titulo: 'Apartamento acogedor en la montaña',
            descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
            direccion: '789 Mountain Road,Summit Peaks, CA 23456',
            habitaciones: 2,
            baño: 1,
            precio: 120.000,
            smoke: true,
            pets: true
        },
        {
            imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
            titulo: 'Penthouse de lujo con terraza panorámica',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
            direccion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            baño: 3,
            precio: 450.000,
            smoke: false,
            pets: true
        },
        {
            imagen: './assets/img/venta4.jpg',
            titulo: 'Cabaña con vista al mar',
            descripcion: 'Hermosa cabaña con vista al mar con dos amitaciones y dos baños',
            direccion: '123 Michigan Avenue, Los Angeles, CA 56789',
            habitaciones: 2,
            baño: 2,
            precio: 550.000,
            smoke: false,
            pets: false
        }
    
    ]


const containerVenta = document.querySelector ('#venta_container')


 let ventaTemplate = ""
 for (let venta of  propiedadesEnVenta) {
        ventaTemplate += ` 
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src="${venta.imagen}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">${venta.titulo}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${venta.direccion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${venta.habitaciones} |
                    <i class="fas fa-bath"></i> ${venta.baño}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${venta.precio}</p>
                    
                    ${venta.smoke === true ? 
                        `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                        </p>` 
                        : 
                        `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
                    }
    
                    ${venta.pets === true ? 
                        `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>` 
                        : 
                        `<p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                        </p>`
                    }
                </div>
                </div>
            </div>`
    }


containerVenta.innerHTML += ventaTemplate


    