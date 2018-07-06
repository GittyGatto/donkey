import xhr from 'xhr';
import Config from '../config';

function pre() {
    window.document.body.classList.add("loading");
}

function post() {
    window.document.body.classList.remove("loading")
}

export default {
    getCartArticles: function getCartArticles(cartName, successCallback, errorCallback) {
        pre();
        xhr({
            uri: Config.getUrlFor('/articles/' + cartName),
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
    getArticles: function getArticles(successCallback, errorCallback) {
        pre();
        xhr({
            uri: Config.getUrlFor('/articles/'),
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
    saveArticle: function saveArticle(request, successCallback, errorCallback) {
        pre();
        var newRequest = request.data;
        xhr({
            method: 'POST',
            uri: Config.getUrlFor('/articles'),
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