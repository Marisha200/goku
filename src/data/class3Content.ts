/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ShinpidenKanjiPart {
  kanji: string;
  romaji: string;
  meaning: string;
}

export interface ShinpidenFoundation {
  pillar: string;
  title: string;
  subtitle: string;
  points: string[];
}

export interface AnshinPillar {
  title: string;
  description: string;
}

export interface AnshinExercise {
  id: string;
  title: string;
  instruction: string;
  phrase?: string;
}

export interface DaikomyoKanjiDetail {
  kanji: string;
  romaji: string;
  title: string;
  literalMeaning: string;
  deepMeaning: string[];
  extraTitle?: string;
  extraText?: string;
  quote?: string;
}

export interface ShinpidenPractice {
  id: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  timerSeconds?: number;
  intro: string;
  steps: string[];
  highlightTitle?: string;
  highlightText?: string;
  secondaryBlocks?: { title: string; text: string }[];
  closingNote: string;
}

export interface ShinpidenMatchingItem {
  id: string;
  term: string;
  kanjiOrTag: string;
  correctMeaning: string;
}

export interface Class3QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CLASS3_HERO = {
  title: "Clase III: Shinpiden - Enseñanza Misteriosa",
  quote:
    "La energía del maestro ya está dentro tuyo. Es hora de activarla y permitir que guíe tus pasos hacia tu esencia más pura."
};

export const CLASS3_INICIO = {
  sectionTitle: "Inicio: El Maestro Interior y Fundamentos de Shinpiden",
  badge: "Maestría · Shinpiden",
  welcomeTitle: "El Maestro Interior: Más allá de la técnica",
  welcomeParagraphs: [
    "En este encuentro de Gokuikaiden nos adentramos en los fundamentos espirituales de Shinpiden —la Enseñanza Misteriosa— para ir más allá del aprendizaje técnico de los símbolos y las prácticas que ya conocés.",
    "Cuando alguien se prepara para sostener y transmitir Reiki desde la Maestría, el verdadero trabajo consiste en despertar al maestro interior: unificar mente, cuerpo y espíritu, purificar la intención y convertirse en un canal claro y sereno de la energía universal.",
    "Más que sumar herramientas, Shinpiden propone vivir en coherencia con los principios de Reiki, comprender por qué operan la resonancia del Kotodama, la quietud del Tanden y la luz de Daikomyo, y acompañar a otros desde la raíz."
  ],
  welcomeAuthor: "Marina",
  shinpidenKanji: {
    title: "Explorando Shinpiden (神秘伝): El Camino a la Divinidad",
    parts: [
      {
        kanji: "神",
        romaji: "Shin",
        meaning: "Divinidad, deidad o espíritu."
      },
      {
        kanji: "秘",
        romaji: "Hi",
        meaning: "Lo secreto, lo misterioso, lo oculto."
      },
      {
        kanji: "伝",
        romaji: "Den",
        meaning: "La enseñanza o transmisión en sí."
      }
    ] as ShinpidenKanjiPart[],
    unifiedMeaning: "Compartir el significado espiritual oculto de la conexión a la fuente.",
    notes: [
      "Lo «oculto» en Shinpiden no es un secreto cerrado, sino aquello que solo puede comprenderse por experiencia directa cuando la mente deja de intervenir y se abre a la conciencia universal.",
      "Originalmente, Mikao Usui transmitió la vibración suprema de esta etapa a sus discípulos como Kotodama antes de fijarse en forma gráfica como Símbolo Maestro. Su sentido último es cultivar estabilidad interior, paz y responsabilidad amorosa hacia nuestro entorno."
    ]
  },
  foundations: [
    {
      pillar: "Fundamento 1",
      title: "De la Técnica al Ser",
      subtitle: "Coherencia vibratoria antes que forma",
      points: [
        "Las posiciones, respiraciones y símbolos ordenan la atención inicial, pero lo que realmente transmite Reiki es el estado de presencia del practicante.",
        "La maestría comienza cuando la técnica deja de ser mecánica y se vuelve naturalidad, silencio y escucha."
      ]
    },
    {
      pillar: "Fundamento 2",
      title: "Espiritualidad sobre Poder Mental",
      subtitle: "El corazón puro como raíz de la sanación",
      points: [
        "La capacidad genuina de acompañar procesos profundos refleja la elevación espiritual y el trabajo personal, nunca el esfuerzo psíquico.",
        "Respetar el libre albedrío del receptor permite sostener espacios armónicos sin imponer resultados."
      ]
    },
    {
      pillar: "Fundamento 3",
      title: "Puente hacia la No-Dualidad",
      subtitle: "Daikomyo, Anshin Ritsumei y Satori",
      points: [
        "Todo símbolo apunta más allá de sí mismo: invita a integrar sabiduría y compasión hasta disolver la ilusión de separación.",
        "Vivir con propósito y paz mental estable es la base ética desde la cual luego se enseña."
      ]
    }
  ] as ShinpidenFoundation[]
};

