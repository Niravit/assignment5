// var customername = "Niravit"
// var price = 10;
// var quantity = 3;
// var totalPrice = price * quanttity;
// document.getElementById("customer-name").innerHTML = "Niravit";
// document.getElementById("price").innerHTML = "$"+ totalPrice;
var products = [
 "Brownie",
 "Blackout cake", 	
 "Red velvet cake",
 "Depression cake",
 "Caterpillar cake" 	

];
var prices = [37,22,25,74,90];

var productsText = "";
var productsElement = document.getElementById("product-list");

for(var i=0; i<5; i++){
	productsText += "<li class='list-group-item'>" + products[i] 
	+"<span class='badge'>$"+ prices[i]+ "</span></li>";

	console.log(i)
	console.log("Product " + i + ": " + productsText)

}
//productsText += productsText+ "<li class='list-group-item'>" + products[0] +"<span class='badge'>$"+ price[0]+ "</span></li>";

productsElement.innerHTML = productsText;

var sum = 0;
var totalPrice = document.getElementById("price");

for(var i=0; i<5; i++){
	sum += prices[i];
}

var discount = sum * 0.75;

totalPrice.innerHTML = "$"+ discount + " <span class='badge progress-bar-danger'>25% off</span>";
// ---------------------------------------------------------------------

var d = new Date(); //get date 1-31
var h = d.getHours(); //gat 0-23
var r = document.getElementById("Greeting");

if(h>0 && h<12){
	r.innerHTML = "Good morning, Niravit";

}else if(h>=12 && h<18){
	r.innerHTML = "Good afternoon, Niravit";

}else{
	r.innerHTML = "Good evening, Niravit";

}