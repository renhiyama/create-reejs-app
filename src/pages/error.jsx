export default function () {
  return (
    <div className="bg-indigo-600 min-h-screen p-8 md:p-16 md:px-32">
      <div className="bg-slate-800 rounded-md p-8 min-h-screen">
        <h1 className="text-red-500 font-bold text-6xl">Error!</h1>
        <div className="border-t-2 border-slate-500" />
        <div className="grid md:grid(">
          <div>
            <h3 className="text-yellow-400 font-semibold text-3xl py-4 ">
              Syntax Error:
            </h3>
            <div className="bg-slate-900 rounded-md p-4 text-white font-mono">
              <p>hmm</p>
            </div>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold text-3xl py-4">
              Source Code:
            </h3>
            <div className="bg-slate-900 rounded-md p-4 text-white font-mono">
              <p>another hmm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
