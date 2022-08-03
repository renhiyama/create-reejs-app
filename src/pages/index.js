let { h, Component, render } = await Import("preact");
let htm = await Import("htm");

let html = htm.bind(h);
export default function () {
  return html`<h1>Hello from Reejs!</h1>`;
}

/* REEJS_SERVER_SIDE_START */
export function head() {
  return html`<title>Hey there!</title>`;
}

export let config = {
  hydrate: true,
  cache: true,
}
/* REEJS_SERVER_SIDE_END */