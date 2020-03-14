import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/BookProductTiki/ListBookTikiPage.dart';
import 'package:tiki_books_mobile/BookProductTiki/ListBookTikiTopDiscountPage.dart';
import 'package:tiki_books_mobile/Books/ListBooksPage.dart';

class BookTabbarPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          // actions: <Widget>[],
          title: new TabBar(
            tabs: [
              new Tab(
                text: "Khuyến mãi nhiều",
              ),
              new Tab(text: "Sách yêu thích"),
            ],
            indicatorColor: Colors.white,
          ),
        ),
        body: TabBarView(
          children: [
            ListBookTikiTopDiscountPage(),
            ListBooksPage(),
          ],
        ),
      ),
    );
  }
}
