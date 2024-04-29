const Home = (argument = '') => {
  console.log('Home', argument);
  const showMoreButton = document.getElementById('showMore');

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    const LoadingContent = document.getElementById("loading")
    LoadingContent.style.display = "none"
    const displayResults = (articles, nextPageURL) => {
      // console.log(nextPageURL);
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
      resultsContainer.innerHTML += resultsContent.join("\n"); // with += we Append new results to existing results
      
      //vérifier si le nombre de card affiché est inférieur à 27
      if (nextPageURL && currentPage < 3) {
        // If there is a next page and the current page is less than 3, display the "Show more" button
        
        showMoreButton.style.display = "block";
        showMoreButton.addEventListener('click', () => {
          currentPage++;
          fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument, currentPage);
        });
      }
    };

    let currentPage = 1; // Keep track of the current page
    const fetchList = (url, argument, page) => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
      let today = `${currentYear}-${month}-${day}`;
      let limitYear = currentYear + 1;
      
      const finalURL = argument ? `${url}&search=${argument}` : `${url}&dates=${today},${limitYear}-12-31&page=${page}&page_size=9`;
      fetch(finalURL)
      // fetch("./list.json")
        .then((response) => response.json())
        .then((responseData) => {
          
          displayResults(responseData.results,responseData.next)
          
          // Check to hide the "Show more" button after new results have been fetched
          if (!responseData.next || currentPage >= 3) {
            if (showMoreButton) {
              showMoreButton.style.display = "none";
            }
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument, currentPage);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <p id="loading">Loading...</p>
        <div class="articles"></div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { Home };
