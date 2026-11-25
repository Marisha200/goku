/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Class6TextBlock {
  title: string;
  paragraphs: string[];
}

export interface Class6AuthoritySituation {
  id: string;
  number: number;
  situation: string;
  suggestedResponse: string;
  principle: string;
}

export interface Class6KnowledgeCategory {
  category: string;
  meaning: string;
  example: string;
}

export interface Class6MirrorItem {
  id: string;
  statement: string;
  correctType: "observacion" | "ensenanza" | "evidencia" | "hecho";
  explanation: string;
}

export interface Class6DilemmaOption {
  id: string;
  label: string;
  isEthical: boolean;
  feedback: string;
}

export interface Class6GameScenario {
  id: string;
  category: "autoridad" | "limites" | "respuesta";
  title: string;
  situation: string;
  options: {
    label: string;
    isBest: boolean;
    feedback: string;
  }[];
}

export interface Class6FichaImprimible {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  sections: {
    heading: string;
    items: string[];
  }[];
}

export interface Class6QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CLASS6_HERO = {
  title: "Clase VI: El Maestro y su Responsabilidad",
  subtitle: "Ética, discernimiento y responsabilidad en la enseñanza de Reiki.",
  quote:
    "La verdadera autoridad no nace de tener todas las respuestas, sino de reconocer el alcance de nuestro conocimiento."
};

export const CLASS6_INICIO = {
  sectionTitle: "Inicio — La responsabilidad de enseñar",
  badge: "Ética y Responsabilidad",
  openingQuote:
    "La verdadera autoridad no nace de tener todas las respuestas, sino de reconocer el alcance de nuestro conocimiento.",
  paragraphs: [
    "Enseñar Reiki implica asumir una responsabilidad que va más allá de conocer técnicas, símbolos y procedimientos.",
    "Cuando una persona comienza a estudiar con nosotros, deposita cierta confianza en nuestra experiencia. Espera encontrar explicaciones, orientación y un espacio donde pueda aprender.",
    "Esa confianza no nos convierte en personas superiores. Nos compromete a utilizar nuestros conocimientos con claridad, prudencia y respeto.",
    "La responsabilidad del maestro se expresa en situaciones cotidianas: cuando responde una pregunta, cuando reconoce que desconoce una respuesta, cuando corrige una práctica o cuando necesita establecer límites.",
    "También aparece cuando alguien comparte una experiencia personal y espera que le atribuyamos un significado. En esos momentos, el maestro debe recordar que acompañar una experiencia no significa necesariamente interpretarla.",
    "La enseñanza responsable no busca que los alumnos dependan permanentemente de quien los formó. Busca ofrecerles conocimientos y herramientas para desarrollar su propia práctica."
  ],
  reflections: [
    "¿Qué diferencia existe entre inspirar confianza y exigir obediencia?",
    "¿Qué cualidades debería reunir una persona para ejercer responsablemente el rol de maestro?"
  ]
};

