class BookCellModel {
  int bookID;
  String bookName;

  BookCellModel({this.bookID, this.bookName});

  factory BookCellModel.fromJson(Map<String, dynamic> json) {
    return BookCellModel (
      bookID: json['ID'] as int,
      bookName: json['Name'] as String
    );
  }
}