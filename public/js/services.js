'use strict'

angular.module('site')

  .factory('mailFactory', ($http, $q, MAIL_ENDPOINT) => {
    function sendMessage(message) {
      return $q((resolve, reject) => {
        $http.post(MAIL_ENDPOINT.url, message).then(result => {
            resolve(result.data);
          })
          .catch(err => {
            console.log(err);
            resolve({
              error: "Oops, something went wrong."
            });
          });
      })
    };
    return {
      send: message => {
        return sendMessage(message);
      }
    };
  });
