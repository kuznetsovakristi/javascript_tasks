var pathHtml = "/users/download/index.html"
var pathNoHtml = "users/download/index.hhtml"

function isHtml(a) {
  if (a.indexOf(".html", a.length - 5) == a.length - 5) {
    return "true"
  } else {
    return "false"
  }
}

console.log(isHtml(pathHtml));
console.log(isHtml(pathNoHtml));