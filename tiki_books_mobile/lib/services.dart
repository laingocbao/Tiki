import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:tiki_books_mobile/BookProductTiki/BookTikiModel.dart';
import 'Books/BookCellModel.dart';
import 'constants.dart';
 
class Services {
  static Future<List<BookCellModel>> fetchBooksData() async {
    final response = await http.get(APPURLS.LIST_BOOK_URL);
    try {
      if (response.statusCode == 200) {
        List<BookCellModel> list = parsePostsForHome(response.body);
        return list;
      } else {
        throw Exception(MESSAGES.INTERNET_ERROR);
      }
    } catch (e) {
      throw Exception(MESSAGES.INTERNET_ERROR);
    }
  }

  static Future<List<BookTikiModel>> fetchBookTikiDataById({bookID: int}) async {
    String url = bookID == 0 ? APPURLS.LIST_BOOK_TIKI_URL : (APPURLS.LIST_BOOK_TIKI_BY_ID_URL+ "?id=" + bookID.toString()) ;
    final response = await http.get(url);
    try {
      if (response.statusCode == 200) {
        List<BookTikiModel> list = parseResponseListBookTiki(response.body);
        return list;
      } else {
        throw Exception(MESSAGES.INTERNET_ERROR);
      }
    } catch (e) {
      throw Exception(MESSAGES.INTERNET_ERROR);
    }
  }

  static Future<List<BookTikiModel>> fetchBookTikiTopDiscountData(int percent) async {
    String url = APPURLS.LIST_BOOK_TIKI_TOP_DISCOUNT_URL + percent.toString();
    final response = await http.get(url);
    try {
      if (response.statusCode == 200) {
        List<BookTikiModel> list = parseResponseListBookTiki(response.body);
        return list;
      } else {
        throw Exception(MESSAGES.INTERNET_ERROR);
      }
    } catch (e) {
      throw Exception(MESSAGES.INTERNET_ERROR);
    }
  }

  static List<BookCellModel> parsePostsForHome(String responseBody) {
    final parsed = json.decode(responseBody).cast<Map<String, dynamic>>();
    return parsed.map<BookCellModel>((json) => BookCellModel.fromJson(json)).toList();
  }

  static List<BookTikiModel> parseResponseListBookTiki(String responseBody) {
    final parsed = json.decode(responseBody).cast<Map<String, dynamic>>();
    return parsed.map<BookTikiModel>((json) => BookTikiModel.fromJson(json)).toList();
  }
}