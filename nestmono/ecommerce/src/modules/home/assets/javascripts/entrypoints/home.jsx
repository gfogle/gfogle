import { h, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

function App(props) {
  return html`<p>Hello ${props.name}! I got created from a bundle</p>`;
}

render(html`<${App} name="World" />`, document.getElementById('mount'));
