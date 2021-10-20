(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const requestUrl = "https://jsonplaceholder.typicode.com/posts";
const list = document.querySelector(".list");
let posts = [];
const createPostsTemplate = (data) => {
    return `
      <div class="post" data-id="${data.userId}">
          <div class="post__data">
              <h2 class="post__title">
                  ${data.title}
                      </h2>
              <p class="post__body">
                  ${data.body}
              </p>
          </div>
      </div>
      `;
};
function getPosts(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
            posts = json;
            posts.forEach((post) => {
                if (list)
                    list.innerHTML += createPostsTemplate(post);
            });
            resolve(json);
        })
            .catch((e) => new Error(e.message));
    });
}
getPosts(requestUrl);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ09BLE1BQU0sVUFBVSxHQUFHLDRDQUE0QyxDQUFDO0FBQ2hFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztBQUU5QixNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBaUIsRUFBRSxFQUFFO0lBQ2hELE9BQU87bUNBQzBCLElBQUksQ0FBQyxNQUFNOzs7b0JBRzFCLElBQUksQ0FBQyxLQUFLOzs7b0JBR1YsSUFBSSxDQUFDLElBQUk7Ozs7T0FJdEIsQ0FBQztBQUNSLENBQUMsQ0FBQztBQUVGLFNBQVMsUUFBUSxDQUFJLEdBQVc7SUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQVksRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUNsRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1AsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRWIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNyQixJQUFJLElBQUk7b0JBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInR5cGUgT2JqZWN0U2hhcGUgPSB7XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJvZHk6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IHJlcXVlc3RVcmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiO1xyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xyXG5sZXQgcG9zdHM6IE9iamVjdFNoYXBlW10gPSBbXTtcclxuXHJcbmNvbnN0IGNyZWF0ZVBvc3RzVGVtcGxhdGUgPSAoZGF0YTogT2JqZWN0U2hhcGUpID0+IHtcclxuICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdFwiIGRhdGEtaWQ9XCIke2RhdGEudXNlcklkfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3RfX2RhdGFcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwb3N0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAke2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9zdF9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAke2RhdGEuYm9keX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0czxUPih1cmw6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICBwb3N0cyA9IGpzb247XHJcblxyXG4gICAgICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICAgIGlmIChsaXN0KSBsaXN0LmlubmVySFRNTCArPSBjcmVhdGVQb3N0c1RlbXBsYXRlKHBvc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc29sdmUoanNvbik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gbmV3IEVycm9yKGUubWVzc2FnZSkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5nZXRQb3N0cyhyZXF1ZXN0VXJsKTtcclxuIl19
