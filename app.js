const block = document.querySelector(".block");

const mainBlock = document.querySelector(".main");
const totalBlock = document.querySelector(".total");

const player = document.createElement("audio");
let object = {};
const arr = [
  {
    name: "Kay Figo - Kanyelele",
    file: "./music/EA7 - Kay Figo - Kanyelele.mp3",
    id: 0,
    status: "false",
  },
  {
    name: "Мама буду добрым",
    file: "/music/EA7 - Мама буду добрым.mp3",
    id: 1,
    status: "false",
  },
  {
    name: "Track 06",
    file: "/music/EBASH - HOT RUSSIAN WEEKEND - Track 06.mp3",
    id: 2,
    status: "false",
  },
  { name: "Track 02", file: "/music/EBASH - Track 02.mp3", id: 3 },
  { name: "Track 04", file: "/music/EBASH - ВЗРЫВАЕМ - Track 04.mp3", id: 4 },
  {
    name: "ВЗРЫВАЕМ - Track 06",
    file: "/music/EBASH - ВЗРЫВАЕМ - Track 06.mp3",
    id: 5,
    status: "false",
  },
  {
    name: "НЕ БУДИТЕ СПЯЩИХ (BASSBOOSTED) - Track 09",
    file: "/music/EBASH - НЕ БУДИТЕ СПЯЩИХ (BASSBOOSTED) - Track 09.mp3",
    id: 6,
    status: "false",
  },
  {
    name: "САБ НА РАЗРЫВ - Track 05",
    file: "/music/EBASH - САБ НА РАЗРЫВ - Track 05.mp3",
    id: 7,
    status: "false",
  },
  {
    name: "Ellie Goulding - Burn",
    file: "/music/Ellie Goulding - Burn.mp3",
    id: 8,
    status: "false",
  },
  {
    name: "Enrique Iglesias - Push",
    file: "/music/Enrique Iglesias - Push.mp3",
    id: 9,
    status: "false",
  },
  {
    name: "Enrique Iglesias - Tired Of Being Sorry",
    file: "/music/Enrique Iglesias - Tired Of Being Sorry.mp3",
    id: 10,
    status: "false",
  },
  {
    name: "ESkeN - Мир мечтаний",
    file: "/music/ESkeN - Мир мечтаний.mp3",
    id: 11,
    status: "false",
  },
  { name: "F.R. David - Words", file: "/music/F.R. David - Words.mp3", id: 12 },
  {
    name: "Fahmi - Верни Мне Наше Безумство",
    file: "/music/Fahmi - Верни Мне Наше Безумство.mp3",
    id: 13,
    status: "false",
  },
  {
    name: "Feder - Lordly (Original Mix)",
    file: "/music/Feder - Lordly (Original Mix).mp3",
    id: 14,
    status: "false",
  },
  {
    name: "Feder feat. Alex Aiono - Lordly",
    file: "/music/Feder feat. Alex Aiono - Lordly.mp3",
    id: 15,
    status: "false",
  },
  {
    name: "Firebeatz Schella - Switch (Original Mix)",
    file: "/music/Firebeatz Schella - Switch (Original Mix).mp3",
    id: 16,
    status: "false",
  },
  {
    name: "Fredzo Dubstep - Deep Sea",
    file: "/music/Fredzo Dubstep - Deep Sea.mp3",
    id: 17,
    status: "false",
  },
  {
    name: "Fuatov x Volzhanin - Дым в моих легких",
    file: "/music/Fuatov x Volzhanin - Дым в моих легких.mp3",
    id: 18,
    status: "false",
  },
  {
    name: "GAYAZOV$ BROTHER$ - До встречи на танцполе",
    file: "/music/GAYAZOV$ BROTHER$ - До встречи на танцполе.mp3",
    id: 19,
    status: "false",
  },
  {
    name: "GAYAZOV$ BROTHER$ - Кредо",
    file: "/music/GAYAZOV$ BROTHER$ - Кредо.mp3",
    id: 20,
    status: "false",
  },
  {
    name: "Повар на колесах Шеф Chef",
    file: "/music/Gente De Zona - Homenaje Al Beny (Castellano Que Bueno Baila Usted) OST Повар на колесах Шеф Chef.mp3",
    id: 21,
    status: "false",
  },
  {
    name: "Gente De Zona - La Gozadera (ft. Marc Anthony)",
    file: "/music/Gente De Zona - La Gozadera (ft. Marc Anthony).mp3",
    id: 22,
    status: "false",
  },
  {
    name: "Gente de Zona - Sosa",
    file: "/music/Gente de Zona - Sosa.mp3",
    id: 23,
    status: "false",
  },
  {
    name: "GG - Малай билай у-у-у, а-а-а.",
    file: "/music/GG - Малай билай у-у-у, а-а-а..mp3",
    id: 24,
    status: "false",
  },
  {
    name: "Glenn Morrison feat. Islov - Goodbye",
    file: "/music/Glenn Morrison feat. Islov - Goodbye.mp3",
    id: 25,
    status: "false",
  },
  {
    name: "GOLD MUSIC DJ ONIX - Electro-House 2011",
    file: "/music/GOLD MUSIC DJ ONIX - Electro-House 2011 МУЗЫКАЛЬНЫЕ НОВИНКИ http vkontakte.ru club26163284.mp3",
    id: 26,
    status: "false",
  },
];

