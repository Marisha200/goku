/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Class4PrincipleCard {
  title: string;
  paragraphs: string[];
}

export interface ZenConcept {
  id: string;
  title: string;
  kanji: string;
  subtitle: string;
  etymology: string;
  summary: string;
  exampleTitle: string;
  exampleText: string;
  reikiConnectionTitle: string;
  reikiConnectionText: string;
}

export interface ComparisonRow {
  mushin: string;
  shoshin: string;
}

export interface ExperienceLevel {
  step: number;
  label: string;
  example: string;
  meaning: string;
}

export interface SensationLogEntry {
  perceived: string;
  thought: string;
  canAffirm: string;
}

export interface AttitudeCard {
  title: string;
  description: string;
}

export interface PracticeScenario {
  id: string;
  label: string;
  situation: string;
  trap: string;
  mindfulResponse: string;
}

export interface PerceptionClassifierItem {
  id: string;
  statement: string;
  category: "sensacion" | "interpretacion" | "afirmacion";
  explanation: string;
}

export interface Class4QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CLASS4_HERO = {
  title: "Clase IV: El Arte de la Presencia",
  quote: "No siempre necesitamos hacer más. A veces, la profundidad de una práctica comienza cuando dejamos de intervenir y aprendemos a observar."
};

export const CLASS4_INICIO = {
  sectionTitle: "La presencia como camino",
  badge: "Presencia Consciente",
  openingQuote: "El silencio no es la ausencia de experiencia. Es el espacio en el que podemos comenzar a escucharla.",
  blocks: [
    {
      title: "Del conocimiento a la experiencia",
      paragraphs: [
        "Podemos memorizar posiciones de manos, el significado de los símbolos o los cinco principios de Usui. Sin embargo, conocer una práctica no garantiza estar verdaderamente presentes mientras la realizamos.",
        "La mente suele viajar entre recuerdos, anticipaciones o dudas sobre si lo hacemos bien. Las tradiciones contemplativas de Oriente invitan a observar esos pensamientos sin necesidad de eliminarlos ni quedar atrapados en ellos."
      ]
    },
    {
      title: "La presencia no es un estado extraordinario",
      paragraphs: [
        "No hace falta producir sensaciones intensas, imágenes ni absoluta tranquilidad para practicar. Estar presentes también significa reconocer si hoy estamos inquietos, cansados o distraídos.",
        "No necesitamos fabricar serenidad para comenzar: podemos empezar exactamente donde estamos."
      ]
    },
    {
      title: "La presencia en Reiki",
      paragraphs: [
        "Durante una sesión, la atención vuelve a la respiración, las manos, la postura y la persona frente a nosotros. El calor, el hormigueo o incluso no sentir nada especial son parte normal de la experiencia.",
        "Ninguna sensación determina por sí sola el valor de la práctica ni permite diagnosticar. Practicar con conciencia es reconocer lo que sucede sin apresurarnos a explicarlo."
      ]
    }
  ] as Class4PrincipleCard[],
  reflections: [
    "¿Cuántas veces confundimos estar ocupados con estar atentos?",
    "¿Podemos permanecer presentes incluso cuando no sentimos nada especial?",
    "¿Qué cambia cuando dejamos de buscar constantemente un resultado?"
  ],
  practice: {
    title: "Pequeña práctica: Tres minutos de presencia",
    durationSeconds: 180,
    steps: [
      "Sentate cómodamente, con la espalda erguida sin rigidez.",
      "Llevá tu atención a la respiración natural y al contacto del cuerpo con el asiento.",
      "Cuando aparezca un pensamiento, reconocelo y regresá suavemente a la respiración.",
      "No intentes alcanzar ningún estado particular: durante tres minutos, simplemente observá."
    ]
  },
  centralIdea: "La presencia no es algo que debamos conquistar. Es una capacidad que podemos cultivar mediante la atención y la práctica constante."
};

