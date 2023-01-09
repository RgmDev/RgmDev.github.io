/*
CLOUD
- GCP Visualizations
- Cockroach

SERVERS & ENVIRONMENTS 
- Docker tutorials
- ngrok

CONVERTS
- Markdown to html
- PNG to SVG converter
- Quicktype

FRONT-END
- TypedJS
- shapes divider
- Trianglify backgrounds
- Particles js
- cool backgrounds
- Waves
- CSS animation sandbox
- Free sounds for apps
- Mobile UI
- Free sounds for apps
- CSS Gradients
- animejs
- animecss
- Bootstrap snipets
- Datatables
- quickchart
- Editor de mascaras para SVG

BACK-END
- Mock APIs
- Vorpal
- Inquirer

PERFORMANCE
- Unused CSS
- Arbol de dependencias de un proyecto

FORMACION
- Cursos de Google

IMÁGENES
- Picsum 
- Placeholder con nombre
- Eiminar fondo de imágenes API


OTROS 
- Music for programing
- ChatGPT
- VS EXtensions
- Convierte tu vida en un juego
- Herramientas varias

LABORAL 
- arc.dev

*/
let tools_libraries = [
  {
    section: 'Cloud',
    items: [
      {
        title: 'Terraform',
        url: 'https://www.terraform.io/',
        description: 'Automatizaciones de infraestructura en cualquier servicio cloud.',
        test: false,
        links: [],
        tags: [
          { name: 'cloud', color: 'primary' },
          { name: 'tool', color: 'danger' }
        ]
      },
      {
        title: 'Servicios de host de aplicaciones',
        url: false,
        description: 'Herramientas para alojamiento y automatización de despliegues.',
        test: false,
        links: [
          { title: 'Heroku', url: 'https://www.heroku.com/' },
          { title: 'Deta', url: 'https://www.deta.sh/' },
          { title: 'Netlify', url: 'https://www.netlify.com/' },
          { title: 'Vercel', url: 'https://vercel.com/' }
        ],
        tags: [
          { name: 'cloud', color: 'primary' },
          { name: 'tool', color: 'danger' }
        ]
      },
      {
        title: 'Servicios cloud de backend',
        url: false,
        description: 'Desarrollo de back-ends con herramientas predeterminadas (Autenticación, almacenamiento...).',
        test: false,
        links: [
          { title: 'Firebase', url: 'https://firebase.google.com/' },
          { title: 'Superbase', url: 'https://supabase.com/' },
          { title: 'AWS Amplify', url: 'https://aws.amazon.com/es/amplify/' },
          { title: 'Appwritter', url: 'https://appwrite.io/cloud' }
        ],
        tags: [
          { name: 'cloud', color: 'primary' },
          { name: 'tool', color: 'danger' }
        ]
      }
    ]
  },
  {
    section: 'Front-end',
    items: [
      {
        title: 'Bootstrap snippets',
        link: false,
        description: 'Automatizaciones de infraestructura en cualquier servicio cloud.',
        test: false,
        links: [
          { title: 'bootdey', url: 'http://www.google.com' },
          { title: 'startbootstrap', url: 'http://www.google.com' },
        ],
        tags: [
          { name: 'cloud', color: 'primary' },
          { name: 'tool', color: 'danger' }
        ]
      }
    ]
  },
    {
    section: 'Fuentes',
    items: [
      {
        title: 'Servicios de fuentes de texto',
        link: false,
        description: 'Plataformas que suministran diferentes fuentes de texto.',
        test: false,
        links: [
          { title: 'Dafont', url: 'https://www.dafont.com/' },
          { title: 'Font squirrel', url: 'https://www.fontsquirrel.com/' },
          { title: 'Google fonts', url: 'https://fonts.google.com/' },
        ],
        tags: [
          { name: 'fuentes', color: 'primary' },
          { name: 'tool', color: 'danger' }
        ]
      }
    ]
  }
];


let main = document.getElementById('main-container');
tools_libraries.forEach( ele => {

  let section = document.createElement('section');
  section.classList.add('row');
  let section_title = document.createElement('h2');
  let section_title_txt = document.createTextNode(ele.section);
  section_title.appendChild(section_title_txt);
  section.appendChild(section_title);

  for (let i = 0; i < ele.items.length; i++) {

    let article = document.createElement('article');
    article.classList.add('col-12', 'col-lg-6');
    let card = document.createElement('div');
    card.classList.add('card', 'bg-light', 'text-bg-light');
    let card_body = document.createElement('div');
    card_body.classList.add('card-body');

    let card_title = document.createElement('h5');
    card_title.classList.add('card-title');
    let card_title_txt = document.createTextNode(ele.items[i].title);
    if (ele.items[i].url) {
      let link = document.createElement('a');
      link.href = ele.items[i].url;
      link.target = '_blank';
      link.appendChild(card_title_txt);
      card_title.appendChild(link);
    } else {
      card_title.appendChild(card_title_txt);
    }
    card_body.appendChild(card_title);

    let card_description = document.createElement('p');
    card_description.classList.add('card-text', 'mb-2');
    let card_description_txt = document.createTextNode(ele.items[i].description);
    card_description.appendChild(card_description_txt);
    card_body.appendChild(card_description);

    if (ele.items[i].links.length > 0) {
      let links = document.createElement('p');
      links.classList.add('d-flex', 'flex-column')
      for (let j = 0; j < ele.items[i].links.length; j++) {
        let link = document.createElement('a');
        link.href = ele.items[i].links[j].url;
        link.target = '_blank';
        let link_txt = document.createTextNode(ele.items[i].links[j].title);
        link.appendChild(link_txt);
        links.appendChild(link);
      }
      card_body.appendChild(links);
    }

    let tags = document.createElement('div');
    for (let j = 0; j < ele.items[i].tags.length; j++) {
      let tag = document.createElement('span');
      tag.classList.add('badge', 'bg-primary', 'me-1');
      let tag_txt = document.createTextNode(ele.items[i].tags[j].name);
      tag.appendChild(tag_txt);
      tags.appendChild(tag);
    }
    card_body.appendChild(tags);

    card.appendChild(card_body);
    article.appendChild(card);
    section.appendChild(article);

  }

  main.appendChild(section);

});
