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
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            SliderTheme(
              data: SliderTheme.of(context).copyWith(
                activeTrackColor: Colors.red[700],
                inactiveTrackColor: Colors.red[100],
                trackShape: RoundedRectSliderTrackShape(),
                trackHeight: 4.0,
                thumbShape: RoundSliderThumbShape(enabledThumbRadius: 12.0),
                thumbColor: Colors.redAccent,
                overlayColor: Colors.red.withAlpha(32),
                overlayShape: RoundSliderOverlayShape(overlayRadius: 28.0),
                tickMarkShape: RoundSliderTickMarkShape(),
                activeTickMarkColor: Colors.red[700],
                inactiveTickMarkColor: Colors.red[100],
                valueIndicatorShape: PaddleSliderValueIndicatorShape(),
                valueIndicatorColor: Colors.redAccent,
                valueIndicatorTextStyle: TextStyle(
                  color: Colors.white,
                ),
              ),
              child: Slider(
                value: _value,
                min: 0,
                max: 100,
                divisions: 10,
                label: '$_value',
                onChanged: (value) {
                  setState(
                    () {
                      _value = value;
                    },
                  );
                },
              ),
            ),
            FutureBuilder<List<BookTikiModel>>(
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
          ],
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
