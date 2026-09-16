class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printDetails() {
        return `
            <tr>
                <td>${this.name}</td>
                <td>${Number(this.price).toFixed(2)}</td>
            </tr>
        `;
    }
}

const productList = [];

function loadProducts() {
    fetch("api.php")
        .then(response => response.json())
        .then(products => {

            productList.length = 0;

            products.forEach(product => {
                productList.push(
                    new Product(product.name, product.price)
                );
            });

            showProducts();
        });
}

function showProducts() {
    let products = "";

    for (let i = 0; i < productList.length; i++) {
        products += productList[i].printDetails();
    }

    document.getElementById("productList").innerHTML = products;
}

function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    const product = new Product(name, price);

    fetch("api.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: product.name,
            price: product.price
        })
    })
        .then(response => response.json())
        .then(data => {

            if (data.success) {
                loadProducts();

                document.getElementById("name").value = "";
                document.getElementById("price").value = "";
            }
        });
}

loadProducts();