export const CLASS3_SANACION_SATORI = {
  sectionTitle: "Módulo 1: Sanación, Espiritualidad y Camino al Satori",
  badge: "Conciencia y Luz",
  quote:
    "La verdadera sanación surge de un corazón puro y una espiritualidad elevada: una transformación que nace desde adentro e ilumina todo a su paso.",
  blocks: [
    {
      title: "Sanación y Espiritualidad",
      paragraphs: [
        "En el camino con Reiki, tu capacidad de sanar es reflejo directo de tu nivel de espiritualidad. Como un río alimentado por aguas puras, cuando vibrás en sintonía con Reiki tu acción sanadora se eleva de manera natural.",
        "Intentar forzar capacidades de sanación mediante pura concentración mental o poderes psíquicos sin crecimiento espiritual genuino termina bloqueando el flujo y agotando la fuerza vital. Quien recibe un don innato también necesita cultivar gratitud y elevación espiritual para sostenerlo."
      ]
    },
    {
      title: "El Arte de la Sanación",
      paragraphs: [
        "La sensibilidad energética se afina como un instrumento musical a través de Hatsurei-ho, Gassho Kokyu-ho y la práctica constante de tratamientos. El rol del reikista no es imponer sino acompañar: la decisión de sanar reside siempre en el receptor.",
        "Cuando aparecen patrones de sufrimiento, no se trata de culparnos sino de asumir responsabilidad: «¿Qué pensamientos o acciones me llevaron hasta acá?». Al dar sesiones, abrí el corazón en lugar de hacer foco desde la mente, creando un espacio armónico donde el otro encuentre su propio ritmo."
      ]
    },
    {
      title: "El Camino hacia la Iluminación y la Unión con el Universo",
      paragraphs: [
        "Ya sea que creas en múltiples reencarnaciones o en una única vida, el Símbolo Maestro te invita a purificar sombras del pasado, soltar ilusiones y apegos, y descubrir el sentido profundo de tu existencia.",
        "En Reiki Tradicional Japonés, trabajamos continuamente en pensamientos, palabras y acciones para acercarnos al Satori: ese estado de estabilidad y calma absoluta que alcanzó Usui Sensei."
      ]
    }
  ],
  satoriGuide: {
    title: "Guía para el Satori: La Paz Absoluta",
    points: [
      {
        label: "Verdadera Felicidad",
        text: "No depende de posesiones, estatus ni satisfacciones temporales. Se alcanza cuando, sin importar las circunstancias, la mente permanece en calma, tranquila y alegre."
      },
      {
        label: "Relajación Total y Confianza",
        text: "Después de haber hecho todo lo que estaba en tus manos, soltá la ansiedad por los resultados y confiá en que el Universo sostiene y ordena el proceso."
      },
      {
        label: "Aquí y Ahora",
        text: "La Tierra es nuestro lugar de aprendizaje. Tu presente es fruto de decisiones pasadas, y lo que elegís hoy —purificando emociones como la ira o el miedo— construye tu autorrealización."
      }
    ]
  }
};

