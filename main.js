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
        date =31;
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
      if(month === 12){
        date = 1;
        month = 1;
        year +=1
      }else{
        date = 1;
        month +=1;
      } 
    }else{
      date +=1;
    }
    showDate = date + "/" + month + "/" + year;
    document.getElementById("showDate").innerHTML = showDate;
  } else {
    document.getElementById("showDate").innerHTML = "Wrong";
  }
}