export const CLASS4_MUSHIN_SHOSHIN = {
  sectionTitle: "Mushin y Shoshin: la mente en el Zen",
  badge: "Módulo 1 · Mente Zen",
  quote: "La experiencia se transforma cuando dejamos de mirarla únicamente a través de lo que creemos saber.",
  intro: "En la tradición japonesa, Mushin y Shoshin exploran la relación entre pensamiento, atención y experiencia. Aunque suelen vincularse al Zen y a artes tradicionales, señalan disposiciones distintas.",
  concepts: [
    {
      id: "mushin",
      title: "Mushin",
      kanji: "無心",
      subtitle: "La mente sin fijación",
      etymology: "Traducido literalmente como «no-mente», no implica ausencia de conciencia ni incapacidad de pensar, sino una mente que no queda atrapada en juicios, dudas o vacilaciones.",
      summary: "Es una acción fluida donde preparación y atención trabajan juntas, sin interrumpirse por el miedo o el exceso de deliberación.",
      exampleTitle: "Como tocar un instrumento",
      exampleText: "Al principio pensamos dónde va cada dedo; con la práctica el movimiento fluye sin dejar de estar atentos ni analizar cada gesto.",
      reikiConnectionTitle: "Mushin y Reiki",
      reikiConnectionText: "Evita que preguntas constantes («¿puse bien las manos? ¿debería sentir algo?») ocupen toda la atención. Es confiar en lo practicado sin abandonar criterio ni responsabilidad."
    },
    {
      id: "shoshin",
      title: "Shoshin",
      kanji: "初心",
      subtitle: "La mente de principiante",
      etymology: "Sho (初) remite al comienzo y shin (心) a la mente o el corazón. Expresa acercarse a cada experiencia con apertura, curiosidad y sin creer que ya lo sabemos todo.",
      summary: "Nos recuerda que la experiencia no debe volver rígido nuestro saber: no implica ignorancia, sino disponibilidad para seguir aprendiendo.",
      exampleTitle: "Veinte años descubriendo",
      exampleText: "Quien enseña o practica hace décadas puede seguir observando matices nuevos en su atención, sus hábitos y su escucha.",
      reikiConnectionTitle: "Shoshin frente a la certeza",
      reikiConnectionText: "Cuando el conocimiento se vuelve certeza cerrada dejamos de observar. La apertura del principiante mantiene viva y honesta la práctica."
    }
  ] as ZenConcept[],
  comparisonRows: [
    { mushin: "No quedar atrapados en el pensamiento", shoshin: "No quedar atrapados en lo que creemos saber" },
    { mushin: "Favorece una acción fluida", shoshin: "Favorece el aprendizaje continuo" },
    { mushin: "Invita a soltar la interferencia mental", shoshin: "Invita a conservar la curiosidad" },
    { mushin: "Se relaciona con la atención en la acción", shoshin: "Se relaciona con la actitud frente al conocimiento" }
  ] as ComparisonRow[],
  activity: {
    title: "Actividad: La taza que creemos conocer",
    subtitle: "Ejercicio contemporáneo de atención inspirado en Shoshin",
    instructions: [
      "Elegí un objeto cotidiano (una taza, una piedra o una hoja).",
      "Observá durante dos minutos su forma, textura, temperatura, peso y detalles.",
      "Descubrí al menos cinco características que normalmente pasan inadvertidas.",
      "Preguntate al terminar: ¿cuántas veces miramos algo sin observarlo realmente?"
    ]
  },
  reflection: "¿Es posible que cuanto más creemos saber, menos dispuestos estemos a descubrir?",
  teaching: "La experiencia y la apertura no son opuestas. Un maestro puede desarrollar habilidad sin perder la curiosidad del principiante."
};