export const CLASS3_ANSHIN_AFIRMACIONES = {
  sectionTitle: "Módulo 2: Anshin Ritsumei, Afirmaciones y Superación de Símbolos",
  badge: "Paz y Propósito",
  quote:
    "Anshin Ritsumei es encontrar esa paz interior que no depende de lo que pasa afuera y vivir plenamente alineado con tu propósito.",
  anshin: {
    intro:
      "En las enseñanzas de Mikao Usui, Anshin significa «paz mental o tranquilidad» y Ritsumei significa «cumplir con tu misión de vida o establecer tu destino». Es un paso esencial rumbo al Satori.",
    pillars: [
      {
        title: "Paz Interior y Aceptación",
        description:
          "Aceptar la vida tal como es, con sus alegrías y desafíos, hallando calma sin luchar contra las circunstancias."
      },
      {
        title: "Vivir con Propósito",
        description:
          "Alinear tus acciones diarias con tu misión vital produce una satisfacción profunda y genuina."
      },
      {
        title: "Inmunidad ante lo Externo",
        description:
          "Aunque el entorno cambie, tu centro interior y tu dirección permanecen firmes."
      },
      {
        title: "Aplicación en Reiki",
        description:
          "Estar en paz con vos mismo/a y con el Universo permite que la energía fluya libremente al sanar cuerpo y espíritu."
      }
    ] as AnshinPillar[],
    exercises: [
      {
        id: "gassho",
        title: "Meditación Gassho",
        instruction:
          "Sentate en un lugar tranquilo, juntá tus manos en posición de oración, atendé a la respiración y sentí la energía fluir mientras repetís los Cinco Principios."
      },
      {
        id: "propositos",
        title: "Escritura de Propósitos",
        instruction:
          "Tomate unos minutos diarios para escribir qué sentís que es tu propósito y cómo vivir hoy en coherencia con él."
      },
      {
        id: "aceptacion",
        title: "Visualización de Aceptación",
        instruction:
          "Imaginate frente a una situación difícil, observá tu reacción habitual y volvé a visualizarla respondiendo desde la calma."
      },
      {
        id: "desapego",
        title: "Ejercicio de Desapego",
        instruction:
          "Elegí algo que te preocupe hoy, soltá el intento de control y repetí en voz alta:",
        phrase: "«Acepto que no tengo control sobre esto, y elijo estar en paz.»"
      }
    ] as AnshinExercise[]
  },
  affirmations: {
    title: "Afirmaciones: Reprogramar desde el Ser Superior",
    rules: [
      "Reescriben grabaciones limitantes del subconsciente («no soy capaz») desde la voz auténtica de tu alma.",
      "Practicá con las manos suavemente sobre el pecho, conectando con tu Ser Superior para que Reiki lleve la intención a lo profundo.",
      "No intentes forzar deseos desde el ego: el objetivo no es cambiar a los demás sino transformarte a vos mismo/a.",
      "Formulá siempre en presente o presente progresivo («soy...» o «estoy siendo...») en vez de «quiero ser...»."
    ],
    suggestedList: [
      "Soy una persona alegre, fuerte, positiva y creativa.",
      "Día a día, mejoro y crezco, envuelto/a en la luz de Reiki.",
      "Reiki guía mi vida hacia la armonía y la abundancia.",
      "Estoy trabajando en algo que realmente amo, con el apoyo de Reiki.",
      "Soy una extensión del Gran Universo. El Universo siempre me apoya. Soy un ser radiante, lleno de amor y luz.",
      "Dentro de mí, tengo todo lo que necesito. Puedo acceder a ello en cualquier momento.",
      "Los desafíos que enfrento son oportunidades para mejorar. Incluso los que parecen negativos, son cambios para mi bien.",
      "Cada día, en todos los aspectos, estoy mejorando.",
      "Aquí y ahora, abro mi corazón y me conecto con la sabiduría interior más profunda.",
      "Invito a la luz divina que vive dentro de mí. Soy un canal puro y perfecto de la luz de Reiki. La luz me guía.",
      "Gracias a la guía de mi Ser Superior, tengo el coraje para cambiar lo que puedo cambiar, la serenidad para aceptar lo que no puedo cambiar y la sabiduría para discernir entre ambos."
    ]
  },
  symbolTranscendence: {
    title: "Superación de los Símbolos (HO)",
    metaphor:
      "Usui Sensei explicaba que los símbolos (HO) son como las rueditas de una bicicleta: ayudas temporales que resuenan por su forma y sonido mientras aprendés, hasta que elevás tu conciencia y comprendés que ya sos uno con la energía.",
    steps: [
      {
        step: 1,
        title: "Dominar los cuatro símbolos",
        text: "Comprendé profundamente el uso y efecto de cada símbolo y su kotodama."
      },
      {
        step: 2,
        title: "Integrar Daikomyo",
        text: "Usá Hon Sha Ze Sho Nen para sanar y Daikomyo para elevar tu espiritualidad, hasta trabajar con Daikomyo como eje."
      },
      {
        step: 3,
        title: "Reemplazar por imágenes",
        text: "A medida que ganás confianza, sustituí HSZSN por la imagen del Sol y Daikomyo por una Luz Blanca radiante."
      },
      {
        step: 4,
        title: "Unidad sin apoyos",
        text: "Comprendés que vos mismo/a sos uno con la energía y ya no necesitás intermediarios para canalizar."
      }
    ]
  }
};

