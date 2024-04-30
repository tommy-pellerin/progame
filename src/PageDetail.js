const PageDetail = (argument) => {
  console.log('Page Detail', argument);
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      welcome.innerHTML = ''; //delete welcom content

      const { name, released, description, background_image, website, rating, parent_platforms, stores, developers, genres, tags, publishers, } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      if (background_image) {
        // Create a new img element
        let img = document.createElement('img');
        img.src = background_image;

        // Append the img element to the div
        let div = document.querySelector('div.principalImage');
        div.appendChild(img);
      } else {
        // Create a new div element
        let divElement = document.createElement('div');
        // Add a class to the div to match the css class
        divElement.classList.add('no_image');

        // Append the div element to the div
        let div = document.querySelector('div.principalImage');
        div.appendChild(divElement);
      };

      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.averageNote span").innerHTML = rating;
      // articleDOM.querySelector("p.numberOfNote span").innerHTML = ratings_count;
      
      articleDOM.querySelector("p.description").innerHTML += description;

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
      // fetch(`detail.json`)
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
          <div class="principalImage"></div>
          <div class="titleAndNote">
            <h1 class="title"></h1>
            <div class="notes">
              <p class="averageNote"><span></span>/5</p>
              <p class="numberOfNote"><span></span> - votes</p>
            </div>
          </div>
          
          <p class="description">Plot </br></p>
          <div class="dateDevPlatformPublisher">
            <p class="release-date">Release date : </br><span></span></p>
            <p class="developer">Developer : </br><span></span></p>
            <p class="platforms">Platforms : </br><span></span></p>
            <p class="publisher">Publisher : </br><span></span></p>
          </div>
          <div class="genreTags">
            <p class="genre">Genre : </br><span></span></p>
            <p class="tags">Tags : </br><span></span></p>
          </div>
          
          <p class="webSite">Website : </br><span></span></p>

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