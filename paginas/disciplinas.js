/* ==================================================
BUSCADOR - MÚSICA
================================================== */

const musicSearch =
    document.getElementById('musicSearch');

const musicSearchResults =
    document.getElementById('musicSearchResults');


const musicCourses = [

    {
        name:'Violín',
        category:'Cuerdas',
        aliases:[
            'violin',
            'violn',
            'violi',
            'cuerdas'
        ],
        url:'cursos/violin.html'
    },

    {
        name:'Piano',
        category:'Teclas',
        aliases:[
            'piano',
            'pian',
            'teclado',
            'teclas'
        ],
        url:'cursos/piano.html'
    },

    {
        name:'Guitarra',
        category:'Cuerdas',
        aliases:[
            'guitarra',
            'guitar',
            'guita'
        ],
        url:'cursos/guitarra.html'
    },

    {
        name:'Batería',
        category:'Ritmo',
        aliases:[
            'bateria',
            'bateri',
            'percusion'
        ],
        url:'cursos/bateria.html'
    },

    {
        name:'Técnica vocal',
        category:'Voz',
        aliases:[
            'tecnica vocal',
            'vocal',
            'canto',
            'voz'
        ],
        url:'cursos/tecnica-vocal.html'
    },

    {
        name:'Iniciación musical',
        category:'Primeros pasos',
        aliases:[
            'iniciacion',
            'iniciacion musical',
            'musica infantil'
        ],
        url:'cursos/iniciacion-musical.html'
    }

];


function normalizeMusicText(text){

    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,'')
        .trim();

}


musicSearch.addEventListener(
    'input',
    () => {

        const query =
            normalizeMusicText(
                musicSearch.value
            );

        musicSearchResults.innerHTML = '';


        if(query.length < 2){
            return;
        }


        const results =
            musicCourses.filter(course => {

                const terms = [
                    course.name,
                    course.category,
                    ...course.aliases
                ];

                return terms.some(term =>
                    normalizeMusicText(term)
                        .includes(query)
                );

            });


        results.forEach(course => {

            const link =
                document.createElement('a');

            link.href =
                course.url;

            link.className =
                'music-search-result';

            link.innerHTML = `

                <div>

                    <strong>
                        ${course.name}
                    </strong>

                    <span>
                        ${course.category}
                    </span>

                </div>

                <i class="bi bi-arrow-up-right"></i>

            `;

            musicSearchResults
                .appendChild(link);

        });

    }
);