export default function () {
  return <main className="min-h-screen bg-indigo-600">
  <div className="flex items-center justify-center">
    <h1 className="font-bold /* you can even use inline comments */ text-white text-7xl">
      Welcome To Ree.js!
    </h1>
  </div>    
<a className="mt-96 pt-96 text-violet-800 text-5xl" href="/anotherpage">Click Me if you sus!</a>
</main>;
}

export function head() {
  return <title>Hey there!</title>;
}

export let config = {
  hydrate: true,
  runAfterInit: async () => {
    let c = await Import("https://esm.sh/canvas-confetti@1.5.1");
    let main = $("main");
    let previousC = "indigo";
    let list = ["indigo", "red", "purple", "green", "gray", "blue"];
    setInterval(() => {
      main.classList.remove(`bg-${previousC}-600`);
      let newC = list[Math.floor(Math.random() * list.length)];
      main.classList.add(`bg-${newC}-600`);
      previousC = newC;
    }, 1000);
    c();
  },
  cache: true,
  twind: true
}