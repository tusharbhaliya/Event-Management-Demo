const userService = {
    get: function(id) {
        return fetch(`${process.env.DB_URL}/user/` + id, {
           method: 'GET',
           credentials: 'include'
        }).then(res => res.json());
    },

    register: function(data) {
        return fetch(`${process.env.DB_URL}/user/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json()).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },

    login: function(data) {
        return fetch(`${process.env.DB_URL}/user/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.json();
        }).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },

    logout: function() {
        return fetch(`${process.env.DB_URL}/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text()).then(() => sessionStorage.clear());
    }
}

export default userService;