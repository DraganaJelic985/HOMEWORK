

function stampajTekst(){
console.log ("Ovo je eksterni JS fajl");
}
stampajTekst()


//NAVIGATOR
function navigatorInfo(){
    var ime = window.navigator.vendor;
    var platforma = window.navigator["platform"];
    var verzija = window.navigator.appVersion;

    console.log('The platform on which the browser is running is '+ platforma + "\n"+
                ', browser version is '+verzija+ "\n" + 
                ', and the company that created that browser is ' + ime)
}
navigatorInfo()

function isOnline (){
    if (window.navigator.onLine ==true){
        console.log ("online");
    }
    else {
        console.log("offline");
    }
}
isOnline()


//SCREEN
function screenInfo(){
    var width = window.screen.availWidth;
    var height = window.screen.availHeight;
    var maxheight = window.screen.height;
    console.log( "Current browser width and height are : "+ width + "," + height + ", and max possible browser height is: "+
    maxheight)
}
screenInfo()
//LOCATION
function locationinfo (){
    var fullAddress = window.location.href;
    var domainName = window.location.hostname;
    var protokol = window.location.protocol;
    var parametar1 =  window.location.origin;
    var parametar2 = window.location.pathname;
    return 'full address:'+fullAddress +'\n'+
            'domain name:'+domainName+'\n'+
            'protocol:'+protokol+'\n'+
            'parametars:'+parametar1+';'+parametar2;
}
console.log (locationinfo())

function reloadingPage (){
    var reloadingAddress = window.location.host;
    var reloading = window.location.assign(reloadingAddress);
    return reloading;
}
//reloadingPage()

function redirectPage (url){
    var redirekting = window.location.assign(url)
    return redirekting;
}
//redirectPage("https://en.wikipedia.org/wiki/Wiki")


//LOCAL STORAGE
function storePassedData(key,value){
    var podatci = window.localStorage.setItem(key,value)
    return podatci;
}
storePassedData("ime","Dragana")
storePassedData("prezime","Jelic")
storePassedData("grad","Kragujevac")

function getStoredData(){
    if(window.localStorage.length>0){
        console.log(window.localStorage)
    }
    else{
       console.log("There is no data") 
    }
}
getStoredData()

function removesAllData(){
    var remove = window.localStorage.clear()
    console.log ("podatci su obrisani!")
    return remove;
}
removesAllData()
storePassedData("ime", "Dragana")
storePassedData("zanimanje", "programer")//nakon zatvaranja browsera, ova dva podatka su ostala memorisana u lokalnom skladistu
getStoredData()


//SESSION STORAGE
function storePassedDataSession(key,value){
    var podatci = window.sessionStorage.setItem(key,value)
    return podatci;
}
storePassedDataSession("firstName","Jill")
storePassedDataSession("lastName","Brown")
storePassedDataSession("sity","NewYork")

function getStoredDataSession(){
    if(window.sessionStorage.length>0){
        console.log(window.sessionStorage)
    }
    else{
       console.log("There is no data") 
    }
}
getStoredDataSession()

function removesAllDataSession(){
    var remove = window.sessionStorage.clear()
    console.log ("podatci su obrisani!")
    return remove;
}
removesAllDataSession()
storePassedDataSession("NAME", "JILL")
storePassedDataSession("OCCUPATION", "PROGRAMMER")//nakon zatvaranja browsera, ova dva podatka su nestala.
getStoredDataSession()


//HISTORY
redirectPage("https://en.wikipedia.org/wiki/Wiki")
redirectPage("https://classroom.google.com/u/0/c/NTQ5NDg0MjcxMjc3/m/NTc5MjgxNjQzMzM3/details")
redirectPage("https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage")
function navigatesPagesBack(a){
    var nazad = window.history.go(a)
    return nazad;
}
navigatesPagesBack(-2) //mislim da ovo ne radi, pokusavala sam da ukucam i u konzoli, ali nesto nece...