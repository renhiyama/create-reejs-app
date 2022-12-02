//generate a fake error, catch and save the call stack
const error = new Error('This is a fake error');
const stack = error.stack;
const sampleCode = `const error = new Error('This is a fake error');`;
export default function () {
  return (
    <div className="h-screen-min bg-gradient-to-r from-sky-500 to-fuchsia-500 py-16 px-8">
      <div className="bg-slate-800 p-8 text-white border-slate-900 border-2 rounded-md">
        <h1 className="font-bold text-4xl">
          ReferenceError: <p className="text-rose-600 font-thin text-6xl capitalize">f
            is not defined</p>
        </h1>
        <hr className="border-slate-600 my-4" />
        <h1 className="font-bold text-4xl text-slate-300">Call Stack:</h1>
        <div className="grid grid-cols-8 gap-4 mt-4">
          <pre className="col-span-5 p-8 rounded-md border-2 border-slate-900 block whitespace-nowrap">
            <code>
              { /* convert stack links to hrefs, like file://hello.js to <a href="/__reejs/file/hello.js">file://hello.js</a> */}
              {stack.split("\n").map(a => {
                //replace file:// with /__reejs/file/ ahref to file
                const file = a.replace(/file:\/\/(.*)/, '<a class="text-rose-600 underline" href="/__reejs/file/$1">$&</a>');
                //replace http:// with /__reejs/http/ ahref to http
                const http = file.replace(/http:\/\/(.*)/, '<a class="text-rose-600 underline" href="http://$1">$&</a>');
                //replace https:// with /__reejs/https/ ahref to https
                const https = http.replace(/https:\/\/(.*)/, '<a class="text-rose-600 underline" href="https://$1">$&</a>');
                return `<p>${https}</p>`;
              }).join("\n")}
            </code>
          </pre>
          <pre className="col-span-3 p-8 rounded-md border-2 border-slate-900 language-js line-numbers" data-start={3}><code>
            { /* show sample js code as html */}
            {sampleCode.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </code></pre>
        </div>
      </div>
    </div>
  );
}

export function head() {
  return <>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.css"></link>
    <link rel="stylesheet" href="/__reejs/serve/css/code.css"></link>
  </>
}