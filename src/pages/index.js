let { h, Component, render } = await Import("preact");
let htm = await Import("htm");

let html = htm.bind(h);
export default function () {
  return html`<main className="h-screen bg-indigo-600 flex items-center justify-center">
  <h1
    className="font-bold /* you can even use inline comments */ text-white text-7xl"
  >
    Welcome To Ree.js!
  </h1>
</main>`;
}

/* REEJS_SERVER_SIDE_START */
export function head() {
  return html`<title>Hey there!</title>`;
}

export let config = {
  hydrate: false,
  runAfterInit: async()=>{
    let c = await Import("https://esm.sh/canvas-confetti@1.5.1");
    let main = $("main");
    let previousC = "indigo";
    let list=["indigo","red","purple","green","gray","blue"];
    setInterval(()=>{
      main.classList.remove(`bg-${previousC}-600`);
      let newC = list[Math.floor(Math.random()*list.length)];
      main.classList.add(`bg-${newC}-600`);
      previousC = newC;
    }, 1000);
    c();
  },
  cache: true,
  twind: true
}
/* REEJS_SERVER_SIDE_END */