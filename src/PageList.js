const PageList = (argument = '') => {
  console.log('Page List', argument);
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      
      const resultsContent = articles.map((article) => {
        const platformSlugs = article.platforms.map((platform) => `<p>${platform.platform.slug}</p>`).join("\n");
        const genres = article.genres.map((genre) => genre.slug).join(", ");
        return `
          <article class="cardGame">
            <div class="poster">
              <img src="${article.background_image}" alt="poster" />
            </div>
            <h2>${article.name}</h2>
            <h3>${article.released}</h3>
            <p>Platforms</p>
            ${platformSlugs}
            <p>${article.rating} / 5</p>
            <p>Nombre de vote : ${article.ratings_count}</p>
            <p>${genres}</p>
            <a href="#pagedetail/${article.id}">${article.id}</a>
          </article>`;
      });
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}&page_size=9&ordering=-released` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};


export { PageList };