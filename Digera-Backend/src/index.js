const app = require("./app");

async function main() {
  await app.listen(process.env.PORT);
  console.log(`Server running: http://localhost:${process.env.PORT} ✅`);
}

main();