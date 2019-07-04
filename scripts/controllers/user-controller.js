function protectFromXss(username, password) {
    let usernameValidator = /[<\/>()=,!?|+*#$%&@]+/g;
    let passwordValidator = /[<\/>()]+/g;
    if (!password) {
        return usernameValidator.test(username);
    } else if (!username) {
        return passwordValidator.test(password);
    }
}

// REGISTER

controllers.postRegister = function (context) {
    let username = context.params.username,
        password = context.params.password,
        repeatPassword = context.params.repeatPassword,
        email = context.params.email,
        phone = context.params.phone,
        town = context.params.town,
        gender = context.params.gender,
        age = context.params.age,
        message = context.params.message,
        agree = context.params.agree;

    $('#registerUsername').attr('class', 'form-control');

    if (protectFromXss(username, '')) {
        $('#registerUsername').attr('class', 'form-control is-invalid');
        return notify.showError('Username contains invalid character < \\ \/ > ( ) = , ; : ! ? + | @ & % $ # *');
    } else if (username === '') {
        $('#registerUsername').attr('class', 'form-control is-invalid');
        return notify.showError('Username is required!');
    } else if (email === '') {
        $('#registerUsername').attr('class', 'form-control is-invalid');
        return notify.showError('Email is required!');
    } else if (protectFromXss('', password)) {
        $('#registerUsername').attr('class', 'form-control is-invalid');
        return notify.showError('Password contains invalid character < \\ \/ > ( )');
    } else if (password === '') {
        $('#registerPassword').attr('class', 'form-control is-invalid');
        return notify.showError('Password is required!');
    } else if (password !== repeatPassword) {
        $('#registerPassword').attr('class', 'form-control is-invalid');
        $('#registerRepeatPassword').attr('class', 'form-control is-invalid');
        return notify.showError('Passwords don`t match!');
    }

    userService
        .register(username, password, email, phone, town, gender, age, message, agree)
        .then((res) => {
            userService.saveSession(res);
            context.redirect('#/home');
            notify.showSuccess('Registration is successful. You are now Logged in. Enjoy my website!');
        }).catch((err) => {
        notify.handleError(err);
    });
};

// LOGIN

controllers.getLogin = function (context) {
    context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/user/login.hbs')
    }).catch((err) => console.log(err));
};

controllers.postLogin = function (context) {

    let username = context.params.username;
    let password = context.params.password;
    userService
        .login(username, password)
        .then((res) => {
            userService.saveSession(res);
            context.redirect('#/home');
            notify.showSuccess('You are now Logged in. Enjoy my website!');
        }).catch((err) => {

        let loginUsername = $('#loginUsername');
        let loginPassword = $('#loginPassword');

        if (protectFromXss(loginUsername.val(), '')) {
            loginUsername.attr('class', 'form-control is-invalid');
            return notify.showError('Wrong Username! Remove invalid characters < \\ \/ > ( ) = , ; : ! ? + | @ & % $ # * ');
        } else if (loginUsername.val() === '') {
            loginUsername.attr('class', 'form-control is-invalid');
            return notify.showError('Username is required!');
        } else if (loginPassword.val() === '') {
            loginPassword.attr('class', 'form-control is-invalid');
            return notify.showError('Password is required!');
        } else if (protectFromXss('', loginPassword.val())) {
            loginPassword.attr('class', 'form-control is-invalid');
            return notify.showError('Wrong Password! Remove invalid characters < \\ \/ > ( )');
        }

        notify.handleError(err);
    });
};


controllers.postGuest = function (context) {

    let username = 'guest';
    let password = 'guest';
    userService
        .login(username, password)
        .then((res) => {
            userService.saveSession(res);
            context.redirect('#/home');
            notify.showSuccess("Welcome!");
        }).catch((err) => {

        notify.handleError(err);
    });
};


// LOGOUT

controllers.getLogout = function (context) {
    userService
        .logout()
        .then(() => {
            sessionStorage.clear();
            context.redirect('#/home');
            notify.showSuccess('Logout is successful, thank you for visiting my website!');
        }).catch((err) => console.log(err));
};