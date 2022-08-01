import ree from "reejs";
globalThis.ree = ree;
if(ree.isEnabled){
    import("./main.js");
}