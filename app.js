import colors from "colors";
import { inquirerMenu, pausa } from "./helpers/inquirer.js";
import { Tarea } from "./models/tarea.js";
import { Tareas } from "./models/tareas.js";

const main = async () => {
  let opt = "";
  do {
    // opt = await inquirerMenu();
    // console.log({ opt });

    const tarea = new Tarea("Comprar comida");
    console.log(tarea);

    const tareas = new Tareas();
    console.log(tareas);

    tareas._listado[tarea.id] = tarea;
    console.log(tareas);

    await pausa();
  } while (opt !== "0");
};

main();
