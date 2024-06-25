   /* Propiedades en alquiler */

   const propiedadesEnAlquiler = [
    {
        imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        titulo: 'Apartamento en el centro de la ciudad',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        direccion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño: 2,
        precio: '2.500',
        smoke: false,
        pets: true
    },
    {
        imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        titulo: 'Apartamento luminoso con vista al mar',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        direccion: '456 Ocean Avenue,Seaside Town, CA 56789',
        habitaciones: 3,
        baño: 3,
        precio: '2.500',
        smoke: true,
        pets: true
    },
    {
        imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        titulo: 'Condominio moderno en zona residencial',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        direccion: '123 Main Street,  Anytown, CA 91234',
        habitaciones: 2,
        baño: 2,
        precio: '2.200',
        smoke: false,
        pets: false
    },
    {
        imagen: './assets/img/alquiler4.jpg',
        titulo: 'Casa en insertada en la naturaleza',
        descripcion: 'Hermosa casa con todas las comodidades para estar en la tranquilidad de la naturaleza.',
        direccion: '123 Washinton,  San Diego, CA 91244',
        habitaciones: 1,
        baño: 1,
        precio:  '1.500',
        smoke: false,
        pets: true
    }
]

const containerAlquiler = document.querySelector ('#alquiler_container')


 let alquilerTemplate = ""
 for (let a of  propiedadesEnAlquiler) {
        alquilerTemplate += ` 
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src="${a.imagen}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">${a.titulo}</h5>
                    <p class="card-text">${a.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${a.direccion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${a.habitaciones} |
                    <i class="fas fa-bath"></i> ${a.baño}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${a.precio}</p>
                    
                    ${a.smoke === true ? 
                        `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                        </p>` 
                        : 
                        `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
                    }
    
                    ${a.pets === true ? 
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


containerAlquiler.innerHTML += alquilerTemplate

