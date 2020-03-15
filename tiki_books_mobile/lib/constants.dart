import 'package:flutter/material.dart';

import 'Util/Utils.dart';
 
class APPURLS {
  static const String PORT = "3600";
  // static const String BASE_URL = "http://localhost:$PORT";
  static const String BASE_URL = "http://18.188.109.73:$PORT";
  static const String LIST_BOOK_URL = "$BASE_URL/books";
      // "https://jsonplaceholder.typicode.com/photos";
  static const String LIST_BOOK_TIKI_URL = "$BASE_URL/booksProduct";
  static const String LIST_BOOK_TIKI_BY_ID_URL = "$BASE_URL/booksProductById";
  static const String LIST_BOOK_TIKI_TOP_DISCOUNT_URL = "$BASE_URL/listBookTikiTopDiscount?percent=";
}
 
class MESSAGES {
  static const String INTERNET_ERROR = "No Internet Connection";
  static const String INTERNET_ERROR_RETRY =
      "No Internet Connection.\nPlease Retry";
}
 
class COLORS {
  // App Colors //
  static const Color DRAWER_BG_COLOR = Colors.lightGreen;
  static MaterialColor APP_THEME_COLOR = Utils.convertHexToColor(0xFF27A0FC);
}