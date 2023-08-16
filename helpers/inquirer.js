import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.log("============================".green);
  console.log("   Seleccione una opción".green);
  console.log("============================\n".green);

  const { option } = await inquirer.prompt(preguntas);
  return option;
};

export const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "option",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  const { option } = await inquirer.prompt(question);
  return option;
};

export const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
};
