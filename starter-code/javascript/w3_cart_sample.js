window.onload = function(){
  addEventListeners();
  const quantities = document.getElementsByClassName("quantity");
  quantities[ quantities.length -1].addEventListener("change",function(){
    const productRow = this.closest(".product")
    getProductPricePerRow(productRow, this.value);
  });
  const deleteBTns = document.getElementsByClassName("btn-delete");
  deleteBTns[deleteBTns.length-1].addEventListener("click",function(){
    const productRow = this.closest(".product");
    productRow.remove();
  });

  const addProdBtn = document.getElementById("addProd");
  addProdBtn.addEventListener("click",function(){
    const newProdName = document.getElementById("newProdName").value;
    newProdPrice = document.getElementById("newProdPrice").value;
    addAProduct(newProdName, newProdPrice);
  });
}


function getProductPricePerRow(row, quantity){
  const priceProd = row.querySelector(".price").innerText;
  const subTotal = priceProd * parseFloat(quantity);
  row.querySelector(".subtotal").innerText = subTotal.toFixed(2);
}

function getTotalPrice(){
  const allSubtotals = document.getElementsByClassName("subtotal");
  let totalPrice = 0;
  for (let i=0;i<allSubtotals.length;i++){
    totalPrice += parseFloat(allSubtotals[i].innerText);
  }
  document.getElementById("total-price").innerHTML = totalPrice.toFixed(2);
}


// function addAProduct(prodName,prodPrice){
//   const newRow = document.createElement("article");
//   newRow.className = "product";
//   newRow.innerHTML = 
//     <div>
//       ${prodName}
//     </div>
//     <div></div>
//     ;
//     const parent = document.getElementById("product-container");
//     parent.appendChild(newRow);
//     addEventListeners();
// }

function addAProduct(prodName,prodPrice){
..
}

function addProdViaClass(prodName,prodPrice){
  const 

}

function addEventListeners(){
  const quantities = document.getElementsByClassName("quantity");
  quantities[ quantities.length -1].addEventListener("change",function(){
    const productRow = this.closest(".product")
    getProductPricePerRow(productRow, this.value);
  });
}


class Product {
  constructor(name){
    this.prodName = name;
    this.prodPrice = price;
    this.element = null;
  }
  createElement(){
    const newRow = document.createElement("article");
    newRow.className = "product";
    newRow.innerHTML = `
      <div>
        ${this.prodName}
      </div>
      <div>$<span class="subtotal">${this.prodPrice}</span></div>
      <div>
       QNTY
       <input class="quantity" type="number" value="0" />
      </div>
      `;
      this.element = newRow;
  }
   addToDocument(domNode){
     this.createElement();
     const parent = document.getElementById(domNode);
     parent.appendChild(this.element);
  }
}

const product = new Product("a name ", 88);
