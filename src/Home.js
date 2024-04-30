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
        const platformSlugs = article.parent_platforms.map((platform) => `<div class="platform${platform.platform.slug}"></div>`).join(' ');
        const genres = article.genres.map((genre) => genre.slug).join(", ");
        return `
          <article class="cardGame">
            <div class="poster">
              <img src="${article.background_image}" alt="poster" />
            </div>
            <div class="cardBody">
              <h2>${article.name}</h2>
              <div class="platform">
                ${platformSlugs}
              </div>
              <ul class="moreInfo">
                <li>
                  <p>${article.rating} / 5</p>
                  <p>Nombre de vote : ${article.ratings_count}</p>
                </li>
                <li>
                  <h3>${article.released}</h3>
                </li>
                <li>
                </li>
                  <p>${genres}</p>
              </ul>     
              
              <a href="#pagedetail/${article.id}">${article.id}</a>
            </div>
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
    let storedData = null; // This variable will store the fetched data
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
        .then((response) => response.json())
        .then((responseData) => {
          storedData = responseData; // Store the fetched data
          displayResults(storedData.results,storedData.next)
          
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
