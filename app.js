const { mostrarMenu, pause } = require("./helpers/mensajes");

require("colors");

const main = async () => {
  console.log("Hola mundo");

  let opt = "";
  do {
    opt = await mostrarMenu();
    console.log({ opt });
    await pause();
  } while (opt !== "0");
};

main();