export const CLASS4_HARA = {
  sectionTitle: "Hara y el silencio: el centro de la práctica",
  badge: "Módulo 2 · Centro y Quietud",
  quote: "Volver al centro no significa alejarnos del mundo. Significa recuperar nuestra atención mientras permanecemos en él.",
  haraConcept: {
    title: "El significado de Hara (腹)",
    text: "En japonés, Hara significa literalmente abdomen o vientre. En disciplinas corporales y contemplativas nombra la región inferior del abdomen asociada al centro de gravedad, la postura y la estabilidad. Conviene distinguir este uso anatómico y atencional de las interpretaciones espirituales propias de cada escuela."
  },
  tandenConnection: {
    title: "Hara y Tanden (丹田)",
    text: "El término japonés Tanden está históricamente ligado al Dantian chino estudiado en la Clase II. Aunque el Tanden inferior se sitúa conceptualmente en la zona baja del abdomen, sus explicaciones varían entre tradiciones. En algunas líneas de Reiki se utiliza como ancla para ejercicios de respiración y concentración."
  },
  silenceDimensions: [
    {
      title: "Silencio exterior",
      description: "Reducción de estímulos sonoros y distracciones en el entorno físico."
    },
    {
      title: "Quietud interior",
      description: "Capacidad de observar pensamientos, emociones y sensaciones sin reaccionar automáticamente. No depende del silencio externo ni busca suprimir la mente."
    }
  ],
  breathReference: "La respiración ocurre de forma natural, pero también permite dirigir voluntariamente la atención. Observarla sin forzar su ritmo —notando el aire, el abdomen y la postura— nos brinda un punto al cual regresar cada vez que la mente se dispersa.",
  guidedPractice: {
    title: "Práctica guiada: Regresar al Hara",
    durationSeconds: 300,
    steps: [
      "Sentate con ambos pies apoyados en el suelo en una postura cómoda y estable.",
      "Relajá los hombros y permití que la respiración encuentre su ritmo natural.",
      "Dirigí suavemente la atención hacia la región inferior del abdomen.",
      "Observá el movimiento respiratorio sin intentar producir sensaciones especiales.",
      "Cuando aparezcan pensamientos, reconocelos y regresá a la respiración.",
      "Al finalizar, observá cómo te sentís, sin calificar la experiencia como buena o mala."
    ],
    accessibilityNote: "Si llevar la atención al abdomen resulta incómodo, utilizá el contacto de los pies con el suelo como referencia."
  },
  reikiApplication: "Dedicar unos minutos antes de una sesión a estabilizar postura y respiración ayuda a reconocer nuestro estado real. Durante la sesión, volver al aire sirve de ancla cuando la mente empieza a anticipar resultados o fabricar interpretaciones.",
  reflection: "¿Necesitamos controlar nuestros pensamientos para estar presentes, o podemos aprender a observarlos sin obedecerlos?",
  teaching: "El centro de la práctica no es un lugar extraordinario al que debamos llegar. Es una referencia corporal y atencional a la que podemos regresar."
};

export const CLASS4_BYOSEN = {
  sectionTitle: "Byosen y Hibiki: percibir sin interpretar",
  badge: "Módulo 3 · Percepción Clara",
  quote: "Percibir es reconocer una experiencia. Interpretar es construir una explicación sobre ella. Aprender a distinguir ambas cosas también forma parte del camino.",
  intro: "Durante una sesión pueden aparecer calor, frío, hormigueo, pulsaciones o cambios de sensibilidad. Son reales como experiencias subjetivas, pero sentir algo no significa conocer automáticamente su causa.",
  terms: [
    {
      name: "Byosen",
      kanji: "病腺",
      summary: "En ciertas líneas japonesas designa la percepción de señales asociadas tradicionalmente con zonas que requieren atención (Byosen Reikan-hō).",
      caution: "Pertenece al marco tradicional y no constituye un método de diagnóstico médico validado. Percibir calor no permite afirmar inflamación, enfermedad ni un supuesto bloqueo energético."
    },
    {
      name: "Hibiki",
      kanji: "響き",
      summary: "Puede traducirse como resonancia, eco o reverberación. Se usa para describir sensaciones táctiles percibidas en las manos como vibración, pulsación u hormigueo.",
      caution: "Su vocabulario y clasificación no son uniformes entre todos los linajes; observar con honestidad vale más que encasillar."
    }
  ],
  levels: [
    {
      step: 1,
      label: "Sensación",
      example: "«Siento calor en las palmas de mis manos».",
      meaning: "Es una descripción directa de lo que percibimos."
    },
    {
      step: 2,
      label: "Interpretación",
      example: "«Quizás este calor se relaciona con algo en la otra persona».",
      meaning: "Es una hipótesis personal, nunca una certeza."
    },
    {
      step: 3,
      label: "Afirmación",
      example: "«Esta persona tiene un problema en esa parte del cuerpo».",
      meaning: "Conclusión injustificada que no puede establecerse desde las manos."
    }
  ] as ExperienceLevel[],
  confirmationBias: {
    title: "El riesgo de interpretar demasiado",
    text: "La mente busca explicaciones rápidas. El sesgo de confirmación hace que recordemos más las ocasiones en que una corazonada pareció coincidir y olvidemos aquellas en que no tuvo relación, convirtiendo con el tiempo una hipótesis en falsa certeza."
  },
  meaningOfNotInterpreting: [
    "Observar el calor sin convertirlo en un diagnóstico.",
    "Registrar un hormigueo sin asumir que conocemos su origen.",
    "Vivir una sesión tranquila sin concluir que «ocurrió menos» que en una intensa."
  ],
  sampleLogRows: [
    {
      perceived: "Calor en las manos",
      thought: "Quizás tiene un significado especial",
      canAffirm: "Sentí calor"
    },
    {
      perceived: "Hormigueo",
      thought: "Puede estar relacionado con la otra persona",
      canAffirm: "Percibí hormigueo"
    },
    {
      perceived: "Ninguna sensación destacable",
      thought: "Tal vez no estoy haciendo bien la práctica",
      canAffirm: "No percibí nada particular"
    }
  ] as SensationLogEntry[],
  reflection: "¿Podemos aceptar una experiencia sin necesitar que confirme nuestras creencias?",
  teaching: "La sensibilidad no consiste en atribuir significado a todo lo que sentimos. También implica reconocer los límites de nuestra percepción."
};

