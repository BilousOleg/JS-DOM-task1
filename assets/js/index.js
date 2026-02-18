'use strict';

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
