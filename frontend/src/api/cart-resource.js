import xhr from 'xhr';
import Config from '../config';

function pre() {
    window.document.body.classList.add("loading");
}

function post() {
    window.document.body.classList.remove("loading")
}

export default {

    getCarts: function getCarts(successCallback, errorCallback) {
        pre();
        xhr({
            uri: Config.getUrlFor('/carts'),
            json: true
        }, function (err, resp, body) {
            post();
            if (resp.statusCode === 200) {
                successCallback(body);
            } else {
                errorCallback(resp);
            }
        });
    },

    saveCart: function saveCart(request, successCallback, errorCallback) {
        pre();
        var request = request.data;
        xhr({
            method: 'POST',
            uri: Config.getUrlFor('/carts'),
            json: true,
            body: request
        }, function (err, resp, body) {
            post();
            if (resp.statusCode === 200) {
                successCallback(body);
            } else {
                errorCallback(resp);
            }
        });
    },

    deleteCart: function deleteCart(request, successCallback, errorCallback) {
        pre();
        var request = request.data;
        xhr({
            method: 'DELETE',
            uri: Config.getUrlFor('/carts'),
            json: true,
            body: request
        }, function (err, resp, body) {
            post();
            if (resp.statusCode === 200) {
                successCallback(body);
            } else {
                errorCallback(resp);
            }
        });
    }
};
