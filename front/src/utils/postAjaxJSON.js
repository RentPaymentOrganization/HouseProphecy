 let postAjaxJSON = function(url, data = '') {
     return new Promise(function(resolve, reject) {
         let xhr = new XMLHttpRequest();
         xhr.open('POST', url);
         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
         xhr.addEventListener('load', () => {
             resolve(xhr.response);
         });
         xhr.addEventListener('error', () => {
             reject();
         });
         xhr.send(data);
     });
 }
 export default postAjaxJSON;