var products = [
    {
        id: 1,
        title: "anh1",
        img: "./img/anh1.jpg",
        desc: "day la description 1",
    },
    {
        id: 2,
        title: "anh2",
        img: "./img/anh2.jpg",
        desc: "day la description 2",
    },
    {
        id: 3,
        title: "anh3",
        img: "./img/anh3.jpg",
        desc: "day la description 3",
    },
    {
        id: 4,
        title: "anh4",
        img: "./img/anh4.jpg",
        desc: "day la description 4",
    },
    {
        id: 5,
        title: "anh5",
        img: "./img/anh5.jpg",
        desc: "day la description 5",
    },
];
let ct = document.querySelector(".content");
var html = "";
products.forEach(function (product) {
    html += `<a href="./chitiet.html?id=${product.id}"><img onClick ="handlerClick(${product.id})" src="${product.img}" alt=""></a>
            <h1>${product.title}</h1>
            <p>${product.desc}</p>
            `;
    console.log(product)
});

function getProductbyId(product_id){
    
        var product_data = products.find(function (product) {
            return product.id === product_id
        })
   return product_data
        
    }


 function handlerClick (product_id) {
   
    product_data = getProductbyId(product_id) 
    
   

  
    

//console.log(productID)
    
};


ct.innerHTML = html;
