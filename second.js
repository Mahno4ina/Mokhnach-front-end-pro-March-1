
function showProducts(category) {
 
  var products = getProductsByCategory(category);


  var productList = document.getElementById("productList");
  productList.innerHTML = "";

 
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#";
    link.textContent = product.name;
    link.onclick = showProductInfo.bind(null, product);
    listItem.appendChild(link);
    productList.appendChild(listItem);
  }
}


function showProductInfo(product) {
  
  var productInfo = document.getElementById("productInfo");
  productInfo.innerHTML = "";

  
  var productName = document.createElement("h3");
  productName.textContent = product.name;
  productInfo.appendChild(productName);

  
  var productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productInfo.appendChild(productDescription);


  var buyButton = document.createElement("button");
  buyButton.textContent = "Купити";
  buyButton.onclick = buyProduct.bind(null, product);
  productInfo.appendChild(buyButton);
}


function buyProduct(product) {
  
  alert("Товар " + product.name + " куплений");

 
  var productList = document.getElementById("productList");
  productList.innerHTML = "";

  var productInfo = document.getElementById("productInfo");
  productInfo.innerHTML = "";
}


function getProductsByCategory(category) {
  var products = [];

  if (category === "category1") {
    products = [
      { name: "Товар 1", description: "Опис товару 1" },
      { name: "Товар 2", description: "Опис товару 2" },
      { name: "Товар 3", description: "Опис товару 3" },
    ];
  } else if (category === "category2") {
    products = [
      { name: "Товар 4", description: "Опис товару 4" },
      { name: "Товар 5", description: "Опис товару 5" },
    ];
  } else if (category === "category3") {
    products = [
      { name: "Товар 6", description: "Опис товару 6" },
      { name: "Товар 7", description: "Опис товару 7" },
      { name: "Товар 8", description: "Опис товару 8" },
      { name: "Товар 9", description: "Опис товару 9" },
    ];
  }

  return products;
}
