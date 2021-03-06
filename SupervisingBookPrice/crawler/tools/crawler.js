// Write Javascript code here 
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const utility = require("../utilitis/util");

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = yyyy + '-' + mm + '-' + dd;

exports.getListBookDiscount = (bookId, bookName) => {
    return new Promise((resolve, reject) => {
        let titleBook = bookName.split(" ");
        let titleLowerCase = utility.ChuanHoaChuoi(bookName);
        let url = "https://tiki.vn/search?q="
        for (let i = 0; i < titleBook.length; i++) {
            const element = titleBook[i];
            if (i == titleBook.length - 1) {
                url = url + element
            }
            else {
                url = url + element + "%20"
            }

        }
        url = encodeURI(url);
        request(url, function (err, res, body) {
            if (err) {
                reject(err);
            }
            else {
                const arr = [];
                let $ = cheerio.load(body);
                $('div.search-div-product-item').each(function (index) {
                    const dataId = $(this).attr('data-seller-product-id')
                    const name = $(this).attr('data-title');
                    var price = $(this).find('a.search-a-product-item > div.content > p.price-sale > span.final-price')
                        .text()
                        .split(" ")
                        .find(function (element) {
                            if (element.length > 3) {
                                return element
                            }
                        });
                    price = utility.XoaKyTuKhongPhaiSo(price)

                    var percent = $(this).find('a.search-a-product-item > div.content  > p.price-sale > span.sale-tag-square')
                                           .text().trim();
                    percent = utility.XoaKyTuKhongPhaiSo(percent)
                    // percent = percent.substring(1)
                    // percent = percent.substring(0, percent.length - 1)
                    const url = $(this).find('a.search-a-product-item').attr('href');
                    const urlImage = $(this).find('a.search-a-product-item > div.content  > span.image > img.product-image').attr('src');
                    
                    if (utility.ChuanHoaChuoi(name).includes(titleLowerCase)) {
                        // arr.push(JSON.stringify(obj));
                        const obj = {
                            id: dataId,
                            name: name,
                            price: price,
                            percent: percent,
                            url: url,
                            date: today,
                            bookId: bookId,
                            urlImage: urlImage
                        };
                        arr.push(obj);
                    }
                });
                resolve(arr);
            }
        });
    });
}

// this.getListBookDiscount(1, 'Kiêu Hãnh Và Định Kiến').then()