document.addEventListener("DOMContentLoaded", () => {
    const eventos = [
        { 
            titulo: 'Acción de gracias', 
            fecha: '2023-12-15', 
    
        },
        { 
            titulo: 'Feliz Navidad', 
            fecha: '2023-12-25', 
    
        },
        { 
            titulo: 'Año Nuevo', 
            fecha: '2023-12-31', 
    
        },
        { 
            titulo: 'Dia de reyes magos', 
            fecha: '2024-01-06', 

        },
        { 
            titulo: 'Dia de la Virgen de Suyapa', 
            fecha: '2024-02-03', 
        
        },
        { 
            titulo: 'Dia del Amor y la amistad', 
            fecha: '2024-02-14', 
            imagen: 'Tarea Web/img/tarjeta-de-ano-nuevo' 
        },
        // Agrega más eventos según sea necesario
    ];
    

    const calendario = document.getElementById('calendario');

    eventos.forEach(evento => {
        const eventoHTML = document.createElement('div');
        eventoHTML.classList.add('evento');
        eventoHTML.innerHTML = `<h3>${evento.titulo}</h3><p>${evento.fecha}</p>`;
        calendario.appendChild(eventoHTML);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const calendario = document.getElementById('calendario');

    eventos.forEach(evento => {
        const eventoHTML = document.createElement('div');
        eventoHTML.classList.add('evento');

        const imagen = document.createElement('img');
        imagen.src = evento.imagen; // Asigna la ruta de la imagen al atributo src
        eventoHTML.appendChild(imagen); // Agrega la imagen al div de evento

        const titulo = document.createElement('h3');
        titulo.textContent = evento.titulo;
        eventoHTML.appendChild(titulo);

        const fecha = document.createElement('p');
        fecha.textContent = evento.fecha;
        eventoHTML.appendChild(fecha);

        calendario.appendChild(eventoHTML);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const pr = [
        { 
            Pregunta: '¿Qué servicios específicos ofrece Hilos de Plata a los residentes?', 
            Respuesta: 'En Hilos de Plata nos especializamos en brindar atención integral a nuestros residentes. Ofrecemos servicios de cuidado médico, programas de actividades recreativas, apoyo psicológico y social, así como cuidado personalizado según las necesidades de cada residente', 
        },
        { 
            Pregunta: '¿Cuál es el enfoque principal de atención médica que reciben los residentes en Hilos de Plata?', 
            Respuesta: 'Nuestro enfoque se centra en la atención médica holística. Contamos con personal médico especializado que realiza evaluaciones regulares, administra medicamentos y monitorea la salud de los residentes. Además, trabajamos en colaboración con especialistas externos según las necesidades individuales', 
        },
        { 
            Pregunta: '¿Cómo se estructuran las actividades diarias y programas recreativos en Hilos de Plata?', 
            Respuesta: 'Tenemos un variado programa de actividades que incluye ejercicios físicos adaptados, actividades culturales, talleres creativos, salidas grupales y eventos especiales. Adaptamos nuestras actividades para satisfacer los intereses y las capacidades individuales de nuestros residentes', 
        },
        { 
            Pregunta: '¿Cómo manejan las emergencias médicas y la asistencia las 24 horas en Hilos de Plata?', 
            Respuesta: 'Contamos con un equipo de atención disponible las 24 horas. Además, tenemos protocolos establecidos para emergencias médicas que incluyen personal capacitado, acceso rápido a servicios de ambulancia y comunicación con familiares en caso de emergencia', 
        },
    ];
    

    const preguntasfrecuentes = document.getElementById('preguntasfrecuentes');

    pr.forEach(pr => {
        const eventoHTML = document.createElement('div');
        eventoHTML.classList.add('pr');
        eventoHTML.innerHTML = `<h3>${pr.Pregunta}</h3><p>${pr.Respuesta}</p>`;
        preguntasfrecuentes.appendChild(eventoHTML);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const asignaturas = document.querySelectorAll(".asignatura");
    let currentOpen = [];
    let currentIsRequired = [];
    asignaturas.forEach((asignatura) => {

        asignatura.addEventListener("mouseenter", (e) => {
            console.log("Entro en el div" + e.target.id);
            e.target.classList.add("focus");
            const requiere = e.target.dataset.requiere.split(",");
            console.log(e.target.dataset);
            if(requiere) {
                currentIsRequired = requiere.map((requisito) => {
                    return document.getElementById(requisito);
                });
                currentIsRequired.forEach((requisito) => {
                    requisito.classList.add("isRequired");
                });
            }

            const apertura = e.target.dataset.apertura.split(",");
            if(apertura) {
                currentOpen = apertura.map((open)=>{
                    return document.getElementById(open);
                });
                currentOpen.forEach((open)=>{
                    open.classList.add("apertura");
                });
            }
        });

        asignatura.addEventListener("mouseleave", (e) => {
            e.target.classList.remove("focus");
            currentIsRequired.forEach((requisito) => {
                requisito.classList.remove("isRequired");
            });
            currentIsRequired = [];
            currentOpen.forEach((open)=>{
                open.classList.remove("apertura");
            });
            currentOpen = [];
        });
    });
});













