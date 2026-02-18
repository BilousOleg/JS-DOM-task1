'use strict';

try {
  let userName = prompt("Введіть своє ім'я");

  // Якщо не натиснуто на "Відмінити"
  if (userName !== null) {
    userName = userName.trim();

    // Вирішив додати обробку порожнього імені
    if (userName.length === 0) {
      throw new RangeError('user name cannot be empty');
    }

    const userNameElement = document.createElement('h1');
    userNameElement.textContent = `Вітаю, ${userName}`;
    document.body.append(userNameElement);
  }
} catch (error) {
  console.error(error);
}
