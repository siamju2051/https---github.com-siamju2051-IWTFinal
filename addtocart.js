const product = [
    {
        id: 0,
        images:'images/Trimer1.jpg',
        title: 'Kemei KM-6330 (3 in 1) Shaver, Hair ,Beard And Nose Trimmer',
        price: 50,
    },
    {
        id: 1,
        images:'images/Trimer2.jpg',
        title:'HTC AT-1210 Professional Hair Clipper Trimmer for Men',
        price: 60,
    },
    {
        id: 2,
        images:'images/Trimer3.jpg',
        title:'HTC AT-522 Trimmer for men - Black Beard Trimme',
        price:50,
    },
    {
        id: 3,
        images:'images/Trimer4.jpg',
        title:'HTC AT-538 Hair And Beard Trimmer For Men',
        price: 70,
    },
    {
        id: 4,
        images: 'images/Speakers1.jpg',
        title: 'WS-887 Mini Bluetooth Speaker - Red',
        price: 80,
    },
    {
        id: 5,
        images: 'images/Speakers2.jpg',
        title: 'D7 Multimedia Wired Mini USB Speaker For Computer - Black',
        price: 90,
    },
    {
        id:6,
        images: 'images/Speakers3.jpg',
        title: 'Awei Y900 Wireless Portable Bluetooth Speaker',
        price: 60,
    },
    {
        id: 7,
        images:'images/Speakers4.jpg',
        title:'Hy-68 Smart Wireless Bluetooth Speaker',
        price:50,
    },
    {
        id:8 ,
        images:'images/SmartWatch1.jpg',
        title:'XIAOMI IMILAB KW66 Smart Watch 3D HD Curved Screen - Black',
        price:20,
    },
    {
        id:9 ,
        images:'images/SmartWatch2.jpg',
        title:'COLMI P28 Plus Smart Watch with Extended Battery Life',
        price:60,
    },
    {
        id:10 ,
        images:'images/SmartWatch3.jpg',
        title:'T500 Smart Watch Compatible with Android & iOS Bluetooth Watch',
        price:80,
    },
    {
        id:11 ,
        images:'images/SmartWatch4.jpg',
        title:'D116 Plus Smart watch Bracelets Fitness Tracker',
        price:30,
    },
    {
        id:12 ,
        images:'images/Necklace1.jpg',
        title:'Silver Color Metal Chain for both Men & Women',
        price:10,
    },
    {
        id: 13,
        images:'images/Necklace2.jpg',
        title:'Mahadev Trishul Locket with Chain of Men & Women',
        price:20,
    },
    {
        id:14 ,
        images:'images/Necklace3.jpg',
        title:'Double-layer butterfly necklace for woman',
        price:30,
    },
    {
        id:15 ,
        images:'images/Necklace4.jpg',
        title:'Korean Double Layer Heart Necklace For Women',
        price:40,
    },
    {
        id:16 ,
        images:'images/Tshirts1.jpg',
        title:'LOCALÉ Premium quality Solid T-shirt for Men - Bottle Green',
        price:10,
    },
    {
        id:17 ,
        images:'images/Tshirts2.png',
        title:'Exclusive Jersy half Sleeve T Shirt For Men - T Shirt',
        price:20,
    },
    {
        id: 18,
        images:'images/Tshirts3.jpg',
        title:'Stylish A To Z Alphabets Unisex Tshirt For Men',
        price:30,
    },
    {
        id:19 ,
        images:'images/Tshirts4.jpg',
        title:'Cotton T-Shirt For Man better in summmer hot weather',
        price:40,
    },
    {
        id:20 ,
        images:'images/light3.jpg',
        title:'Smart Music Led Light Bulb With Remote Control',
        price:10,
    },
    {
        id:21 ,
        images:'images/light1.jpg',
        title:'Walton AC/DC Emergency Light 18 Watt',
        price:20,
    },
    {
        id:22 ,
        images:'images/light2.jpg',
        title:'LED Light 5 watt - Base-B22 (Pin) 12 Ps',
        price:30,
    },
    {
        id:23 ,
        images:'images/light4.jpg',
        title:'Walton AC/DC Emergency Light 18 Watt',
        price:40,
    },
    {
        id:24 ,
        images:'images/Speakers1.jpg',
        title:'High Quality Hd Eo-Ig955 Headset In-Ear Earphone - Headphone',
        price:10,
    },
    {
        id: 25,
        images:'images/Speakers2.jpg',
        title:'Stereo Bluetooth earphones v 4.0 good quality product - Headphone',
        price:20,
    },
    {
        id:26 ,
        images:'images/Speakers3.jpg',
        title:'Music U19 Earphone Colorful Matte Earbuds Stereo Wired Earphones',
        price:30,
    },
    {
        id: 27,
        images:'images/Speakers4.jpg',
        title:'QKZ DM10 Zinc Alloy HiFi In Ear Earphones QKZ DM10 In-Ear Earphone',
        price:40,
    },
    {
        id:28 ,
        images:'images/Rings1.jpg',
        title:'Allow Finger Ring For Girls',
        price:10,
    },
    {
        id:29 ,
        images:'images/Rings2.jpg',
        title:'14 Pieces Gem Ring Set',
        price:20,
    },
    {
        id:30 ,
        images:'images/Rings3.jpg',
        title:'Letter Opening Rings Exquisite Jewelry',
        price:30,
    },
    {
        id:31 ,
        images:'images/Rings4.jpg',
        title:'Adjustable Couple Rings For Men Women',
        price:40,
    },
    {
        id: 32,
        images:'images/Router1.jpg',
        title:'NETIS WF2419E 300MBPS WIRELESS N ROUTER 2 ANTENNA WITH 5DBI FIXED',
        price:10,
    },
    {
        id:33 ,
        images:'images/Router2.jpg',
        title:'iaomi Mi Router 4C 300Mbps 2.4GHz WiFi High Gain 4 Antenna Router',
        price:20,
    },
    {
        id: 34,
        images:'images/Router3.jpg',
        title:'Xiaomi Mi 4C WiFi Router 300Mbps 4 Antennas Smart APP Control',
        price:30,
    },
    {
        id: 35,
        images:'images/Router4.jpg',
        title:'TP-Link TL-WR820N (V2) 300 Mbps Multi-Mode Wi-Fi Router',
        price:40,
    },
    

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {images, title, price} = item;
    return(
        `<div  class='box'>
            <div class='img-box'>
                <img class='imageshello' src=${images}></img>
            </div>
        <div class='bottoms'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('');

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItems').innerHTML = "Your cart is empty";
        document.getElementById("totalcart").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItems").innerHTML = cart.map((items)=>
        {
            var {images, title, price} = items;
            total=total+price;
            document.getElementById("totalcart").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-items'>
                <div class='row-images'>
                    <img class='rowimg' src=${images}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
