/*6.	
a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]*/
function ProizvodiICene(proizvod, cena){
	this.product = proizvod,
	this.price = cena
}
var listaProizvoda=[];

var proizvod1 =new ProizvodiICene('appels', 100)
listaProizvoda.push(proizvod1)

var proizvod2 =new ProizvodiICene('milk', 80)
listaProizvoda.push(proizvod2)

var proizvod3 =new ProizvodiICene('bananas',150)
listaProizvoda.push(proizvod3)

console.log (JSON.stringify(listaProizvoda))

/*b.	Write a function that calculates the total price of your shopping list. */

function totalPrice (){

	var sum = 0;
	for(i=0; i<listaProizvoda.length; i++){
	sum += listaProizvoda[i].price;
	}
	return sum
}
console.log ("Ukupan trosak kupovine je "+totalPrice()+ " dinara.")

/*c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.*/

function averagePrice(){
	var result = totalPrice()/listaProizvoda.length;
	return result.toFixed(3);
}
console.log ("Prosecna cena po proizvodu je "+ averagePrice())

/*d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. */

function mostExpensiveProduct(){

	var mostExpensive=0;
	var productName = ""
	for (i=0; i<listaProizvoda.length;i++){	
	
		if (listaProizvoda[i].price > mostExpensive){
			mostExpensive=listaProizvoda[i].price;
			
		}
		productName = listaProizvoda[i].product
	}
	return productName.toUpperCase()
}
console.log (mostExpensiveProduct())