export const CLASS6_AUTORIDAD = {
  sectionTitle: "La autoridad del maestro",
  badge: "Autoridad y Humildad",
  quote:
    "La experiencia puede otorgarnos conocimiento. La humildad nos recuerda que ese conocimiento siempre tiene límites.",
  blocks: [
    {
      title: "El significado de Sensei (先生)",
      paragraphs: [
        "En japonés, Sensei (先生) es un tratamiento utilizado para docentes, maestros y profesionales de distintas disciplinas. Aunque sus caracteres pueden interpretarse literalmente como «quien nació antes», el significado habitual de la palabra está relacionado con la enseñanza y el reconocimiento de una trayectoria.",
        "En diferentes tradiciones japonesas, la relación entre maestro y alumno puede incluir respeto, disciplina y continuidad en la transmisión del conocimiento. Pero respetar a un maestro no significa considerarlo infalible.",
        "En Reiki, la función del maestro consiste en transmitir las enseñanzas de su formación, explicar su contexto, demostrar prácticas y acompañar el aprendizaje. No implica poseer respuestas sobre todos los aspectos de la vida."
      ]
    },
    {
      title: "Autoridad y autoritarismo",
      paragraphs: [
        "La autoridad pedagógica se construye mediante conocimientos, experiencia, preparación y coherencia. El autoritarismo aparece cuando una persona utiliza su posición para impedir preguntas o imponer afirmaciones sin explicarlas.",
        "Un docente responsable puede corregir errores, establecer criterios y organizar una formación sin desvalorizar a sus alumnos."
      ]
    },
    {
      title: "La humildad no es inseguridad",
      paragraphs: [
        "Reconocer que desconocemos una respuesta no significa carecer de preparación. Significa comprender que el conocimiento siempre tiene límites.",
        "Podemos llevar muchos años practicando Reiki y desconocer determinados aspectos de su historia. Podemos experimentar sensaciones durante una práctica sin saber explicar sus causas. También podemos encontrar fuentes que contradicen afirmaciones que aprendimos anteriormente.",
        "La humildad consiste en estar dispuestos a revisar nuestras ideas cuando aparecen nuevos elementos."
      ]
    },
    {
      title: "Coherencia entre palabras y acciones",
      paragraphs: [
        "Un maestro puede hablar extensamente sobre respeto, pero si ridiculiza las preguntas de sus alumnos, transmite un mensaje contradictorio. Puede enseñar autonomía, pero si exige que todas las decisiones sean consultadas con él, genera dependencia.",
        "La coherencia no requiere perfección. Requiere disposición a reconocer errores y corregirlos."
      ]
    }
  ] as Class6TextBlock[],
  contrastResponses: {
    title: "Considerá dos respuestas ante una duda",
    first: "«Esto es así porque yo soy el maestro.»",
    second:
      "«En nuestro linaje se enseña de esta manera. Te voy a explicar su propósito y qué diferencias encontramos con otras escuelas.»",
    takeaway:
      "La segunda respuesta mantiene la función del maestro, pero también permite comprender."
  },
  activityTitle: "Actividad — Autoridad o autoritarismo",
  activityInstruction:
    "Para cada situación real, redactá una respuesta que mantenga la claridad y el respeto, y luego comparala con la guía sugerida:",
  situations: [
    {
      id: "aut_1",
      number: 1,
      situation: "Un alumno cuestiona una explicación histórica.",
      suggestedResponse:
        "«Gracias por señalarlo. En la historia de Reiki hay relatos tradicionales y datos documentados que se investigaron recién en las últimas décadas. Revisemos de dónde surge esa versión y qué fuentes conocemos hoy.»",
      principle: "Abrir la pregunta en lugar de clausurarla por jerarquía."
    },
    {
      id: "aut_2",
      number: 2,
      situation: "Una participante aprendió una técnica diferente en otra escuela.",
      suggestedResponse:
        "«Es habitual que distintas escuelas organicen los pasos o los trazos de modo diferente. En nuestra formación practicamos esta secuencia por su sentido específico, respetando tu aprendizaje previo.»",
      principle: "Contextualizar diferencias de linaje sin descalificar otras escuelas."
    },
    {
      id: "aut_3",
      number: 3,
      situation: "Alguien solicita una fuente que el maestro no recuerda.",
      suggestedResponse:
        "«No recuerdo ahora mismo el título exacto de ese documento. Lo anoto, lo verifico después de clase y te paso la referencia correcta.»",
      principle: "Sostener humildad intelectual sin inventar citas."
    },
    {
      id: "aut_4",
      number: 4,
      situation: "Un alumno comete repetidamente el mismo error práctico.",
      suggestedResponse:
        "«Veo que este paso todavía genera confusión, y es muy común al principio. Hagámoslo juntos más despacio para que puedas observar el apoyo exacto.»",
      principle: "Corregir el procedimiento con firmeza y cuidado, sin humillar."
    }
  ] as Class6AuthoritySituation[],
  teaching: "La autoridad del maestro encuentra su sentido cuando favorece la autonomía del estudiante."
};

