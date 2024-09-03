const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
    // console.log("Another middleware");
    /* res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); */
    /* res.sendFile(path.join(rootDir, 'views', 'add-product.html')); */
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formCSS: true, 
        productCSS: true, 
        activeAddProduct: true})
}

exports.postAddProduct = (req, res, next) => {
    /* products.push({title: req.body.title}) */
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', 
            {prods: 
                products, 
                pageTitle: 'Admin Products', 
                path: '/admin/products', 
            });
    }) 
}
