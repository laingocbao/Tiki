import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/LeftMenu/LeftMenu.dart';
import 'package:tiki_books_mobile/Util/Utils.dart';
import 'package:tiki_books_mobile/constants.dart';
import 'Books/ListBooksPage.dart';
import 'CommonComponent.dart';

void main() => runApp(new LeftMenu());

class LeftMenu extends StatelessWidget {
  final appTitle = 'Sách Tiki';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: appTitle,
      theme: new ThemeData(
        primarySwatch: COLORS.APP_THEME_COLOR,
      ),
      home: new LeftMenuPage(title: appTitle),
    );
  }
}

// import 'package:flutter/material.dart';
// import 'package:flutter/cupertino.dart';

// void main() => runApp(new MyApp());

// class MyHomePage extends StatelessWidget {
//   final String title;

//   MyHomePage({Key key, this.title}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar: new AppBar(
//           title: Text(title),
//         ),
//         drawer: Drawer(
//           child: ListView(
//             children: <Widget>[
//               DrawerHeader(
//                 child: Text(
//                   "Hello Andy!!",
//                   textAlign: TextAlign.justify,
//                   textScaleFactor: 2.0,
//                 ),
//                 decoration: BoxDecoration(color: Colors.green),
//               ),
//               ListTile(
//                 title: Text("First"),
//                 onTap: () {
//                   Navigator.pop(context);
//                 },
//               ),
//               ListTile(
//                 title: Text("Second"),
//                 onTap: () {
//                   Navigator.pop(context);
//                 },
//               )
//             ],
//           ),
//         ),
//         body: new DefaultTabController(
//           length: 3,
//           child: new Scaffold(
//             appBar: new AppBar(
//               actions: <Widget>[],
//               title: new TabBar(
//                 tabs: [
//                   new Tab(icon: new Icon(Icons.directions_car)),
//                   new Tab(icon: new Icon(Icons.directions_transit)),
//                   new Tab(icon: new Icon(Icons.directions_bike)),
//                 ],
//                 indicatorColor: Colors.white,
//               ),
//             ),
//             body: new TabBarView(
//               children: [
//                 new Icon(Icons.directions_car,size: 50.0,),
//                 new Icon(Icons.directions_transit,size: 50.0,),
//                 new Icon(Icons.directions_bike,size: 50.0,),
//               ],
//             ),
//           ),
//         ));
//   }
// }

// class MyApp extends StatelessWidget {
//   // This widget is the root of your application.
//   @override
//   Widget build(BuildContext context) {
//     return new MaterialApp(
//       debugShowCheckedModeBanner: false,
//       title: 'Drawer Layout with Tabs',
//       theme: new ThemeData(
//         primaryColor: Colors.green,
//       ),
//       home: MyHomePage(title: "Drawer Layout with Tabs"),
//     );
//   }
// }
