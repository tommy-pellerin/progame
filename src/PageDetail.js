const PageDetail = (argument) => {
  console.log('Page Detail', argument);
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      welcome.innerHTML = ''; //delete welcom content

      const { name, released, description, background_image, website, rating, platforms, stores, developers, genres, tags, publishers, ratings_count} = gameData;
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
      articleDOM.querySelector("a.webSite").setAttribute('href', website);

      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.averageNote span").innerHTML = rating;
      articleDOM.querySelector("p.numberOfNote span").innerHTML = ratings_count;
      
      articleDOM.querySelector("p.description").innerHTML += description;

      articleDOM.querySelector("p.release-date span").innerHTML = released;

      const platformNames = platforms.map(platform => platform.platform.name);
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
          <a class="webSite" href="">Check Website</a>

          <div class="titleAndNote">
            <h1 class="title"></h1>
            <div class="notes">
              <p class="averageNote"><span></span>/5&nbsp;</p>
              <p class="numberOfNote">-&nbsp;<span></span>&nbsp;votes</p>
            </div>
          </div>
          
          <p class="description"><strong>Plot</strong> </br></p>
          <div class="dateDevPlatformPublisher">
            <p class="release-date"><strong>Release date</strong> </br><span></span></p>
            <p class="developer"><strong>Developer</strong> </br><span></span></p>
            <p class="platforms"><strong>Platforms</strong> </br><span></span></p>
            <p class="publisher"><strong>Publisher</strong> </br><span></span></p>
          </div>
          <div class="genreTags">
            <p class="genre"><strong>Genre</strong> </br><span></span></p>
            <p class="tags"><strong>Tags</strong> </br><span></span></p>
          </div>
          

          <div class="stores">
            <p class="redTitle">BUY</p>
            <div class="storeBody"></div>
          </div>
          <div class="video">
            <p class="redTitle">TRAILER</p>
            <video src=""></video>
          </div>
          <div class="screenShots">
            <p class="redTitle">SCREENSHOTS</p>
          </div>

        </div>
      </section>
    `;

    preparePage();
  };

  render();
};


export { PageDetail };