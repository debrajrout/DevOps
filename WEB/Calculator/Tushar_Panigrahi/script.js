var button = document.querySelectorAll(".button");
var smalltext = document.querySelectorAll("#smalltext");
var bigtext = document.querySelectorAll("#bigtext");
var text = document.querySelector(".text");
var textt = document.querySelector(".textt");
var deg = document.querySelector(".degree");
var rad = document.querySelector(".rad");
var up = document.querySelector(".up");
var down = document.querySelector(".down");
var centerr = document.querySelectorAll(".centerr");
var center = document.querySelectorAll(".center");
var hidden = document.querySelectorAll(".hidden");
var nonhidden = document.querySelectorAll(".nonhidden");
var arrow = document.querySelector(".arrow");
var arroww = document.querySelector(".arroww");
arrow.addEventListener("click", function () {
  hidden[0].style.display = "table";
  nonhidden[0].style.display = "none";
});
arroww.addEventListener("click", function () {
  hidden[0].style.display = "none";
  nonhidden[0].style.display = "table";
});
up.addEventListener("click", function () {
  centerr[0].style.display = "table";
  center[0].style.display = "none";
  bigtext[0].style.display = "block";
  smalltext[0].style.display = "none";
});
down.addEventListener("click", function () {
  centerr[0].style.display = "none";
  center[0].style.display = "table";
  bigtext[0].style.display = "none";
  smalltext[0].style.display = "block";
});

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    if (text.textContent == "0") text.textContent = "";
    if (
      target.contains("num") ||
      target.contains("add") ||
      target.contains("minus") ||
      target.contains("dot")
    ) {
      text.textContent += e.target.innerText;
    } else if (target.contains("back")) {
      text.textContent = text.textContent.slice(0, -1);
    } else if (target.contains("clear")) {
      text.textContent = "0";
    } else if (target.contains("equal")) {
      try {
        text.textContent = eval(text.textContent);
      } catch {
        text.textContent = "!ERROR";
      }
      text.textContent = eval(text.textContent);
    } else if (target.contains("multiply")) {
      text.textContent += "*";
    } else if (target.contains("divide")) {
      text.textContent += "/";
    } else if (target.contains("percent")) {
      text.textContent += "%";
    }
  });
});
button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    if (textt.textContent == "0") textt.textContent = "";
    if (
      target.contains("num") ||
      target.contains("add") ||
      target.contains("minus") ||
      target.contains("dot")
    ) {
      textt.textContent += e.target.innerText;
    } else if (target.contains("back")) {
      textt.textContent = textt.textContent.slice(0, -1);
    } else if (target.contains("clear")) {
      textt.textContent = "0";
    } else if (target.contains("equal")) {
      try {
        textt.textContent = eval(textt.textContent);
      } catch {
        textt.textContent = "ERROR!";
      }
      textt.textContent = eval(textt.textContent);
    } else if (target.contains("multiply")) {
      textt.textContent += "*";
    } else if (target.contains("divide")) {
      textt.textContent += "/";
    } else if (target.contains("percent")) {
      textt.textContent += "%";
    } else if (target.contains("sin")) {
      var angle, radian;
      angle = textt.textContent;
      radian = (angle * Math.PI) / 180;
      textt.textContent = Math.sin(radian);
    } else if (target.contains("cos")) {
      var angle, radian;
      angle = textContent;
      radian = (angle * Math.PI) / 180;
      textt.textContent = Math.cos(radian);
    } else if (target.contains("tan")) {
      var angle, radian;
      angle = textContent;
      radian = (angle * Math.PI) / 180;
      textt.textContent = Math.tan(radian);
    } else if (target.contains("log")) {
      textt.textContent = Math.log10(textt.textContent);
    } else if (target.contains("ln")) {
      textt.textContent = Math.log(textt.textContent);
    } else if (target.contains("sqrt")) {
      textt.textContent = Math.sqrt(textt.textContent);
    } else if (target.contains("square")) {
      textt.textContent = textt.textContent * textt.textContent;
    } else if (target.contains("denominator")) {
      textt.textContent = 1 / textt.textContent;
    } else if (target.contains("pi")) {
      textt.textContent = Math.PI;
    } else if (target.contains("e")) {
      textt.textContent = 2.718281828459045;
    } else if (target.contains("fact")) {
      var i = 1,
        f = 1;
      while (textt.textContent >= i) {
        f = f * i;
        i++;
      }
      textt.textContent = f;
    } else if (target.contains("degree")) {
      if (target.contains("sin")) {
        var angle, radian;
        angle = textt.textContent;
        radian = (angle * Math.PI) / 180;
        textt.textContent = Math.sin(radian);
      }
      if (target.contains("cos")) {
        var angle, radian;
        angle = textContent;
        radian = (angle * Math.PI) / 180;
        textt.textContent = Math.cos(radian);
      }
      if (target.contains("tan")) {
        var angle, radian;
        angle = textContent;
        radian = (angle * Math.PI) / 180;
        textt.textContent = Math.tan(radian);
      }
      deg.style.display = "none";
      rad.style.display = "block";
    } else if (target.contains("rad")) {
      rad.style.display = "none";
      deg.style.display = "block";
      if (target.contains("sin")) {
        textt.textContent = Math.sin(textt.textContent);
      }
      if (target.contains("cos")) {
        textt.textContent = Math.sin(textt.textContent);
      }
      if (target.contains("tan")) {
        textt.textContent = Math.sin(textt.textContent);
      }
    } else if (target.contains("asin")) {
      textt.textContent = Math.asin(textt.textContent);
    } else if (target.contains("acos")) {
      textt.textContent = Math.acos(textt.textContent);
    } else if (target.contains("atan")) {
      textt.textContent = Math.atan(textt.textContent);
    }
  });
});
