let { h, Component, render } = await Import("preact");
let htm = await Import("htm");
let html = htm.bind(h);
export default function () {
  return html`<${Failure} className="text-indigo-600">Hello Reejs!</>`;
}

export function REE() {
    return html`<h1 className="text-indigo-600">This Page got errored out! REEEEEEEEEEEEE!!!</h1>
    <p>But it was handled!</p>
    <p>Check <a href="/__reejs/status/500">here</a> what would have happened if we didn't use Custom Error Page</p>`;
}

/* REEJS_SERVER_SIDE_START */
export function head() {
  return html`<title>This should render error ngl...</title>`;
}

export let config = {
  hydrate: false,
}
/* REEJS_SERVER_SIDE_END */