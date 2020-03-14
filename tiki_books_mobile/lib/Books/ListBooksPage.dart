import 'package:flutter/material.dart';
import 'package:flutter/semantics.dart';
import 'package:tiki_books_mobile/Books/BookCell.dart';
import 'package:tiki_books_mobile/BookProductTiki/BookTikiModel.dart';
import 'package:tiki_books_mobile/services.dart';
import 'package:tiki_books_mobile/CommonComponent.dart';
import 'package:tiki_books_mobile/constants.dart';

import 'BookCellModel.dart';
import '../BookProductTiki/ListBookTikiPage.dart';

class ListBooksPage extends StatefulWidget {
  ListBooksPage({Key key}) : super(key: key);

  @override 
  _ListBooksPageState createState() => new _ListBooksPageState();
}

class _ListBooksPageState extends State<ListBooksPage> {
  bool isHomeDataLoading;

  @override 
  void initState() {
    super.initState();
    isHomeDataLoading = false;
  }

  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      // appBar: CommonComponent.getAppBar(COLORS.APP_THEME_COLOR , "Home"),
      body: Center(
        child: FutureBuilder<List<BookCellModel>>(
          future: Services.fetchBooksData(),
          builder: (context, snapshot) {
            return snapshot.connectionState == ConnectionState.done
              ? snapshot.hasData
                ? CommonComponent.homeListView(snapshot, cellClicked)
                : CommonComponent.retryButton(fetch)
              : CommonComponent.circularProgress();
          },
        ),
      ),
    );
  }

  setLoading(bool loading) {
    setState(() {
      isHomeDataLoading = loading;
    });
  }

  fetch() {
    setLoading(true);
  }

}

cellClicked(BuildContext context, BookCellModel cellModel) {
  // Grid Click
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => ListBookTikiPage(bookID: cellModel.bookID)),
  );
}