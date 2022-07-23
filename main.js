// Bài Tập 1
function compare() {
  // Đầu vào: DOM tới các giá trị của người dùng nhập vào
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  // Xử lý:
  // B1: tạo dòng kết quả
  // B2: So sánh các giá trị của người dùng nhập vào
  var result = "";
  //   if (number3 < number2 && number2 < number1) {
  //     result = `${number3} < ${number2} < ${number1}`;
  //   } else if (number2 < number3 && number3 < number1) {
  //     result = `${number2} < ${number3} < ${number1}`;
  //   } else if (number2 < number1 && number1 < number3) {
  //     result = `${number2} < ${number1} < ${number3}`;
  //   } else if (number3 < number1 && number1 < number2) {
  //     result = `${number3} < ${number1} < ${number2}`;
  //   } else if (number1 < number3 && number3 < number2) {
  //     result = `${number1} < ${number3} < ${number2}`;
  //   } else {
  //     result = `${number1} < ${number2} < ${number3}`;
  //   }

  if (number2 < number1) {
    if (number3 < number2) {
      result = `${number3} < ${number2} < ${number1}`;
    } else if (number3 < number1) {
      result = `${number2} < ${number3} < ${number1}`;
    } else {
      result = `${number2} < ${number1} < ${number3}`;
    }
  } else if (number3 < number2) {
    if (number3 < number1) {
      result = `${number3} < ${number1} < ${number2}`;
    } else {
      result = `${number1} < ${number3} < ${number2}`;
    }
  } else {
    result = `${number1} < ${number2} < ${number3}`;
  }

  //  Đầu ra: Xuất ra kết quả
  document.getElementById("showCompare").innerHTML = result;
}

// Bài Tập 2
function greeting() {
  // Đầu vào: DOM tới giá trị người dùng muốn chọn
  var role = document.getElementById("role").value;

  // Xử lý: trích ra lời chào tương ứng với từng vị trí
  var result2 = "";
  if (role === "father") {
    result2 = "Good Day Sir";
  } else if (role === "mother") {
    result2 = "Good Day Mrs!";
  } else if (role === "son") {
    result2 = "What's Up Boy!";
  } else if (role === "daughter") {
    result2 = "How Are You Today Lady!";
  } else {
    alert("Please Choose Your Role Befor Submit");
  }

  // Đầu ra: Xuất ra kết quả
  document.getElementById("showGreeting").innerHTML = result2;
}

// Bài Tập 3
function counting() {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;

  var countOdd = 0;
  var countEven = 0;

  if (number1 % 2 === 0) {
    countEven += 1;
  } else {
    countOdd += 1;
  }
  console.log(number1);

  if (number2 % 2 === 0) {
    countEven += 1;
  } else {
    countOdd += 1;
  }

  if (number3 % 2 === 0) {
    countEven += 1;
  } else {
    countOdd += 1;
  }

  var result3 = "Có " + countEven + " số chẵn, " + countOdd + " số lẻ";

  document.getElementById("showCounting").innerHTML = result3;
}

// Bài tập 4
function triCheck() {
  // Đầu vào: DOM giá trị 3 canh tam giác
  var edgeA = +document.getElementById("edgeA").value;
  var edgeB = +document.getElementById("edgeB").value;
  var edgeC = +document.getElementById("edgeC").value;
  // Xử lý: Kiểm tra 3 cạnh để xác định đó là loại tam giác gì
  var result4 = "";
  if (edgeA === edgeB || edgeA === edgeC || edgeB === edgeC) {
    result4 = "It's Isosceles Triangle";
  } else if ((edgeA === edgeB) === edgeC) {
    result4 = "It's Equilateral Triangle";
  } else if (
    Math.pow(edgeA, 2) === Math.pow(edgeB, 2) + Math.pow(edgeC, 2) ||
    Math.pow(edgeB, 2) === Math.pow(edgeA, 2) + Math.pow(edgeC, 2) ||
    Math.pow(edgeC, 2) === Math.pow(edgeA, 2) + Math.pow(edgeB, 2)
  ) {
    result4 = "It's Right Angled Triangle";
  } else {
    result4 = "It's Scalene Triangle";
  }
  //   Đầu ra: Xuất ra kết quả
  document.getElementById("showTriangle").innerHTML = result4;
}

