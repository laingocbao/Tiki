const BooksController = require('./controllers/books.controller')

exports.routesConfig = function (app) {
    // app.post('/users', [
    //     UsersController.insert
    // ]);
    app.get('/books', [
        BooksController.getListBooks
    ]);

    app.get('/booksProduct', [
        BooksController.getListBooksProduct
    ]);

    app.get('/booksProductById', [
        BooksController.getListBooksProductById
    ]);

    app.get('/listBookTikiTopDiscount', [
        BooksController.getListBooksTikiTopDiscount
    ]);

    app.get('/booksProductAtDate', [
        BooksController.getListBooksProductAtDate
    ]);

    app.get('/booksProductByIdAtDate', [
        BooksController.getListBooksProductByIdAtDate
    ]);

    app.get('/listBookTikiTopDiscountAtDate', [
        BooksController.getListBooksTikiTopDiscountAtDate
    ]);

    app.post('/addBook', [
        BooksController.addBook
    ]);

    app.post('/modifyBook', [
        BooksController.modifyBook
    ]);

    app.post('/deleteBook', [
        BooksController.deleteBook
    ]);


    // app.get('/users/:userId', [
    //     ValidationMiddleware.validJWTNeeded,
    //     PermissionMiddleware.minimumPermissionLevelRequired(FREE),
    //     PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
    //     UsersController.getById
    // ]);
    // app.patch('/users/:userId', [
    //     ValidationMiddleware.validJWTNeeded,
    //     PermissionMiddleware.minimumPermissionLevelRequired(FREE),
    //     PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
    //     UsersController.patchById
    // ]);
    // app.delete('/users/:userId', [
    //     ValidationMiddleware.validJWTNeeded,
    //     PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
    //     UsersController.removeById
    // ]);
};
