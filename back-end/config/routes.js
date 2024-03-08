module.exports = app => {

    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
   
    app.route('/users')
    .post(app.api.user.save)
    .get(app.api.user.get)
    
    app.route('/users/:id')
    .get(app.api.user.getById)
    .put(app.api.user.save)

}