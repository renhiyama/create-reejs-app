(async () => {
  ree.server.listen(parseInt(process.argv[2]) || 3000);
})();