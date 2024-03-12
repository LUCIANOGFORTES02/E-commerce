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
    

    app.route('/category/:id')
    .get(app.api.category.getById)


}