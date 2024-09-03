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

