const kinvey = (() => {

    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_SJl6wUoxB';
    const APP_SECRET = 'b789284019c0459eb97250b1a197b71c';

    function makeAuth(auth) {
        if (auth === 'basic') {
            return {
                'Authorization': `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`
            }
        } else {
            return {
                'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
            }
        }
    }

    function makeRequest(method, collection, endpoint, auth) {
        return{
            headers: makeAuth(auth),
            url: BASE_URL + collection + '/' + APP_KEY + '/' +  endpoint,
            method,
        }
    }

    // request functions

    function post(collection, endpoint, auth, data) {
        let request = makeRequest('POST', collection, endpoint, auth);
        request.data = data;
        //console.log(request);
        return $.ajax(request);
    }

    function get(collection, endpoint, auth) {
        return $.ajax(makeRequest('GET', collection, endpoint, auth))
    }

    function update(collection, endpoint, auth, data) {
        let request = makeRequest('PUT', collection, endpoint, auth);
        request.data = data;
        return $.ajax(request);
    }

    function remove(collection, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', collection, endpoint, auth));
    }

    return {
        post,
        get,
        update,
        remove,
    }
})();