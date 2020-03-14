import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/CommonComponent.dart';
import 'package:tiki_books_mobile/Util/Utils.dart';
import 'package:tiki_books_mobile/constants.dart';
import 'BookTikiModel.dart';

class BookTikiCell extends StatelessWidget {
  const BookTikiCell(this.cellModel);
  @required
  final BookTikiModel cellModel;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: EdgeInsets.all(5.0),
              child: Image.network(
                cellModel.urlImage,
                height: 150,
              ),
            ),
            Padding(
              padding: EdgeInsets.all(5.0),
              child: Text(
                cellModel.bookName,
                textAlign: TextAlign.center,
                overflow: TextOverflow.fade,
                style: TextStyle(fontWeight: FontWeight.w500),
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.all(5.0),
                  child: Text(
                    Utils.formatNumberWithDot(cellModel.price) + 'đ',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontWeight: FontWeight.w500, fontSize: 20),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.all(5.0),
                  child: Text(
                    cellModel.percent.toString() + '%',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontWeight: FontWeight.w300, color: Colors.blue),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
