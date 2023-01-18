fetch('./data/tools_libraries.json')
  .then((response) => response.json())
  .then((json) => generateHTML(json));

function generateHTML(tools_libraries) {

  let main = document.getElementById('main-container');
  tools_libraries.forEach( ele => {

    // section
    let section = document.createElement('section');

    // header
    const header_section = document.createElement('header');
    const title = document.createElement('h2');
    title.innerText = ele.section;
    header_section.appendChild(title);
    section.appendChild(header_section);

    let articles = document.createElement('div');
    articles.classList.add('row');
    articles.setAttribute('data-masonry', '{"percentPosition": true }');

    for (let i = 0; i < ele.items.length; i++) {

      // article
      let article = document.createElement('article');
      article.classList.add('col-sm-6', 'col-lg-4', 'mb-4');
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
      articles.appendChild(article);

    }

    section.appendChild(articles);
    main.appendChild(section);

  });

}