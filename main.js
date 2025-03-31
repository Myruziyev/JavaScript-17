let ul = document.querySelector("ul");
let sun = document.querySelector("#sun");
let buttonSend = document.querySelector(".send");
let input = document.querySelector("input");
let editing = null;

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Iltimos inputga malumot kiriting!");
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<i id="pen" class="fas fa-pen" "></i> <i id="trash" class="fas fa-trash-alt"></i>`;
    p.textContent = input.value;
    ul.prepend(li);
    li.append(p, div);
    let trash = document.querySelector("#trash");
    let item = document.querySelector(".item");

    trash.addEventListener("click", function () {
      item.parentElement.remove();
    });
    p.addEventListener("click", () => {
      p.classList.toggle("line-through");
    });
    let pen = document.querySelector("#pen");
    pen.addEventListener("click", (e) => {
        console.log(e);
      input.value = e.target.closest("li").querySelector("p").textContent;
      input.focus();
      editing = e.target.closest("li"); 
    });
    input.value = "";
  }
});
function darkMode() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.querySelector("input").style.backgroundColor = "black";
  document.querySelector("input").style.border = "1px solid white";
  document.querySelector("#search1").style.color = "white";
  document.querySelector("#moon").style.display = "none";
  document.querySelector("#sun").style.display = "block";
  document.querySelector(".line-trough").style.color = "white";
}
function lightMode() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelector("input").style.backgroundColor = "white";
  document.querySelector("input").style.border = "1px solid #6c63ff";
  document.querySelector("#search1").style.color = "#6c63ff";
  document.querySelector("#moon").style.display = "block";
  document.querySelector("#sun").style.display = "none";
  document.querySelector(".line-trough").style.color = "#25252580";
} 

document.querySelector("#moon").addEventListener("click", darkMode);
document.querySelector("#sun").addEventListener("click", lightMode);

document.querySelector("#search1").addEventListener("click", () => {
  let allP = document.querySelectorAll("p");
  console.log(allP);
  for (one of allP) {
    if (one.textContent.toLowerCase() == input.value.toLowerCase()) {
      alert("Malumot topildi");
      break;
    } else {
      alert("Malumot topilmadi");
      break;
    }
  }
});
