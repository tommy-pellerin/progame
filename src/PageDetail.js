const PageDetail = (argument) => {
  console.log('Page Detail', argument);
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const { name, released, description, background_image, website, rating, parent_platforms, stores, developers, genres, tags, publishers,  } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("p.averageNote").innerHTML = rating;

      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("div.principalImage img").setAttribute('src', background_image);
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.release-date span").innerHTML = released;

      articleDOM.querySelector("p.webSite span").innerHTML = website;

      const platformNames = parent_platforms.map(platform => platform.platform.name);
      articleDOM.querySelector("p.platforms span").innerHTML = platformNames.join(", ");
      
      const developersNames = developers.map((developer) => developer.name);
      articleDOM.querySelector("p.developer span").innerHTML = developersNames.join(", ");
      
      const genreNames = genres.map((genre) => genre.name);
      articleDOM.querySelector("p.genre span").innerHTML = genreNames.join(", ");

      const tagNames = tags.map((tag) => tag.name);
      articleDOM.querySelector("p.tags span").innerHTML = tagNames.join(", ");

      const publisherNames = publishers.map((publisher) => publisher.name);
      articleDOM.querySelector("p.publisher span").innerHTML = publisherNames.join(", ");

      const storesParagraph = articleDOM.querySelector("div.storeBody");
      storesParagraph.innerHTML = ''; // Clear the paragraph
      stores.forEach((store) => {
        const a = document.createElement('a');
        const url = `https://${store.store.domain}`;
        a.setAttribute('href', url);
        a.textContent = store.store.name;
        storesParagraph.appendChild(a);
      
        const br = document.createElement('br');
        storesParagraph.appendChild(br);
      });

    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <p class="averageNote"></p>
          <p class="numberOfNote"></p>

          <h1 class="title"></h1>
          <div class="principalImage">
            <img src="" alt="poster" />
          </div>
          <p class="description"></p>
          <p class="release-date">Release date : <span></span></p>
          <p class="developer">Developer : <span></span></p>
          <p class="tags">Tags : <span></span></p>
          <p class="genre">Genre : <span></span></p>
          <p class="publisher">Publisher : <span></span></p>
          <p class="platforms">Platforms : <span></span></p>
          <p class="webSite">Website : <span></span></p>
          <div class="stores">
            <h3>BUY</h3>
            <div class="storeBody"></div>
          </div>
          <div class="video">
            <h3>TRAILER</h3>
            <video src=""></video>
          </div>
          <div class="screenShots">
            <h3>SCREENSHOTS</h3>
          </div>

        </div>
      </section>
    `;

    preparePage();
  };

  render();
};


export { PageDetail };