export const CLASS6_ETICA = {
  sectionTitle: "La ética en la práctica",
  badge: "Consentimiento y Límites",
  quote:
    "El respeto comienza cuando reconocemos que la otra persona conserva el derecho de decidir sobre su propia experiencia.",
  blocks: [
    {
      title: "La ética forma parte de la enseñanza",
      paragraphs: [
        "Una práctica puede estar correctamente ejecutada desde el punto de vista técnico y, sin embargo, desarrollarse de manera poco respetuosa. Por ejemplo, alguien puede conocer todas las posiciones de una sesión de Reiki y comenzar a tocar a otra persona sin solicitar autorización.",
        "El conocimiento técnico no reemplaza la responsabilidad ética. La ética nos invita a preguntarnos cómo utilizamos aquello que sabemos y qué consecuencias pueden tener nuestras acciones."
      ]
    },
    {
      title: "Consentimiento",
      paragraphs: [
        "El consentimiento implica que una persona comprenda qué se propone realizar y pueda aceptar o rechazar libremente. Antes de una práctica con contacto físico, debemos explicar qué haremos y preguntar si la persona está de acuerdo.",
        "También debemos recordar que puede retirar su consentimiento en cualquier momento. Durante una formación, un alumno puede preferir observar una demostración sin participar físicamente: esa decisión debe respetarse."
      ]
    },
    {
      title: "Confidencialidad",
      paragraphs: [
        "En las sesiones y clases pueden aparecer experiencias personales, emociones y relatos privados. Que alguien comparta información no significa que autorice a divulgarla.",
        "Si utilizamos una situación como ejemplo educativo, debemos evitar incluir datos que permitan identificar a la persona sin su consentimiento. La confidencialidad contribuye a construir confianza."
      ]
    },
    {
      title: "Los límites de Reiki",
      paragraphs: [
        "Reiki puede ser una práctica personal vinculada al bienestar y la relajación. Sin embargo, no constituye un procedimiento de diagnóstico médico ni debe presentarse como sustituto de tratamientos profesionales.",
        "Un maestro no debería atribuir enfermedades a supuestos bloqueos energéticos, recomendar suspender medicación ni garantizar resultados terapéuticos. Cuando una consulta excede nuestra formación, corresponde reconocerlo y orientar hacia profesionales habilitados."
      ]
    },
    {
      title: "Las expectativas",
      paragraphs: [
        "Algunas personas esperan sentir calor, hormigueo, emociones intensas o determinadas percepciones durante una práctica. Pero las experiencias subjetivas varían.",
        "No debemos presentar una sensación específica como requisito para que la práctica sea válida, ni interpretar automáticamente las percepciones de los alumnos. Podemos escucharlas sin imponerles un significado."
      ]
    }
  ] as Class6TextBlock[],
  activity: {
    title: "Actividad — Los límites del consentimiento",
    scenario:
      "Una alumna acepta participar en una demostración, pero durante la práctica manifiesta incomodidad. ¿Qué debería hacer el maestro?",
    options: [
      {
        id: "seguir",
        label: "A) Pedirle que respire hondo y aguante dos minutos más para no interrumpir la demostración grupal.",
        isCorrect: false,
        feedback:
          "Ignorar una incomodidad vulnera el derecho de retirar el consentimiento en cualquier momento."
      },
      {
        id: "detener",
        label: "B) Detener la práctica de inmediato, escucharla con calma y ofrecer alternativas sin presionarla.",
        isCorrect: true,
        feedback:
          "¡Correcto! La respuesta adecuada es detener la práctica, escucharla y ofrecer alternativas (por ejemplo, pasar a observar o trabajar sin contacto) sin presionarla."
      },
      {
        id: "interpretar",
        label: "C) Explicar al grupo que esa incomodidad indica un «bloqueo emocional que está liberando» y continuar.",
        isCorrect: false,
        feedback:
          "Atribuir significado espiritual a la incomodidad ajena invalida su límite físico o emocional real."
      }
    ]
  },
  teaching: "Respetar la autonomía de las personas es parte fundamental de una práctica responsable."
};

