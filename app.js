// console.log("Hello World!");




const things = [
    { Name: "Laptop", Category: "Electronics", Price: 1200 },
    { Name: "Phone", Category: "Electronics", Price: 800 },
    { Name: "Tablet", Category: "Electronics", Price: 500 },
    { Name: "Headphones", Category: "Electronics", Price: 150 },
    { Name: "TV", Category: "Electronics", Price: 1000 },
    { Name: "Camera", Category: "Electronics", Price: 750 },
    { Name: "Refrigerator", Category: "Appliances", Price: 1500 },
    { Name: "Microwave", Category: "Appliances", Price: 200 },
    { Name: "Toaster", Category: "Appliances", Price: 50 },
    { Name: "Blender", Category: "Appliances", Price: 100 },
    { Name: "Vacuum Cleaner", Category: "Appliances", Price: 300 },
    { Name: "Washing Machine", Category: "Appliances", Price: 900 },
    { Name: "Sofa", Category: "Furniture", Price: 1100 },
    { Name: "Bed", Category: "Furniture", Price: 2000 },
    { Name: "Dining Table", Category: "Furniture", Price: 1500 },
    { Name: "Chair", Category: "Furniture", Price: 120 },
    { Name: "Desk", Category: "Furniture", Price: 450 },
    { Name: "Wardrobe", Category: "Furniture", Price: 700 },
    { Name: "Shirt", Category: "Clothing", Price: 40 },
    { Name: "Jeans", Category: "Clothing", Price: 60 },
    { Name: "Jacket", Category: "Clothing", Price: 120 },
    { Name: "Shoes", Category: "Clothing", Price: 90 },
    { Name: "Hat", Category: "Clothing", Price: 30 },
    { Name: "Dress", Category: "Clothing", Price: 150 },
    { Name: "Apple", Category: "Groceries", Price: 1 },
    { Name: "Banana", Category: "Groceries", Price: 1 },
    { Name: "Milk", Category: "Groceries", Price: 3 },
    { Name: "Bread", Category: "Groceries", Price: 2 },
    { Name: "Eggs", Category: "Groceries", Price: 4 },
    { Name: "Cereal", Category: "Groceries", Price: 5 },
    { Name: "Chicken", Category: "Groceries", Price: 10 },
    { Name: "Beef", Category: "Groceries", Price: 15 },
    { Name: "Water Bottle", Category: "Groceries", Price: 2 },
    { Name: "Shampoo", Category: "Personal Care", Price: 8 },
    { Name: "Conditioner", Category: "Personal Care", Price: 8 },
    { Name: "Toothpaste", Category: "Personal Care", Price: 3 },
    { Name: "Soap", Category: "Personal Care", Price: 2 },
    { Name: "Lotion", Category: "Personal Care", Price: 10 },
    { Name: "Perfume", Category: "Personal Care", Price: 50 }
  ];




// console.log(items);



const div = document.querySelector(".container")








let renderItems = things.map(function (products) {
  div.innerHTML += `
     <div class="card">
           <h1>Name: ${products.Name}</h1>
           <h2>Category: ${products.Category}</h2>
           <h1 class="price">Price: ${products.Price}</h1>
      </div>
  `;
});

function filterProducts(category) {
  div.innerHTML = "";
  let filteredItems = things.filter(item => item.Category === category);

  filteredItems.map(function (products) {
    div.innerHTML += `
       <div class="card">
             <h1>Name: ${products.Name}</h1>
             <h2>Category: ${products.Category}</h2>
             <h1>Price:${products.Price}</h1>
        </div>
    `
  })
}







