import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/BookProductTiki/BookTikiModel.dart';
import 'package:tiki_books_mobile/CommonComponent.dart';
import 'package:tiki_books_mobile/services.dart';

import '../constants.dart';
import 'BookTikiCell.dart';

class ListBookTikiTopDiscountPage extends StatefulWidget {
  ListBookTikiTopDiscountPage({Key key}) : super(key: key);

  @override
  _ListBookTikiTopDiscountState createState() =>
      new _ListBookTikiTopDiscountState();
}

class _ListBookTikiTopDiscountState extends State<ListBookTikiTopDiscountPage> {
  bool isPageDataLoading;
  double _value;

  _ListBookTikiTopDiscountState();

  @override
  void initState() {
    super.initState();
    isPageDataLoading = false;
    _value = 0;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: FutureBuilder<List<BookTikiModel>>(
          future: Services.fetchBookTikiTopDiscountData(30),
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
