import { h, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

function App(props) {
  /*
   * This will fail eslint-plugin-compat until a polyfill is added
   */
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

  return html`<p>Hello ${props.name}! I got created from a bundle</p>`;
}

render(html`<${App} name="World" />`, document.getElementById('mount'));
