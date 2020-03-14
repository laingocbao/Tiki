import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Utils {
  static Map<int, Color> colorCodes = {
      50: Color.fromRGBO(147, 205, 72, .1),
      100: Color.fromRGBO(147, 205, 72, .2),
      200: Color.fromRGBO(147, 205, 72, .3),
      300: Color.fromRGBO(147, 205, 72, .4),
      400: Color.fromRGBO(147, 205, 72, .5),
      500: Color.fromRGBO(147, 205, 72, .6),
      600: Color.fromRGBO(147, 205, 72, .7),
      700: Color.fromRGBO(147, 205, 72, .8),
      800: Color.fromRGBO(147, 205, 72, .9),
      900: Color.fromRGBO(147, 205, 72, 1),
    };
    
  static String formatNumberWithDot(int number) {
    final formatter = new NumberFormat("#,###", "en_US");
    return formatter.format(number);
  }

  static MaterialColor convertHexToColor(int color) {
    var newColor = new MaterialColor(color, colorCodes);
    return newColor;
  }
}