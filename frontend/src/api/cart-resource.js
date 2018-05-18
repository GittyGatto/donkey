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
            if( resp.statusCode === 200 ) {
                successCallback(body);
            } else {
                errorCallback(resp);
            }
        });
    },
    saveCartName: function saveCartName(request, successCallback, errorCallback) {
        pre();
        var newRequest = {name: request.data.name, uuid: request.data.uuid, id: null};
        xhr({
            method: 'POST',
            uri: Config.getUrlFor('/carts'),
            json: true,
            body: newRequest
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
        var newRequest = request.data;
        xhr({
            method: 'POST',
            uri: Config.getUrlFor('/carts'),
            json: true,
            body: newRequest
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
