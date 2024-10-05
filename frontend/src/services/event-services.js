const eventServices = {
    get: async function(limit) {
        const promise = await fetch(`${process.env.DB_URL}/event?limit=${limit}`);
        const events = await promise.json();

        return events;
    },

    create: function(data) {
        return fetch(`${process.env.DB_URL}/event/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },

    edit: function (id, data) {
        debugger;
        return fetch(`${process.env.DB_URL}/event/edit/` + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },

    delete: function (id) {
        return fetch(`${process.env.DB_URL}/event/delete/` + id, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json());
    },

    details: async function (id) {
        const promise = await fetch(`${process.env.DB_URL}/event/details/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        });
        const event = await promise.json();
        return event;
    }
}

export default eventServices;