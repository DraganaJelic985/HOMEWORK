(function holdMainExecution(){
    console.log("Hi!!!")


function getId(){
    var id = "";
    for( var i=0; i<5; i++){
        id += Math.round(Math.random()*9)
    }
    return id;
};
function kodForGetInfo(id, name){
    name = name.toUpperCase();
    var kod = "";
    kod += name[0];
    kod += name[name.length-1];
    kod += id;
    return kod;
};
function Product(name, price, expirationDate){
    this.id = getId();
    this.name = name;
    this.price = price;
    this.expirationDate = expirationDate;
    this.getInfo = function (){
        var kod = kodForGetInfo(this.id, this.name);
        return  kod +", "+ this.name+", "+this.price;
    }
}
function ShoppingBag(){
    this.listOfProducts = [];

    this.addProduct = function(product){
        var dateToday = new Date();
            if (new Date(product.expirationDate)>dateToday){
                this.listOfProducts.push(this.product)
            }console.log (this.listOfProducts)
        return this.listOfProducts;
    }
    this.averageProductPrice = function(){
        var sum = 0;
        for(i=0; i < this.listOfProducts.length;i++){
            sum += parseFloat(this.listOfProducts[i].price);
        }
        var averageSum = sum/this.listOfProducts.length;
        return averageSum.toFixed(2);
    }
    this.mostExpensive = function(){
        var mostExp =this.listOfProducts[0];
        for (i=0; i<this.listOfProducts.length; i++){
            if (this.listOfProducts[i].price > mostExp){
                mostExp = this.listOfProducts[i];
            }
        }
        return "Najskuplji proizvod u korpi je "+ this.mostExp.getInfo();
    }
    this.totalPrice = function calculateTotalPrice() {
        var total = 0;
        for (i=0; i<this.listOfProducts.length; i ++){
            total += this.listOfProducts[i].price;
        }
        return "Ukupna cena proizvoda u korpi je :"+ total;
    }
}
const paymentCard = function PaymentCard(balans, status, valid){
    this.balans = balans;
    this.status = status;
    this.valid = valid;
}

function checkoutAndBuy(shoppingBag, paymentCard) {
    var missingMoney = 0;
    if (paymentCard > shoppingBag) {
        console.log("Successful purchase!")
    } else if (paymentCard < shoppingBag) {
    missingMoney = shoppingBag - paymentCard
    console.log("You are missing " + missingMoney + " to complete the purchase!")
    }
}
try{
    const banana = new Product("Banana", 220.53, "15.05.2025");
    const jabuka = new Product("12346", "Jabuka", 120.25, "25.05.2023" );
    const kruska = new Product("12347", "Kruska", 150.99, "05.01.2023");
    var list = new ShoppingBag()
list.addProduct(banana);
list.addProduct(jabuka);
list.addProduct(kruska);
console.log (list)
}
catch(err){
    console.log (err)
}

})();  // znam da ovo ne radi, ali ne mogu vise da se vrtim oko istog vise...
       //mislim da sam pobrkala nazive promenljivih, ali ne mogu vise, samo se sve vise zapetljavam...