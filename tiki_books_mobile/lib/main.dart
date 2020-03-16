import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/LeftMenu/LeftMenu.dart';
import 'package:tiki_books_mobile/Util/Utils.dart';
import 'package:tiki_books_mobile/constants.dart';
import 'Books/ListBooksPage.dart';
import 'CommonComponent.dart';
import './BlocArchitecture/BlocModel/CommonVariableBloc.dart';
import './BlocArchitecture/BlocProvider/BlocProvider.dart';

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
      // home: new LeftMenuPage(title: appTitle),
      home: Container(
        child: Padding(
          padding: EdgeInsets.only(top: 100.0),
          child: BlocProvider(
            bloc: new ColorBloc(),
            child: LeftMenuPage(title: appTitle),
          ),
        ),
      ),
    );
  }
}