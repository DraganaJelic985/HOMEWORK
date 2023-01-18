/*1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/
var favoriteCoffee = {
    name: "Turska",
    strength: "strong",
    milk: "milk free",
    sugar: "sweet"
}
console.log(favoriteCoffee)
/*2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.*/

var favorite = {
    title: "naziv filma",
    actors: "neki glumci",
    director: "neki producent",
    popularity: "veoma popularan"
}
console.log(favorite)

/*3.	Write a function that creates an object that represents a project. Each project is described by: description,  
programming language, git repository, boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript 
as well as a method that checks if the project is in development or not.*/

var projekat = {
    deskription:"objekti",
    programingLenguage:"JS",
    gitRepositoru: "zadatak3",
    developmentStage: "true",
    projectRepository: function(){
        return this.gitRepositoru
    },
    ifPLisJS: function (){
        if (this.programingLenguage=="JS"){
            return true
        }
        else {
            return false
        }
    },
    ifDevelop: function(){
        if(this.developmentStage == true){
            return "Projekat je u razvoju"
        }
        else{
            return "Projekat je zavrsen"
    }

    }
}
console.log(projekat.projectRepository())
console.log(projekat.ifPLisJS())
console.log(projekat.ifDevelop())
console.log((projekat))


/*4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, 
complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared in under 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
*/
function kreirajObjekat(ime, tipKuhinje, kompleksnost,sastojak1, sastojak2, sastojak3, sastojak4, vremePripreme,nacinPripreme, tipKuhinje2){
    var kulinarskiRecept = {
        name: ime,
        typeOfCuisine: tipKuhinje,
        complexity: kompleksnost,
        listOfIngredients: {
            ingrediant1: sastojak1,
            ingrediant2: sastojak2,
            ingrediant3: sastojak3,
            ingrediant4: sastojak4
        },
        preparingTime: vremePripreme,
        preparingInstructions: nacinPripreme,
        necessaryIngredients: function (){
            return kulinarskiRecept.listOfIngredients;
        },
        minPreparingTime: function(){
            if (this.preparingTime < 15){
                return "Priprema kraca od 15 min";
            }
            else{
                return "Priprema duza od 15 min.";
            }
        },
        newTypeOfcuisine: function(){
            this.typeOfCuisine = tipKuhinje2
            return this.typeOfCuisine
        },
    }
    return JSON.stringify(kulinarskiRecept)+ kulinarskiRecept.necessaryIngredients()+kulinarskiRecept.minPreparingTime()+kulinarskiRecept.newTypeOfcuisine()
}
var rezultat = kreirajObjekat ("Palacinke","Srpska kuhinja", "jednostavno za pripremu", "Mleko", "jaja", "secer", "brasno", "30", "Izmesati sve sastojke.","Americke" )
console.log (rezultat)
