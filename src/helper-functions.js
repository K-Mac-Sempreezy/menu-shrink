
const toggleClass = (elem, className) => {
  const classList = elem.getAttribute('class');
  if (classList.includes(className)) {
    const newClasses = classList.replace(className, '').trim();
    elem.setAttribute('class', newClasses);
  } else {
    const newClassList = `${classList} ${className}`;
    elem.setAttribute('class', newClassList);
  }
  return elem;
};

const showSecondary = (e) => {
  const menu = document.getElementById('secondary-ul');
  toggleClass(menu, 'show-secondary');
};

const adaptMenu = () => {
  const navContainer = document.getElementById('menu-wrapper');
  const allItems = navContainer.querySelectorAll('li');
  const button = document.getElementById('button');
  navContainer.classList.add('--jsfied');
  const primary = document.getElementById('primary-ul');
  const primaryItems = navContainer.querySelectorAll('.primary > li:not(.more)');
  const moreContainer = document.getElementById('more-container'); //moreLi
  const secondary = document.getElementById('secondary-ul');
  const secondaryItems = secondary.querySelectorAll('li');


  allItems.forEach((item) => {
    item.classList.remove('hidden');
  })

  // hide items that won't fit in the Primary
  let hiddenItems = []
  let stopWidth = button.offsetWidth
  const primaryWidth = primary.offsetWidth

  primaryItems.forEach((item, index) => {
    if (primaryWidth >= stopWidth + item.offsetWidth) {
      stopWidth += item.offsetWidth
    } else {
      item.classList.add('hidden')
      hiddenItems.push(index)
    }
  })
  
  // toggle the visibility of More button and items in Secondary
  if(!hiddenItems.length) {
    moreContainer.classList.add('hidden')
    secondary.classList.remove('show-secondary');
    button.setAttribute('aria-expanded', false)
  }
  else {  
    secondaryItems.forEach((item, index) => {
      if(!hiddenItems.includes(index)) {
        item.classList.add('hidden');
      }
    })
  }
}

const debounce = (func, wait = 100) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait)
  };
}

export { debounce, adaptMenu, showSecondary, }