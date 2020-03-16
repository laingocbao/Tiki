export const PORT = "3600"
//export const BASE_URL = "http://localhost:3600";
export const BASE_URL = `http://18.188.109.73:${PORT}`
export const LIST_BOOK_URL = `${BASE_URL}/books`
export const LIST_BOOK_TIKI_URL = `${BASE_URL}/booksProduct`
export const LIST_BOOK_TIKI_BY_ID_URL = `${BASE_URL}/booksProductById`
export const LIST_BOOK_TIKI_TOP_DISCOUNT_URL = `${BASE_URL}/listBookTikiTopDiscount?percent=`
export const ADD_BOOK_URL = `${BASE_URL}/addBook`
export const DELETE_BOOK_URL = `${BASE_URL}/deleteBook`
export const UPDATE_BOOK_URL = `${BASE_URL}/modifyBook`

