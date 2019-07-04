const controllers = {};

$(() => {
    const app = Sammy('#root', function () {
        // load Handlebars
        this.use('Handlebars', 'hbs');

        // home routes
        this.get('index.html', controllers.getHome);
        this.get('#/home', controllers.getHome);
        this.get('#', controllers.getHome);
        this.get('/', controllers.getHome);
        // logout rout
        this.get('#/logout', controllers.getLogout);

        // list rout
        this.get('#/list', controllers.getList);

        //account rout
        this.get('#/account', controllers.getAccount);
        this.post('#/account', controllers.postRegister);
        // this.get('#/all-accounts', controllers.getAllAccounts);

    });
    app.run();

});
