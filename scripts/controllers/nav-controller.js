controllers.getAccount = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs',
    }).then(function () {
        this.partial('./views/navigation/account/account.hbs')
    });

};

// controllers.getAllAccounts = function (context) {
//
//     context.loadPartials({
//         header: './views/common/header.hbs',
//         footer: './views/common/footer.hbs',
//     }).then(function () {
//         this.partial('./views/navigation/account/all-accounts.hbs')
//     });
//
// };

controllers.getList = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/navigation/list/list.hbs')
    }).catch(err => console.log(err))

};