export const CLASS6_DISCERNIMIENTO = {
  sectionTitle: "Discernimiento y pensamiento crítico",
  badge: "Pensamiento Crítico",
  quote:
    "No todo lo que experimentamos necesita una explicación inmediata. A veces comprender comienza por aprender a observar.",
  observarVsInterpretar: {
    title: "Observar no es interpretar",
    intro:
      "Imaginemos que durante una sesión sentimos calor en las manos. Aprender a distinguir estos niveles resulta fundamental:",
    examples: [
      {
        phrase: "«Sentí calor.»",
        kind: "Experiencia observada",
        detail: "Describe directamente lo que percibiste en el cuerpo."
      },
      {
        phrase: "«Creo que esa sensación estuvo relacionada con la práctica.»",
        kind: "Interpretación",
        detail: "Expresa una hipótesis o lectura personal sobre el hecho."
      },
      {
        phrase: "«El calor demuestra que detecté un bloqueo energético.»",
        kind: "Conclusión injustificada",
        detail: "Afirma algo que no se desprende necesariamente de la observación."
      }
    ]
  },
  categoriesIntro:
    "Estas categorías no buscan eliminar la dimensión simbólica o espiritual de Reiki: permiten presentarla con mayor precisión.",
  categories: [
    {
      category: "Hecho documentado",
      meaning: "Información respaldada por fuentes identificables.",
      example: "Fechas históricas de fundación de la Gakkai o documentos conservados."
    },
    {
      category: "Enseñanza tradicional",
      meaning: "Conocimiento transmitido dentro de una escuela o linaje.",
      example: "Secuencias, técnicas como Gasshō o explicaciones propias de una línea."
    },
    {
      category: "Experiencia subjetiva",
      meaning: "Sensación o vivencia relatada por una persona.",
      example: "«Durante la práctica sentí calor, calma u hormigueo en las manos.»"
    },
    {
      category: "Interpretación",
      meaning: "Significado que atribuimos a un hecho o experiencia.",
      example: "«Creo que esta sensación expresa un proceso personal que estoy atravesando.»"
    }
  ] as Class6KnowledgeCategory[],
  blocks: [
    {
      title: "El valor de la duda",
      paragraphs: [
        "La duda puede ayudarnos a investigar. Cuando encontramos versiones diferentes sobre la vida de Mikao Usui, podemos revisar las fuentes disponibles.",
        "Cuando una experiencia resulta difícil de comprender, podemos reconocer que no contamos con una explicación definitiva. Y cuando una afirmación depende exclusivamente de la autoridad de quien la pronuncia, podemos preguntarnos qué fundamentos la sostienen.",
        "La duda razonada no impide aprender: puede ayudarnos a evitar conclusiones apresuradas."
      ]
    },
    {
      title: "El misterio y el conocimiento",
      paragraphs: [
        "En Shinpiden exploramos la idea de una enseñanza misteriosa. Pero el misterio no necesita convertirse en una explicación sobrenatural de todo aquello que desconocemos.",
        "Existen experiencias humanas difíciles de expresar mediante palabras. Podemos reconocer su importancia personal sin afirmar que conocemos sus causas. La apertura y el discernimiento no son incompatibles."
      ]
    }
  ] as Class6TextBlock[],
  activityTitle: "Actividad — El espejo del discernimiento",
  activityInstruction:
    "Clasificá estas cuatro afirmaciones y observá cuáles corresponden a observaciones subjetivas, enseñanzas de linaje, hechos documentados o afirmaciones que requieren evidencia:",
  mirrorItems: [
    {
      id: "mir_1",
      statement: "«Durante la práctica sentí hormigueo.»",
      correctType: "observacion",
      explanation:
        "Experiencia subjetiva / observación directa: describe fielmente una sensación percibida sin atribuirle causas externas ni diagnósticos."
    },
    {
      id: "mir_2",
      statement: "«En mi escuela utilizamos esta secuencia.»",
      correctType: "ensenanza",
      explanation:
        "Enseñanza tradicional de linaje: informa la forma particular que transmite una escuela sin presentarla como verdad única universal."
    },
    {
      id: "mir_3",
      statement: "«Todos los alumnos deben experimentar calor.»",
      correctType: "evidencia",
      explanation:
        "Afirmación generalizada que requiere evidencia y resulta falsa en la práctica: las percepciones subjetivas varían de persona a persona."
    },
    {
      id: "mir_4",
      statement: "«Este documento histórico describe una determinada práctica.»",
      correctType: "hecho",
      explanation:
        "Hecho documentado: remite a una fuente histórica verificable donde aparece registrada esa práctica."
    }
  ] as Class6MirrorItem[],
  teaching: "El discernimiento permite respetar las experiencias sin convertirlas automáticamente en certezas."
};

