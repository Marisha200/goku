/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Class5TextBlock {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Class5ConditionCard {
  number: number;
  title: string;
  description: string;
}

export interface Class5ExplanationStep {
  step: number;
  title: string;
  description: string;
  exampleGassho: string;
}

export interface Class5ConceptToExplain {
  id: string;
  name: string;
  hint: string;
}

export interface Class5DynamicActivity {
  id: string;
  number: number;
  title: string;
  durationMinutes: number;
  objective: string;
  materials: string;
  development: string[];
  exampleOrSituation: string;
  closure: string;
  variant?: string;
}

export interface Class5MatrixRow {
  goal: string;
  recommendedDynamic: string;
  dynamicId: string;
}

export interface Class5GroupScenario {
  id: string;
  title: string;
  situation: string;
  whatHappens: string;
  groupNeed: string;
  suggestedIntervention: string;
}

export interface Class5FichaImprimible {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  sections: {
    heading: string;
    items: string[];
  }[];
}

export interface Class5MatchItem {
  id: string;
  goal: string;
  correctDynamicId: string;
  explanation: string;
}

export interface Class5SimulatorCase {
  id: string;
  title: string;
  context: string;
  options: {
    label: string;
    isBest: boolean;
    feedback: string;
  }[];
}

export interface Class5QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CLASS5_HERO = {
  title: "Clase V: El Arte de Enseñar",
  quote:
    "Enseñar no es llenar una mente de respuestas, sino despertar el deseo de comprender.",
  intro: [
    "Enseñar es mucho más que transmitir información. Es construir las condiciones para que otra persona pueda comprender, experimentar, preguntar y desarrollar su propia práctica.",
    "En este encuentro exploramos cómo aprenden las personas adultas, cómo explicar con claridad, cómo diseñar actividades significativas y cómo acompañar a un grupo sin perder de vista sus diferencias."
  ],
  objectives: [
    "Reconocer las características del aprendizaje adulto sin encasillar a las personas en estilos fijos.",
    "Explicar conceptos de Reiki con claridad, diferenciando enseñanzas tradicionales, interpretaciones y hechos documentados.",
    "Diseñar dinámicas individuales y grupales con objetivos concretos.",
    "Coordinar una clase respetando distintos ritmos de aprendizaje.",
    "Comprobar si tus alumnos comprendieron una explicación y pueden aplicarla.",
    "Preparar una microclase de Reiki con introducción, desarrollo, práctica y cierre."
  ]
};

export const CLASS5_INICIO = {
  sectionTitle: "Inicio — Enseñar también es aprender",
  badge: "Pantalla 1 · Introducción",
  openingQuote:
    "Quien enseña comparte lo que conoce. Quien permanece dispuesto a aprender descubre cuánto más puede comprender.",
  blocks: [
    {
      title: "De practicante a maestro",
      paragraphs: [
        "Durante nuestra formación en Reiki incorporamos enseñanzas, técnicas y distintas perspectivas filosóficas. Pero enseñar representa un desafío diferente.",
        "Conocer una práctica no significa necesariamente saber explicarla. Podemos realizar una secuencia con naturalidad y, sin embargo, encontrar dificultades cuando intentamos transmitirla a alguien que nunca la experimentó.",
        "Enseñar requiere organizar ideas, seleccionar ejemplos, observar cómo responde el grupo y reconocer cuándo una explicación necesita ser modificada. Un maestro no solo se pregunta qué desea enseñar, sino también: ¿qué necesita comprender la otra persona para poder aprenderlo?"
      ]
    },
    {
      title: "La diferencia entre informar y enseñar",
      paragraphs: [
        "Informar consiste en comunicar un contenido. Enseñar implica facilitar un proceso de aprendizaje.",
        "Podemos explicar durante veinte minutos qué es Gasshō y cuál es su significado dentro de determinadas prácticas japonesas. Pero si los alumnos no comprenden cómo adoptar la postura, cuándo utilizarla o qué propósito tiene dentro de la práctica, la información no se transformó en aprendizaje.",
        "Aprender ocurre cuando alguien puede comprender, relacionar, recordar y aplicar lo que recibió."
      ]
    },
    {
      title: "El maestro también aprende",
      paragraphs: [
        "Cuando enseñamos descubrimos rápidamente qué aspectos comprendemos con claridad y cuáles todavía nos cuesta expresar. Una pregunta inesperada de un alumno puede obligarnos a revisar nuestras certezas.",
        "Por eso, enseñar con Shoshin —mente de principiante— no debilita la autoridad del maestro: la vuelve más honesta, cercana y humana."
      ]
    }
  ] as Class5TextBlock[],
  reflections: [
    "¿Recordás a alguien que te haya enseñado algo con mucha claridad?",
    "¿Qué hacía diferente esa persona?",
    "¿Qué actitudes dificultan que alguien aprenda?"
  ],
  activity: {
    title: "Actividad: Mi recuerdo de aprendizaje",
    instruction:
      "Pensá en una experiencia positiva de aprendizaje que hayas vivido (no necesariamente vinculada a Reiki) y registrá brevemente estos tres ejes:",
    fields: [
      { key: "que", label: "Qué aprendiste", placeholder: "Ej.: aprendí a hacer pan casero / a tocar una canción / a meditar..." },
      { key: "como", label: "Cómo te lo enseñaron", placeholder: "Ej.: me mostraron paso a paso y me dejaron probar sin apuro..." },
      { key: "clima", label: "Qué sentiste durante el proceso", placeholder: "Ej.: confianza para preguntar sin miedo a equivocarme..." }
    ],
    closingNote: "Reconocé qué de esa vivencia querés reproducir cuando enseñes."
  },
  teaching:
    "Enseñar no consiste en demostrar cuánto sabemos. Consiste en acompañar a otros mientras construyen su propia comprensión."
};

export const CLASS5_ADULTO = {
  sectionTitle: "El aprendizaje del adulto — Comprender antes de enseñar",
  badge: "Pantalla 2 · Pedagogía Adulta",
  openingQuote:
    "Las personas no llegan vacías a una clase. Traen su historia, sus preguntas, sus dudas y su manera particular de comprender el mundo.",
  blocks: [
    {
      title: "Aprender no es recibir información pasivamente",
      paragraphs: [
        "A veces imaginamos enseñar como llenar un recipiente vacío: el maestro habla y el alumno incorpora exactamente lo que escucha. Sin embargo, quienes aprenden interpretan lo nuevo desde lo que ya saben, sienten y esperan.",
        "Dos personas pueden escuchar exactamente la misma explicación y comprender aspectos completamente diferentes."
      ]
    },
    {
      title: "La experiencia previa",
      paragraphs: [
        "Las personas adultas llegan con creencias, lecturas previas, experiencias espirituales o terapéuticas y temores o expectativas. Ignorar ese bagaje genera distancia; escucharlo permite tender puentes.",
        "Cuando alguien llega convencido de que Reiki «sirve para diagnosticar enfermedades», no basta con corregir de forma brusca. Conviene explicar con claridad qué hace Reiki, qué pertenece a la tradición y cuáles son los límites responsables de la práctica."
      ]
    },
    {
      title: "La motivación",
      paragraphs: [
        "Las personas adultas aprenden mejor cuando comprenden el sentido de lo que están haciendo.",
        "Saber para qué sirve una técnica, cuándo se aplica y qué aporta a su práctica cotidiana despierta interés genuino. Cuando un contenido parece abstracto o desconectado de la experiencia, la atención disminuye rápidamente."
      ]
    }
  ] as Class5TextBlock[],
  conditions: [
    {
      number: 1,
      title: "Seguridad para preguntar",
      description: "Si los alumnos temen parecer ignorantes o ser juzgados, dejarán de preguntar y simularán haber comprendido."
    },
    {
      number: 2,
      title: "Claridad en los objetivos",
      description: "Comprender qué vamos a trabajar en cada encuentro y para qué sirve reduce la ansiedad y ordena la atención."
    },
    {
      number: 3,
      title: "Participación activa",
      description: "Dialogar, practicar, ensayar y hacerse preguntas consolida el aprendizaje mucho más que escuchar pasivamente."
    },
    {
      number: 4,
      title: "Tiempo para integrar",
      description: "Incorporar demasiados conceptos juntos satura la atención. Es preferible enseñar menos contenidos con mayor profundidad."
    }
  ] as Class5ConditionCard[],
  pacingAndStyles: {
    title: "No todos aprendemos al mismo ritmo",
    paragraphs: [
      "En muchos ámbitos educativos suele hablarse de personas «visuales», «auditivas» o «kinestésicas» como categorías fijas. Aunque esa idea es popular, no existe evidencia científica sólida que respalde que limitar a un estudiante a un supuesto «estilo de aprendizaje» mejore su comprensión.",
      "Lo que sí observamos en cualquier grupo es que algunas personas necesitan más ejemplos concretos, otras comprenden mejor practicando con el cuerpo y otras precisan hacer preguntas antes de probar. Además, una misma persona cambia según el tema o su momento emocional.",
      "Por eso, en lugar de etiquetar a nuestros alumnos, conviene ofrecer explicaciones claras, demostraciones visibles, instancias de práctica y espacio para el diálogo."
    ]
  },
  errorsSection: {
    title: "La importancia del error",
    paragraphs: [
      "Cometer errores forma parte natural del aprendizaje. Cuando alguien duda dónde colocar sus manos, se distrae durante una meditación o confunde un símbolo, no está fracasando: está aprendiendo.",
      "La manera en que el maestro responde frente al error define el clima emocional de la clase."
    ],
    compareLabel: "Compará dos respuestas posibles:",
    wrongResponse: "«Eso está mal. Prestá más atención porque ya lo expliqué.»",
    rightResponse:
      "«Es muy común confundir ese paso al principio. Vamos a mirarlo juntos una vez más.»"
  },
  activity: {
    title: "Actividad: Dos alumnos, una enseñanza",
    situation:
      "Imaginá una clase sobre Gasshō con dos alumnos adultos reales frente a vos:",
    students: [
      {
        name: "Claudia",
        profile: "Le cuesta relajarse y pregunta constantemente si está colocando bien las manos."
      },
      {
        name: "Martín",
        profile: "Escucha en silencio, pero cuando practica parece distraído o incómodo."
      }
    ],
    options: [
      {
        id: "uniforme",
        label: "A) Dar exactamente la misma indicación técnica y pedir que sigan en silencio",
        isRecommended: false,
        feedback:
          "Tratar las dos reacciones como si fueran iguales deja a Claudia con más ansiedad y a Martín desconectado sin poder expresar qué le incomoda."
      },
      {
        id: "etiquetas",
        label: "B) Clasificar a Claudia como «auditiva» y a Martín como «kinestésico» para adaptar la técnica",
        isRecommended: false,
        feedback:
          "Encasillar en estilos fijos no resuelve sus necesidades reales: lo que cambia entre ambos no es un canal sensorial único, sino su nivel de seguridad y comodidad."
      },
      {
        id: "adaptativa",
        label: "C) Sostener el objetivo de Gasshō cambiando el apoyo: dar referencia corporal simple a Claudia y abrir una pausa amable de consulta con Martín",
        isRecommended: true,
        feedback:
          "¡Exacto! Acompañar con criterio significa que podés ofrecerle a Claudia una pauta concreta y tranquila («apoyá las palmas suaves a la altura del pecho, no hace falta forzar perfección») y acercarte luego a Martín para chequear si la postura le resulta incómoda o necesita aclarar algo, manteniendo para ambos el mismo propósito de presencia."
      }
    ]
  },
  teaching:
    "Un buen maestro no enseña como si todos aprendieran igual, ni encasilla a sus alumnos en etiquetas rígidas. Observa, escucha y adapta su acompañamiento sin perder claridad."
};

export const CLASS5_EXPLICAR = {
  sectionTitle: "El arte de explicar — Hacer comprensible lo complejo",
  badge: "Pantalla 3 · Comunicación Pedagógica",
  openingQuote:
    "Cuando alguien no comprende lo que explicamos, no siempre falta capacidad en quien escucha. A veces falta claridad en quien enseña.",
  introParagraphs: [
    "Con el tiempo incorporamos términos propios de Reiki y de la cultura japonesa: Ki, Hara, Byosen, Reiju, Satori, Mushin. Son herramientas útiles entre practicantes, pero para quien recién comienza pueden sonar lejanos o ambiguos.",
    "Además, en el ámbito espiritual muchas veces se utilizan expresiones tan generales que terminan explicando poco. Decir «todo es energía que fluye donde corresponde» puede sonar atractivo, pero deja al alumno sin saber qué hacer concretamente cuando se sienta a practicar."
  ],
  steps: [
    {
      step: 1,
      title: "Nombrar qué vamos a enseñar",
      description: "Presentá el tema de forma directa y simple.",
      exampleGassho: "«Hoy vamos a practicar Gasshō, una postura tradicional que nos ayuda a centrar la atención antes de comenzar.»"
    },
    {
      step: 2,
      title: "Explicar el sentido",
      description: "Contá por qué es importante dentro de la práctica.",
      exampleGassho: "«Nos permite hacer una pausa entre nuestras actividades cotidianas y el momento de la práctica, trayendo la atención a la respiración y al presente.»"
    },
    {
      step: 3,
      title: "Mostrar cómo se realiza",
      description: "Demostrá o describí pasos concretos y observables.",
      exampleGassho: "«Juntamos las palmas frente al pecho, sin apretar con fuerza, relajamos los hombros y respiramos suavemente.»"
    },
    {
      step: 4,
      title: "Dar oportunidad de practicar",
      description: "Invitá al grupo a experimentarlo en el cuerpo.",
      exampleGassho: "«Vamos a sostener esta postura durante un minuto, observando simplemente el aire que entra y sale.»"
    },
    {
      step: 5,
      title: "Verificar qué comprendieron",
      description: "Pedí devoluciones concretas en lugar de preguntas cerradas.",
      exampleGassho: "«¿Qué notaron en el cuerpo o en la atención? ¿Cómo le explicarían en una frase a alguien qué es Gasshō?»"
    }
  ] as Class5ExplanationStep[],
  examplesVsMetaphors: {
    title: "La importancia de los ejemplos (y cuándo cuidar las metáforas)",
    paragraphs: [
      "Un buen ejemplo acerca una idea abstracta a la experiencia cotidiana. Si querés explicar la diferencia entre observar un pensamiento y dejarse arrastrar por él, podés compararlo con escuchar un sonido en la calle sin salir corriendo a ver qué pasa.",
      "Sin embargo, las metáforas tienen límites. Si confundimos una comparación útil con una explicación literal —como presentar la energía como si fuera electricidad, agua en cañerías o un escáner médico—, podemos generar malentendidos difíciles de corregir después.",
      "Por eso siempre conviene aclarar: «Esto es una imagen para comprender mejor la idea, no una descripción literal o científica»."
    ]
  },
  circularExplanations: {
    title: "El peligro de las explicaciones circulares",
    paragraphs: [
      "Una explicación circular define una palabra difícil usando otra igual de oscura.",
      "Por ejemplo: «La sanación sucede cuando armonizamos vibracionalmente el campo energético sutil». Si el alumno pregunta qué significa «campo energético sutil» y respondemos «es el plano vibratorio del ser», no explicamos nada: solo cambiamos de palabras.",
      "Si podés explicar un concepto con palabras cotidianas sin perder profundidad, realmente lo comprendiste."
    ]
  },
  betterQuestions: {
    title: "Las preguntas como herramienta",
    intro: "Preguntar «¿Se entendió?» suele generar respuestas automáticas de cortesía («Sí») aunque queden dudas.",
    betterList: [
      "«¿Qué parte les resultó más clara y cuál todavía genera dudas?»",
      "«¿Cómo se lo explicarían con sus palabras a un amigo?»",
      "«¿En qué momento de una sesión aplicarían esto?»"
    ]
  },
  activity: {
    title: "Actividad: Explicar sin complicar",
    subtitle: "Elegí uno de estos cinco conceptos de Reiki y redactá cómo se lo explicarías a alguien que nunca practicó.",
    maxWords: 100,
    concepts: [
      { id: "gassho", name: "Gasshō", hint: "Postura de manos juntas frente al pecho para centrarse." },
      { id: "reiju", name: "Reiju", hint: "Ceremonia tradicional de acompañamiento y sintonización." },
      { id: "byosen", name: "Byosen", hint: "Percepción de sensaciones en las manos durante la sesión sin diagnosticar." },
      { id: "gokai", name: "Los cinco principios de Usui", hint: "Brújula ética diaria para vivir con calma, gratitud y respeto." },
      { id: "shoshin", name: "Shoshin", hint: "Actitud de mente de principiante abierta a observar y aprender." }
    ] as Class5ConceptToExplain[],
    selfCheckQuestions: [
      "¿Usaste palabras comprensibles para cualquier persona?",
      "¿Explicaste para qué sirve dentro de la práctica?",
      "¿Evitaste afirmaciones exageradas o promesas que no podés sostener?",
      "¿Dejaste claro qué pertenece a la tradición y qué es experiencia personal?"
    ]
  },
  teaching:
    "Explicar bien no significa simplificar la enseñanza hasta vaciarla. Significa volverla accesible sin perder respeto ni profundidad."
};

export const CLASS5_DINAMICAS = {
  sectionTitle: "Dinámicas para enseñar Reiki — Aprender haciendo",
  badge: "Pantalla 4 · Biblioteca de Actividades",
  openingQuote:
    "Comprendemos una idea cuando la escuchamos. La integramos cuando tenemos oportunidad de ponerla en práctica.",
  intro:
    "Una clase exclusivamente expositiva vuelve pasivo al grupo. Las dinámicas permiten experimentar conceptos, detectar malentendidos y entrenar criterios antes de estar frente a un consultante o un curso real. Nunca deben ser un relleno para pasar el tiempo: cada actividad responde a un objetivo claro.",
  fourPlanningQuestions: [
    "¿Qué deseo que comprendan o practiquen mis alumnos con esta actividad?",
    "¿Cuánto tiempo real necesito para desarrollarla y cerrarla?",
    "¿Qué podría resultar confuso o incómodo durante el ejercicio?",
    "¿Cómo voy a cerrar la dinámica para recuperar el aprendizaje central?"
  ],
  dynamics: [
    {
      id: "explicacion_imposible",
      number: 1,
      title: "Dinámica 1: La explicación imposible",
      durationMinutes: 15,
      objective:
        "Aprender a explicar conceptos de Reiki con claridad, evitando tecnicismos innecesarios y frases vagas.",
      materials: "Tarjetas con conceptos (Gasshō, Reiju, Linaje, Byosen, Cinco Principios, Presencia) y cronómetro opcional.",
      development: [
        "Cada participante toma una tarjeta con un concepto.",
        "Tiene exactamente 1 minuto para explicárselo a un compañero que hace el rol de principiante curioso, sin usar jerga técnica ni frases vacías.",
        "Luego quien escuchó resume con sus palabras qué comprendió realmente."
      ],
      exampleOrSituation:
        "Ejemplo de frase a evitar: «El Reiju abre tus canales áuricos multidimensionales». Alternativa clara: «El Reiju es un momento tradicional de encuentro en el que maestro y alumno comparten calma y atención para iniciar la práctica».",
      closure:
        "El grupo reflexiona qué palabras ayudaron más y dónde aparecieron explicaciones circulares."
    },
    {
      id: "alumno_pregunta",
      number: 2,
      title: "Dinámica 2: El alumno que pregunta",
      durationMinutes: 20,
      objective:
        "Entrenar respuestas honestas, respetuosas y fundamentadas frente a preguntas difíciles o incómodas.",
      materials: "Tarjetas con preguntas reales que suelen aparecer en cursos.",
      development: [
        "En parejas o frente al grupo, un participante lee una pregunta difícil en voz alta.",
        "El otro responde asumiendo el rol de maestro.",
        "Se evalúa si la respuesta diferencia hechos históricos de interpretación, si mantiene límites éticos y si reconoce con humildad lo que no sabe."
      ],
      exampleOrSituation:
        "Preguntas frecuentes: «¿Reiki puede curar una enfermedad grave?», «¿Por qué en otros cursos enseñan este símbolo distinto?», «¿Si no siento calor en las manos significa que no tengo energía?».",
      closure:
        "Se destacan los criterios que protegen tanto al alumno como al consultante."
    },
    {
      id: "ensenar_5_min",
      number: 3,
      title: "Dinámica 3: Enseñar en cinco minutos",
      durationMinutes: 25,
      objective:
        "Practicar la estructura completa de una microclase con foco y síntesis.",
      materials: "Reloj, cuaderno y lista breve de temas acotados.",
      development: [
        "Cada alumno prepara una microclase de 5 minutos sobre un tema puntual (ej.: postura Gasshō, primer principio de Usui o respiración en el Hara).",
        "Debe incluir los cuatro momentos: introducción (30 s), explicación central (2 min), práctica breve (1 min 30 s) y cierre (1 min).",
        "Al finalizar, el grupo ofrece una devolución constructiva: qué quedó claro y qué podría ajustarse."
      ],
      exampleOrSituation:
        "Temas sugeridos: «Cómo presentar el primer principio», «Qué es Hara en la práctica», «Cómo explicar el respeto del contacto».",
      closure:
        "Se observa cómo cinco minutos bien estructurados enseñan más que media hora desordenada."
    },
    {
      id: "error_escondido",
      number: 4,
      title: "Dinámica 4: El error escondido",
      durationMinutes: 15,
      objective:
        "Desarrollar pensamiento crítico para detectar afirmaciones ambiguas, exageraciones o errores históricos frecuentes.",
      materials: "Texto breve preparado con imprecisiones intercaladas.",
      development: [
        "Se entrega al grupo un texto corto con tres o cuatro errores comunes (por ejemplo: presentar mitos sobre Usui como hechos documentados, prometer curas médicas o usar explicaciones circulares).",
        "En subgrupos identifican qué afirmaciones revisarían y cómo las reescribirían con honestidad y precisión."
      ],
      exampleOrSituation:
        "Frase ejemplo a detectar: «Mikao Usui obtuvo su doctorado en teología en Chicago y garantizaba la sanación física total mediante el tercer símbolo».",
      closure:
        "Puesta en común diferenciando relatos tradicionales, creencias personales y datos históricos verificables."
    },
    {
      id: "maestro_silencioso",
      number: 5,
      title: "Dinámica 5: El maestro silencioso",
      durationMinutes: 15,
      objective:
        "Explorar cuánto puede enseñarse mediante postura, ritmo y presencia corporal sin depender exclusivamente de las palabras.",
      materials: "Sillas o colchonetas en espacio tranquilo.",
      development: [
        "Un participante guía una práctica muy simple (sentarse, apoyar las manos o iniciar Gasshō) casi sin hablar, usando gestos claros y pausa.",
        "Luego el grupo comparte qué percibió cuando no hubo exceso de instrucciones verbales."
      ],
      exampleOrSituation:
        "Variante: realizar primero una guía saturada de explicaciones continuas y luego repetirla con tres indicaciones esenciales y silencio.",
      closure:
        "Reconocer cuándo la palabra acompaña y cuándo interrumpe la experiencia directa."
    }
  ] as Class5DynamicActivity[],
  matrix: [
    { goal: "Mejorar la claridad al hablar", recommendedDynamic: "La explicación imposible", dynamicId: "explicacion_imposible" },
    { goal: "Manejar preguntas difíciles", recommendedDynamic: "El alumno que pregunta", dynamicId: "alumno_pregunta" },
    { goal: "Practicar estructura de clase", recommendedDynamic: "Enseñar en cinco minutos", dynamicId: "ensenar_5_min" },
    { goal: "Desarrollar pensamiento crítico", recommendedDynamic: "El error escondido", dynamicId: "error_escondido" },
    { goal: "Observar lenguaje corporal y presencia", recommendedDynamic: "El maestro silencioso", dynamicId: "maestro_silencioso" }
  ] as Class5MatrixRow[],
  integrationActivity: {
    title: "Actividad de integración: Diseñá tu propia dinámica",
    subtitle: "Diseñá una actividad de hasta 15 minutos para futuros practicantes de Reiki.",
    checkQuestion:
      "Si participaras en tu propia actividad como alumno, ¿comprenderías exactamente qué hacer y por qué?"
  },
  teaching:
    "Una buena dinámica no busca entretener. Busca transformar una idea en experiencia comprensible."
};

export const CLASS5_GRUPO = {
  sectionTitle: "El grupo como espacio de aprendizaje",
  badge: "Pantalla 5 · Coordinación Grupal",
  openingQuote:
    "Enseñar no consiste únicamente en transmitir contenidos. También implica cuidar el espacio humano donde el aprendizaje sucede.",
  intro:
    "Cuando enseñamos a una persona sola podemos adaptar el ritmo minuto a minuto. En un grupo conviven velocidades, timideces, certezas previas y expectativas distintas. La función del maestro es sostener un clima respetuoso, equilibrado y seguro.",
  agreements: [
    "Respetar los turnos de palabra sin interrumpir ni monopolizar.",
    "Cuidar la confidencialidad de las experiencias personales compartidas.",
    "Validar preguntas y dudas sin burlas ni juicios.",
    "Aceptar que no todas las personas sienten o comprenden de la misma manera.",
    "Recordar el carácter respetuoso de la práctica (nunca sustituir atención médica ni presionar el cuerpo del otro)."
  ],
  situationsGuide: [
    {
      title: "Cuando alguien participa demasiado",
      description:
        "Agradecé su entusiasmo sin desautorizarlo y abrí explícitamente el espacio al resto: «Muchas gracias por tu aporte. Escuchemos ahora qué observó alguien que todavía no habló»."
    },
    {
      title: "Cuando alguien no participa",
      description:
        "El silencio no siempre es desinterés: a veces es reflexión o timidez. En lugar de exponerlo en público, invitá primero al diálogo en parejas o acercate en una pausa para consultarlo con amabilidad."
    },
    {
      title: "Cuando aparecen desacuerdos sobre linajes o formas",
      description:
        "Evitá competencias sobre quién tiene «el verdadero Reiki». Reconocé que existen diferentes tradiciones y enfocá la atención en el sentido compartido de la práctica."
    },
    {
      title: "Cuando una pregunta supera nuestros conocimientos",
      description:
        "Improvisar una respuesta falsa erosiona la confianza. Decir «No tengo ese dato exacto ahora; lo voy a revisar y te lo respondo con seriedad en el próximo encuentro» enseña honestidad intelectual."
    }
  ],
  activityScenarios: [
    {
      id: "sit_1",
      title: "Situación 1 — Comentarios frecuentes e interrupciones",
      situation:
        "Durante una explicación sobre Byosen, una alumna interrumpe varias veces para contar casos extensos de sus sesiones personales, y notás que otros compañeros empiezan a mirar el reloj o pierden el hilo.",
      whatHappens:
        "El entusiasmo individual está ocupando el tiempo común y dispersando el objetivo de la consigna actual.",
      groupNeed:
        "Recuperar el foco compartido sin avergonzar a quien comparte.",
      suggestedIntervention:
        "«Qué valiosa tu experiencia. Te propongo guardar ese caso para el momento de cierre así terminamos de ver el criterio base de Byosen y todos pueden practicarlo.»"
    },
    {
      id: "sit_2",
      title: "Situación 2 — Desacuerdo por otra escuela",
      situation:
        "Un participante dice delante de todos que «en su escuela anterior el símbolo se dibujaba distinto y que esta forma es incompleta».",
      whatHappens:
        "Surge una tensión entre comparar linajes por jerarquía y comprender la diversidad histórica de las escuelas.",
      groupNeed:
        "Claridad serena que desactive la competencia y respete el camino previo de cada estudiante.",
      suggestedIntervention:
        "«Es cierto que distintas líneas modificaron trazos u órdenes a lo largo del tiempo. Hoy aprendemos la forma de nuestra transmisión para comprender su sentido, reconociendo que existen otras escuelas.»"
    },
    {
      id: "sit_3",
      title: "Situación 3 — Silencio sostenido de un integrante",
      situation:
        "Después de varias prácticas, una persona del grupo nunca pregunta ni comparte en las rondas, aunque se queda observando todo con atención.",
      whatHappens:
        "No sabés aún si se siente cómoda escuchando en silencio o si tiene timidez o dudas que no se anima a expresar.",
      groupNeed:
        "Cuidado sin exposición ni presión grupal.",
      suggestedIntervention:
        "No obligarla a hablar en ronda general. Proponer primero un intercambio breve de a dos y acercarte en el recreo con una pregunta abierta y amable."
    },
    {
      id: "sit_4",
      title: "Situación 4 — Pregunta técnica o médica inesperada",
      situation:
        "Alguien te pregunta en medio de la clase qué pasa exactamente a nivel neurológico con la variabilidad cardíaca durante Reiki o te pide opinar sobre suspender una medicación.",
      whatHappens:
        "Una pregunta excede el conocimiento comprobado o cruza el límite ético profesional.",
      groupNeed:
        "Rigor, humildad y límites claros.",
      suggestedIntervention:
        "Separar de inmediato el plano médico («Nunca indicamos modificar tratamientos médicos; eso corresponde exclusivamente a profesionales de la salud») y admitir con naturalidad si un dato científico requiere consulta posterior."
    }
  ] as Class5GroupScenario[],
  reflections: [
    "¿Qué tipo de situaciones grupales te generan mayor inseguridad como futuro maestro?",
    "¿Qué tendemos a hacer cuando sentimos incomodidad frente a un silencio o una pregunta difícil?",
    "¿Cómo podemos mantener la calma y el cuidado del grupo sin volvernos rígidos?"
  ],
  teaching:
    "Coordinar un grupo no significa controlar cada palabra que sucede. Significa crear condiciones para que todos puedan aprender con respeto."
};

export const CLASS5_FICHAS_IMPRIMIBLES: Class5FichaImprimible[] = [
  {
    id: "ficha_microclase",
    code: "FICHA 01 · PLANIFICACIÓN",
    title: "Guía para Armar tu Microclase (5 Pasos)",
    subtitle: "Material imprimible de bolsillo para preparar explicaciones y prácticas de Reiki.",
    sections: [
      {
        heading: "1. Estructura en 5 pasos para explicar un concepto",
        items: [
          "Paso 1 · Nombrar qué vamos a enseñar en una frase directa.",
          "Paso 2 · Explicar el sentido: para qué sirve en la práctica cotidiana.",
          "Paso 3 · Mostrar cómo se realiza con acciones concretas y observables.",
          "Paso 4 · Dar espacio breve de práctica corporal o atencional.",
          "Paso 5 · Verificar comprensión con preguntas abiertas («¿Cómo se lo contarías a alguien con tus palabras?»)."
        ]
      },
      {
        heading: "2. Autoevaluación rápida antes de dar la clase",
        items: [
          "¿Diferencié claramente enseñanza tradicional, interpretación personal y hecho histórico?",
          "¿Evité definiciones circulares y tecnicismos sin aclarar?",
          "¿Si usé una metáfora, aclaré que es una imagen y no una explicación literal o médica?",
          "¿La dinámica elegida responde a un objetivo concreto y tiene cierre previsto?"
        ]
      }
    ]
  },
  {
    id: "ficha_acuerdos_grupo",
    code: "FICHA 02 · COORDINACIÓN",
    title: "Acuerdos Grupales y Respuestas ante Imprevistos",
    subtitle: "Referencia rápida para sostener el clima de aprendizaje en talleres y cursos.",
    sections: [
      {
        heading: "Acuerdos iniciales sugeridos para el grupo",
        items: [
          "Escucha respetuosa y turnos equitativos de palabra.",
          "Confidencialidad sobre vivencias personales compartidas.",
          "Derecho a preguntar sin miedo al error y derecho a elegir no compartir en voz alta.",
          "Respeto estricto de los límites éticos: Reiki acompaña el bienestar y nunca reemplaza atención médica."
        ]
      },
      {
        heading: "Recordatorio frente a situaciones reales",
        items: [
          "Participación excesiva: agradecer el aporte y abrir turno explícito al resto del grupo.",
          "Silencio prolongado: cuidar sin exponer; usar trabajo en parejas o consulta en pausa.",
          "Desacuerdo entre escuelas: contextualizar la diversidad histórica sin entrar en competencia.",
          "Pregunta que excede tu saber: reconocer el límite con serenidad y prometer investigar."
        ]
      }
    ]
  }
];

export const CLASS5_MATCH_GOALS: Class5MatchItem[] = [
  {
    id: "m1",
    goal: "Lograr que un alumno traduzca «Byosen» o «Reiju» a palabras cotidianas sin usar frases vacías",
    correctDynamicId: "explicacion_imposible",
    explanation: "«La explicación imposible» entrena explicar en 1 minuto sin tecnicismos ni circularidad."
  },
  {
    id: "m2",
    goal: "Preparar respuestas serenas ante consultas médicas o dudas sobre diferencias entre linajes",
    correctDynamicId: "alumno_pregunta",
    explanation: "«El alumno que pregunta» entrena límites éticos, honestidad y distinción entre historia e interpretación."
  },
  {
    id: "m3",
    goal: "Ensayar inicio, desarrollo, práctica breve y cierre dentro de un tiempo acotado",
    correctDynamicId: "ensenar_5_min",
    explanation: "«Enseñar en cinco minutos» obliga a sintetizar y respetar los cuatro momentos de una microclase."
  },
  {
    id: "m4",
    goal: "Entrenar el ojo crítico para detectar mitos históricos o promesas terapéuticas exageradas",
    correctDynamicId: "error_escondido",
    explanation: "«El error escondido» ejercita detectar y reescribir imprecisiones frecuentes en textos de enseñanza."
  },
  {
    id: "m5",
    goal: "Descubrir cuánto transmite la calma, la postura y la pausa sin saturar de palabras",
    correctDynamicId: "maestro_silencioso",
    explanation: "«El maestro silencioso» permite observar el peso del lenguaje corporal y la presencia al guiar."
  }
];

export const CLASS5_SIMULATOR_CASES: Class5SimulatorCase[] = [
  {
    id: "sim1",
    title: "Simulador 1: El error en la práctica inicial",
    context:
      "Un estudiante nuevo se confunde dos veces el orden de una secuencia y se disculpa nervioso diciendo: «Perdón, soy muy torpe para esto».",
    options: [
      {
        label: "«No te preocupes, pasa que sos más auditivo; mejor solo escuchá mientras mirás.»",
        isBest: false,
        feedback:
          "Encasillar al alumno en estilos fijos no tiene respaldo sólido y lo priva de practicar a su ritmo."
      },
      {
        label: "«Es muy común confundirse al principio. Hagamos esta parte despacio una vez más juntos, sin apuro.»",
        isBest: true,
        feedback:
          "Excelente. Normaliza el error como parte natural del aprendizaje y protege la seguridad psicológica del grupo."
      },
      {
        label: "«Prestá atención porque ya lo repetí dos veces; si te distraés no vas a poder canalizar bien.»",
        isBest: false,
        feedback:
          "Una corrección rígida genera miedo a equivocarse y bloquea futuras preguntas genuinas."
      }
    ]
  },
  {
    id: "sim2",
    title: "Simulador 2: Explicación circular vs. claridad",
    context:
      "Alguien en su primera clase pregunta: «¿Para qué hacemos Gasshō antes de empezar?».",
    options: [
      {
        label: "«Porque al alinear los meridianos sutiles en el centro cardíaco invocamos la frecuencia vibratoria del universo.»",
        isBest: false,
        feedback:
          "Es una explicación circular cargada de términos ambiguos que deja al principiante sin saber qué hacer concretamente."
      },
      {
        label: "«Juntamos las palmas frente al pecho para hacer una pausa, bajar el ritmo del día y llevar la atención a la respiración antes de comenzar.»",
        isBest: true,
        feedback:
          "Claro, concreto y fiel al sentido de la práctica sin adornos innecesarios."
      },
      {
        label: "«Siempre se hizo así en Reiki; con el tiempo vas a sentir por qué funciona.»",
        isBest: false,
        feedback:
          "Evadir el sentido de una práctica reduce la motivación del alumno adulto, que aprende mejor cuando comprende el para qué."
      }
    ]
  },
  {
    id: "sim3",
    title: "Simulador 3: Verificar si realmente se entendió",
    context:
      "Acabás de explicar la diferencia entre percibir una sensación en las manos (calor) e interpretarla. Querés saber si el grupo lo comprendió antes de pasar a la práctica.",
    options: [
      {
        label: "Preguntar: «¿Se entendió todo bien?» y seguir si asienten con la cabeza.",
        isBest: false,
        feedback:
          "La pregunta cerrada suele recibir un «sí» de cortesía y oculta dudas reales."
      },
      {
        label: "Proponer: «Si sienten calor en una palma, ¿qué podrían afirmar con certeza y qué sería ya una interpretación?»",
        isBest: true,
        feedback:
          "¡Muy bien! Las preguntas abiertas aplicadas permiten comprobar si el criterio fue realmente comprendido y puede trasladarse a la práctica."
      },
      {
        label: "Volver a leer exactamente la misma definición teórica dos veces más para fijarla.",
        isBest: false,
        feedback:
          "Repetir información de modo pasivo no verifica qué comprendió cada participante."
      }
    ]
  }
];

export const CLASS5_TRIVIA_QUESTIONS: Class5QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es la diferencia central entre informar y enseñar?",
    options: [
      "Informar dura menos tiempo y enseñar requiere diapositivas.",
      "Informar comunica un contenido; enseñar facilita que la otra persona comprenda, relacione y aplique lo aprendido.",
      "Enseñar significa hablar sin interrupciones para transmitir todo el manual completo."
    ],
    correctIndex: 1,
    explanation:
      "Aprender ocurre cuando quien participa puede comprender, vincular y aplicar la enseñanza, no solo oír datos."
  },
  {
    id: 2,
    question: "Sobre los llamados «estilos de aprendizaje» (visual, auditivo, kinestésico), ¿qué postura propone la Clase V?",
    options: [
      "Clasificar a cada alumno en un estilo fijo desde el primer día y enseñarle solo por ese canal.",
      "No encasillar en etiquetas rígidas sin respaldo científico, sino combinar explicaciones claras, demostraciones, práctica y diálogo.",
      "Ignorar las diferencias de ritmo porque todos los adultos aprenden igual."
    ],
    correctIndex: 1,
    explanation:
      "En lugar de etiquetar a las personas, conviene ofrecer variedad de apoyos respetando distintos ritmos y experiencias."
  },
  {
    id: 3,
    question: "¿Qué caracteriza a una «explicación circular» que debemos evitar al enseñar?",
    options: [
      "Definir un término difícil usando otras palabras igual de vagas o incomprensibles sin aterrizarlo en la práctica.",
      "Hacer un repaso al finalizar la clase en ronda grupal.",
      "Usar un ejemplo cotidiano acompañado de una aclaración sobre sus límites."
    ],
    correctIndex: 0,
    explanation:
      "Si podemos expresar una idea profunda con palabras sencillas y concretas, realmente la comprendimos."
  },
  {
    id: 4,
    question: "Al usar una metáfora para explicar Reiki (por ejemplo, comparar pensamientos con sonidos en la calle), ¿qué cuidado debe tener el maestro?",
    options: [
      "Usar la metáfora como si fuera una prueba científica o diagnóstico anatómico.",
      "Aclarar que es una imagen para facilitar la comprensión y no una explicación literal.",
      "Evitar cualquier ejemplo cotidiano para mantener solemnidad."
    ],
    correctIndex: 1,
    explanation:
      "Las metáforas orientan la comprensión, pero confundirlas con hechos literales genera malentendidos."
  },
  {
    id: 5,
    question: "Si durante una clase aparece una pregunta que excede nuestros conocimientos actuales, ¿qué actitud enseña mejor?",
    options: [
      "Improvisar una respuesta segura para no perder autoridad frente al grupo.",
      "Cambiar de tema rápidamente para evitar el silencio.",
      "Reconocer con serenidad que no se tiene el dato exacto en ese momento, investigar y responder luego con honestidad."
    ],
    correctIndex: 2,
    explanation:
      "La honestidad del maestro que sigue aprendiendo (Shoshin) fortalece la confianza y el criterio del grupo."
  },
  {
    id: 6,
    question: "¿Cuál es el quinto paso sugerido dentro de la estructura sencilla para explicar?",
    options: [
      "Verificar qué comprendieron mediante preguntas concretas o síntesis propias.",
      "Preguntar rápidamente «¿Alguna duda?» y cerrar la carpeta.",
      "Sumar tres conceptos avanzados más antes de terminar."
    ],
    correctIndex: 0,
    explanation:
      "Confirmar qué comprendieron los alumnos permite ajustar la explicación antes de seguir avanzando."
  }
];
