import 'package:flutter/material.dart';
import 'BookCellModel.dart';

class BookCell extends StatelessWidget {
  const BookCell(this.index, this.cellModel);
  @required
  final BookCellModel cellModel;
  final int index;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Text(
              (index + 1).toString() + '. ' + cellModel.bookName,
              textAlign: TextAlign.left,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                fontWeight: FontWeight.w500,
                fontSize: 20
              ),
            ),
          ),
        ),
      ],
    );
  }
}
