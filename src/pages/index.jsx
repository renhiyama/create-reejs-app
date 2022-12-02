export default function () {
  return <main className="min-h-screen bg-emerald-600">
  <div className="flex items-center justify-center">
    <h1 className="font-bold /* you can even use inline comments */ text-white text-7xl">
      Welcome To Ree.js!
    </h1>
  </div>    
<a className="mt-96 pt-96 text-violet-800 text-5xl" href="/anotherpage">Click Me if you sus!</a>
</main>;
}

export function head() {
  return <>
  <title>Hey there!</title>
  </>;
}

export let config = {
  hydrate: false,
  runAfterInit: async () => {
    let c = await Import("https://esm.sh/canvas-confetti@1.5.1");
    c();
  },
  cache: true,
  twindSSR: true
}