export const CLASS3_DAIKOMYO = {
  sectionTitle: "Módulo 3: Daikomyo — La Gran Luz Brillante",
  badge: "Símbolo Maestro",
  usuiQuote: "Yo soy el Universo y el Universo está en mí.",
  intro:
    "El cuarto símbolo de Reiki representa el Universo en su totalidad y conecta directamente con la vibración de alta dimensión. Se traduce habitualmente como «Gran Luz Brillante», «Gran Luz Resplandeciente» o, en tradiciones esotéricas como la Escuela Shingon, como Dai Kōmyō Shingon («Gran Mantra de Luz» ligado a Dainichi Nyorai, el Buda Cósmico).",
  kanjis: [
    {
      kanji: "大",
      romaji: "DAI",
      title: "Grande · Inmenso · Vasto",
      literalMeaning: "Grandeza del Universo y del ser humano erguido en armonía.",
      deepMeaning: [
        "En escuelas esotéricas japonesas simboliza los cinco elementos constitutivos de todo lo que existe: tierra, agua, fuego, aire y espacio.",
        "En el budismo esotérico se suma un sexto elemento: la mente o conciencia, representado por Dainichi Nyorai en el mudra Chiken-in.",
        "También evoca la postura firme y digna del ser humano alineado con el cosmos."
      ]
    },
    {
      kanji: "光",
      romaji: "KŌ",
      title: "Luz · Rayo · Sabiduría No-Dual",
      literalMeaning: "Luz innata de tu verdadera naturaleza.",
      deepMeaning: [
        "Brilla de manera equitativa sobre todo como el sol, sin juzgar; solo necesitás abrirte a su presencia.",
        "Se asocia al fuego del altar que purifica para que redescubras tu luz interior."
      ],
      quote:
        "«Elimina la oscuridad e ilumina todas las cosas; permite la realización de todas las obras; es la luz que no se crea ni se destruye.» — Subhakarasimha"
    },
    {
      kanji: "明",
      romaji: "MYŌ",
      title: "Claridad · Sol y Luna Unidos",
      literalMeaning: "Integración de sabiduría (Sol) y compasión (Luna).",
      deepMeaning: [
        "Está formado por el kanji del Sol a la izquierda (aspecto femenino de la sabiduría) y la Luna a la derecha (aspecto masculino de la compasión o el método).",
        "En el budismo Tendai expresa la unión de las tres verdades en una sola mente (Isshin Sanchi): Kutai (vacuidad absoluta), Ketai (temporalidad relativa) y Chutai (camino del medio o interdependencia)."
      ]
    }
  ] as DaikomyoKanjiDetail[],
  symbolSheetPdf: {
    title: "Dai-Ko-Myo (Gran y Brillante Luz Eterna) — Lámina de Trazos",
    subtitle:
      "Lámina adjunta con las dos versiones de trazado: caligrafía kanji tradicional (17 trazos, pág. 1) y trazado caligráfico clásico de Reiki (22 trazos, pág. 2).",
    url: "/assets/aistudio/Simbolo_daikomyo_2773746d.pdf"
  },
  strokeSummary: {
    title: "Trazado del símbolo Daikomyo (大 光 明)",
    description:
      "Seguí el orden numerado de los trazos de arriba hacia abajo y de izquierda a derecha, tal como muestra la lámina adjunta:",
    groups: [
      "Trazos 1 al 3 · 大 (Dai): 1) horizontal de izquierda a derecha; 2) vertical central que desciende curvando hacia la izquierda; 3) diagonal descendente hacia la derecha.",
      "Trazos 4 al 9 · 光 (Kō): 4) vertical corto al centro; 5) tilde izquierda hacia abajo-derecha; 6) tilde derecha hacia abajo-izquierda; 7) horizontal de izquierda a derecha; 8) pierna izquierda curva; 9) pierna derecha vertical doblando al pie con gancho hacia arriba.",
      "Trazos 10 al 17 · 明 (Myō): primero 日 (Sol: 10 vertical, 11 techo y lateral derecho, 12 barra interna, 13 cierre inferior) y luego 月 (Luna: 14 vertical izquierdo curvo, 15 techo y lateral derecho con gancho, 16 y 17 barras horizontales internas).",
      "Variante tradicional de 22 trazos (página 2 de la lámina): desglose caligráfico clásico de Reiki para practicar ambos estilos."
    ],
    strokeDescriptions: [
      "1. 大 — Trazo horizontal de izquierda a derecha.",
      "2. 大 — Vertical central que desciende y curva hacia la izquierda.",
      "3. 大 — Trazo diagonal descendente hacia la derecha.",
      "4. 光 — Pequeño trazo vertical central hacia abajo.",
      "5. 光 — Tilde izquierda descendente hacia el centro.",
      "6. 光 — Tilde derecha descendente hacia el centro.",
      "7. 光 — Barra horizontal de izquierda a derecha.",
      "8. 光 — Pierna izquierda curva hacia abajo y afuera.",
      "9. 光 — Pierna derecha: baja recto, gira hacia la derecha y termina con gancho arriba.",
      "10. 明 (日) — Vertical izquierdo del Sol hacia abajo.",
      "11. 明 (日) — Horizontal superior y descenso por el lado derecho.",
      "12. 明 (日) — Barra horizontal interior del Sol.",
      "13. 明 (日) — Barra horizontal inferior que cierra el Sol.",
      "14. 明 (月) — Vertical izquierdo de la Luna curvando abajo a la izquierda.",
      "15. 明 (月) — Horizontal superior y descenso derecho de la Luna con gancho final.",
      "16. 明 (月) — Barra horizontal superior interior de la Luna.",
      "17. 明 (月) — Barra horizontal inferior interior de la Luna."
    ]
  },
  practicalUses: [
    {
      title: "Antes de meditar o purificarte",
      text: "Trazá primero Daikomyo junto a su Kotodama para invitar vibración de alta dimensión a toda la práctica."
    },
    {
      title: "Inicio y cierre de tratamientos",
      text: "Trazalo al comenzar para preparar el campo del receptor y envolvélos simbólicamente al cerrar."
    },
    {
      title: "Deporte, Chi Kung y actividad física",
      text: "Invocalo antes para rodearte de luz armónica y al terminar para sellar la energía movilizada."
    },
    {
      title: "Desafíos que te superan",
      text: "Envialo con la intención de entregar la situación a la Alta Dimensión pidiendo claridad y solución."
    },
    {
      title: "Vida cotidiana y espacios",
      text: "Usalo cuando necesités calma ante una conmoción, una respuesta intuitiva, tomar decisiones o purificar un ambiente."
    }
  ]
};

