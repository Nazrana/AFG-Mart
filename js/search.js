'use strict';

          
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const categoryButton = document.getElementById('categoryButton');
    const searchResults = document.getElementById('searchResults');
    let selectedCategory = '';

    
    const itemsData = [
    {
        name: "Clothes",
        category: 'clothes',
        price: "2500 AF",
        img: "img/Clothes/clo-05.png"
    },
    {
        name: "Jewelry",
        category: 'jewelry',
        price: "500 AF",
        img: "img/Jewelry/Jew-02.png"
    },
    {
        name: "Shoes",
        category: 'shoes',
        price: "1500 AF",
        img: "img/Shoes/Sh-07.png"
    },
    {
        name: "Clothes",
        category: 'clothes',
        price: "1500 AF",
        img: "img/Clothes/clo-20.png"
    },
    {
        name: "Jewelry",
        category: 'jewelry',
        price: "1500 AF",
        img: "img/Jewelry/Jew-10.png"
    },
    {
        name: "Clothes",
        category: 'clothes',
        price: "1500 AF",
        img: "img/Clothes/clo-11.png"
    },
    {
        name: "Jewelry",
        category: 'jewelry',
        price: "1500 AF",
        img: "img/Jewelry/Jew-11.png"
    },
    {
        name: "Shoes",
        category: 'shoes',
        price: "1500 AF",
        img: "img/Shoes/Sh-08.png"
    },
    {
        name: "Jewelry",
        category: 'jewelry',
        price: "1500 AF",
        img: "img/Jewelry/Jew-12.png"
    } ];
    // Listener for category selection
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (event) {
        selectedCategory = this.getAttribute('data-category');
        categoryButton.textContent = this.textContent; // Update button text to selected category
        filterResults();
    });
});

// Listener for input in the search field
searchInput.addEventListener('input', filterResults);

// Filter function
function filterResults() {
    const searchText = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; // Clear previous results

    const filteredItems = itemsData.filter(item => {
        const itemCategory = item.category;
        const itemName = item.name.toLowerCase();
        return (
            (selectedCategory === '' || itemCategory === selectedCategory) &&
            itemName.includes(searchText)
        );
    });

    // Generate cards for filtered items
    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('col-12'); // Bootstrap column class
        card.innerHTML = `
            <div class="row mt-2 align-items-center" style="background-color: #f0efef; border: 1px solid #2d2d2d; border-radius: 10px; padding: 10px;">
                <div class="col-2">
                    <img src="${item.img}" alt="Clothes" style="width: 50px; height: 50px; border-radius: 50%;">
                </div>
                <div class="col-4 m-auto">
                    <h5 class="mb-0">${item.name}</h5>
                </div>
                <div class="col-2">
                    <span>${item.price}</span>
                </div>
                <div class="col-2 m-auto">
                    <button data-index="${index}" class="btn btn-warning add-cart-search-btn">Add Cart</button>
                </div>
            </div>
        `;

        searchResults.appendChild(card);
    });

    // If no results, show a "No results found" message
    if (filteredItems.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    }

    // Add event listener to the Add Cart button
    document.querySelectorAll('.add-cart-search-btn').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            const product = filteredItems[index]; // Get the correct product

            // Save product details to localStorage
            localStorage.setItem("imageSrc", product.img);
            localStorage.setItem("productName", product.name);
            localStorage.setItem("productPrice", product.price);

            // Redirect to shopping cart
            window.location.href = "ShoppingCart.html";
        });
    });
}
});