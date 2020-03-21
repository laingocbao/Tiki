exports.BASE_URL = "http://localhost:3600"

exports.format = (n) => {
    // return n.toFixed(2).replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
    //     return '.' + s
    // })
    return n.toLocaleString()
}

exports.getDate_YYYY_MMM_DD = () => {
    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day;
}