export const CLASS4_PRESENCIA_OTRO = {
  sectionTitle: "La presencia frente al otro: escucha y discernimiento",
  badge: "Módulo 4 · Ética y Escucha",
  quote: "Escuchar no es preparar una respuesta mientras alguien habla. Es permitir que sus palabras lleguen antes que nuestras conclusiones.",
  intro: "Cuando compartimos una sesión, la otra persona llega con su propia historia, emociones y motivos. La presencia frente al otro comienza reconociendo que su experiencia no nos pertenece y no necesita ajustarse a nuestras explicaciones.",
  exampleDialogue: {
    personSays: "«Me sentí muy tranquilo, pero también me dieron ganas de llorar».",
    avoid: "«Eso significa que liberaste una emoción que tenías bloqueada».",
    prefer: "«¿Querés contarme cómo lo viviste?»",
    explanation: "La pregunta abierta no niega ni interpreta la vivencia: ofrece un espacio seguro para que la persona se exprese."
  },
  attitudes: [
    {
      title: "Escucha",
      description: "Atender sin completar frases ajenas, anticipar emociones ni imponer significados."
    },
    {
      title: "Discernimiento",
      description: "Reconocer qué podemos afirmar, qué desconocemos y cuáles son los límites de nuestra formación."
    },
    {
      title: "Respeto",
      description: "Permitir que la persona decida qué compartir, qué necesita y hasta dónde participar."
    }
  ] as AttitudeCard[],
  accompanyVsDirect: {
    title: "Acompañar, no dirigir",
    points: [
      "Ofrecer un ambiente calmo, explicar cómo será la sesión y respetar las decisiones de quien participa.",
      "No indicar decisiones personales, interpretar traumas, diagnosticar ni aconsejar abandonar tratamientos médicos.",
      "Reiki es una práctica complementaria y no reemplaza la atención sanitaria. La evidencia científica disponible no demuestra de manera concluyente su eficacia para tratar enfermedades (NCCIH)."
    ]
  },
  consent: {
    title: "El consentimiento continuo",
    text: "Antes de empezar explicamos qué se hará y consultamos si la persona está de acuerdo. El consentimiento sigue vigente toda la sesión: pedir que no se toque una zona, pausar o finalizar forma parte esencial de una práctica responsable."
  },
  scenarios: [
    {
      id: "A",
      label: "Situación A",
      situation: "La persona permanece en silencio.",
      trap: "Asumir automáticamente que está profundamente relajada o, al contrario, incómoda.",
      mindfulResponse: "Respetar su silencio sin interpretarlo, manteniendo abierta y amable la posibilidad de comunicarse."
    },
    {
      id: "B",
      label: "Situación B",
      situation: "La persona comienza a llorar.",
      trap: "Atribuir el llanto a una «liberación energética» o explicar qué emoción está soltando.",
      mindfulResponse: "Preguntar con serenidad si desea continuar, hacer una pausa o finalizar la sesión."
    },
    {
      id: "C",
      label: "Situación C",
      situation: "La persona pregunta qué enfermedad tiene.",
      trap: "Sugerir diagnósticos a partir de sensaciones percibidas en las manos.",
      mindfulResponse: "Aclarar con honestidad que Reiki no diagnostica y que toda consulta de salud corresponde a profesionales sanitarios."
    }
  ] as PracticeScenario[],
  teacherAsExample: [
    "Un maestro que reconoce sus límites enseña honestidad.",
    "Un maestro que permite preguntas enseña pensamiento crítico.",
    "Un maestro que escucha sin imponer interpretaciones enseña respeto.",
    "Un maestro que sigue aprendiendo demuestra que la formación no termina con un certificado."
  ],
  reflection: "¿Qué clase de maestro queremos ser: alguien que siempre tiene una respuesta o alguien que sabe cuándo es necesario escuchar?",
  teaching: "La presencia frente al otro no se mide por nuestra capacidad de explicar su experiencia, sino por nuestra disposición a respetarla."
};

