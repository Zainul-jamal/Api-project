const searchBox = document.querySelector('#seacrBox')
const searchBtn = document.querySelector('.searchBtn')
const recipeContent = document.querySelector('.recipe-content')

// Function to get recipes
const fetchRecipes = async (query) => {
    const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata${query}`)
    const response = await data.json();
    console.log(response.meals);

}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim()
    fetchRecipes(searchInput);

});