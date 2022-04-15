//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let list = document.getElementById('ingredients');
let i = 0;
if (i == 0){
  document.getElementById('back').style.display = 'none';
  document.getElementById('drinkList').style.display = 'none'}

document.querySelector('#check').addEventListener('click', getDrink)
document.querySelector('#forward').addEventListener('click', next)
document.querySelector('#back').addEventListener('click', back)

function getDrink(){
    //clear previous error message, if any//
    document.querySelector('h6').innerText = ""
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
      document.querySelector('h2').innerText = data.drinks[0].strDrink;
      document.querySelector('#drinkThumb').src = data.drinks[0].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      document.querySelector('#ingredientsTitle').style.display = 'block';
      document.querySelector('#instructionsTitle').style.display = 'block';
      //ingredients list//
      let x = 1;
      while (x <= 15){
        if (data.drinks[0][`strIngredient${x}`] != null && data.drinks[0][`strIngredient${x}`] != ""){
            let listItem = document.createElement('li')
            listItem.innerText = `${data.drinks[0][`strMeasure${x}`]} ${data.drinks[0][`strIngredient${x}`]}`;
            list.appendChild(listItem)
            document.getElementById('drinkList').style.display = 'contents';
            // document.querySelector('#main h1').style.display = 'none';
        }
        x++;
      } //buttons//
      if (data.drinks.length <= 1){
        document.getElementById('forward').style.display = 'none'
      } else {
        document.getElementById('forward').style.display = 'block'
      }
          //clear input
      document.querySelector('input').value = ""
    })
    .catch(err => {
        console.log(`error ${err}`)
        if (TypeError){
          document.querySelector('h6').innerText = "Hmm... It looks like we don't have that drink. Please try again."
        }
    });
}

function next(){
    i++;
    document.querySelector('h2').innerText = '';
    document.querySelector('#drinkThumb').src = '';
    document.querySelector('h3').innerText = '';
    list.innerText =''
    let search = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[i].strDrink;
      document.querySelector('#drinkThumb').src = data.drinks[i].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      let x = 1;
      while (x <= 15){
        if (data.drinks[i][`strIngredient${x}`] != null && data.drinks[i][`strIngredient${x}`] != ""){
            let listItem = document.createElement('li')
            listItem.innerText = `${data.drinks[i][`strMeasure${x}`]} ${data.drinks[i][`strIngredient${x}`]}`;
            list.appendChild(listItem)
        }
        x++;
      }
      //buttons//
      if (i == 0){
        document.getElementById('back').style.display = 'none'
      } else {
        document.getElementById('back').style.display = 'block'
      }
      if (i == ((data.drinks.length) - 1)){
        document.getElementById('forward').style.display = 'none'
      } else {
        document.getElementById('forward').style.display = 'block'
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function back(){
    i--;
    document.querySelector('h2').innerText = '';
    document.querySelector('#drinkThumb').src = '';
    document.querySelector('h3').innerText = '';
    list.innerText =''
    let search = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[i].strDrink;
      document.querySelector('#drinkThumb').src = data.drinks[i].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      let x = 1;
      while (x <= 15){
        if (data.drinks[i][`strIngredient${x}`] != null && data.drinks[i][`strIngredient${x}`] != ""){
            let listItem = document.createElement('li')
            listItem.innerText = `${data.drinks[i][`strMeasure${x}`]} ${data.drinks[i][`strIngredient${x}`]}`;
            list.appendChild(listItem)
        }
        x++;
      }
      //buttons//
      if (i == 0){
        document.getElementById('back').style.display = 'none'
      } else {
        document.getElementById('back').style.display = 'block'
      }
      if (i == ((data.drinks.length) - 1)){
        document.getElementById('forward').style.display = 'none'
      } else {
        document.getElementById('forward').style.display = 'block'
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}