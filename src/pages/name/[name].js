let HelloEl = await Import("/src/components/hello.js", { absolutePath: true });
let { h, Component, render } = await Import("preact");
let htm = await Import("htm");
let html = htm.bind(h);
let getData = () => {
  return 0;
};
let pushData = ()=>{};
let removeData = ()=>{};
export default class Index extends Component {
  add() {
    let { num = getData() || 0 } = this.state;
    this.setState({ num: ++num });
    pushData(num);
  }
  subtract() {
    let { num = getData() || 0 } = this.state;
    this.setState({ num: --num });
    pushData(num);
  }
  log() {
    let { num = getData() || 0 } = this.state;
    this.setState({ num: num });
    console.log(num);
    pushData(num);
  }
  clear() {
    removeData();
    this.setState({ num: 0 });
    console.log("Wiped out!");
  }
  render({ data }, { num = getData() || 0 }) {
    return html`<${HelloEl} />
            <button
              className="btn-blurple"
              onclick=${() => {
      this.add();
    }}
            >
              Add 1
            </button>
            <button
              className="btn-green"
              onclick=${() => {
      this.subtract();
    }}
            >
              Remove 1
            </button>
            <div
              className="btn-red text-center"
              onclick=${() => {
      this.log();
    }}
            >
              Balance: ${num}
            </div>
            <button
              className="btn-green"
              onclick=${() => {
      this.clear();
    }}
            >
              Clear Data
            </button>
            `;
  }
}
/* REEJS_SERVER_SIDE_START */
export let config = {
  shallowRender: false,
  hydrate: true,
  preloadComponents: ["/src/components/hello.js"],
};
/* REEJS_SERVER_SIDE_END */