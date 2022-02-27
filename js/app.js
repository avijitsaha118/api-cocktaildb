const findDrinks = () => {
    const searchDrinks = document.getElementById('input-drinks');
    const typeDrinksName = searchDrinks.value;
    console.log(typeDrinksName);

    searchDrinks.value = '';
}