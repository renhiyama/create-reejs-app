let HelloEl = await Import("/src/components/hello.js", { absolutePath: true });
export default function({req}){
  return ree.html`<h1><${HelloEl} /> ${req.context.params?.name}!</h1>`;
}

/* REEJS_SERVER_SIDE_START */
export let config = {
  shallowRender: false,
  hydrate: true,
  preloadComponents: ["/src/components/hello.js"],
  checkRoute: "/name/failure"
};
/* REEJS_SERVER_SIDE_END */