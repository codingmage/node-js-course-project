/* const products = [] */

const Product = require("../models/product")


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', 
            {prods: 
                products, 
                pageTitle: 'All Products', 
                path: '/products', 
/*              relic of handlebars:
                hasProducts: products.length > 0, 
                activeShop: true, 
                productCss: true */
            });
    }) 
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product, 
            pageTitle: product.title, 
            path: '/products'
        })
    })
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', 
            {prods: 
                products, 
                pageTitle: 'Shop', 
                path: '/', 
            });
    }) 
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}

        // console.log("Another middleware");
    /* res.sendFile(path.join(__dirname, '../' ,'views', 'shop.html')); */

/*     console.log(adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); */

    // const products = adminData.products

    /*     const products = Product.fetchAll()

    res.render('shop', 
        {prods: 
            products, 
            pageTitle: 'Shop', 
            path: '/', hasProducts: 
            products.length > 0, 
            activeShop: true, 
            productCss: true
        }); */

