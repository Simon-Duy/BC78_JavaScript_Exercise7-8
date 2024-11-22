let btn = document.querySelector(".btn-success");
let btnBai6 = document.querySelector(".btnBai6");
let btnBai7 = document.querySelector(".btnBai7");
let divArr = document.querySelector(".render_arr");
let divBai1 = document.getElementById("kq1"),
  divBai2 = document.getElementById("kq2"),
  divBai3 = document.getElementById("kq3"),
  divBai4 = document.getElementById("kq4"),
  divBai5 = document.getElementById("kq5"),
  divBai6 = document.getElementById("kq6"),
  divBai7 = document.getElementById("kq7"),
  divBai8 = document.getElementById("kq8"),
  divBai9 = document.getElementById("kq9"),
  divBai10 = document.getElementById("kq10");

var arrSoN = [];

btnBai6.onclick = function () {
  giaiBai6();
  giaiBaiTap();
  showKetQua();
};
btnBai7.onclick = function () {
  giaiBai7();
  giaiBaiTap();
  showKetQua();
};
btn.onclick = function () {
  themSoNVaoMang();
  giaiBaiTap();
  showKetQua();
  clearInput();
};

// Thêm từng số vào mảng
function themSoNVaoMang() {
  let soN = document.getElementById("soN").value * 1;
  arrSoN.push(soN);
}
function showKetQua() {
  divArr.innerHTML = arrSoN;
}

function giaiBaiTap() {
  giaiBai1();
  giaiBai2();
  giaiBai3();
  giaiBai4();
  giaiBai5();
  giaiBai8();
  giaiBai9();
  giaiBai10();
}

// Bài 01
function giaiBai1() {
  let tong = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      tong += arrSoN[i];
    }
    divBai1.innerHTML = `Bài 01: Tổng các số dương trong mảng: ${tong}`;
  }
}

// Bài 02
function giaiBai2() {
  let dem = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      dem++;
    }
  }
  divBai2.innerHTML = `Bài 02: Mảng có ${dem} số dương`;
}

// Bài 03
function giaiBai3() {
  let min = arrSoN[0];
  for (let i = 1; i < arrSoN.length; i++) {
    if (min > arrSoN[i]) {
      min = arrSoN[i];
    }
  }
  divBai3.innerHTML = `Bài 03: Số nhỏ nhất trong mảng: ${min}`;
}

// Bài 04
function giaiBai4() {
  let sortArr = arrSoN.slice(0).sort(function (a, b) {
    return a - b;
  });

  let min = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] > 0) {
      min = sortArr[i];
      break;
    }
  }
  if (min !== 0) {
    divBai4.innerHTML = `Bài 04: Số dương nhỏ nhất trong mảng: ${min}`;
  } else {
    divBai4.innerHTML = "Bài 04: Mảng không có số dương";
  }
}

// Bài 05
function giaiBai5() {
  let soChanCuoiCung = -1;
  for (let i = arrSoN.length; i >= 0; i--) {
    if (arrSoN[i] % 2 == 0) {
      soChanCuoiCung = arrSoN[i];
      break;
    }
  }
  if (soChanCuoiCung != -1) {
    divBai5.innerHTML = `Bài 05: Số chẵn cuối cùng trong mảng: ${soChanCuoiCung}`;
  } else {
    divBai5.innerHTML = `Bài 05: Không số chẵn trong mảng: ${soChanCuoiCung}`;
  }
}

// Bài 06
function giaiBai6() {
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;

  if (index1 >= 0 && index2 >= 0) {
    let value1 = arrSoN[index1];
    let value2 = arrSoN[index2];
    arrSoN[index1] = value2;
    arrSoN[index2] = value1;
    console.log(arrSoN);
  } else {
    alert(
      "Không thể chuyển vị trí. Bạn vui lòng nhập số không âm ở 2 vị trí index"
    );
  }
}

// Bài 07
function giaiBai7() {
  arrSoN.sort(function (a, b) {
    return a - b;
  });
  showKetQua();
  alert("Mảng đã được sắp xếp");
}

// Bài 08
function giaiBai8() {
  let isPrime = false;
  let soN = -1;
  for (let i = 0; i < arrSoN.length; i++) {
    soN = arrSoN[i];
    let count = 0;
    let j = 1;
    do {
      if (soN % j == 0) {
        count++;
      }
      j++;
    } while (j <= soN);
    if (count == 2) {
      isPrime = true;
      break;
    }
  }
  if (isPrime) {
    divBai8.innerHTML = `Bài 08: Số nguyên tố đầu tiên trong mảng: ${soN}`;
  } else {
    divBai8.innerHTML = `Bài 08: Mảng không có số nguyên tố`;
  }
}

// Bài 09
function giaiBai9() {
  var count = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    const soN = arrSoN[i];
    if (soN % 1 == 0) {
      count++;
    }
  }
  divBai9.innerHTML = `Bài 09: Số nguyên có trong mảng: ${count}`;
}

// Bài 10
function giaiBai10() {
  let demSoAm = 0;
  let demSoDuong = 0;
  let content = "";

  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      demSoDuong++;
    }
    if (arrSoN[i] < 0) {
      demSoAm++;
    }
  }

  if (demSoDuong > demSoAm) {
    content = "Mảng có số dương nhiều hơn số âm";
  } else if (demSoDuong < demSoAm) {
    content = "Mảng có số âm nhiều hơn số dương";
  } else {
    content = "Số lượng số dương và số âm trong mảng bằng nhau";
  }

  divBai10.innerHTML = "Bài 10: " + content;
}

// Xóa input sau mỗi lần nhập
function clearInput() {
  document.getElementById("soN").value = "";
  document.getElementById("soN").focus();
}
