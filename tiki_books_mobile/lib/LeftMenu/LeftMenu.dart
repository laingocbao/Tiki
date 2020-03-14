import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/Books/ListBooksPage.dart';
import 'package:tiki_books_mobile/Util/Utils.dart';
import 'package:tiki_books_mobile/constants.dart';
import 'package:tiki_books_mobile/BookTabbar/BookTabbarPage.dart';

// void main() => runApp(new LeftMenu());

// class LeftMenu extends StatelessWidget {
//   final appTitle = 'Drawer Demo';

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: appTitle,
//       home: LeftMenuPage(title: appTitle),
//     );
//   }
// }

class LeftMenuPage extends StatefulWidget {
  LeftMenuPage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _LeftMenuState createState() => new _LeftMenuState(title);
}

class _LeftMenuState extends State<LeftMenuPage> {
  String title;
  _LeftMenuState(this.title);

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Center(child: new BookTabbarPage()),
      drawer: Drawer(
        // Add a ListView to the drawer. This ensures the user can scroll
        // through the options in the drawer if there isn't enough vertical
        // space to fit everything.
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              child: Text('Thống kê'),
              decoration: BoxDecoration(
                color: COLORS.APP_THEME_COLOR,
              ),
            ),
            ListTile(
              title: Text('Sách Tiki'),
              onTap: () {
                setTitle('Sách Tiki');
                // COLORS.APP_THEME_COLOR = Utils.convertHexToColor(0xFF27A0FC);
                BookTabbarPage();
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Text('Điện thoại'),
              onTap: () {
                setTitle('Điện thoại');
                // COLORS.APP_THEME_COLOR = Utils.convertHexToColor(0xFFFDD831);


                // Update the state of the app
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }

  setTitle(String title) {
    setState(() {
      this.title = title;
    });
  }

}
