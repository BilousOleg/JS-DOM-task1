'use strict';

// Завдання 1

const newSectionEl = document.createElement('section');

// Тут можна додати перевірку при створенні id, але я думаю, що робити елемент рутовим двічі ніхто не буде
newSectionEl.setAttribute('id', 'root');
newSectionEl.textContent = 'Lorem ipsum';
newSectionEl.style.color = 'blue';

document.body.append(newSectionEl);

// Завдання 2

try {
  const divElement = document.querySelector('.toChange');

  // Перевірка на той випадок, коли такого елемента не буде в розмітці
  if (!divElement) {
    throw new Error('element not found');
  }

  divElement.style.backgroundColor = 'purple';
  divElement.style.color = 'white';
} catch (error) {
  console.error(error);
}
