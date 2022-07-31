(async () => {
  reejs.server.listen(parseInt(process.argv[2]) || 3000);
})()