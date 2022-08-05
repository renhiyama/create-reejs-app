import ree from "reejs";
globalThis.ree = ree;
if (ree.canRun){
    ree.server.listen(parseInt(process.argv[2]) || 3000);
}