// Write Javascript code here 
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const utility = require("./util");

var today = utility.getDate_YYYY_MMM_DD()

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
                    if (percent == "") {
                        percent = '0'
                    }
                    percent = utility.XoaKyTuKhongPhaiSo(percent)
                    // percent = percent.substring(1)
                    // percent = percent.substring(0, percent.length - 1)
                    const url = $(this).find('a.search-a-product-item').attr('href');
                    const urlImage = $(this).find('img.img-responsive').attr('src');
                    
                    if (utility.ChuanHoaChuoi(name).includes(titleLowerCase)) {
                        // arr.push(JSON.stringify(obj));
                        const obj = {
                            id: dataId,
                            name: name,
                            price: price,
                            percent: percent,
                            url: url,
                            date: utility.getDate_YYYY_MMM_DD(),
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

// this.getListBookDiscount(2, 'Thép đã tôi thế đấy').then(results => {
//     console.log(results)
// });