export const CLASS4_RESOURCES = {
  title: "Recursos y Material Complementario",
  subtitle: "Guías de apoyo, lecturas breves y fichas prácticas de Clase IV",
  progressiveNotice: "Los recursos audiovisuales y documentos complementarios de esta clase se irán sumando progresivamente para acompañar el ritmo de tu práctica.",
  guides: [
    {
      id: "guia-diario",
      title: "Ficha de Práctica: Diario de las 3 Columnas",
      tag: "Ejercicio Módulo 3",
      summary: "Estructura práctica para entrenar la distinción entre sensación física, pensamiento interpretativo y afirmación honesta después de cada sesión.",
      bullets: [
        "Columna 1 (Lo que percibí): registrá únicamente datos sensoriales concretos (calor, frío, cosquilleo, calma).",
        "Columna 2 (Lo que pensé): anotá sin censura las hipótesis o historias que fabricó la mente.",
        "Columna 3 (Lo que puedo afirmar): quedate solo con aquello que podés sostener con honestidad."
      ]
    },
    {
      id: "guia-consentimiento",
      title: "Encuadre Ético y Consentimiento Informado",
      tag: "Protocolo Módulo 4",
      summary: "Pautas claras para abrir y sostener sesiones responsables basadas en el respeto, la escucha y los límites sanitarios.",
      bullets: [
        "Explicar en lenguaje sencillo en qué consiste la sesión y consultar acuerdo antes de iniciar.",
        "Aclarar explícitamente que Reiki acompaña el bienestar y no sustituye diagnóstico ni tratamiento médico (criterio NCCIH).",
        "Recordar que quien recibe puede pedir pausas, cambios de contacto o detener la sesión en cualquier momento."
      ]
    },
    {
      id: "guia-shoshin-hara",
      title: "Rutina Diaria: Anclaje Hara + Mirada Shoshin",
      tag: "Cultivo de Presencia",
      summary: "Propuesta breve de 8 minutos diarios para integrar el centro corporal y la mente abierta antes de atender o practicar.",
      bullets: [
        "5 minutos observando la respiración en el abdomen inferior (o el apoyo de los pies si resulta más cómodo).",
        "2 minutos de observación atenta de un objeto cotidiano para entrenar Shoshin (la mente de principiante).",
        "1 minuto en silencio reconociendo tu estado actual sin juzgarlo como bueno o malo."
      ]
    }
  ]
};

export const CLASS4_CLASSIFIER_ITEMS: PerceptionClassifierItem[] = [
  {
    id: "p1",
    statement: "«Siento calor en las palmas de mis manos».",
    category: "sensacion",
    explanation: "Describe directamente una experiencia sensorial subjetiva sin agregar causas ni diagnósticos."
  },
  {
    id: "p2",
    statement: "«Quizás este hormigueo se relaciona con algo que vive la otra persona».",
    category: "interpretacion",
    explanation: "Formula una hipótesis posible; reconocerla como idea y no como hecho evita el sesgo de confirmación."
  },
  {
    id: "p3",
    statement: "«Tenés una inflamación o bloqueo emocional en esa zona».",
    category: "afirmacion",
    explanation: "Es una conclusión diagnóstica que no puede afirmarse desde la sensación en las manos."
  },
  {
    id: "p4",
    statement: "«Hoy no percibí ninguna sensación particular».",
    category: "sensacion",
    explanation: "Registro honesto de la experiencia tal como fue, sin exigir sensaciones extraordinarias."
  },
  {
    id: "p5",
    statement: "«Tal vez no estoy haciendo bien Reiki porque no siento nada».",
    category: "interpretacion",
    explanation: "Es un juicio mental sobre el desempeño; la presencia no depende de sensaciones intensas."
  },
  {
    id: "p6",
    statement: "«Lloraste porque liberaste un trauma antiguo».",
    category: "afirmacion",
    explanation: "Apropia e interpreta la vivencia ajena; frente al llanto conviene preguntar con respeto si desea continuar o pausar."
  }
];

