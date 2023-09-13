class Product {
    constructor(title, imgUrl, price, description){
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }   
}


class ProductItem{
    constructor (product){
        this.product = product;

    }

    render(){
        const prodEl = document.createElement('li')
        prodEl.className = 'product-item'
        prodEl.innerHTML = 
        `<div>
            <img src="${this.product.imgUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>Rp.${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Tambah Ke Keranjang</button>
            </div>
        </div>`

        return prodEl
    }
}

class ProductList {
    products = [
        new Product(
            'Bantal',
            'https://contents.mediadecathlon.com/p1749048/k$f0b275c3207e208e12771a5c385d3ff8/camping-pillow-comfort.jpg?format=auto&quality=70&f=768x768', 
            10000,
            'Bantal ini lembut banget loooh'
        ),
        new Product(
            'Karpet', 
            'https://cdn2.tstatic.net/travel/foto/bank/images/ilustrasi-karpet-terbang-aladdin.jpg', 
            80000,
            'Dijamin bisa terbang gaan')
    ]

    constructor(){

    }

    render(){
        const renderHook = document.getElementById('app')
        const prodList = document.createElement('ul')
        prodList.className = 'product-list'
        for(const prod of this.products){
            const productItem = new ProductItem(prod)
            const prodEl = productItem.render()
            prodList.append(prodEl)
        }
        renderHook.append(prodList)
    }
}

const productList = new ProductList
productList.render()






