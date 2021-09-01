import '/src/style.css';
import { createElement } from './create-element';
import { menu } from './variables';
import { adaptMenu, showSecondary, debounce } from './helper-functions';
import { create } from 'lodash';

const createHeader = () => {
  const container = createElement('div', {
    id: 'header-container',
    class: 'header',
  });

  const h2 = createElement('h2', {
    id: 'header-h2',
    class: '',
  });
  h2.textContent = 'Minimize screen to see menu bar magic';

  container.appendChild(h2);
  document.body.appendChild(container);
};

const createMenuBar = () => {
  const wrapper = createElement('nav', {
    id: 'menu-wrapper',
    class: 'wrapper',
  });

  const ul = createElement('ul', {
    id: 'primary-ul',
    class: 'primary',
  });

  menu.forEach((item, index) => {
    let element = createElement('li', {
      id: `menu-item-${index}`,
      class: '',
    });

    let a = createElement('a', {
      id: `primary-a-href-${index}`,
      class: '',
      target: 'blank',
      href: `http://www.google.com/search?q=${item}`,
    });

    a.textContent = item;
    element.appendChild(a);
    ul.appendChild(element);
  });

  wrapper.appendChild(ul);
  ul.appendChild(createMoreContainer());
  document.body.appendChild(wrapper);
};

const createMoreContainer = () => {
  const container = createElement('li', {
    id: 'more-container',
    class: 'more',
  });

  const button = createElement(
    'button',
    {
      id: 'button',
      class: 'button',
      type: 'button',
      ariaHaspopup: 'true',
      ariaExpanded: 'false',
    },
    {
      click: showSecondary,
    }
  );

  const optionMenu = createElement('ul', {
    id: 'secondary-ul',
    class: 'secondary',
  });

  menu.forEach((item, index) => {
    const element = createElement('li', {
      id: `more-item-${index}`,
      class: '',
    });

    const a = createElement('a', {
      id: `a-href-${index}`,
      class: '',
      target: 'blank',
      href: `http://www.google.com/search?q=${item}`,
    });

    a.textContent = item;
    element.appendChild(a);
    optionMenu.appendChild(element);
  });

  button.textContent = 'more';

  container.appendChild(button);
  container.appendChild(optionMenu);

  return container;
};

createHeader();
createMenuBar();
adaptMenu();

const debounced = debounce(adaptMenu, 250);
window.addEventListener('resize', debounced);
