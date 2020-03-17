import 'package:flutter/material.dart';
import 'package:tiki_books_mobile/BookProductTiki/ListBookTikiPage.dart';
import '../constants.dart';
import 'package:tiki_books_mobile/BookProductTiki/ListBookTikiTopDiscountPage.dart';
import 'package:tiki_books_mobile/Books/ListBooksPage.dart';
import '../BlocArchitecture/BlocProvider/BlocProvider.dart';
import '../BlocArchitecture/BlocModel/CommonVariableBloc.dart';
import '../BlocArchitecture/BlocModel/ListVariable.dart';
import '../Util/Utils.dart';

class BookTabbarPage extends StatelessWidget {
  ColorBloc bloc;
  @override
  Widget build(BuildContext context) {
    bloc = BlocProvider.of(context);
    return StreamBuilder(
      initialData: COLORS.APP_THEME_COLOR,
      stream: bloc.colorStream,
      builder: (BuildContext context, snapShot) => Center(
          child: DefaultTabController(
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
              // indicatorColor: snapShot.data,
            ),
            backgroundColor: snapShot.data,
          ),
          body: TabBarView(
            children: [
              ListBookTikiTopDiscountPage(),
              ListBooksPage(),
            ],
          ),
        ),
      )),
    );
  }
}
