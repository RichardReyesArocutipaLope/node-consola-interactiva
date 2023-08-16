import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer",
    choices: ["opt1", "opt2", "opt3"],
  },
];

export const inquirerMenu = async () => {
  console.clear();

  console.log("============================".green);
  console.log("   Seleccione una opción".green);
  console.log("============================\n".green);

  const opt = await inquirer.prompt(preguntas);
  return opt;
};
