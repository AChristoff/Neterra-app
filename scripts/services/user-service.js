const userService = (() => {
    
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('userID', res._id);
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
    }

    function register(username, password, email, phone, town, gender, age, message, agree) {
        return kinvey.post('user', '', 'basic', {username, password, email, phone, town, gender, age, message, agree});
    }

    function login(username, password) {
        return kinvey.get('user', '', 'basic', {username, password})
    }

    function logout() {
        return kinvey.post('user', '_logout', 'kinvey');
    }


    return {
        saveSession,
        register,
        login,
        logout,
        isAuth,
    }
})();