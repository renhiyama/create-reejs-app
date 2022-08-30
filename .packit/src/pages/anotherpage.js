export default function () {
  return ree.html`<main className="h-screen bg-red-600 flex items-center justify-center">
  <h1
    className="font-bold /* you can even use inline comments */ text-white text-7xl"
  >
    Hola AmongUS!
  </h1>
  <a className="text-violet-800 text-5xl" href="/">Click Me to Go Home!</a>
</main>`;
}

export function head() {
  return ree.html`<title>Hola Amigos!</title>`;
}

export let config = {
  hydrate: false,
  cache: true,
  twind: true
}