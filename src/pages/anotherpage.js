let { h, Component, render } = await Import("preact");
let htm = await Import("htm");

let html = htm.bind(h);
export default function () {
  return html`<main className="h-screen bg-red-600 flex items-center justify-center">
  <h1
    className="font-bold /* you can even use inline comments */ text-white text-7xl"
  >
    Hola AmongUS!
  </h1>
  <a className="text-violet-800 text-5xl" href="/">Click Me to Go Home!</a>
</main>`;
}

/* REEJS_SERVER_SIDE_START */
export function head() {
  return html`<title>Hola Amigos!</title>`;
}

export let config = {
  hydrate: false,
  cache: true,
  twind: true
}
/* REEJS_SERVER_SIDE_END */