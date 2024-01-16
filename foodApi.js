let meal = ""

// LETTERS
function a() {
    meal = "a";
    foodLetter(meal);
}
function b() {
    meal = "b";
    foodLetter(meal);
}
function c() {
    meal = "c";
    foodLetter(meal);
}
function d() {
    meal = "d";
    foodLetter(meal);
}
function e() {
    meal = "e";
    foodLetter(meal);
}
function f() {
    meal = "f";
    foodLetter(meal);
}
function g() {
    meal = "g";
    foodLetter(meal);
}
function h() {
    meal = "h";
    foodLetter(meal);
}
function i() {
    meal = "i";
    foodLetter(meal);
}
function j() {
    meal = "j";
    foodLetter(meal);
}
function k() {
    meal = "k";
    foodLetter(meal);
}
function l() {
    meal = "l";
    foodLetter(meal);
}
function m() {
    meal = "m";
    foodLetter(meal);
}
function n() {
    meal = "n";
    foodLetter(meal);
}
function o() {
    meal = "o";
    foodLetter(meal);
}
function p() {
    meal = "p";
    foodLetter(meal);
}
function q() {
    meal = "q";
    foodLetter(meal);
}
function r() {
    meal = "r";
    foodLetter(meal);
}
function s() {
    meal = "s";
    foodLetter(meal);
}
function t() {
    meal = "t";
    foodLetter(meal);
}
function u() {
    meal = "u";
    foodLetter(meal);
}
function v() {
    meal = "v";
    foodLetter(meal);
}
function w() {
    meal = "w";
    foodLetter(meal);
}
function x() {
    meal = "x";
    foodLetter(meal);
}
function y() {
    meal = "y";
    foodLetter(meal);
}
function z() {
    meal = "z";
    foodLetter(meal);
}


function readOutInput(){
    let mealSearch = document.getElementById('search').value;
    document.getElementById('grid').style.display = "grid"

    foodSerach(mealSearch);
}

function foodSerach(id) {
    document.getElementById('erg').innerHTML = ''
    document.getElementById('erg2').innerHTML = ''
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            
            console.log('------Server response received ----- ');
            let food = JSON.parse(this.responseText);
            console.log(food)

            if (food.meals == null){
                document.getElementById('erg').innerHTML = `<h3>No food found! Try an other one</h3>`
            } else {
                for(let i = 0; i < food.meals.length; i++){

                let foodName = food.meals[i].strMeal;
                let foodCategory = food.meals[i].strCategory
                let foodArea = food.meals[i].strArea
                let foodPicLink = food.meals[i].strMealThumb
                let foodLink = food.meals[i].strYoutube

                let embedUrl = foodLink.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');

                if(i%2 == 0){
                    document.getElementById('erg').innerHTML += 
                    `<h2>${foodName}</h2>
                    <p>Category: ${foodCategory}</p>
                    <p>Area: ${foodArea}</p>
                    <img src="${foodPicLink}">
                    <iframe src="${embedUrl}" title="YouTube video player" frameborder="0" web-share" allowfullscreen></iframe> <br><br> 
                    <a href="${embedUrl}" target="_blank">YouTube Link</a> <br><br><hr><br>`
                } else if (i%2 == 1){
                    document.getElementById('erg2').innerHTML += 
                    `<h2>${foodName}</h2>
                    <p>Category: ${foodCategory}</p>
                    <p>Area: ${foodArea}</p>
                    <img src="${foodPicLink}">
                    <iframe src="${embedUrl}" title="YouTube video player" frameborder="0" web-share" allowfullscreen></iframe><br><br> 
                    <a href="${embedUrl}" target="_blank">YouTube Link</a> <br><br><hr><br>`
                }
            }
            }

            
        }
    }

    xhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`, true);
    xhttp.send();
}

function foodLetter(id) {
    document.getElementById('erg').innerHTML = ''
    document.getElementById('erg2').innerHTML = ''

    document.getElementById('grid').style.display = "grid"

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            console.log('------Server response received ----- ');
            let food = JSON.parse(this.responseText);
            console.log(food)

            if (food.meals == null){
                document.getElementById('erg').innerHTML = `<h3>No food found! Try an other one</h3>`
            } else {
                for(let i = 0; i < food.meals.length; i++){

                let foodName = food.meals[i].strMeal;
                let foodCategory = food.meals[i].strCategory
                let foodArea = food.meals[i].strArea
                let foodPicLink = food.meals[i].strMealThumb
                let foodLink = food.meals[i].strYoutube

                let embedUrl = foodLink.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');

                if(i%2 == 0){
                    document.getElementById('erg').innerHTML += 
                    `<h2>${foodName}</h2>
                    <p>Category: ${foodCategory}</p>
                    <p>Area: ${foodArea}</p>
                    <img src="${foodPicLink}">
                    <iframe src="${embedUrl}" title="YouTube video player" frameborder="0" web-share" allowfullscreen></iframe> <br><br> 
                    <a href="${embedUrl}" target="_blank">YouTube Link</a> <br><br><hr><br>`
                } else if (i%2 == 1){
                    document.getElementById('erg2').innerHTML += 
                    `<h2>${foodName}</h2>
                    <p>Category: ${foodCategory}</p>
                    <p>Area: ${foodArea}</p>
                    <img src="${foodPicLink}">
                    <iframe src="${embedUrl}" title="YouTube video player" frameborder="0" web-share" allowfullscreen></iframe><br><br> 
                    <a href="${embedUrl}" target="_blank">YouTube Link</a> <br><br><hr><br>`
                }
            }
            }

            
        }
    }

    xhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?f=${id}`, true);
    xhttp.send();
}

