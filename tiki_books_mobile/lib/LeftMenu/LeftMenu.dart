import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/constants.dart';
import 'package:tiki_books_mobile/BookTabbar/BookTabbarPage.dart';
import 'DrawerItem.dart';
import '../BlocArchitecture/BlocProvider/BlocProvider.dart';
import '../BlocArchitecture/BlocModel/ListVariable.dart';
import '../BlocArchitecture/BlocModel/CommonVariableBloc.dart';
import '../Util/Utils.dart';

class LeftMenuPage extends StatefulWidget {
  LeftMenuPage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _LeftMenuState createState() => new _LeftMenuState(title);
}

class _LeftMenuState extends State<LeftMenuPage> {
  String title;
  int _selectedIndex = 0;
  ColorBloc bloc;

  final drawerItems = [
    new DrawerItem("Sách Tiki", Icons.book),
    new DrawerItem("Điện thoại", Icons.mobile_screen_share),
    new DrawerItem("Coffee", Icons.local_cafe)
  ];

  _getDrawerItemScreen(int pos) {
    switch (pos) {
      case 0:
        // bloc.changeState(newState: new ListVariable(mainTheme: Utils.convertHexToColor(0xFF52FC27)));
        bloc.changeColor();
        return BookTabbarPage();
        break;

      case 1:
        bloc.changeColor();
        break;

      case 2:
        break;

      default:
    }
  }

  _onSelectItem(int index) {
    setState(() {
      _selectedIndex = index;
      _getDrawerItemScreen(_selectedIndex);
    });
    Navigator.of(context).pop(); // close the drawer
  }

  _LeftMenuState(this.title);

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    bloc = BlocProvider.of(context);
    List<Widget> drawerOptions = [];
    for (var i = 0; i < drawerItems.length; i++) {
      var d = drawerItems[i];
      drawerOptions.add(new ListTile(
        leading: new Icon(d.icon),
        title: new Text(
          d.title,
          style: i == _selectedIndex
              ? new TextStyle(fontSize: 22.0, fontWeight: FontWeight.w600)
              : new TextStyle(fontSize: 20.0, fontWeight: FontWeight.w400),
        ),
        selected: i == _selectedIndex,
        onTap: () => _onSelectItem(i),
      ));
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        // backgroundColor: snapShot.data,
      ),
      drawer: Drawer(
        // Add a ListView to the drawer. This ensures the user can scroll
        // through the options in the drawer if there isn't enough vertical
        // space to fit everything.
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: <Widget>[
            new DrawerHeader(
              child: Column(
                children: <Widget>[
                  Text(
                    'THỐNG KÊ',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: Colors.white),
                  ),
                ],
              ),
              decoration: BoxDecoration(
                // color: COLORS.APP_THEME_COLOR,
                color: Utils.convertHexToColor(0xFF52FC27),
              ),
            ),
            new Column(children: drawerOptions),
          ],
        ),
      ),
      body: _getDrawerItemScreen(_selectedIndex),
    );
  }
}
