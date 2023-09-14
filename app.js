const products = document.querySelector('.products'); 
const url = 'https://fakestoreapi.com/products/category/jewelery';
async function fetchHandler() {
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        data.forEach(product => {
        const html = `<div class="card">
        <img class="img" src="${product.image}">
        <p class="title">${product.title}</p>
        <p class="description">${product.description}</p>
        <p class="price">${product.price} $</p>
    </div>`
    products.insertAdjacentHTML("beforeend", html);
       });
    }
    catch (error) {
        console.log(error);
    }
}

fetchHandler();