export const CLASS3_PRACTICAS: ShinpidenPractice[] = [
  {
    id: "autopurificacion_luz",
    title: "1. Auto-purificación en la Luz",
    subtitle: "Alineación mente, corazón y Tanden",
    durationLabel: "3 a 5 min",
    intro:
      "Práctica preparatoria fundamental antes de realizar técnicas avanzadas o meditaciones.",
    steps: [
      "Realizá Kenyoku (baño seco) y ponete de pie de manera relajada.",
      "Trazá Daikomyo en el aire frente a vos y repetí su Kotodama tres veces.",
      "Levantá ambas manos sintiendo cómo Reiki fluye con fuerza por todo tu cuerpo en unión con el Universo.",
      "Cerrá los ojos y llevá lentamente una mano a la coronilla y la otra al corazón, alineando mente y corazón.",
      "Llevá ambas manos al Tanden (bajo el ombligo): primero la mano del corazón y encima la de la coronilla, anclando y equilibrando tu espacio vital.",
      "Imaginá que devolvés suavemente el excedente de energía al cielo, uní las manos en Gassho y agradecé."
    ],
    closingNote: "Asegurate de sentir tu centro en calma antes de pasar a otra técnica."
  },
  {
    id: "ser_superior",
    title: "2. Conexión con tu Ser Superior",
    subtitle: "Rutina diaria y práctica de 6 pasos en el pecho",
    durationLabel: "5 min",
    timerSeconds: 300,
    intro:
      "Podés adaptar el término «Ser Superior» a cualquier motivo de fe que resuene con vos. Incluye la rutina de inicio/cierre del día y la escucha sutil con ambas manos.",
    steps: [
      "Hacé Kenyoku, trazá Daikomyo con su Kotodama 3 veces y levantá las manos hacia el cielo.",
      "Cerrá los ojos y apoyá tu mano dominante en el pecho. Respirando lento, repetí mentalmente «Mi Ser Superior» 3 veces observando las sensaciones.",
      "Cambiá a la otra mano y repetí el proceso comparando si sentís bienestar, calor o tranquilidad.",
      "Dejá sobre el pecho la mano que percibió mejor (o la menos dominante si no notaste diferencia).",
      "Permití que la Luz de la Alta Dimensión purifique cualquier bloqueo interno mientras descansás en esa sensación.",
      "Uní las manos en Gassho, agradecé y cerrá en paz."
    ],
    secondaryBlocks: [
      {
        title: "Al comenzar el día (en Gassho)",
        text: "«Hoy voy a hacer todo correctamente, guiado/a y sanado/a por mi Ser Superior. Voy a progresar y armonizar en todos los sentidos.»"
      },
      {
        title: "Al finalizar el día (en Gassho)",
        text: "«Agradezco de corazón por haber estado guiado/a y sanado/a por mi Ser Superior hoy. Voy a progresar y armonizar en todos los sentidos.»"
      },
      {
        title: "Ante emociones difíciles",
        text: "Recurrí a la respiración luminosa, sentí la presencia de tu Ser Superior y aceptá la experiencia agradeciendo el aprendizaje."
      }
    ],
    closingNote: "Si al principio no percibís sensaciones claras en el pecho, tenete paciencia: la sensibilidad crece con la práctica."
  },
  {
    id: "paz_universo",
    title: "3. Paz del Universo y Mudra del Sol",
    subtitle: "Irradiación colectiva (sugerida de 9 a 10 AM)",
    durationLabel: "5 min",
    timerSeconds: 300,
    intro:
      "Elevá tus plegarias personales a una intención de paz universal; al participar de esta vibración también sanás tus propios procesos internos.",
    steps: [
      "Tras tu afirmación personal, enviá este pensamiento: «Que la paz reine en todo el Universo, que toda la Humanidad sea feliz y que las bendiciones lleguen a quienes debían encontrarla».",
      "Levantá las manos conectando con la luz de Reiki, cerrá los ojos y recitá la Plegaria de la Paz Universal.",
      "Abrí tus manos comenzando desde los meñiques para formar el Mudra del Sol frente a tu frente.",
      "Dejá que la luz irradie y expandí ese círculo de resonancia a todos los seres vivos.",
      "Volvé a Gassho, agradecé y cerrá la práctica."
    ],
    highlightTitle: "Plegaria para la Paz Universal",
    highlightText:
      "«Gran Universo, Gran Vida, Guías de Luz del mundo material. Que con la Luz de Reiki, en todo el Universo reine la paz. Que todos los seres vivos sean felices. Que los corazones de cada persona y todo lo que nos rodea estén llenos de Paz y Amor.»",
    closingNote: "Dedicá 5 minutos entre las 9 y las 10 de la mañana para sumarte vibracionalmente a esta práctica."
  },
  {
    id: "vibracion_iluminados",
    title: "4. Vibración de los Iluminados",
    subtitle: "Sintonía con cualidades elevadas",
    durationLabel: "5 a 10 min",
    intro:
      "Conectate con cualidades universales como la Compasión de Buda, el Amor de Cristo o la Generosidad de Ryoken para elevar tu vibración.",
    steps: [
      "Hacé Kenyoku, calmá la mente y adoptá una postura cómoda.",
      "Trazá Daikomyo en el aire, repetí su Kotodama 3 veces y elevá las manos al cielo.",
      "Bajá las manos, cerrá los ojos y enfocá tu conciencia en el ser iluminado elegido y el tema que querés trabajar.",
      "Con las manos en Gassho, sentí cómo tu conciencia se funde en la Conciencia de la Alta Dimensión.",
      "Cuando percibas la resonancia, transmití tus pensamientos o simplemente descansá en la vibración sin analizarla.",
      "Volvé a Gassho, agradecé y concluí con calma."
    ],
    closingNote: "Las comprensiones a veces llegan en el momento y otras veces aparecen días después en sueños o conversaciones."
  },
  {
    id: "elevacion_consciencia",
    title: "5. Elevación de la Consciencia",
    subtitle: "Burbuja protectora con antena en Gassho",
    durationLabel: "10 min",
    timerSeconds: 600,
    intro:
      "Ideal antes de tu meditación habitual: el Símbolo Maestro genera un escudo de luz pura libre de distracciones y bajas vibraciones.",
    steps: [
      "De pie o sentado/a con comodidad, trazá Daikomyo y repetí su Kotodama 3 veces; levantá las manos sintiendo descender la luz.",
      "Bajá las manos formando Gassho frente al rostro como una antena: dedos medios a la altura de la frente y pulgares a 3–5 cm de la nariz.",
      "Levantá lentamente la mano izquierda (derecha si sos zurdo/a) mientras la otra descansa palma arriba sobre la rodilla, absorbiendo arriba e irradiando por la mano dominante.",
      "Llevá ambas manos sobre las rodillas con palmas hacia arriba, sintiendo la comunicación con la Alta Dimensión.",
      "Apoyá una mano sobre el corazón enviando Reiki a tu Yo Superior junto con una afirmación positiva, y cerrá en Gassho."
    ],
    closingNote: "Asegurate de mantener la espalda relajada y sin tensión en los hombros."
  },
  {
    id: "entrenamiento_solar",
    title: "6. Entrenamiento Solar",
    subtitle: "Integración de todos los símbolos en 7 puntos",
    durationLabel: "Conteo guiado",
    timerSeconds: 90,
    intro:
      "Práctica solar que integra todos los símbolos de Reiki recorriendo el cuerpo con luz cálida mediante conteos pausados.",
    steps: [
      "1. Levantá las manos al cielo convirtiéndote en un símbolo vivo de Luz.",
      "2. Con las palmas enfrentadas sobre la cabeza, sentí el rayo solar atravesarte y contá lentamente hasta 10.",
      "3. Llevá las manos a ambos lados de la cabeza iluminando tus pensamientos y contá hasta 10.",
      "4. Mové las manos a los lados del cuello liberando tensiones en la garganta y contá hasta 10.",
      "5. Apoyá ambas manos en el corazón llenándolo de amor y compasión mientras contás hasta 10.",
      "6. Llevá las manos al abdomen superior activando tu fuerza vital y confianza mientras contás hasta 10.",
      "7. Anclá una mano en el Tanden y la otra en el sacro contando lentamente hasta 20; luego relajá los hombros y sentí el Sol interior."
    ],
    closingNote: "Usá el temporizador como apoyo tranquilo sin apurar los conteos."
  },
  {
    id: "sekizui_joka",
    title: "7. Sekizui Joka Ibuki Ho",
    subtitle: "Purificación de la columna vertebral (Koshinto)",
    durationLabel: "10 a 15 min",
    timerSeconds: 600,
    intro:
      "Cuando percibimos Oscuridad, Pesadez o Frío en lugar de Claridad, Ligereza y Calidez, esta respiración limpia la columna vertebral, canal sagrado de la memoria kármica.",
    steps: [
      "1. Preparación: De pie o sentado/a con la espalda recta y ojos cerrados.",
      "2. Ducha de Luz: Levantá ambas manos imaginando que la vibración de Reiki cae sobre vos limpiándote por dentro y por fuera.",
      "3. Calma: Bajá las manos al regazo (palmas abajo) y llevá la atención al Hara.",
      "4. Exhalación cálida («Ha...»): Visualizá la columna como un conducto de la coronilla al cóccix; al exhalar «Ha...», el calor disuelve y expulsa impurezas hacia abajo.",
      "5. Inhalación pura: Inhalá por la nariz viendo agua pura subir desde el sacro limpiando la columna hasta el entrecejo.",
      "Repetí pasos 4 y 5 en ciclos de 5 respiraciones (3 a 7 ciclos; máximo 7 ciclos por día) y cerrá con 5 a 15 minutos en silencio atendiendo al entrecejo hasta sentir que respirás por la piel."
    ],
    closingNote: "Respetá el máximo diario de 7 ciclos para mantener el equilibrio energético."
  },
  {
    id: "respiracion_meditacion_hado",
    title: "8. Respiración y Meditación Hado + Desbloqueo",
    subtitle: "Aliento «Ha...», barrido áurico y Cinco Principios",
    durationLabel: "10 min",
    timerSeconds: 600,
    intro:
      "El aliento primordial «Ha...» genera una onda vibratoria que oxigena el cuerpo, libera bloqueos y alinea la mente.",
    steps: [
      "Respiración Hado: Sentate sin apoyar la espalda (o quedate de pie), soltá tensión de rostro y hombros, exhalá por la boca abierta con el sonido «Ha...» (de 30 a 40 segundos progresivos) y luego soltá el abdomen para inhalar natural.",
      "Inicio Meditación Hado: Levantá manos al cielo, bajalas al pecho palmas abajo tocando dedos medios y empujá hacia abajo exhalando «Ha...» una sola vez para descargar bloqueos por los pies.",
      "Ciclo áurico (x3): Subí manos a la frente al inhalar y bajalas despacio recorriendo el borde de tu aura exhalando «Ha...». Si surge movimiento espontáneo, observalo sin reprimirlo; para cerrar declará «Fin de la meditación» sacudiendo manos.",
      "Romper bloqueos: Visualizá una emoción inarmónica (ira, miedo, tristeza, envidia u obsesión) dentro de un Sol entre tus manos y partí el pensamiento en dos con un gesto simbólico de kárate.",
      "Cinco Principios en el Tanden: Dedicá 5 minutos diarios (antes y después de Hatsurei-ho) a recitar los Gokai enviando su vibración al Tanden."
    ],
    closingNote: "Al romper un bloqueo dirigido a alguien, recordá que liberás tu pensamiento inarmónico interno, nunca a la persona."
  }
];

