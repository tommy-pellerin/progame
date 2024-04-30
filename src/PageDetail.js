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

      const platformLinks = platforms.map(platform => `<a href="#${platform.platform.name}">${platform.platform.name}</a>`);
      articleDOM.querySelector("div.platforms").innerHTML += platformLinks.join(", ");
      
      const developersLinks = developers.map((developer) => `<a href="#${developer.name}">${developer.name}</a>`);
      articleDOM.querySelector("div.developer").innerHTML += developersLinks.join(", ");
      
      const genreLinks = genres.map((genre) => `<a href="#${genre.name}">${genre.name}</a>`);
      articleDOM.querySelector("div.genre").innerHTML += genreLinks.join(", ");

      const tagLinks = tags.map((tag) => `<a href="#${tag.name}">${tag.name}</a>`);
      articleDOM.querySelector("div.tags").innerHTML += tagLinks.join(", ");

      const publisherLinks = publishers.map((publisher) => `<a href="#${publisher.name}">${publisher.name}</a>`);
      articleDOM.querySelector("div.publisher span").innerHTML += publisherLinks.join(", ");

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
            <div class="developer">
              <p>Developer</p>
            </div>
            <div class="platforms">
            <p>Platforms</p>
            </div>
            <div class="publisher">
            <p>Publisher</p>
            </div>
          </div>
          <div class="genreTags">
            <div class="genre">
            <p>Genre</p>
            </div>
            <div class="tags">
            <p>Tags</p>
            </div>
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