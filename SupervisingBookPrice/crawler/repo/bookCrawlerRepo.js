var db = require('../../database/db');

exports.getListBook = () => {
    var sql = 'SELECT * FROM `Books`';
    return db.load(sql);
}

exports.insertBook = (book) => {
    // var sql = `INSERT INTO 'BooksTiki' ('ID', 'name', 'productID', 'price', 'percent', 'url', 'dateRecord', 'bookID') \
    // VALUES (NULL,   '${book.name}', \
    //                 '${book.id}', \
    //                 '${book.price}', \
    //                 '${book.percent}', \
    //                 '${book.url}', \
    //                 '${book.date}', \
    //                 '${book.bookId}')`;
    var sql = `INSERT INTO BooksTiki (ID, name, productID, price, percent, url, dateRecord, bookID, urlImage) \
    VALUES (NULL,   '${book.name}', \
                    '${book.id}', \
                    '${book.price}', \
                    '${book.percent}', \
                    '${book.url}', \
                    '${book.date}', \
                    '${book.bookId}', \
                    '${book.urlImage}')`;
    // console.log(sql);
    return db.save(sql);
}

exports.updateBook = (book) => {
    var sql = "";
    return db.save(sql);
}

exports.deleteBook = (book) => {
    var sql = "";
    return db.save(sql);
}

// INSERT INTO `Books` (`ID`, `Name`) VALUES (NULL, 'Bắt Trẻ Đồng Xanh');

// INSERT INTO `BooksTiki` (`ID`, `name`, `productID`, `price`, `percent`, `url`, `dateRecord`, `bookID`) VALUES (NULL, 'Bắt Trẻ Đồng Xanh (Tái Bản)', '896346', '50000', '33', 'https://tiki.vn/bat-tre-dong-xanh-tai-ban-p896318.html?src=search&2hi=1&keyword=b%E1%BA%AFt%20tr%E1%BA%BB%20%C4%91%E1%BB%97ng%20xanh&_lc=Vk4wMzkwMjIwMDQ%3D', '2020-02-22', '2');