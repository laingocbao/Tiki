import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:tiki_books_mobile/BookProductTiki/BookTikiCell.dart';
import 'package:tiki_books_mobile/BookProductTiki/BookTikiModel.dart';
import 'constants.dart';
import 'Books/BookCell.dart';
import 'Books/BookCellModel.dart';
import './Util/Utils.dart';

class CommonComponent {
  static Padding text(String text, FontWeight fontWeight, double fontSize,
      List padding, Color color, TextOverflow overflow) {
    return Padding(
      padding: new EdgeInsets.only(
          left: padding[0],
          right: padding[1],
          top: padding[2],
          bottom: padding[3]),
      child: Text(
        text,
        textAlign: TextAlign.left,
        overflow: overflow,
        style: TextStyle(
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
        ),
      ),
    );
  }

  static AppBar getAppBar(Color color, String title) {
    return AppBar(
      backgroundColor: COLORS.APP_THEME_COLOR,
      title: Center(
        child: new Text(title.toUpperCase()),
      ),
      actions: <Widget>[],
    );
  }

  static CircularProgressIndicator circularProgress() {
    return CircularProgressIndicator(
      valueColor: new AlwaysStoppedAnimation<Color>(COLORS.APP_THEME_COLOR),
    );
  }

  static GestureDetector internetErrorText(Function callback) {
    return GestureDetector(
      onTap: callback,
      child: Center(
        child: Text(MESSAGES.INTERNET_ERROR),
      ),
    );
  }

  static Column homeListView(
      AsyncSnapshot<List<BookCellModel>> snapshot, Function cellClicked) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      children: <Widget>[
        Padding(
          padding:
              EdgeInsets.only(left: 10.0, right: 20.0, bottom: 20.0, top: 30.0),
          child: ListView.builder(
            shrinkWrap: true,
            itemCount: snapshot.data.length,
            itemBuilder: (BuildContext context, int index) {
              return GestureDetector(
                child: BookCell(index, snapshot.data[index]),
                onTap: () => cellClicked(context, snapshot.data[index]),
              );
            },
          ),
        ),
      ],
    );
  }

  static Padding bookTikiListView(
      AsyncSnapshot<List<BookTikiModel>> snapshot, Function cellClicked) {
    return snapshot.data.length > 0 ? 
    Padding(
      padding: EdgeInsets.only(left: 10.0, right: 10.0, bottom: 10.0, top: 5.0),
      child: ListView.builder(
        shrinkWrap: true,
        itemCount: snapshot.data.length,
        itemBuilder: (BuildContext context, int index) {
          return GestureDetector(
            child: BookTikiCell(snapshot.data[index]),
            onTap: () => cellClicked(context, snapshot.data[index]),
          );
        },
      ),
    ) 
    : Padding(
      padding: EdgeInsets.only(left: 10.0, right: 10.0, bottom: 10.0, top: 5.0),
      child: Text(
        "No Data",
        style: TextStyle(
          fontWeight: FontWeight.bold, 
          fontSize: 20
        ),
      ),
    );
    
  }

  static Padding textNoListBook() {
    return Padding(
      padding: EdgeInsets.only(left: 10.0, right: 10.0, bottom: 10.0, top: 5.0),
      child: Text(
        "No data",
        
      )
    );
  }

  static FlatButton retryButton(Function fetch) {
    return FlatButton(
      child: Text(
        MESSAGES.INTERNET_ERROR_RETRY,
        textAlign: TextAlign.center,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(fontWeight: FontWeight.normal),
      ),
      onPressed: () => fetch(),
    );
  }
}
