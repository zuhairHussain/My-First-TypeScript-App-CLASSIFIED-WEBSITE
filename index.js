var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * adds
 */
var ads = (function () {
    function ads(name, color, model, price) {
        this.product_name = name;
        this.color = color;
        this.model = model;
        this.price = price;
    }
    return ads;
}());
/**
 * cars
 */
var cars = (function (_super) {
    __extends(cars, _super);
    function cars(product_name, color, model, price) {
        _super.call(this, product_name, color, model, price);
        document.getElementById("home").innerHTML += "<p class='text_box'><span class='product'>" + this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : " + model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
        document.getElementById("menu1").innerHTML += "<p class='text_box'><span class='product'>" + this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : " + model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
    }
    return cars;
}(ads));
/**
 * mobiles
 */
var mobiles = (function (_super) {
    __extends(mobiles, _super);
    function mobiles(product_name, color, model, price) {
        _super.call(this, product_name, color, model, price);
        document.getElementById("home").innerHTML += "<p class='text_box'><span class='product'>" + this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : " + model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
        document.getElementById("menu2").innerHTML += "<p class='text_box'><span class='product'>" + this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : " + model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
    }
    return mobiles;
}(ads));
var mobile1 = new mobiles("Samsung", "White", "Galaxy S5", 10000);
var car1 = new cars("Toyota", "red", 2016, 2500000);
var car2 = new cars("Civic", "White", 2015, 3000000);
var mobile2 = new mobiles("Motorola", "White", "Droid Razer M", 6000);
var mobile3 = new mobiles("Nokia", "Red", "Lumia 535", 9000);
var car3 = new cars("Civic", "White", 208, 1500000);
var mobile4 = new mobiles("Motorola", "Black", "Droid Razer", 4000);
var car4 = new cars("Mehran", "White", 2015, 700000);
var car5 = new cars("Swift", "white", 2012, 900000);
var mobile5 = new mobiles("Huawei", "Siler", "huawei p9", 16000);
//# sourceMappingURL=index.js.map