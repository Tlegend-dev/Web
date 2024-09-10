document.getElementById("searchButton").addEventListener("click", function () {
  const from = document.getElementById("fromSelect").value;
  const to = document.getElementById("toSelect").value;
  const listItems = document.querySelectorAll("#routeList li");

  listItems.forEach((item) => {
    item.classList.remove("highlight");
    item.style.display = "none";
  });

  document.getElementById("noResult").style.display = "none";

  if (from && to) {
    let found = false;

    listItems.forEach((item) => {
      const text = item.textContent;

      if (text.includes(from) && text.includes(to)) {
        item.classList.add("highlight");
        item.style.display = "list-item";
        found = true;
      }
    });

    // Hiện danh sách nếu có kết quả
    if (found) {
      document.getElementById("routeList").style.display = "block";
    } else {
      document.getElementById("routeList").style.display = "none";
      document.getElementById("noResult").style.display = "block";
    }
  } else {
    document.getElementById("routeList").style.display = "none";
    document.getElementById("noResult").style.display = "none";
  }
});
function check(obj) {
  const a = document.getElementById("tk").value;
  const b = document.getElementById("mk").value;
  const tk = document.getElementById("tk");
  const mk = document.getElementById("mk");
  const result = document.getElementById("result");
  if (a && b) {
    window.location.href = "index.html";
  } else {
    if (!a && !b) {
      result.textContent = "Vui lòng nhập tài khoản và mật khẩu";
      tk.style.border = "1px solid red";
      mk.style.border = "1px solid red";
      tk.style.animation = "sai 0.25s infinite";
      mk.style.animation = "sai 0.25s infinite";
    } else if (!a) {
      result.textContent = "Vui lòng nhập tài khoản";
      tk.style.border = "1px solid red";
      tk.style.animation = "sai 0.25s infinite";
    } else {
      result.textContent = "Vui lòng nhập mật khẩu";
      mk.style.border = "1px solid red";
      mk.style.animation = "sai 0.25s infinite";
    }
  }
}
function validateForm() {
  const inputs = document.querySelectorAll("#myForm input");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  const pass = document.getElementById("pass").value;
  const re = document.getElementById("return").value;
  const kq = document.getElementById("kq");
  inputs.forEach((input) => {
    if (allFilled) {
      if (pass === re) {
        window.location.href = "dangnhap.html";
      } else {
        kq.textContent = "Mật khẩu xác nhận không đúng";
      }
    } else {
      if (input.value.trim() === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    }
  });
}
function validateForm2() {
  const inputs = document.querySelectorAll("#myForm input");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  const kq = document.getElementById("kq");

  if (allFilled) {
    if (confirm("Bạn có chắc chắn đặt không?")) {
      alert("Đặt vé thành công");
    }
  } else {
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  }
}
function gui(obj) {
  alert("Cảm ơn bạn đã gửi ý kiến phản hồi cho chúng tôi");
}
function validateForm3() {
  const inputs = document.querySelectorAll("#myForm input");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  const kq = document.getElementById("kq");
  inputs.forEach((input) => {
    if (allFilled) {
      window.location.href = "index.html";
    } else {
      if (input.value.trim() === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    }
  });
}
