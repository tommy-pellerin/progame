const PageList = (argument = '') => {
  console.log('PageList', argument);
  const showMoreButton = document.getElementById('showMore');
  //initiate varialbe when changing template
  window.addEventListener('unload', function() {
    currentPage = 1;
    storedData = null;
  });

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    const LoadingContent = document.getElementById("loading")
    LoadingContent.style.display = "none"

    // Function to fetch more results
    function fetchMoreResults() {
      
      console.log("click pagelist");
      fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument, currentPage);
    };

    const displayResults = (articles, nextPageURL) => {
      welcome.innerHTML = '';//delete welcome content
      console.log(`articles à afficher:`);
      console.log(articles);
      const resultsContent = articles.map((article) => {
        const platformSlugs = article.parent_platforms.map((platform) => `<div class="platform${platform.platform.slug}"></div>`).join(' ');
        const genres = article.genres.map((genre) => genre.slug).join(", ");
        const image = article.background_image ? `<img src="${article.background_image}" alt="poster" />` : `<div class="no_image" alt="poster" /></div>`;
        return `
          <article class="cardGame">
            <div class="poster">
              ${image}
            </div>
            <div class="cardBody">
              <a class="smallTitle" href="#pagedetail/${article.id}">${article.name}</a>
              
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
              
              
            </div>
          </article>`;
      });
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML += resultsContent.join("\n"); // with += we Append new results to existing results
      
      //adding show more button to the DOM
      const showMoreBox = document.getElementsByClassName('showMoreBox')[0];
      showMoreBox.innerHTML = `<button id="showMore">Show more</button>`;
      const showMoreButton = document.getElementById('showMore');

      //vérifier si le nombre de card affiché est inférieur à 27
      if (nextPageURL && currentPage < 3) {
        // If there is a next page and the current page is less than 3, display the "Show more" button
      
        showMoreButton.style.display = "block";
      
        // Add event listener
        showMoreButton.addEventListener('click', fetchMoreResults);
      }
    };
    let storedData = null; // This variable will store the fetched data
    let currentPage = 1;
    const fetchList = (url, argument, page) => {
      
      console.log(`la page actuelle: ${page}`);
      console.log(`argument actuel : ${argument}`);

      let date = new Date();
      let currentYear = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
      let today = `${currentYear}-${month}-${day}`;
      let limitYear = currentYear + 1;
      
      const finalURL = argument ? `${url}&${argument}&page=${page}&page_size=9&ordering=-released` : `${url}&dates=${today},${limitYear}-12-31&page=${page}&page_size=9`;
      console.log(`final URL: ${finalURL}`);
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          storedData = responseData; // Store the fetched data
          console.log(`store data ${storedData}`); 
          displayResults(storedData.results,storedData.next)
          // Increment currentPage after results have been displayed
          currentPage++;

          // Check to hide the "Show more" button after new results have been fetched
          if (!responseData.next || currentPage > 3) {

              console.log("3 page affiché");
              currentPage = 1
              console.log(`page actuelle apres avoir affiché 3 page: ${currentPage}`);
              storedData = null
              console.log(storedData);
          
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


export { PageList };