import colors from "colors";
import { inquirerMenu } from "./helpers/inquirer.js";

const main = async () => {
  console.log("Hola mundo");

  let opt = "";
  do {
    opt = await inquirerMenu();
    console.log({ opt });
  } while (opt !== "0");
};

main();
