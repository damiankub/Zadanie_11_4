function Phone(brand, price, color, systemversion) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  	this.systemversion = systemversion;
}
Phone.prototype.printInfo = function() {
  var priceZl	= this.price * 3.6; 
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " +    this.price +'$'+' prince in zl : '+ priceZl +'zl system version '+this.systemversion +".");
}
var iPhone6S = new Phone("Apple", 1532, "silver","iOS 9" );
var samsungGalaxys6 = new Phone("Samsung", 950, "black", "Android 5.0 Lollipop");
var onePlusOne = new Phone("One Plus One", 799, "white", "Android 4.4 KitKat");

iPhone6S.printInfo();
samsungGalaxys6.printInfo(); 
onePlusOne.printInfo();