// Bài Tập 5
function maxDayByMonth(month) {
  if (month === 2) {
    return 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

function isValidDate(date, month) {
  if (month < 1 || month > 12) {
    return false;
  }
  if (date < 1 || date > maxDayByMonth(month)) {
    return false;
  }
  return true;
}

function yesterday() {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  var showDate = "";
  if (isValidDate(date, month)) {
    if (date === 1) {
      if (
        month === 2 ||
        month === 4 ||
        month === 6 ||
        month === 9 ||
        month === 11
      ) {
        date = 31;
        month -= 1;
      } else if (month === 3) {
        date = 28;
        month -= 1;
      } else if (month === 1) {
        month = 12;
        year -= 1;
        date = 31;
      }
    }
    showDate = date + "/" + month + "/" + year;
    document.getElementById("showDate").innerHTML = showDate;
  } else {
    document.getElementById("showDate").innerHTML = "Wrong";
  }
}

function tomorrow() {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  var showDate = "";
  if (isValidDate(date, month)) {
    if (date === maxDayByMonth(month)) {
      if (month === 12) {
        date = 1;
        month = 1;
        year += 1;
      } else {
        date = 1;
        month += 1;
      }
    } else {
      date += 1;
    }
    showDate = date + "/" + month + "/" + year;
    document.getElementById("showDate").innerHTML = showDate;
  } else {
    document.getElementById("showDate").innerHTML = "Wrong";
  }
}

// Bài Tập 6
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function maxDayByMonthEx6(month, year) {
  if (month === 2) {
    if (isLeapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

function calcDay() {
  var monthEx6 = +document.getElementById("monthEx6").value;
  var yearEx6 = +document.getElementById("yearEx6").value;

  var dayEx6 =
    "Tháng " +
    monthEx6 +
    " năm " +
    yearEx6 +
    " có " +
    maxDayByMonthEx6(monthEx6, yearEx6) +
    " ngày.";

  document.getElementById("showDateEx6").innerHTML = dayEx6;
}

// Bài Tập 7
function getNumberInWord(number) {
  switch (number) {
    case 1: {
      return "Một";
    }
    case 2: {
      return "Hai";
    }
    case 3: {
      return "Ba";
    }
    case 4: {
      return "Bốn";
    }
    case 5: {
      return "Năm";
    }
    case 6: {
      return "Sáu";
    }
    case 7: {
      return "Bảy";
    }
    case 8: {
      return "Tám";
    }
    case 9: {
      return "Chín";
    }
    default: {
      return "Không";
    }
  }
}

function readNumb() {
  var numberEx7 = +document.getElementById("numberEx7").value;
  var hundredInWord = "";
  var tenInWord = "";
  var unitInWord = "";

  var hundred = Math.floor(numberEx7 / 100);
  var ten = Math.floor((numberEx7 % 100) / 10);
  var unit = (numberEx7 % 100) % 10;

  if (hundred !== 0) {
    hundredInWord = getNumberInWord(hundred) + " Trăm ";
  }

  if (ten === 0) {
    if (unit !== 0) {
      tenInWord = " Lẻ ";
    } else {
      tenInWord = "";
    }
  } else if (ten === 1) {
    tenInWord = "Mười ";
  } else {
    tenInWord = getNumberInWord(ten) + " Mươi ";
  }

  if (unit !== 0) {
    unitInWord = getNumberInWord(unit);
  }

  document.getElementById("showNumberEx7").innerHTML =
    hundredInWord + tenInWord + unitInWord;
}

// Bài tập 8

function calcLength() {
  var student1 = document.getElementById("student1").value;
  var student2 = document.getElementById("student2").value;
  var student3 = document.getElementById("student3").value;
  var pointX1 = +document.getElementById("pointX1").value;
  var pointY1 = +document.getElementById("pointY1").value;
  var pointX2 = +document.getElementById("pointX2").value;
  var pointY2 = +document.getElementById("pointY2").value;
  var pointX3 = +document.getElementById("pointX3").value;
  var pointY3 = +document.getElementById("pointY3").value;
  var pointX4 = +document.getElementById("pointX4").value;
  var pointY4 = +document.getElementById("pointY4").value;

  function dmax(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  if (
    dmax(pointX1, pointY1, pointX4, pointY4) <
      dmax(pointX2, pointY2, pointX4, pointY4) &&
    dmax(pointX3, pointY3, pointX4, pointY4) <
      dmax(pointX2, pointY2, pointX4, pointY4)
  ) {
    document.getElementById("showLength").innerHTML =
      "Sinh viên xa trường nhất là " + student2;
  } else if (
    dmax(pointX1, pointY1, pointX4, pointY4) <
      dmax(pointX3, pointY3, pointX4, pointY4) &&
    dmax(pointX2, pointY2, pointX4, pointY4) <
      dmax(pointX3, pointY3, pointX4, pointY4)
  ) {
    document.getElementById("showLength").innerHTML =
      "Sinh viên xa trường nhất là " + student3;
  } else {
    document.getElementById("showLength").innerHTML =
      "Sinh viên xa trường nhất là " + student1;
  }
}
