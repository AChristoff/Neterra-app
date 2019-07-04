controllers.getHome = function (context) {
    context.isAuth = userService.isAuth();

    if (context.isAuth) {
        context.username = sessionStorage.getItem('username');
    }

    if (userService.isAuth()) {

            context.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs',
            }).then(function () {
                this.partial('./views/home/index.hbs')
            }).catch(err => console.log(err))

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/home/index.hbs')
        }).catch(err => console.log(err))

    }
};