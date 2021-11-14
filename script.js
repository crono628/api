const img = document.querySelector('img');
const body = document.querySelector('body');
const input = document.querySelector('input');
const form = document.forms[0];
let theArray = [];
const getData = (search) => {
  img.src = '#';
  fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=ANIJA3rCnAySYPvxmFd5SOli9wX62Gp5&q=' +
      search,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      theArray.push(response);
    });
};

function render() {
  let i = 0;

  while (i < theArray.length) {
    let ele = theArray[0].data[i].url;
    dom('img', { src: ele }, null, body);
    i++;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(`${input.value}`);
  render();
});

function dom(element, attributes = {}, text, parent) {
  const elem = document.createElement(element);
  if (attributes) {
    Object.assign(elem, attributes);
  }
  if (text) {
    elem.innerText = text;
  }
  if (parent) {
    parent.appendChild(elem);
  }
  return elem;
}
