const likertOptions = [
  {
    id: 1,
    text: "😁 Siempre",
  },
  {
    id: 2,
    text: "😊 Casi siempre",
  },
  {
    id: 3,
    text: "🤔 Algunas veces",
  },
  {
    id: 4,
    text: "😒 Casi nunca",
  },
  {
    id: 5,
    text: "😡 Nunca",
  },
];

const yesNoOptions = [
  { id: 1, label: "Sí", value: true },
  { id: 2, label: "No", value: false },
];

export const GUIA_3 = {
  id: "1",
  name: "GUÍA DE REFERENCIA 3",
  description:
    "CUESTIONARIO PARA IDENTIFICAR LOS FACTORES DE RIESGO PSICOSOCIAL Y EVALUAR EL ENTORNO ORGANIZACIONAL EN LOS CENTROS DE TRABAJO",
  questions: [
    {
      id: "700",
      itemId: null,
      text: "Soy jefe de otros trabajadores",
      instructions:
        "Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.",
      answerType: "YES_NO",
      options: [...yesNoOptions],
    },
    {
      id: "1",
      itemId: 1,
      text: "El espacio donde trabajo me permite realizar mis actividades de manera segura e higiénica",
      instructions:
        "Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "2",
      itemId: 2,
      text: "Mi trabajo me exige hacer mucho esfuerzo físico",
      instructions:
        "Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "3",
      itemId: 3,
      text: "Me preocupa sufrir un accidente en mi trabajo",
      instructions:
        "Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "4",
      itemId: 4,
      text: "Considero que en mi trabajo se aplican las normas de seguridad y salud en el trabajo",
      instructions:
        "Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "5",
      itemId: 5,
      text: "Considero que las actividades que realizo son peligrosas",
      instructions:
        "Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "6",
      itemId: 6,
      text: "Por la cantidad de trabajo que tengo debo quedarme tiempo adicional a mi turno",
      instructions:
        "Para responder a las preguntas siguientes piense en la cantidad y ritmo de trabajo que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "7",
      itemId: 7,
      text: "Por la cantidad de trabajo que tengo debo trabajar sin parar",
      instructions:
        "Para responder a las preguntas siguientes piense en la cantidad y ritmo de trabajo que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "8",
      itemId: 8,
      text: "Considero que es necesario mantener un ritmo de trabajo acelerado",
      instructions:
        "Para responder a las preguntas siguientes piense en la cantidad y ritmo de trabajo que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "9",
      itemId: 9,
      text: "Mi trabajo exige que esté muy concentrado",
      instructions:
        "Las preguntas siguientes están relacionadas con el esfuerzo mental que le exige su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "10",
      itemId: 10,
      text: "Mi trabajo requiere que memorice mucha información",
      instructions:
        "Las preguntas siguientes están relacionadas con el esfuerzo mental que le exige su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "11",
      itemId: 11,
      text: "En mi trabajo tengo que tomar decisiones difíciles muy rápido",
      instructions:
        "Las preguntas siguientes están relacionadas con el esfuerzo mental que le exige su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "12",
      itemId: 12,
      text: "Mi trabajo exige que atienda varios asuntos al mismo tiempo",
      instructions:
        "Las preguntas siguientes están relacionadas con el esfuerzo mental que le exige su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "13",
      itemId: 13,
      text: "En mi trabajo soy responsable de cosas de mucho valor",
      instructions:
        "Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "14",
      itemId: 14,
      text: "Respondo ante mi jefe por los resultados de toda mi área de trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "15",
      itemId: 15,
      text: "En el trabajo me dan órdenes contradictorias",
      instructions:
        "Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "16",
      itemId: 16,
      text: "Considero que en mi trabajo me piden hacer cosas innecesarias",
      instructions:
        "Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "17",
      itemId: 17,
      text: "Trabajo horas extras más de tres veces a la semana",
      instructions:
        "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "18",
      itemId: 18,
      text: "Mi trabajo me exige laborar en días de descanso ,festivos o fines de semana",
      instructions:
        "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "19",
      itemId: 19,
      text: "Considero que el tiempo en el trabajo es mucho y  perjudica mis actividades familiares o personales",
      instructions:
        "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "20",
      itemId: 20,
      text: "Debo atender asuntos de trabajo cuando estoy en casa",
      instructions:
        "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "21",
      itemId: 21,
      text: "Pienso en las actividades familiares o personales cuando estoy en mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "22",
      itemId: 22,
      text: "Pienso que mis responsabilidades familiares afectan mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "23",
      itemId: 23,
      text: "Mi trabajo permite que desarrolle nuevas habilidades",
      instructions:
        "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "24",
      itemId: 24,
      text: "En mi trabajo puedo aspirar a un mejor puesto",
      instructions:
        "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "25",
      itemId: 25,
      text: "Durante mi jornada de trabajo puedo tomar pausas cuando las necesito",
      instructions:
        "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "26",
      itemId: 26,
      text: "Puedo decidir cuánto trabajo realizo durante la jornada laboral",
      instructions:
        "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "27",
      itemId: 27,
      text: "Puedo decidir la velocidad a la que realizo mis actividades en mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "28",
      itemId: 28,
      text: "Puedo cambiar el orden de las actividades que realizo en mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "29",
      itemId: 29,
      text: "Los cambios que se presentan en mi trabajo dificultan mi labor",
      instructions:
        "Las preguntas siguientes están relacionadas con cualquier tipo de cambio que ocurra en su trabajo (considere los últimos cambios realizados).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "30",
      itemId: 30,
      text: "Cuando se presentan cambios en mi trabajo se tienen en cuenta mis ideas o aportaciones",
      instructions:
        "Las preguntas siguientes están relacionadas con cualquier tipo de cambio que ocurra en su trabajo (considere los últimos cambios realizados).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "31",
      itemId: 31,
      text: "Me informan con claridad cuáles son mis funciones",
      instructions:
        "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "32",
      itemId: 32,
      text: "Me explican claramente los resultados que debo obtener en mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "33",
      itemId: 33,
      text: "Me explican claramente los objetivos de mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "34",
      itemId: 34,
      text: "Me informan con quién puedo resolver problemas o asuntos de trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "35",
      itemId: 35,
      text: "Me permiten asistir a capacitaciones relacionadas con mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "36",
      itemId: 36,
      text: "Recibo capacitación útil para hacer mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "37",
      itemId: 37,
      text: "Mi jefe ayuda a organizar mejor el trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "38",
      itemId: 38,
      text: "Mi jefe tiene en cuenta mis puntos de vista y opiniones",
      instructions:
        "Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "39",
      itemId: 39,
      text: "Mi jefe me comunica a tiempo la información relacionada con el trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "40",
      itemId: 40,
      text: "La orientación que me da mi jefe me ayuda a realizar mejor mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "41",
      itemId: 41,
      text: "Mi jefe ayuda a solucionar los problemas que se presentan en el trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "42",
      itemId: 42,
      text: "Puedo confiar en mis compañeros de trabajo",
      instructions:
        "Las preguntas siguientes se refieren a las relaciones con sus compañeros.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "43",
      itemId: 43,
      text: "Entre compañeros solucionamos los problemas de trabajo de forma respetuosa",
      instructions:
        "Las preguntas siguientes se refieren a las relaciones con sus compañeros.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "44",
      itemId: 44,
      text: "En mi trabajo me hacen sentir parte del grupo",
      instructions:
        "Las preguntas siguientes se refieren a las relaciones con sus compañeros.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "45",
      itemId: 45,
      text: "Cuando tenemos que realizar trabajo de equipo los compañeros colaboran",
      instructions:
        "Las preguntas siguientes se refieren a las relaciones con sus compañeros.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "46",
      itemId: 46,
      text: "Mis compañeros de trabajo me ayudan cuando tengo dificultades",
      instructions:
        "Las preguntas siguientes se refieren a las relaciones con sus compañeros.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "47",
      itemId: 47,
      text: "Me informan sobre lo que hago bien en mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "48",
      itemId: 48,
      text: "La forma como evalúan mi trabajo en mi centro de trabajo me ayuda a mejorar mi desempeño",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "49",
      itemId: 49,
      text: "En mi centro de trabajo me pagan a tiempo mi salario",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "50",
      itemId: 50,
      text: "El pago que recibo es el que merezco por el trabajo que realizo",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "51",
      itemId: 51,
      text: "Si obtengo los resultados esperados en mi trabajo me recompensan o reconocen",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "52",
      itemId: 52,
      text: "Las personas que hacen bien el trabajo pueden crecer laboralmente",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "53",
      itemId: 53,
      text: "Considero que mi trabajo es estable",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "54",
      itemId: 54,
      text: "En mi trabajo existe continua rotación de personal",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "55",
      itemId: 55,
      text: "Siento orgullo de laborar en este centro de trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "56",
      itemId: 56,
      text: "Me siento comprometido con mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "57",
      itemId: 57,
      text: "En mi trabajo puedo expresarme libremente sin interrupciones",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "58",
      itemId: 58,
      text: "Recibo críticas constantes a mi persona y/o trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "59",
      itemId: 59,
      text: "Recibo burlas, calumnias, difamaciones, humillaciones o ridiculizaciones",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "60",
      itemId: 60,
      text: "Se ignora mi presencia o se me excluye de las reuniones de trabajo y en la toma de decisiones",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "61",
      itemId: 61,
      text: "Se manipulan las situaciones de trabajo para hacerme parecer un mal trabajador",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "62",
      itemId: 62,
      text: "Se ignoran mis éxitos laborales y se atribuyen a otros trabajadores",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "63",
      itemId: 63,
      text: "Me bloquean o impiden las oportunidades que tengo para obtener ascenso o mejora en mi trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "64",
      itemId: 64,
      text: "He presenciado actos de violencia en mi centro de trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "65",
      itemId: null,
      text: "En mi trabajo debo brindar servicio a clientes o usuarios",
      instructions:
        "Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.",
      answerType: "YES_NO",
      options: [...yesNoOptions],
    },
    {
      id: "66",
      itemId: 65,
      dependsOn: {
        id: 1,
        questionId: "65",
        spectedResponse: true,
      },
      text: "Atiendo clientes o usuarios muy enojados",
      instructions:
        "Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "67",
      itemId: 66,
      dependsOn: {
        id: 1,
        questionId: "65",
        spectedResponse: true,
      },
      text: "Mi trabajo me exige atender personas muy necesitadas de ayuda o enfermas",
      instructions:
        "Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "68",
      itemId: 67,
      dependsOn: {
        id: 1,
        questionId: "65",
        spectedResponse: true,
      },
      text: "Para hacer mi trabajo debo demostrar sentimientos distintos a los míos",
      instructions:
        "Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "69",
      itemId: 68,
      dependsOn: {
        id: 1,
        questionId: "65",
        spectedResponse: true,
      },
      text: "Mi trabajo me exige atender situaciones de violencia",
      instructions:
        "Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "70",
      itemId: null,
      text: "Soy jefe de otros trabajadores",
      instructions:
        "Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.",
      answerType: "YES_NO",
      options: [...yesNoOptions],
    },
    {
      id: "71",
      itemId: 69,
      dependsOn: {
        id: 1,
        questionId: "70",
        spectedResponse: true,
      },
      text: "Comunican tarde los asuntos de trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "72",
      itemId: 70,
      dependsOn: {
        id: 1,
        questionId: "70",
        spectedResponse: true,
      },
      text: "Dificultan el logro de los resultados del trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "73",
      itemId: 71,
      dependsOn: {
        id: 1,
        questionId: "70",
        spectedResponse: true,
      },
      text: "Cooperan poco cuando se necesita",
      instructions:
        "Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
    {
      id: "74",
      itemId: 72,
      dependsOn: {
        id: 1,
        questionId: "70",
        spectedResponse: true,
      },
      text: "Ignoran las sugerencias para mejorar su trabajo",
      instructions:
        "Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.",
      answerType: "LIKERT",
      options: [...likertOptions],
    },
  ],
};
