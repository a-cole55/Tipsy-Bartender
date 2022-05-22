//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let list = document.getElementById('ingredients');
let i = 0;
//Hide forward and back buttons by default
if (i == 0){
  document.getElementById('back').style.display = 'none';
  document.getElementById('drinkList').style.display = 'none'}

//initial query
document.querySelector('#check').addEventListener('click', getDrink);


function getDrink(){
  let userInput = document.querySelector('input').value;
  //checks if user input has a space//
  if (userInput.includes(' ')){
    search = userInput.replace(/ /g, "%");
  } else {
    search = userInput
  }
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks);
    let drinkData = data.drinks;
    displayData(drinkData, i)
  })
  .catch(err => {
    console.log(`error ${err}`)
    if (TypeError){
      document.querySelector('h6').innerText = "Hmm... It looks like we don't have that drink. Please try again."
    }
  });
};

//display  output
function displayData(drinkData, i){
  clearData();
  console.log(drinkData)
  console.log(drinkData[i])
  let len = drinkData.length;
  //display data
  if(i <= len - 1){
    document.querySelector('#drinkName').innerText = drinkData[i].strDrink;
    document.querySelector('#drinkThumb').src = drinkData[i].strDrinkThumb;
    document.querySelector('h3').innerText = drinkData[i].strInstructions;
    document.querySelector('#ingredientsTitle').style.display = 'block';
    document.querySelector('#instructionsTitle').style.display = 'block';
    //ingredients list//
    let x = 1;
    while (x <= 15){
      if (drinkData[i][`strIngredient${x}`] != null && drinkData[i][`strIngredient${x}`] != ""){
          let listItem = document.createElement('li');
          if(`${drinkData[i][`strMeasure${x}`]}` == null){
            listItem.innerText = `${drinkData[i][`strIngredient${x}`]}`
            list.appendChild(listItem)
          } else{
            listItem.innerText = `${drinkData[i][`strMeasure${x}`]} ${drinkData[i][`strIngredient${x}`]}`;
            list.appendChild(listItem)
          }
          document.getElementById('drinkList').style.display = 'contents';
      }
      x++;
    };  
    document.querySelector('#drink').style.transiton = 'fade 400ms'
    document.querySelector('#drink').style.display = 'flex';

    //display buttons
    //forward button
    if (len <= 1 || i >= len - 2){
      document.getElementById('forward').style.display = 'none'
    } else {
      document.getElementById('forward').style.display = 'block'
    }
    // back button
    if (i === 0){
      document.getElementById('back').style.display = 'none'
    } else {
      document.getElementById('back').style.display = 'block'
    }
  //next button
  document.querySelector('#forward').addEventListener('click', function(){
    i++;
    document.getElementById('drinkList').style.display = 'none';
    displayData(drinkData, i)
  });
  //previous button
  document.querySelector('#back').addEventListener('click', function(){
    i--;
    document.getElementById('drinkList').style.display = 'none';
    displayData(drinkData, i)
  });
}    
};

function clearData(){
  console.log('cleared');
  //clear previous error message, if any//
  if(document.querySelector('h6').innerText != '' && document.querySelector('h6').innerText != null && document.querySelector('h6').innerText != undefined){
    document.querySelector('h6').innerText = ''
  }else{
  //clear list inputs for ingredients from previous query
  if(document.querySelector('li') != null || document.querySelector('li') != undefined){
    document.querySelector('li').innerText = '';
  }
  //clear inputs from previous query
  document.querySelector('h2').innerText = '';
  document.querySelector('#drinkThumb').src = '';
  document.querySelector('h3').innerText = '';
  document.querySelector('#drink').style.display = 'none';
  list.innerText =''
  }
    }