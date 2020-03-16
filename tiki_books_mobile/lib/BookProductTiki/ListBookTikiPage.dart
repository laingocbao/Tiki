import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/BookProductTiki/BookTikiModel.dart';
import 'package:tiki_books_mobile/CommonComponent.dart';
import 'package:tiki_books_mobile/services.dart';

import '../constants.dart';
import 'BookTikiCell.dart';

class ListBookTikiPage extends StatefulWidget {
  ListBookTikiPage({Key key, @required this.bookID}) : super(key: key);

  final int bookID;
  @override
  _ListBookTikiState createState() => new _ListBookTikiState(bookID);
}

class _ListBookTikiState extends State<ListBookTikiPage> {
  bool isPageDataLoading;
  int bookID;

  _ListBookTikiState(this.bookID);

  @override
  void initState() {
    super.initState();
    isPageDataLoading = false;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Sách Tiki")),
      backgroundColor: Colors.white,
      body: Center(
        child: FutureBuilder<List<BookTikiModel>>(
          future: Services.fetchBookTikiDataById(bookID: this.bookID),
          builder: (context, snapshot) {
            return snapshot.connectionState == ConnectionState.done
                ? snapshot.hasData
                    ? CommonComponent.bookTikiListView(
                        snapshot, bookTikiCellClicked)
                    : CommonComponent.retryButton(fetch)
                : CommonComponent.circularProgress();
          },
        ),
      ),
    );
  }

  setLoading(bool loading) {
    setState(() {
      isPageDataLoading = loading;
    });
  }

  fetch() {
    setLoading(true);
  }
}

bookTikiCellClicked(BuildContext context, BookTikiModel cellModel) {
  // Grid Click
  // Navigator.push(
  //   context,
  //   MaterialPageRoute(builder: (context) => null),
  //   // MaterialPageRoute(builder: (context) => SecondScreen()),
  // );
}