export const CLASS3_OFFICIAL_PDF = {
  title: "Manual Complementario: Shinpiden - Enseñanza Misteriosa",
  author: "Rincón Zen · Marina Rabino",
  pages: "42 páginas · Texto de referencia y fundamentos completos",
  description:
    "Descargá o abrí el manual completo de Shinpiden utilizado como base de estudio para profundizar en sus fundamentos filosóficos y prácticas contemplativas.",
  url: "/assets/aistudio/Reiki_nivel_III_-_Rinc_n_Zen__1__eaf5ad00.pdf"
};

export const CLASS3_MATCHING_ITEMS: ShinpidenMatchingItem[] = [
  {
    id: "shinpiden",
    term: "Shinpiden (神秘伝)",
    kanjiOrTag: "Fundamento",
    correctMeaning: "Compartir el significado espiritual oculto de la conexión a la fuente."
  },
  {
    id: "anshin",
    term: "Anshin Ritsumei",
    kanjiOrTag: "Filosofía Usui",
    correctMeaning: "Estado de paz mental interna viviendo plenamente alineado con tu propósito."
  },
  {
    id: "dai",
    term: "Kanji 大 (Dai)",
    kanjiOrTag: "Daikomyo 1/3",
    correctMeaning: "Grande/inmenso; representa los 5 elementos más la mente en Dainichi Nyorai."
  },
  {
    id: "myo",
    term: "Kanji 明 (Myō)",
    kanjiOrTag: "Daikomyo 3/3",
    correctMeaning: "Unión de Sol (sabiduría) y Luna (compasión), y de las tres verdades Tendai."
  },
  {
    id: "sekizui",
    term: "Sekizui Joka Ibuki Ho",
    kanjiOrTag: "Koshinto",
    correctMeaning: "Respiración cálida «Ha...» y agua pura para purificar la columna vertebral."
  },
  {
    id: "ho_rueditas",
    term: "Metáfora de las rueditas (HO)",
    kanjiOrTag: "Superación",
    correctMeaning: "Los símbolos asisten temporalmente hasta que reconocés que ya sos uno con la energía."
  }
];

