exports.BASE_URL = "http://localhost:3600"

exports.format = (n) => {
    // return n.toFixed(2).replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
    //     return '.' + s
    // })
    return n.toLocaleString()
}