function newElement(content) {
  const blockEl = document.createElement("div");
  blockEl.classList.add("textElement");
  blockEl.setAttribute("id", content.id);

  const a = document.createElement("p");
  a.classList.add("Ap");
  a.textContent = content.name;

  blockEl.append(a);
  return blockEl;
}

function arNew(content) {
  for (let i = 0; i < content.length; i++) {
    totalBlock.append(newElement(content[i]));
  }
}

arNew(arr);

const textElement = document.querySelectorAll(".textElement");

for (const el of textElement) {
  let a;
  el.addEventListener("click", (event) => {
    delClass();
    el.classList.add("active");

    let num = el.getAttribute("id");
    console.log(num);
    a = arr.find((item) => item.id == +num);
    musicPlayer(a);
    player.play();

    document.querySelector(".buttonPlay").innerHTML = "пауза";
    // mainBlock.innerHTML = "";
    // mainBlock.append(newElement(a));
  });
}

function delClass() {
  textElement.forEach((el) => {
    el.classList.remove("active");
    arr.map((item) => (item.status = false));
  });
}

function musicPlayer(obj = arr[0]) {
  object = obj;
  let num = obj.id;
  document.getElementById(`${num.toString()}`).classList.add("active");
  player.setAttribute("src", obj.file);

  const contentPlayer = document.createElement("div");
  contentPlayer.classList.add("contentPlayer");

  const headerPlayer = document.createElement("div");
  headerPlayer.classList.add("headerPlayer");
  const headersText = document.createElement("div");
  headersText.classList.add("headersText");
  const text = document.createElement("p");
  text.textContent = obj.name;
  headersText.append(text);
  // const headerTime = document.createElement("div");
  // headerTime.classList.add("headerTime");
  headerPlayer.append(headersText);

  const buttonPlayer = document.createElement("div");
  buttonPlayer.classList.add("buttonPlayer");
  // кнопки управления
  const buttonLeft = document.createElement("button");
  buttonLeft.classList.add("buttonLeft");
  buttonLeft.textContent = "назад";

  buttonLeft.addEventListener("click", () => {
    delClass();
    searchTreck(obj, "-");
    headersText.textContent = obj.name;
    document.querySelector(".buttonPlay").textContent = "пауза";
  });

  const buttonPlay = document.createElement("button");
  buttonPlay.classList.add("buttonPlay");
  buttonPlay.textContent = "играть";

  buttonPlay.addEventListener("click", () => {
    if (buttonPlay.innerHTML === "играть") {
      buttonPlay.textContent = "пауза";
      player.play();
    } else {
      buttonPlay.textContent = "играть";
      player.pause();
    }
  });

  const buttonRight = document.createElement("button");
  buttonRight.classList.add("buttonRight");
  buttonRight.textContent = "вперед";

  buttonRight.addEventListener("click", () => {
    delClass();
    searchTreck(obj, "+");
    headersText.textContent = obj.name;
    document.querySelector(".buttonPlay").textContent = "пауза";
    console.log(obj.id);
  });

  const buttonSpisock = document.createElement("button");
  buttonSpisock.classList.add("buttonSpisock");
  buttonSpisock.textContent = "Список";
  buttonSpisock.addEventListener("click", () => {
    if (totalBlock.style.display === "flex") {
      totalBlock.style.display = "none";
      block.classList.remove("blockAtiv");
      buttonSpisock.style.backgroundColor =
        document.querySelector("button").style.backgroundColor;
    } else {
      totalBlock.style.display = "flex";
      block.classList.add("blockAtiv");
      buttonSpisock.style.backgroundColor = "#a39f9f";
    }
  });
  buttonPlayer.append(buttonLeft, buttonPlay, buttonRight, buttonSpisock);

  contentPlayer.append(headerPlayer, buttonPlayer);
  mainBlock.innerHTML = "";
  return mainBlock.append(contentPlayer);
}
function searchTreck(obj, stat) {
  let num = obj.id;
  switch (stat) {
    case "-":
      num -= 1;
      if (num < 0) {
        num = arr.length - 1;
      }
      break;
    case "+":
      num += 1;
      if (num == arr.length) {
        num = 0;
      }
      break;
  }
  let a = arr.find((item) => {
    return item.id == num;
  });
  delClass();
  musicPlayer(a);
  player.play();
}

musicPlayer(arr[0]);
setInterval(() => {
  let timeTreck = player.duration; // Общее время в секундах
  let newTime = player.currentTime; // Текущее время(сколько прошло)
  console.log(Math.floor(newTime, 2), Math.floor(timeTreck));
  if (Math.floor(newTime, 2) == Math.floor(timeTreck, 2)) {
    searchTreck(object, "+");
  }
}, 1000);
