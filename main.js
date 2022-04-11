//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let list = document.getElementById('ingredients');
let i = 0;
document.querySelector('#check').addEventListener('click', getDrink)
document.querySelector('.forward').addEventListener('click', next)
document.querySelector('.back').addEventListener('click', back)

if (i = 0){
    document.querySelector('.back').removeAttribute('.hide')
}
function getDrink(){
    let search = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[0].strDrink;
      document.querySelector('img').src = data.drinks[0].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      let x = 1;
      while (x <= 15){
        if (data.drinks[0][`strIngredient${x}`] != null){
            let listItem = document.createElement('li')
            listItem.innerText = `${data.drinks[0][`strMeasure${x}`]} ${data.drinks[0][`strIngredient${x}`]}`;
            list.appendChild(listItem)
        }
        x++;
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function next(){
    i++;
    document.querySelector('h2').innerText = '';
    document.querySelector('img').src = '';
    document.querySelector('h3').innerText = '';
    list.innerText =''
    let search = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[i].strDrink;
      document.querySelector('img').src = data.drinks[i].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      let x = 1;
      while (x <= 15){
        if (data.drinks[i][`strIngredient${x}`] != null){
            let listItem = document.createElement('li')
            listItem.innerText = `${data.drinks[i][`strMeasure${x}`]} ${data.drinks[i][`strIngredient${x}`]}`;
            list.appendChild(listItem)
        }
        x++;
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function back(){
    i--;
    document.querySelector('h2').innerText = '';
    document.querySelector('img').src = '';
    document.querySelector('h3').innerText = '';
    list.innerText =''
    let search = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[i].strDrink;
      document.querySelector('img').src = data.drinks[i].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      let x = 1;
      while (x <= 15){
        if (data.drinks[i][`strIngredient${x}`] != null){
            let listItem = document.createElement('li')
            listItem.innerText = `${data.drinks[i][`strMeasure${x}`]} ${data.drinks[i][`strIngredient${x}`]}`;
            list.appendChild(listItem)
        }
        x++;
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}