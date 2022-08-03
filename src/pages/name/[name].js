let HelloEl = await Import("/src/components/hello.js", { absolutePath: true });
let { h, Component, render } = await Import("preact");
let htm = await Import("htm");
let html = htm.bind(h);

export default function({req}){
  return html`<h1><${HelloEl} /> ${req.context.params?.name}!</h1>`;
}

/* REEJS_SERVER_SIDE_START */
export let config = {
  shallowRender: false,
  hydrate: true,
  preloadComponents: ["/src/components/hello.js"],
  checkRoute: "/name/failure"
};
/* REEJS_SERVER_SIDE_END */