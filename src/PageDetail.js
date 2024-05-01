const PageDetail = (argument) => {
  console.log('Page Detail', argument);
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const showMorBox = document.getElementsByClassName("showMoreBox")[0];
    showMorBox.style.display = "none";
    const displayGame = (gameData) => {
      
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
      
      articleDOM.querySelector("div.description").innerHTML += description;

      articleDOM.querySelector("div.release-date").innerHTML += released;

      const platformLinks = platforms.map(platform => `<a href="#pagelist/platforms=${platform.platform.id}">${platform.platform.name}</a>`);
      articleDOM.querySelector("div.platforms").innerHTML += platformLinks.join(", ");
      
      const developersLinks = developers.map((developer) => `<a href="#pagelist/developers=${developer.slug}">${developer.name}</a>`);
      articleDOM.querySelector("div.developer").innerHTML += developersLinks.join(", ");
      
      const genreLinks = genres.map((genre) => `<a href="#pagelist/genres=${genre.slug}">${genre.name}</a>`);
      articleDOM.querySelector("div.genre").innerHTML += genreLinks.join(", ");

      const tagLinks = tags.map((tag) => `<a href="#pagelist/tags=${tag.slug}">${tag.name}</a>`);
      articleDOM.querySelector("div.tags").innerHTML += tagLinks.join(", ");
      
      const publisherLinks = publishers.map((publisher) => `<a href="#pagelist/publisher=${publisher.slug}">${publisher.name}</a>`);
      articleDOM.querySelector("div.publisher").innerHTML += publisherLinks.join(", ");

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
          
          <div class="description">
            <p class="littleTitle">Plot</p>
          </div>
          
          <div class="dateDevPlatformPublisher">
            <div class="release-date">
              <p class="littleTitle">Release date</p>
            </div>
            
            <div class="developer">
              <p class="littleTitle">Developer</p>
            </div>
            <div class="platforms">
            <p class="littleTitle">Platforms</p>
            </div>
            <div class="publisher">
            <p class="littleTitle">Publisher</p>
            </div>
          </div>
          <div class="genreTags">
            <div class="genre">
              <p class="littleTitle">Genre</p>
            </div>
            <div class="tags">
              <p class="littleTitle">Tags</p>
            </div>
          </div>
          

          <div class="stores">
            <p class="redTitle">BUY</p>
            <div class="storeBody" id="storeBody"></div>
          </div>
          <div class="video">
            <p class="redTitle">TRAILER</p>
            <p>Available only for business and enterprise API users</p>
          </div>
          <div class="screenShots">
            <p class="redTitle">SCREENSHOTS</p>
          </div>
          <div class="video">
            <p class="redTitle">SIMILAR GAMES</p>
            <p>Available only for business and enterprise API users</p>
          </div>

        </div>
      </section>
    `;

    preparePage();
  };

  render();
};


export { PageDetail };