export const CLASS6_DIFICIL = {
  sectionTitle: "Cuando enseñar se vuelve difícil",
  badge: "Situaciones Complejas",
  quote:
    "La responsabilidad del maestro se revela especialmente cuando la situación no tiene una respuesta sencilla.",
  blocks: [
    {
      title: "Las situaciones inesperadas",
      paragraphs: [
        "Podemos preparar cuidadosamente una clase y encontrarnos con preguntas, desacuerdos o situaciones que no habíamos previsto. Un alumno puede cuestionar una enseñanza, otro puede sentirse frustrado porque no experimenta las mismas sensaciones que sus compañeros, y también pueden aparecer expectativas poco realistas o solicitudes de orientación personal.",
        "En estos momentos necesitamos escuchar, comprender qué sucede y responder dentro de los límites de nuestra función."
      ]
    },
    {
      title: "Cuando alguien espera resultados extraordinarios",
      paragraphs: [
        "Algunas personas comienzan Reiki esperando experiencias intensas o cambios inmediatos. El maestro debe evitar reforzar expectativas que no puede garantizar.",
        "Podemos explicar que las experiencias varían y que ninguna sensación determinada constituye una obligación. La formación debe ofrecer conocimientos y prácticas, no promesas de resultados extraordinarios."
      ]
    },
    {
      title: "Cuando aparece dependencia",
      paragraphs: [
        "Una relación pedagógica saludable debería favorecer progresivamente la autonomía. Si un alumno comienza a consultar al maestro todas sus decisiones personales, conviene establecer límites.",
        "Podemos ayudarlo a reflexionar sin asumir la responsabilidad de decidir por él."
      ]
    },
    {
      title: "Cuando aparecen conflictos",
      paragraphs: [
        "No todos los desacuerdos representan problemas. En ocasiones, una diferencia de interpretación permite profundizar una enseñanza.",
        "Pero si una conversación se vuelve agresiva, el maestro debe intervenir para restablecer condiciones de respeto: recordar los acuerdos del grupo, detener una discusión o proponer continuarla en otro momento. El objetivo no es ganar, sino conservar un espacio adecuado para aprender."
      ]
    },
    {
      title: "Reconocer cuándo pedir ayuda",
      paragraphs: [
        "Algunas situaciones exceden la función de un maestro de Reiki. Problemas de salud, crisis emocionales importantes o situaciones de riesgo requieren intervención profesional.",
        "Reconocer cuándo nuestra ayuda no es suficiente también forma parte de la responsabilidad."
      ]
    }
  ] as Class6TextBlock[],
  dilemma: {
    title: "Actividad — El dilema del maestro",
    situation:
      "Imaginá que un alumno te dice que desea abandonar un tratamiento médico porque considera que Reiki es suficiente. ¿Cómo responderías?",
    options: [
      {
        id: "opt_validar",
        label: "A) «Si sentís tanta confianza en tu práctica, seguí tu intuición; Reiki actúa donde hace falta.»",
        isEthical: false,
        feedback:
          "Riesgoso y contrario a la ética docente: valida una decisión médica peligrosa sin contar con habilitación profesional."
      },
      {
        id: "opt_limites",
        label: "B) «Valoro tu entusiasmo por Reiki, pero no reemplaza ni sustituye tratamientos médicos. No puedo avalar que dejes tu tratamiento: hablá primero con tu médico.»",
        isEthical: true,
        feedback:
          "¡Exacto! Reconocés los límites de tu función con serenidad, protegés la salud del estudiante y lo orientás hacia el profesional de salud habilitado."
      },
      {
        id: "opt_evadir",
        label: "C) «Esa es tu decisión privada, yo no me meto en temas de salud.»",
        isEthical: false,
        feedback:
          "Aunque no decidimos por el otro, evitar aclarar que Reiki no sustituye la atención médica deja abierta una expectativa errónea y peligrosa."
      }
    ] as Class6DilemmaOption[]
  },
  teaching:
    "El maestro responsable no necesita resolver todas las situaciones, pero sí reconocer cómo actuar dentro de sus límites.",
  cierre: {
    title: "Cierre de la Clase VI",
    paragraphs: [
      "La responsabilidad de enseñar no consiste en tener todas las respuestas. Consiste en reconocer qué sabemos, qué desconocemos y qué consecuencias pueden tener nuestras palabras.",
      "La autoridad encuentra su sentido cuando favorece el aprendizaje. La ética se expresa en nuestras acciones cotidianas. Y el discernimiento nos recuerda que una experiencia puede ser significativa sin necesitar una explicación definitiva.",
      "La enseñanza responsable no busca seguidores. Busca personas capaces de continuar aprendiendo por sí mismas."
    ]
  }
};

