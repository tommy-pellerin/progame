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
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());


//Contenu
console.log("HEllo");

// //Searching from Home page
// let form = document.getElementById("form")
// let keyWords = document.getElementById("search")

// // keyWords.addEventListener('input',()=>{
// //   console.log(keyWords.value);
// // })

// form.addEventListener('submit', function(event) {
//   // Prevent the form from submitting normally
//   event.preventDefault();
//   keyWordsValue= keyWords.value
//   if (keyWordsValue){
//     console.log(keyWordsValue);
//   };
//   // Show data on the PageList immediately
  
// });