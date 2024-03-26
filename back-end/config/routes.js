module.exports = app => {

    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken',app.api.auth.validateToken)
   
    app.route('/users')
    .post(app.api.user.save)
    .get(app.api.user.get)
    
    app.route('/users/:id')
    .get(app.api.user.getById)
    .put(app.api.user.save)

    app.route('/category')
    .post(app.api.category.save)
    .get(app.api.category.get)
    
    app.route('/category/:slug') 
    .get(app.api.category.getBySlug)

    app.route('/product')
    .post(app.api.product.save)//Salvar produtos
    .get(app.api.product.get)

    app.route('/productandcategory')
    .get(app.api.product.getProductsAndCategory)//Retornar o produto e sua respectiva categoria
   
    app.route('/product/:id')
    .put(app.api.product.save)//Atualizar os produtos


    app.route('/product/:slug')
    .get(app.api.product.getBySlug)
    

    app.route('/productdiscount')
    .get(app.api.product.getByDiscount)
    
    app.route('/productkeyboard')
    .get(app.api.product.getByCategorySlug)

    app.route('/productmouses')
    .get(app.api.product.getByCategoryMousesSlug)
    
   


}