export const CLASS6_GAME_SCENARIOS: Class6GameScenario[] = [
  {
    id: "g_dilema",
    category: "limites",
    title: "El dilema del maestro — Dependencia y derivación responsable",
    situation:
      "Un estudiante que atraviesa una crisis emocional intensa empieza a llamarte todos los días para pedirte que decidas por él si debe cambiar de trabajo o dejar su terapia psicológica porque «solo confía en vos».",
    options: [
      {
        label: "Acompañarlo con afecto aceptando decidir por él para aliviar su angustia temporalmente.",
        isBest: false,
        feedback: "Asumir decisiones personales refuerza la dependencia y excede por completo la función docente."
      },
      {
        label: "Escuchar con respeto, marcar con claridad el límite de tu rol, fomentar su autonomía y orientarlo a continuar o retomar su atención psicológica profesional.",
        isBest: true,
        feedback: "Decisión ética y responsable: protege al alumno, evita la dependencia y respeta los límites frente a crisis emocionales."
      }
    ]
  },
  {
    id: "g_aut",
    category: "autoridad",
    title: "¿Autoridad o autoritarismo? — Duda sobre el origen histórico",
    situation:
      "Un estudiante trae un libro reciente que contradice una anécdota tradicional sobre Mikao Usui y te pregunta delante del grupo cuál es verdad.",
    options: [
      {
        label: "«En mis clases se respeta el manual tal como está; no traigas lecturas externas que confunden.»",
        isBest: false,
        feedback: "Es una respuesta autoritaria que desalienta la duda razonada y la investigación."
      },
      {
        label: "«Es una muy buena pregunta: convivieron relatos tradicionales con investigaciones históricas más recientes. Podemos revisar qué está documentado y qué pertenece a la transmisión oral.»",
        isBest: true,
        feedback: "Autoridad pedagógica con humildad y rigor: distingue fuentes sin sentirse amenazada."
      }
    ]
  },
  {
    id: "g_lim1",
    category: "limites",
    title: "Los límites de la práctica — Consentimiento en clase",
    situation:
      "Un alumno nuevo dice antes de empezar la práctica en camilla que no quiere que nadie le toque la zona del cuello ni la cabeza por una molestia reciente.",
    options: [
      {
        label: "Respetar de inmediato su pedido, agradecer que lo haya expresado y mostrar cómo practicar manteniendo las manos a distancia o en otras zonas acordadas.",
        isBest: true,
        feedback: "El consentimiento informado y la autonomía corporal del participante están siempre primero."
      },
      {
        label: "Insistir en que al menos un compañero apoye suavemente las manos «para no dejar incompleta la secuencia».",
        isBest: false,
        feedback: "Nunca una secuencia técnica está por encima del consentimiento explícito de la persona."
      }
    ]
  },
  {
    id: "g_lim2",
    category: "limites",
    title: "Los límites de la práctica — Confidencialidad",
    situation:
      "Querés usar como ejemplo en otro curso la historia emotiva que compartió una alumna del grupo anterior, nombrando su caso con detalle porque creés que ayuda a aprender.",
    options: [
      {
        label: "No contar casos privados identificables; si usás una situación pedagógica, hacerla anónima y sin datos que permitan reconocer a la persona.",
        isBest: true,
        feedback: "La confidencialidad sostiene la confianza del espacio formativo."
      },
      {
        label: "Contarlo igual porque fue en un contexto espiritual positivo y nadie del grupo nuevo la conoce.",
        isBest: false,
        feedback: "Divulgar relatos privados sin autorización quiebra la ética de confidencialidad."
      }
    ]
  },
  {
    id: "g_resp",
    category: "respuesta",
    title: "La respuesta responsable — Expectativa de sensaciones",
    situation:
      "Al terminar su primera práctica, un estudiante te dice frustrado: «No sentí calor ni hormigueo como dijeron mis compañeros. ¿Hice algo mal o no sirvo para esto?».",
    options: [
      {
        label: "«Seguramente tenés un bloqueo en las manos; con más sintonizaciones se va a destrabar.»",
        isBest: false,
        feedback: "Inventa un diagnóstico infundado y genera inseguridad en el aprendiz."
      },
      {
        label: "«No hiciste nada mal. Las sensaciones varían muchísimo de una persona a otra y de una sesión a otra; no sentir calor no invalida tu práctica.»",
        isBest: true,
        feedback: "Desarma mitos, contiene con claridad y evita atribuir significados forzados."
      }
    ]
  }
];

