function registerValidation() {
    let regUsername = $('#registerUsername');
    let regPassword = $('#registerPassword');
    let regPasswordRepeat = $('#registerRepeatPassword');

    regUsername.on('keyup', () => {
        if (regUsername.val() !== '') {
            regUsername.attr('class', 'form-control');
        }
    });

    regPassword.on('keyup', () => {

        if (regPassword.attr('class', 'form-control is-invalid')
            && regPasswordRepeat.val() === '') {
            regPassword.attr('class', 'form-control')
        }

        if (regPasswordRepeat.val() !== '') {
            if (regPassword.val() === regPasswordRepeat.val()) {
                regPassword.attr('class', 'form-control is-valid');
                regPasswordRepeat.attr('class', 'form-control is-valid');
            } else {
                regPassword.attr('class', 'form-control is-invalid');
                regPasswordRepeat.attr('class', 'form-control is-invalid');
            }
        }
    });

    regPasswordRepeat.on('keyup', () => {
        if (regPassword.val() === regPasswordRepeat.val()) {
            regPassword.attr('class', 'form-control is-valid');
            regPasswordRepeat.attr('class', 'form-control is-valid');
        } else {
            regPassword.attr('class', 'form-control is-invalid');
            regPasswordRepeat.attr('class', 'form-control is-invalid');
        }
    });
}

function loginValidation() {
    let logUsername = $('#loginUsername');
    let logPassword = $('#loginPassword');

    logUsername.on('keyup', () => {
        if (logUsername.val() !== '') {
            logUsername.attr('class', 'form-control');
        }
    });

    logPassword.on('keyup', () => {
        if (logPassword.val() !== '') {
            logPassword.attr('class', 'form-control');
        }
    });
}

function emailValidation() {
    let sendBtn = $('#sendBtn');
    let email = $('#inputEmail');
    let message = $('#inputMessage');

    email.on('keyup', () => {
        if (email.val() !== '') {
            email.attr('class', 'form-control');
        }
    });

    message.on('keyup', () => {
        if (message.val() !== '') {
            message.attr('class', 'form-control');
        }
    });

    sendBtn.on('click', () => {
        if (email.val() === '') {
            email.attr('class', 'form-control is-invalid');
            notify.showError('Email is required')
        } else if (message.val() === '') {
            message.attr('class', 'form-control is-invalid');
            notify.showError('Message is required')
        }
    });
}


let goTop = function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


function loadingPage() {
    $(document).ready(function () {
        $("#root").fadeIn(1000);
        setTimeout(function () {
            $("#notifications").fadeIn(1000);
        }, 0);
    });
}









