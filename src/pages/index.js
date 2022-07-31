let { h, Component, render } = await Import("preact");
let htm = await Import("htm");
let html = htm.bind(h);
export default function () {
  let logIt = (elements) => {
    console.log(elements);
  };

  return html`<h1 className="text-indigo-600">Hello Reejs!</h1>
  <${Form} onSubmit=${logIt}>
    <input type="text" placeholder="Name" />
    <button type="submit">Submit</button>
  </${Form}>`;
}

export function Form(props) {
  return html`<form onsubmit=${(event)=>{
      event.preventDefault();
      props.onSubmit(event.target.elements);
  }}
  method=${props.post}
  >
  ${props.children}
</form>
  `;
}

/* REEJS_SERVER_SIDE_START */
export function head() {
  return html`<title>I like this!</title>`;
}

export let config = {
  hydrate: true,
}
/* REEJS_SERVER_SIDE_END */