export const CLASS6_FICHAS_IMPRIMIBLES: Class6FichaImprimible[] = [
  {
    id: "ficha_etica",
    code: "FICHA 01 · ÉTICA DOCENTE",
    title: "Compromiso Ético y Límites de la Práctica",
    subtitle: "Lista de verificación para sesiones de enseñanza y prácticas grupales de Reiki.",
    sections: [
      {
        heading: "1. Consentimiento y Confidencialidad",
        items: [
          "Explicar claramente qué se va a hacer antes de cualquier contacto físico.",
          "Aceptar sin presiones si alguien prefiere observar o detener la práctica.",
          "Resguardar relatos personales sin divulgar datos ni identidades."
        ]
      },
      {
        heading: "2. Límites frente a la Salud",
        items: [
          "Nunca diagnosticar enfermedades ni hablar de «bloqueos» como causa médica.",
          "Nunca sugerir suspender medicación o reemplazar tratamientos profesionales.",
          "Derivar o orientar hacia profesionales habilitados cuando corresponda."
        ]
      }
    ]
  },
  {
    id: "ficha_discernimiento",
    code: "FICHA 02 · PENSAMIENTO CRÍTICO",
    title: "Las 4 Categorías para Presentar el Conocimiento",
    subtitle: "Referencia rápida para comunicar con precisión sin perder apertura.",
    sections: [
      {
        heading: "Cómo distinguir al hablar en clase",
        items: [
          "Hecho documentado: respaldado por fuentes históricas o verificables.",
          "Enseñanza tradicional: propio de un linaje o escuela particular.",
          "Experiencia subjetiva: lo que la persona percibió directamente (calor, quietud).",
          "Interpretación: lectura o sentido personal que no debe imponerse como certeza."
        ]
      }
    ]
  }
];

