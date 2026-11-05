let userName = "Alex";
let age = 18;
let subscription = "free";
let lastLogin = 18;

let validateAge = function (age) {
  if (typeof age === "number" && age > 0) {
    return true;
  } else {
    return confirm("Кушай кашу, малыш!");
  }
};

function validateName(userName) {
  if (userName === "") {
    alert("Имя не должно быть пустым!");
  }
}

let validateSubscription = (subscription) => {
  if (
    subscription === "free" ||
    subscription === "basic" ||
    subscription === "premium"
  ) {
    return true;
  } else {
    return false;
  }
};

function getTimeOfDay(time) {
  if (time >= 5 && time <= 11) {
    return "утро";
  } else if (time >= 12 && time <= 17) {
    return "день";
  } else if (time >= 18 && time <= 21) {
    return "вечер";
  } else if (time >= 22 || time <= 4) {
    return "ночь";
  } else {
    return "неверное время";
  }
}

function getAccessLevel() {
  if (subscription === "premium") {
    return "Понлный доступ";
  } else if (subscription === "basic") {
    return "Ограниченный доступ";
  } else if (subscription === "free") {
    return "Доступ только к бесплатному контенту";
  } else if (subscription === undefined) {
    return "Ошибка";
  }
}

function displayUserInfo() {
  let timeOfDay = getTimeOfDay(lastLogin);
  let accessLevel = getAccessLevel();

  console.log(
    `Привет, ${userName}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`,
  );
}