export const CLASS3_TRIVIA_QUESTIONS: Class3QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué significa literalmente el término japonés «Shinpiden» (神秘伝)?",
    options: [
      "Enseñanza básica de imposición de manos",
      "Compartir el significado espiritual oculto de la conexión a la fuente",
      "Método exclusivo de diagnóstico por temperatura",
      "Transmisión oral secreta reservada solo para monjes"
    ],
    correctIndex: 1,
    explanation:
      "Shin (divinidad/espíritu), Hi (secreto/misterioso) y Den (enseñanza) se traducen en conjunto como compartir el significado espiritual oculto de la conexión a la fuente."
  },
  {
    id: 2,
    question: "¿Qué representa el kanji 明 (Myō) dentro de Daikomyo?",
    options: [
      "Únicamente el fuego purificador de un altar",
      "Los cinco elementos físicos sin conciencia",
      "La unión del Sol (sabiduría) y la Luna (compasión), y la síntesis de Kutai, Ketai y Chutai",
      "La acumulación de fuerza psíquica mediante concentración"
    ],
    correctIndex: 2,
    explanation:
      "明 combina el Sol (sabiduría femenina) y la Luna (compasión masculina), simbolizando en el budismo Tendai la unión de vacuidad, temporalidad y camino del medio (Isshin Sanchi)."
  },
  {
    id: 3,
    question: "¿Cómo define Mikao Usui el estado de Anshin Ritsumei rumbo al Satori?",
    options: [
      "Paz mental y aceptación unidas a vivir en coherencia con el propósito de vida",
      "Controlar todos los acontecimientos externos mediante afirmaciones",
      "Aislarse de la familia y de la sociedad de por vida",
      "Memorizar el orden de los 19 trazos sin practicar los Gokai"
    ],
    correctIndex: 0,
    explanation:
      "Anshin significa paz mental/tranquilidad y Ritsumei significa cumplir con la misión vital; juntos brindan serenidad estable ante los altibajos."
  },
  {
    id: 4,
    question: "Según la enseñanza de «Superación de los Símbolos» (HO), ¿cuál es el propósito último de los símbolos?",
    options: [
      "Reemplazar para siempre los Cinco Principios",
      "Funcionar como «rueditas de bicicleta» temporales hasta comprender que sos uno con la energía",
      "Usarlos exclusivamente en situaciones extremas",
      "Evitar cualquier visualización durante la meditación"
    ],
    correctIndex: 1,
    explanation:
      "Usui Sensei enseñaba que cuanto más practicás con los símbolos, más rápido llegás a un estado en el que ya no necesitás apoyos externos para canalizar."
  },
  {
    id: 5,
    question: "¿Cómo deben formularse las afirmaciones en Shinpiden para que actúen sobre el subconsciente?",
    options: [
      "En futuro lejano («algún día voy a lograr...»)",
      "Para cambiar la conducta de otras personas",
      "En presente o presente progresivo («soy...» / «estoy siendo...») alineadas al Ser Superior",
      "Forzando deseos materiales sin meditar"
    ],
    correctIndex: 2,
    explanation:
      "Hablar en presente o presente progresivo afirma que ya estás en camino y reconecta con tu Verdadero Yo, buscando transformarte internamente."
  },
  {
    id: 6,
    question: "En Sekizui Joka Ibuki Ho y Respiración Hado, ¿cuál es el límite diario recomendado y la duración objetivo de exhalación «Ha...»?",
    options: [
      "Máximo 7 ciclos diarios en Sekizui; exhalación «Ha...» progresiva de 30 a 40 segundos en Hado",
      "20 ciclos diarios de Sekizui y exhalaciones cortas de 3 segundos",
      "Un solo ciclo al mes sin meditación final",
      "Retener el aire 60 segundos antes de exhalar"
    ],
    correctIndex: 0,
    explanation:
      "Sekizui Joka Ibuki Ho se realiza en 3 a 7 ciclos de 5 respiraciones (máximo 7 ciclos por día), y la Respiración Hado busca exhalar suavemente «Ha...» entre 30 y 40 segundos."
  }
];

export const CLASS3_CIERRE = {
  title: "Cierre e Integración de Shinpiden",
  paragraphs: [
    "Profundizar en Shinpiden dentro de la Maestría implica comprender el sentido íntimo de la práctica: cultivar un corazón claro, descansar en Anshin Ritsumei y encarnar la luz de Daikomyo sin depender siquiera de las formas externas.",
    "Cada practicante lleva dentro la semilla del maestro interior. Cuando esta comprensión madura en silencio y coherencia, la transmisión de Reiki fluye con naturalidad en tu propia vida y hacia quienes acompañás."
  ],
  signature: "Marina 🌸"
};
