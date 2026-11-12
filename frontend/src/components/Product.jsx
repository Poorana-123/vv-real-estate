import "../styles/App.css";

function Product() {
// Sample product data
const products = [
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Mobile", price: 20000 },
{ id: 3, name: "Shoes", price: 2500 },
{ id: 4, name: "Watch", price: 5000 },
{ id: 5, name: "Headphones", price: 1500 },
{ id: 6, name: "Keyboard", price: 800 },
{ id: 7, name: "Bag", price: 1200 },
{ id: 8, name: "Tablet", price: 15000 },
];

// 1. MAP: Display all products
const allProducts = products.map((product) => ( 
<div className="product-card" key={product.id}> 
    <h3>{product.name}</h3> 
    <p>Price: ₹{product.price.toLocaleString("en-IN")}</p> 
</div>
));

// 2. FILTER: Display products priced below ₹10,000
const affordableProducts = products
.filter((product) => product.price < 10000)
.map((product) => ( <div className="product-card" key={product.id}> <h3>{product.name}</h3> <p>Price: ₹{product.price.toLocaleString("en-IN")}</p> </div>
));

// 3. FIND: Find the product named Shoes
function findShoes() {
const product = products.find(
(product) => product.name === "Shoes"
);

}

return ( 
<div className="app"> <h1>🛍️ Product Store</h1>

  {/* MAP SECTION */}
  <section>
    <h2>1. All Products — map()</h2>
    <div className="product-container">
      {allProducts}
    </div>
  </section>

  {/* FILTER SECTION */}
  <section>
    <h2>2. Products Below ₹10,000 — filter()</h2>
    <div className="product-container">
      {affordableProducts}
    </div>
  </section>

  {/* FIND SECTION */}
  <section>
    <h2>3. Find Shoes — find()</h2>

    <button onClick={findShoes}>
      Find Shoes
    </button>
    
  </section>
</div>


);
}

export default Product;
