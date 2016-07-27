/**
 * adds
 */
class ads {
    product_name : string ;
    model:number | string;
    color:string;
    price:number;
    constructor(name:string,color:string, model:number | string,price:number) {
        this.product_name = name;
        this.color = color;
        this.model = model;
        this.price = price;
    }


}
/**
 * cars
 */
class cars extends ads {
    
    constructor(product_name : string, color:string, model:number | string, price:number){
        super(product_name, color, model, price);
        document.getElementById("home").innerHTML += "<p class='text_box'><span class='product'>" +this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : "+ model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";

        document.getElementById("menu1").innerHTML += "<p class='text_box'><span class='product'>" +this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : "+ model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
        
        
}



    //  car : string[] = ["Toyota", "Civic", "Suzuki"];
}

/**
 * mobiles
 */
class mobiles extends ads {
    constructor(product_name : string, color:string, model:number | string, price:number) {
         super(product_name, color, model, price);
        
       document.getElementById("home").innerHTML += "<p class='text_box'><span class='product'>" +this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : "+ model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
       document.getElementById("menu2").innerHTML += "<p class='text_box'><span class='product'>" +this.product_name + "</span> " + " " + "<span class='color'> color : " + color + "</span> " + "<span class='model'> Model : "+ model + "</span>" + "<span class='price'> price : " + price + "</span></p> <br>";
    }
}

let mobile1 : ads = new mobiles("Samsung", "White", "Galaxy S5", 10000);
let car1 : ads = new cars("Toyota", "red", 2016, 2500000);
let car2 : ads = new cars("Civic", "White", 2015, 3000000);
let mobile2 : ads = new mobiles("Motorola", "White", "Droid Razer M",6000 );
let mobile3 : ads = new mobiles("Nokia", "Red", "Lumia 535",9000 );
let car3 : ads = new cars("Civic", "White", 208, 1500000);
let mobile4 : ads = new mobiles("Motorola", "Black", "Droid Razer",4000 );
let car4 : ads = new cars("Mehran", "White", 2015, 700000);
let car5 : ads = new cars("Swift", "white", 2012, 900000);
let mobile5 : ads = new mobiles("Huawei", "Siler", "huawei p9",16000 );
