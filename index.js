import reejs from "reejs";
globalThis.reejs = reejs;
if(reejs.isEnabled){
    import("./main.js");
}