'use strict';

const newSectionEl = document.createElement('section');

newSectionEl.setAttribute('id', 'root');
newSectionEl.textContent = 'Lorem ipsum';
newSectionEl.style.color = 'blue';

document.body.append(newSectionEl);