export const CLASS6_TRIVIA_QUESTIONS: Class6QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué diferencia la autoridad pedagógica del autoritarismo en un maestro de Reiki?",
    options: [
      "La autoridad pedagógica exige obediencia absoluta para proteger el linaje.",
      "La autoridad pedagógica se basa en preparación y coherencia permitiendo preguntas y comprensión; el autoritarismo impone afirmaciones sin explicar.",
      "El autoritarismo consiste en corregir errores prácticos en voz alta."
    ],
    correctIndex: 1,
    explanation:
      "Un maestro responsable corrige y organiza la enseñanza con claridad sin impedir preguntas ni desvalorizar."
  },
  {
    id: 2,
    question: "Si una alumna acepta participar en una demostración pero luego expresa incomodidad, ¿qué corresponde hacer?",
    options: [
      "Detener la práctica, escucharla y ofrecer alternativas sin presionarla.",
      "Continuar brevemente para que supere su resistencia emocional.",
      "Explicar al grupo el significado espiritual de esa incomodidad."
    ],
    correctIndex: 0,
    explanation:
      "El consentimiento puede retirarse en cualquier momento y la autonomía del estudiante siempre prevalece."
  },
  {
    id: 3,
    question: "¿Cuál de estas frases expresa únicamente una «experiencia subjetiva» sin interpretación agregada?",
    options: [
      "«El calor demuestra que hay un bloqueo energético en el hombro.»",
      "«Sentí calor en las palmas durante la práctica.»",
      "«Seguramente ese calor significa una liberación emocional profunda.»"
    ],
    correctIndex: 1,
    explanation:
      "«Sentí calor» describe directamente lo percibido; las otras opciones introducen hipótesis o conclusiones injustificadas."
  },
  {
    id: 4,
    question: "Respecto a la salud médica, ¿cuál es el límite ético innegociable del maestro de Reiki?",
    options: [
      "Diagnosticar según la temperatura de las manos cuando el alumno lo pide.",
      "No diagnosticar, no prometer curas y nunca recomendar suspender tratamientos ni medicación.",
      "Sugerir reducir la dosis de medicación si el alumno se siente más relajado."
    ],
    correctIndex: 1,
    explanation:
      "Reiki acompaña el bienestar, pero jamás sustituye atención ni tratamientos médicos profesionales."
  },
  {
    id: 5,
    question: "¿Para qué sirven las cuatro categorías del conocimiento (hecho documentado, enseñanza tradicional, experiencia subjetiva e interpretación)?",
    options: [
      "Para eliminar toda dimensión espiritual de las clases.",
      "Para presentar cada aspecto de Reiki con precisión, evitando confundir vivencias personales o relatos con hechos históricos.",
      "Para desacreditar las escuelas diferentes a la nuestra."
    ],
    correctIndex: 1,
    explanation:
      "Distinguir categorías ordena la enseñanza con honestidad sin quitar profundidad simbólica ni espiritual."
  },
  {
    id: 6,
    question: "Según el cierre de la Clase VI, ¿qué busca verdaderamente la enseñanza responsable?",
    options: [
      "Formar seguidores dependientes que consulten cada decisión con su maestro.",
      "Personas capaces de desarrollar su propia práctica y continuar aprendiendo por sí mismas.",
      "Tener respuestas definitivas para todos los temas de la vida."
    ],
    correctIndex: 1,
    explanation:
      "La autoridad del maestro encuentra su sentido cuando favorece la autonomía del estudiante."
  }
];
