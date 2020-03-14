exports.removeAccents = (str) => {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}

exports.ChuanHoaChuoi = (str) => {
    str = this.removeAccents(str)
    str = str.toLowerCase()
    str = str.replace(/ {2,}/g, ' ')
    str = str.trim()

    return str
}

exports.XoaKyTuKhongPhaiSo = (str) => {
    return str.replace(/\D/g,'');
}


// var s = "   Kiêu      Hãnh    và    Định    kiến   "
// var s1 = "Combo Kiêu Hãnh Và Định Kiến + Lolita (2 cuốn Tiểu thuyết lãng mạn đặc sắc/ Tặng kèm Bookmark Happy Life)"
// s = ChuanHoaChuoi(s)
// s1 = ChuanHoaChuoi(s1)

// console.log(s1.includes(s))