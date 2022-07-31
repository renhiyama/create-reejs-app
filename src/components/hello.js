let { h } = await Import("preact");
let htm = await Import('htm');
let html = htm.bind(h);
export default function (props) {
    return html`<span className="text-bold">Hello</span>
    `;
}