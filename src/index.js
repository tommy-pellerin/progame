import './style/index.scss';
import routes from './routes';

//mettre ce code qui nous servira de router 
const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split('/');

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || '';
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    // Call showLoadingBar on initial page load
    showLoadingBar();
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());


//Contenu
console.log("HEllo");

window.onload = function() {
  //Searching from Home page
  let form = document.querySelector("form")
  let keyWords = document.getElementById("search")

  if(form && keyWords) {
    keyWords.addEventListener('input',()=>{
      console.log(keyWords.value);
    })

    form.addEventListener('submit', function(event) {
      // Prevent the form from submitting normally
      console.log("Je suis dans listener de form");
      event.preventDefault();
      let keyWordsValue = keyWords.value
      if (keyWordsValue){
        console.log(keyWordsValue);
        // Change the URL to call routes.js and then show search results
        console.log(`#pagelist/search=${keyWordsValue}`);
        window.location.hash = `#pagelist/search=${keyWordsValue}`;
      };
    });
  } else {
    console.error('Form or keywords field not found');
  }
}


//Transition
// Function to show the loading bar
function showLoadingBar() {
  console.log("loadingbar");
  // Start loading
  document.getElementById('loading-bar').style.width = '50%';

  // Finish loading
  document.getElementById('loading-bar').style.width = '100%';

  // Hide the loading bar after a delay to show the completed state
  setTimeout(() => {
    
    document.getElementById('loading-bar').style.width = '0';
  }, 500);
}

// Call showLoadingBar whenever you navigate to a new page
window.onhashchange = showLoadingBar;

