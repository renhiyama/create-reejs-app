globalThis.getData = function(){
 return null;
}
if(!globalThis.React) globalThis.React = await Import("react");
 export default class Index extends React.Component {
  add() {
    let { num = getData() || 0 } = this.state;
    this.setState({ num: ++num });
  }
  subtract() {
    let { num = getData() || 0 } = this.state;
    this.setState({ num: --num });
  }
  log() {
    let { num = getData() || 0 } = this.state;
    this.setState({ num: num });
    console.log(num);
  }
  render({ data }, { num = getData() || 0 }) {
    return ree.html`<div
    data-theme="default"
    className="min-h-screen bg-gradient-to-t from-white-text to-rain dark:from-scary-dark dark:to-bg">
      
      <p className="text-indigo-500">
        Hello <span className="text-indigo-600">${data?.query?.world || "World!"}</span>
      </p>
      <div className="mx-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          className="rounded-md bg-indigo-600 text-white p-2"
          onclick=${() => {
            this.add();
          }}
        >
          Add 1
        </button>
        <button
          className="rounded-md bg-green-500 text-white p-2"
          onclick=${() => {
            this.subtract();
          }}
        >
          Remove 1
        </button>
        <div className="rounded-md bg-red-500 text-white p-2 text-center">Balance: ${num}</div>
        <button
          className="rounded-md bg-indigo-600 text-white p-2"
          onclick=${() => {
            location.reload()
          }}
        >
          Reload Site
        </button>
        <a
          className="rounded-md bg-red-500 text-white p-2 text-center"
          href="/"
        >
          Goto Failure Management
        </a>
        <button
          className="rounded-md bg-green-500 text-white p-2"
          onclick=${() => {
            let sus = prompt("Enter a number to be shown on next page");
            ree.router.load(`/test/${sus}`);
          }}
        >
          Goto Test Page
        </button>
      </div>
    </div>`;
  }
}

export function head() {
  return <><title>Hola Amigos!</title>
  <link rel="stylesheet" href="/__reejs/serve/test.css" /></>;
}

export let config = {
  hydrate: true,
  cache: true,
  twindSSR: true,
  body: (p)=><body className="dark"><div id="app">{(p.children || " ")}</div></body>
}