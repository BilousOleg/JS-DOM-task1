'use strict';

const newSectionEl = document.createElement('section');

// Тут можна додати перевірку при створенні id, але я думаю, що робити елемент рутовим двічі ніхто не буде
newSectionEl.setAttribute('id', 'root');
newSectionEl.textContent = 'Lorem ipsum';
newSectionEl.style.color = 'blue';

document.body.append(newSectionEl);
