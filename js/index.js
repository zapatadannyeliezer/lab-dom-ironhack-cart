// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const priceNum = Number(price);
  const quantity = product.querySelector('.quantity input').value;
  const quantitiyNum = Number(quantity);
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = Number(priceNum * quantitiyNum);
  return subtotal;
  
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  let sumario = 0;
  const allTims = document.querySelectorAll('.product');
  allTims.forEach((item)=> {
    let subotal = updateSubtotal(item);
    sumario += subotal;
    console.log(subotal);
  });
  // ITERATION 2
 const products = document.getElementsByClassName('product');
 let totalprice = 0;

 for(let i = 0; i < products.length; i++){
  totalprice += updateSubtotal(products[i]);
 }
  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById("total-value");
    const total = totalElement.getElementsByTagName("span");
    total[0].innerHTML = totalprice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