export const CLASS4_TRIVIA_QUESTIONS: Class4QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué diferencia central distingue a Mushin de Shoshin en la tradición Zen?",
    options: [
      "Mushin significa no pensar nunca; Shoshin significa no estudiar teoría.",
      "Mushin refiere a actuar sin quedar atrapados en vacilaciones mentales; Shoshin es mantener apertura y curiosidad frente al conocimiento.",
      "Son exactamente sinónimos usados en distintas regiones de Japón.",
      "Mushin es exclusivo de artes marciales y Shoshin solo se aplica a principiantes sin experiencia."
    ],
    correctIndex: 1,
    explanation: "Mushin (無心) favorece una acción fluida sin interferencia de dudas, mientras Shoshin (初心) conserva la apertura del principiante incluso tras años de práctica."
  },
  {
    id: 2,
    question: "¿Cómo se relacionan el silencio exterior y la quietud interior?",
    options: [
      "Sin silencio absoluto en la habitación es imposible estar presentes.",
      "La quietud interior depende por completo de eliminar todo pensamiento.",
      "La quietud interior consiste en observar pensamientos y sensaciones sin reaccionar automáticamente, y no depende totalmente del silencio externo.",
      "Son conceptos médicos para medir la presión arterial."
    ],
    correctIndex: 2,
    explanation: "Podemos estar en un cuarto silencioso con gran ruido mental o rodeados de sonidos con atención serena."
  },
  {
    id: 3,
    question: "¿Por qué conviene distinguir entre sensación, interpretación y afirmación al trabajar con Byosen y Hibiki?",
    options: [
      "Porque sentir calor o vibración es una vivencia real, pero no constituye un método de diagnóstico médico ni prueba una causa objetiva.",
      "Porque las sensaciones en las manos indican con exactitud matemática qué órgano está enfermo.",
      "Porque en Reiki está prohibido sentir calor o frío en las palmas.",
      "Para memorizar más rápido los nombres en japonés."
    ],
    correctIndex: 0,
    explanation: "Distinguir lo percibido de lo pensado evita el sesgo de confirmación y protege una práctica honesta y responsable."
  },
  {
    id: 4,
    question: "Si al finalizar una sesión la persona comenta que sintió ganas de llorar, ¿cuál es la respuesta más respetuosa y presente?",
    options: [
      "Explicarle de inmediato qué trauma de infancia acaba de desbloquear.",
      "Preguntarle con apertura si desea contar cómo lo vivió, sin imponer una interpretación.",
      "Asegurarle que la sesión fue más poderosa que una donde no hay llanto.",
      "Recomendarle suspender cualquier seguimiento profesional."
    ],
    correctIndex: 1,
    explanation: "Escuchar sin apropiarnos de la experiencia ofrece un espacio seguro y respeta la autonomía de quien recibe."
  },
  {
    id: 5,
    question: "¿Qué implica el consentimiento y el discernimiento ético frente al otro?",
    options: [
      "Pedir acuerdo solo al inicio de la primera clase del año.",
      "Decidir por la otra persona qué zona necesita tocarse aunque prefiera evitarla.",
      "Mantener el consentimiento durante toda la sesión y recordar que Reiki es complementario y no reemplaza la atención sanitaria.",
      "Garantizar la curación de enfermedades mediante técnicas tradicionales."
    ],
    correctIndex: 2,
    explanation: "El consentimiento continuo y la claridad sobre los límites de Reiki (sin diagnosticar ni sustituir atención médica) sostienen una práctica íntegra."
  }
];
