var db = require('../../../database/db');

exports.getListBooks = () => {
    var sql = 'SELECT * FROM `Books`';
    return db.load(sql);
}

exports.getListBooksProduct = () => {
    var sql = 'SELECT * FROM `BooksTiki` ORDER BY BooksTiki.percent DESC';
    return db.load(sql);
};

exports.getListBooksProductById = (id) => {
    var sql = `SELECT * FROM BooksTiki WHERE BooksTiki.bookID = ${id} ORDER BY BooksTiki.percent DESC`;
    return db.load(sql);
}

exports.getListBooksTikiTopDiscount = (percent) => {
    // var sql = `SELECT * FROM BooksTiki WHERE BooksTiki.bookID = ${id}`;
    var sql = `SELECT * FROM BooksTiki WHERE BooksTiki.percent >= ${percent} ORDER BY BooksTiki.percent DESC`;
    return db.load(sql);
}
exports.getListBooksProductAtDate = (today) => {
    var sql = `SELECT * FROM BooksTiki WHERE dateRecord = ${today} ORDER BY BooksTiki.percent DESC`;
    return db.load(sql);
};

exports.getListBooksProductByIdAtDate = (id, today) => {
    var sql = `SELECT * FROM BooksTiki WHERE BooksTiki.bookID = ${id} AND WHERE dateRecord = ${today} ORDER BY BooksTiki.percent DESC`;
    return db.load(sql);
}

exports.getListBooksTikiTopDiscountAtDate = (percent, today) => {
    // var sql = `SELECT * FROM BooksTiki WHERE BooksTiki.bookID = ${id}`;
    var sql = `SELECT * FROM BooksTiki WHERE BooksTiki.percent >= ${percent} AND WHERE dateRecord = ${today} ORDER BY BooksTiki.percent DESC`;
    return db.load(sql);
}

exports.insertBook = (name) => {
    var sql = `INSERT INTO Books (ID, Name) VALUES (NULL, '${name}')`
    return db.save(sql);
}

exports.modifyBook = (body) => {
    // UPDATE `Books` SET `Name` = 'Kiêu Hãnh Và Định Kiến &' WHERE `Books`.`ID` = 1;
    console.log(body)
    var sql = `UPDATE Books SET Name = '${body.name}' WHERE Books.ID = ${body.id}`;
    return db.save(sql);
}

exports.deleteBook = (id) => {
    // "DELETE FROM `Books` WHERE `Books`.`ID` = 3"
    var sql = `DELETE FROM Books WHERE Books.ID = ${id}`;
    return db.save(sql);
}



// INSERT INTO `Books` (`ID`, `Name`) VALUES (NULL, 'Bắt Trẻ Đồng Xanh');

// INSERT INTO `BooksTiki` (`ID`, `name`, `productID`, `price`, `percent`, `url`, `dateRecord`, `bookID`) VALUES (NULL, 'Bắt Trẻ Đồng Xanh (Tái Bản)', '896346', '50000', '33', 'https://tiki.vn/bat-tre-dong-xanh-tai-ban-p896318.html?src=search&2hi=1&keyword=b%E1%BA%AFt%20tr%E1%BA%BB%20%C4%91%E1%BB%97ng%20xanh&_lc=Vk4wMzkwMjIwMDQ%3D', '2020-02-22', '2');