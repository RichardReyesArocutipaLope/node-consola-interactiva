import colors from "colors";
import {
  inquirerMenu,
  leerInput,
  listadoTareaBorrar,
  pausa,
} from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) tareas.cargarTareasFromArray(tareasDB);

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "6":
        const id = await listadoTareaBorrar(tareas.listadoArr);
        console.log(id);
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
