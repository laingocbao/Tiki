const BookRepo = require('../repo/bookRepo')

exports.insert = (req, res) => {
    // let salt = crypto.randomBytes(16).toString('base64');
    // let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    // req.body.password = salt + "$" + hash;
    // req.body.permissionLevel = 1;
    // UserModel.createUser(req.body)
    //     .then((result) => {
    //         res.status(201).send({id: result._id});
    //     });
};

exports.getListBooks = (req, res) => {
    BookRepo.getListBooks().then((results) => {
        res.status(200).send(results);
    });
};

exports.getListBooksProduct = (req, res) => {
    BookRepo.getListBooksProduct().then((results) => {
        res.status(200).send(results);
    });
};

exports.getListBooksProductById = (req, res) => {
    BookRepo.getListBooksProductById(req.query.id).then((results) => {
        res.status(200).send(results);
    });
};

exports.getListBooksTikiTopDiscount = (req, res) => {
    BookRepo.getListBooksTikiTopDiscount(req.query.percent).then((results) => {
        res.status(200).send(results);
    });
};

exports.addBook = (req, res) => {
    BookRepo.insertBook(req.body.name).then((result) => {
        res.status(200).send(result)
    });
};

exports.modifyBook = (req, res) => {
    BookRepo.modifyBook(req.body).then((result) => {
        res.status(200).send(result)
    });
};

exports.deleteBook = (req, res) => {
    BookRepo.deleteBook(req.body.id).then((result) => {
        res.status(200).send(result)
    });
};

// exports.getById = (req, res) => {
//     UserModel.findById(req.params.userId)
//         .then((result) => {
//             res.status(200).send(result);
//         });
// };
// exports.patchById = (req, res) => {
//     if (req.body.password) {
//         let salt = crypto.randomBytes(16).toString('base64');
//         let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
//         req.body.password = salt + "$" + hash;
//     }

//     UserModel.patchUser(req.params.userId, req.body)
//         .then((result) => {
//             res.status(204).send({});
//         });

// };

// exports.removeById = (req, res) => {
//     UserModel.removeById(req.params.userId)
//         .then((result)=>{
//             res.status(204).send({});
//         });
// };