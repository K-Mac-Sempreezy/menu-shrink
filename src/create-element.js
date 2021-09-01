const createElement = (tagName, attributes = {}, eventListeners = {}) => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([k, v]) => {
    element.setAttribute(k, v);
  });
  Object.entries(eventListeners).forEach(([key, value]) => {
    if (value.length > 1) {
      value.forEach(val => element.addEventListener(key, val));
    } else {
      element.addEventListener(key, value);
    }
  });
  return element;
};


export { createElement };