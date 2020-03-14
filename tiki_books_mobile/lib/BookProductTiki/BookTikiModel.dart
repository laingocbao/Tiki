import 'dart:ffi';

class BookTikiModel {
  int id;
  int productId;
  String bookName;
  int price;
  int percent;
  String url;
  String dateRecord;
  String urlImage;
  int bookID;

  BookTikiModel({this.id, this.productId, this.bookName, this.price, this.percent, this.url, this.dateRecord, this.urlImage, this.bookID});

  factory BookTikiModel.fromJson(Map<String, dynamic> json) {
    return BookTikiModel (
      id: json['ID'] as int,
      productId: json['productID'] as int,
      bookName: json['name'] as String,
      price: json['price'] as int,
      percent: json['percent'] as int,
      url: json['url'] as String,
      dateRecord: json['dateRecord'] as String,
      urlImage: json['urlImage'] as String,
      bookID: json['bookID'] as int
    );
  }
}