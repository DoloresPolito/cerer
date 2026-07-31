// Orden cronológico: más antiguo arriba, más nuevo abajo.
// Para agregar una nueva noticia: pegala AL FINAL de este array.
// El componente las muestra en orden inverso (la última = la más reciente = aparece primera).

const newnews = [
  {
    id: 1,
    type: "Noticia",
    date: "2025-11-20",
    title: "Entre Ríos escaló en el ranking de generación distribuida",
    subtitle:
      "La provincia continúa consolidando su crecimiento dentro del sector de generación distribuida a nivel nacional.",
    content: [
      "Entre Ríos continúa fortaleciendo su participación en el desarrollo de la generación distribuida, consolidándose como una de las provincias con mayor crecimiento dentro del sector.",
      "Actualmente se contabilizan más de 17 MW entre instalaciones en funcionamiento y proyectos en proceso de aprobación, reflejando una creciente adopción de tecnologías renovables por parte de usuarios residenciales, comerciales e industriales.",
      "El avance logrado es resultado del trabajo conjunto entre organismos públicos, empresas y usuarios, contribuyendo a una matriz energética más diversificada, eficiente y sostenible.",
    ],
    image: "ranking.png",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DOWw9t4kQQ5/",
  },
  {
    id: 2,
    type: "Noticia",
    date: "2026-03-28",
    title: "Cambios en el mercado solar global: un nuevo escenario para la industria",
    subtitle:
      "La industria fotovoltaica atraviesa un proceso de reordenamiento tras varios años de expansión acelerada.",
    content: [
      "Luego de un período marcado por una fuerte expansión de la capacidad productiva, especialmente en China, la industria solar global comienza a mostrar señales de ajuste y reordenamiento.",
      "La sobreoferta registrada durante los últimos años generó una importante reducción en los precios de los módulos fotovoltaicos y una presión creciente sobre los márgenes de los fabricantes.",
      "Los cambios observados podrían dar lugar a un escenario más equilibrado entre oferta y demanda, impactando tanto en la evolución de los precios como en la planificación de nuevos proyectos energéticos a nivel mundial.",
    ],
    image: "cambios.jpg",
    location: "Mercado internacional",
    instagramUrl: "https://www.instagram.com/p/DWbsViFDWtj/",
  },
  {
    id: 3,
    type: "Noticia",
    date: "2026-04-03",
    title: "Más de 800 MW en proyectos renovables en Argentina",
    subtitle:
      "El RENPER incorporó nuevos desarrollos renovables que continúan ampliando la capacidad instalada del país.",
    content: [
      "El Registro Nacional de Proyectos de Energías Renovables (RENPER) sumó recientemente 14 nuevos proyectos, superando los 800 MW de potencia registrada en todo el territorio nacional.",
      "La mayoría de las iniciativas corresponden a desarrollos solares fotovoltaicos, seguidos por proyectos eólicos y de biogás. Este crecimiento refleja el interés sostenido por tecnologías renovables capaces de diversificar la matriz energética argentina.",
      "Entre Ríos también forma parte de este proceso mediante proyectos actualmente en etapa de inscripción, consolidando su participación dentro del crecimiento nacional del sector energético renovable.",
    ],
    image: "incorporacion.jpg",
    location: "Argentina",
    instagramUrl: "https://www.instagram.com/p/DWriJwjGGPG/",
  },
  {
    id: 4,
    type: "Noticia",
    date: "2026-04-17",
    title: "Inversión y energía limpia en la agenda de Entre Ríos",
    subtitle:
      "Un encuentro institucional en Crespo puso el foco en las oportunidades de inversión vinculadas al desarrollo energético provincial.",
    content: [
      "La ciudad de Crespo fue sede de un encuentro institucional orientado al análisis de oportunidades de inversión y desarrollo energético, en el marco de la visita del embajador de Alemania en Argentina.",
      "Durante la jornada se destacó el potencial de Entre Ríos para el desarrollo de proyectos vinculados a las energías renovables y la generación sustentable. Asimismo, se presentaron iniciativas empresariales que promueven el aprovechamiento eficiente de recursos productivos para la generación de energía limpia.",
      "Este tipo de encuentros fortalecen la articulación entre organismos públicos, empresas e instituciones internacionales, contribuyendo a generar nuevas oportunidades para el crecimiento económico y energético de la provincia.",
    ],
    image: "inversion.png",
    location: "Crespo, Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DXP5pzUGKHO/",
  },
  {
    id: 5,
    type: "Perspectiva",
    date: "2026-04-22",
    title: "Día Mundial de la Tierra",
    subtitle:
      "Una fecha para reflexionar sobre el impacto de nuestras decisiones y el papel de las energías renovables en la construcción de un futuro sostenible.",
    content: [
      "Cada 22 de abril se conmemora el Día Mundial de la Tierra, una fecha que invita a reflexionar sobre la relación entre las actividades humanas y el ambiente. El crecimiento de la demanda energética plantea nuevos desafíos que requieren soluciones sostenibles y de largo plazo.",
      "La forma en que producimos y consumimos energía tiene un impacto directo sobre los recursos naturales y las emisiones asociadas al cambio climático. En este contexto, las energías renovables se consolidan como una herramienta fundamental para avanzar hacia modelos de desarrollo más responsables.",
      "Desde la Cámara de Energías Renovables de Entre Ríos (CERER) reafirmamos nuestro compromiso con la promoción de tecnologías limpias, la eficiencia energética y la construcción de una matriz energética cada vez más sostenible para las futuras generaciones.",
    ],
    image: "planeta.png",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DXcBqmXDcPU/",
  },
  {
    id: 6,
    type: "Noticia",
    date: "2026-04-29",
    title: "ABB electromovilidad",
    subtitle:
      "CERER invita a una jornada sobre electromovilidad y sostenibilidad en el transporte junto al especialista de ABB, Ing. Roberto Stazzoni.",
    content: [
      "La Cámara de Energías Renovables de Entre Ríos (CERER) invita a participar de una jornada dedicada a la electromovilidad y la sostenibilidad en el transporte, una temática que adquiere cada vez mayor relevancia en el proceso de transición energética.",
      "La actividad contará con la participación del Ing. Roberto Stazzoni, especialista de ABB Argentina, quien compartirá conocimientos sobre movilidad eléctrica, infraestructura de carga, tecnologías disponibles y las principales tendencias que están impulsando el crecimiento del sector.",
      "El encuentro busca generar un espacio de intercambio entre empresas, profesionales, instituciones y público interesado, promoviendo el conocimiento de soluciones innovadoras que contribuyan a un sistema de transporte más eficiente y sustentable.",
    ],
    image: "abb.jpg",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DXuK5G5DVQj/",
  },

  {
    id: 7,
    type: "Noticia",
    date: "2026-05-29",
    title: "Licitación ALMA SADI: Entre Ríos entre las provincias con mayor interés para proyectos BESS",

  subtitle:
    "La licitación nacional ALMA SADI recibió propuestas que superan ampliamente la capacidad prevista, posicionando a Entre Ríos como uno de los principales polos de interés para proyectos de almacenamiento con baterías.",

  content: [
    "El Gobierno Nacional realizó la apertura de sobres correspondientes a la convocatoria nacional e internacional ALMA SADI, una iniciativa orientada a incorporar sistemas de almacenamiento de energía mediante baterías (BESS) en distintos puntos estratégicos del Sistema Argentino de Interconexión (SADI).",

    "El proceso licitatorio, administrado por CAMMESA, despertó un marcado interés por parte del sector energético. En total se presentaron 235 proyectos impulsados por 37 empresas, alcanzando una potencia conjunta de 8.335 MW, una cifra que supera ampliamente el objetivo inicial de 700 MW establecido por la Resolución SE 50/2026.",

    "La incorporación de sistemas BESS tiene como objetivo fortalecer la confiabilidad y flexibilidad operativa del sistema eléctrico nacional. Estas instalaciones permiten almacenar energía para utilizarla cuando resulta necesario, aportando respaldo, estabilidad y una mejor gestión de la generación eléctrica disponible.",

    "En Entre Ríos, la convocatoria contemplaba inicialmente la incorporación de hasta 120 MW de capacidad de almacenamiento distribuidos en distintos nodos de conexión. Sin embargo, el interés del mercado superó ampliamente las expectativas, registrándose 34 propuestas que en conjunto superan los 1.000 MW de potencia proyectada.",

    "Dentro de la provincia se destacó especialmente el nodo Crespo 132 kV, que recibió nueve proyectos por un total de 389 MW, posicionándose entre los puntos de conexión con mayor nivel de interés a nivel nacional.",

    "La cantidad de iniciativas presentadas también refleja las condiciones favorables que ofrece Entre Ríos para el desarrollo de infraestructura energética, tanto en media como en alta tensión, consolidando su potencial para futuras inversiones vinculadas a la transición energética.",

    "El crecimiento de los sistemas de almacenamiento mediante baterías representa una herramienta estratégica para acompañar la expansión de las energías renovables, permitiendo una mayor integración de generación limpia y contribuyendo a fortalecer la seguridad y confiabilidad del sistema eléctrico argentino."
  ],
  
    image: "almasadi.jpg",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DY72ej7GGSK/?igsh=MW1ncWQzbnY4d3J4eg==",
  },



  {
    id: 8,
    type: "Noticia",
    date: "2026-06-3",
    title: "Asamblea Anual de CERER: balance de gestión y renovación de autoridades",
  
    subtitle:
      "La Cámara de Energías Renovables de Entre Ríos realizó su Asamblea Anual Ordinaria, presentó el balance de gestión 2025-2026 y renovó sus autoridades para el próximo período.",
  
    content: [
      "El pasado 30 de mayo, la Cámara de Energías Renovables de Entre Ríos (CERER) llevó adelante su Asamblea Anual Ordinaria, un espacio clave para evaluar el trabajo realizado durante el último año, compartir los avances alcanzados y proyectar los próximos desafíos de la institución.",
  
      "Durante el encuentro se presentó el balance de gestión correspondiente al período 2025-2026 y se realizó la renovación de autoridades, quedando conformada la nueva Comisión Directiva que tendrá a su cargo la conducción de la Cámara durante el período 2026-2027.",
  
      "Entre los principales logros alcanzados durante el último ejercicio se destacó el crecimiento institucional de CERER, la incorporación de 27 nuevas empresas asociadas, la participación en Expoagro 2026 y la organización de la primera edición de la Jornada Entre Ríos Renovable. También se resaltó el fortalecimiento de la comunicación institucional y la participación activa en distintos espacios de trabajo vinculados al desarrollo energético de la provincia.",
  
      "Asimismo, se presentaron los objetivos estratégicos para el próximo período, entre los que se encuentran la promoción de capacitaciones técnicas y de seguridad para las empresas asociadas, el fortalecimiento de vínculos con instituciones públicas y privadas, la realización de una nueva edición de Entre Ríos Renovable y el impulso de iniciativas regulatorias que favorezcan el crecimiento de las energías renovables en Entre Ríos.",
  
      "Desde CERER se agradeció el compromiso y la participación de todas las empresas asociadas, destacando que su acompañamiento resulta fundamental para continuar fortaleciendo el sector y promoviendo una matriz energética más sostenible para la provincia.",
  
      "La Cámara reafirma así su compromiso de seguir generando espacios de intercambio, impulsando el desarrollo de las energías renovables y acompañando la transición energética en Entre Ríos."
    ],
  
    image: "reunion.png",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DZI9PGkoEsC/",
  },

  {
    id: 9,
    type: "Perspectiva",
    date: "2026-06-5",
    title: "Día Mundial del Medio Ambiente: la energía y la sostenibilidad van de la mano",

    subtitle:
      "Cada 5 de junio se conmemora una fecha que invita a reflexionar sobre el cuidado de los recursos naturales y el papel fundamental de la energía en la construcción de un futuro más sostenible.",
  
    content: [
      "Cada 5 de junio se celebra el Día Mundial del Medio Ambiente, una fecha impulsada por las Naciones Unidas que busca generar conciencia sobre la importancia de proteger los ecosistemas y promover acciones que contribuyan al desarrollo sostenible.",
  
      "La forma en que producimos y consumimos energía ocupa un lugar central dentro de los desafíos ambientales actuales. La transición hacia una matriz energética más sostenible requiere incorporar soluciones que permitan reducir el impacto ambiental, diversificar las fuentes de generación y aprovechar de manera más eficiente los recursos disponibles.",
  
      "En este contexto, las energías renovables desempeñan un papel fundamental. Tecnologías como la energía solar, eólica, hidráulica y de biomasa permiten generar electricidad con menores emisiones de gases de efecto invernadero, contribuyendo a mitigar los efectos del cambio climático y fortaleciendo la seguridad energética.",
  
      "Sin embargo, la sostenibilidad no depende únicamente de la incorporación de nuevas tecnologías. También requiere promover la eficiencia energética, impulsar la innovación, planificar el uso de los recursos y fomentar hábitos de consumo más responsables tanto en hogares como en industrias y organizaciones.",
  
      "La construcción de un futuro más sostenible es una tarea compartida que involucra a instituciones, empresas, gobiernos y ciudadanos. Pensar en el cuidado del ambiente también implica reflexionar sobre cómo producimos, utilizamos y gestionamos la energía, impulsando soluciones que permitan mejorar la calidad de vida actual sin comprometer las oportunidades de las generaciones futuras.",
  
      "En el Día Mundial del Medio Ambiente, renovamos el compromiso de seguir promoviendo el desarrollo de las energías renovables y de acompañar las iniciativas que contribuyan a una transición energética más limpia, eficiente y sostenible."
    ],
    image: "medioambiente.jpg",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DZNN-3nEdkN/?img_index=1",
  },
  {
    id: 10,
    type: "Noticia",
    date: "2026-06-19",
    title: "Arroyo Barú incorpora un nuevo parque solar para fortalecer su desarrollo energético",
  
    subtitle:
      "La localidad inauguró un parque solar fotovoltaico de 483 kW que permitirá sumar energía renovable a la red eléctrica y acompañar el crecimiento productivo de la región.",
  
    content: [
      "Arroyo Barú inauguró un nuevo Parque Solar Fotovoltaico, una obra estratégica que incorpora generación de energía renovable a la red eléctrica local y representa un paso importante en el fortalecimiento de la infraestructura energética de la comunidad.",
  
      "El proyecto demandó una inversión cercana a los 600 millones de pesos y cuenta con una potencia instalada de 483 kW. La nueva planta permitirá aportar energía limpia al sistema eléctrico, contribuyendo a mejorar la calidad y confiabilidad del suministro para los usuarios de la localidad.",
  
      "Además de los beneficios ambientales asociados a la generación solar, la iniciativa busca acompañar el crecimiento de Arroyo Barú y de su entorno productivo, brindando mejores condiciones para el desarrollo de actividades económicas y futuras inversiones en la región.",
  
      "Durante la inauguración también se anunció la futura puesta en funcionamiento de una subestación transformadora, una obra complementaria que permitirá ampliar la capacidad de abastecimiento eléctrico y responder a la creciente demanda energética de la localidad y su zona de influencia.",
  
      "Este tipo de proyectos reflejan el papel cada vez más relevante que tienen las energías renovables en el desarrollo local, combinando sostenibilidad, modernización de la infraestructura y mejoras concretas en la calidad del servicio eléctrico."
    ],
  
    image: "arroyo.png",
    location: "Arroyo Barú, Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DZx_dEXGKB_/?img_index=1",
    links: [
      {
        label: "Nota completa",
        url: "https://portal.entrerios.gov.ar/noticias/77819"
      }
    ]
  },
  {
    id: 11,
    type: "Perspectiva",
    date: "2026-06-22",
    title: "Día Internacional del Sol: la gran fuente de energía limpia que mueve al planeta",

  subtitle:
    "Una fecha para reconocer la importancia del Sol como fuente de vida y como protagonista de la transición hacia un modelo energético más sostenible.",

  content: [
    "El Sol es mucho más que la estrella que ilumina nuestros días. Es la fuente primaria de energía que hace posible la vida en la Tierra, impulsando los ciclos naturales, regulando los ecosistemas y sosteniendo innumerables procesos fundamentales para el planeta.",

    "Además de su importancia para la naturaleza, el Sol representa una de las mayores oportunidades para avanzar hacia un modelo energético más limpio y sostenible. Gracias al desarrollo tecnológico de las últimas décadas, la energía solar se ha consolidado como una de las principales fuentes renovables para la generación de electricidad en todo el mundo.",

    "Cada nuevo proyecto solar contribuye a diversificar la matriz energética, reducir la dependencia de combustibles fósiles y disminuir las emisiones asociadas a la producción de energía. Su aprovechamiento permite transformar un recurso abundante, renovable y disponible en soluciones concretas para hogares, industrias, comercios y comunidades.",

    "La energía solar también se presenta como una herramienta estratégica para fortalecer la seguridad energética, impulsar el desarrollo local y generar nuevas oportunidades de inversión e innovación vinculadas a la transición energética.",

    "En este Día Internacional del Sol, celebramos el potencial de una fuente de energía que acompaña el desarrollo de las sociedades desde siempre y renovamos el compromiso de seguir promoviendo soluciones que contribuyan a construir un futuro más resiliente, eficiente y en armonía con el ambiente.",

    "Aprovechar la energía del Sol es apostar por un modelo de crecimiento sostenible que genere bienestar y oportunidades para las generaciones presentes y futuras."
  ],
    image: "sol.jpg",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DZ2lIwyEVvT/?img_index=1",
  },
  {
    id: 12,
    type: "Noticia",
    date: "2026-06-26",
    title: "Jornada sobre Eficiencia Energética y Etiquetado de Viviendas",

    subtitle:
      "Profesionales, instituciones y especialistas participaron de un encuentro en Paraná para conocer los avances del etiquetado de eficiencia energética de viviendas y las iniciativas que impulsa la provincia en materia de construcción sostenible.",
    
    content: [
      "En la ciudad de Paraná se llevó a cabo la Jornada sobre Eficiencia Energética y Avances del Etiquetado de Viviendas en Entre Ríos, un espacio de actualización técnica e intercambio que reunió a profesionales, especialistas, estudiantes e instituciones vinculadas al sector energético y de la construcción.",
    
      "La actividad fue organizada por el Colegio de Arquitectura y Urbanismo de Entre Ríos junto a la Fundación Erasus, y contó con la participación de autoridades de la Secretaría de Energía y referentes técnicos que compartieron los avances en materia de eficiencia energética, normativa vigente y políticas públicas orientadas a promover edificaciones con un mejor desempeño energético.",
    
      "Uno de los principales temas abordados fue la implementación de la Ley Provincial N.º 10.907, que establece el procedimiento para el etiquetado de eficiencia energética de viviendas en Entre Ríos. Esta herramienta permite clasificar los inmuebles según su comportamiento energético, brindando información sobre su nivel de eficiencia y fomentando construcciones más confortables, sostenibles y con un uso responsable de la energía.",
    
      "Durante la jornada también se destacó el interés generado por las futuras capacitaciones destinadas a la formación de certificadores de etiquetado energético de viviendas. Estas instancias permitirán fortalecer las capacidades técnicas de los profesionales y contribuirán a la implementación del sistema de etiquetado en toda la provincia.",
    
      "El desarrollo de este tipo de iniciativas representa un paso importante para impulsar la eficiencia energética en el sector de la construcción, reducir el consumo de energía y promover prácticas que acompañen la transición hacia una matriz energética más sostenible.",
    
      "Desde la Cámara de Energías Renovables de Entre Ríos celebramos la realización de estos espacios de capacitación e intercambio, que fortalecen el conocimiento técnico y fomentan el trabajo conjunto entre instituciones, profesionales y organismos públicos para continuar promoviendo un desarrollo energético responsable en la provincia."
    ],
    image: "jornada2.jpg",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DaD9oZ2mEDy/?img_index=1",
  },

  {
    id: 13,
    type: "Noticia",
    date: "2026-07-19",
    title: "Incrementos nacionales en las tarifas eléctricas",

    subtitle:
  "Las recientes actualizaciones del Mercado Eléctrico Mayorista impactarán en los costos de abastecimiento eléctrico de las industrias categorizadas como Grandes Usuarios de la Distribuidora (GUDI), impulsando la búsqueda de estrategias para optimizar el consumo y reducir costos.",

content: [
  "Las modificaciones implementadas a nivel nacional en el Mercado Eléctrico Mayorista generan cambios en las tarifas eléctricas que afectarán a las industrias encuadradas como Grandes Usuarios de la Distribuidora (GUDI), incrementando los costos de abastecimiento de energía para este segmento.",

  "De acuerdo con el análisis publicado por Dos Florines, la programación estacional de invierno y la aplicación del Cargo Estabilizado GUDI constituyen los principales factores que explican el aumento en las facturas eléctricas de estas empresas.",

  "Frente a este escenario, resulta fundamental que las industrias evalúen alternativas para optimizar sus costos energéticos y mejorar su competitividad. Entre las opciones analizadas se encuentran la incorporación de sistemas fotovoltaicos para autoconsumo, el ingreso al Mercado Eléctrico Mayorista bajo la categoría de Gran Usuario del Mercado Eléctrico (GUME) y otras modalidades de contratación del suministro eléctrico.",

  "La gestión eficiente de la energía adquiere un rol cada vez más relevante para la planificación y el desarrollo de las actividades productivas, haciendo necesario analizar las herramientas disponibles que permitan reducir costos y aumentar la eficiencia de los procesos.",

  "Desde la Cámara de Energías Renovables de Entre Ríos consideramos que este tipo de información resulta clave para que las empresas puedan anticiparse a los cambios del mercado eléctrico y evaluar soluciones que contribuyan a una gestión energética más eficiente y sostenible.",

  "Para conocer el análisis completo sobre los incrementos tarifarios y las alternativas disponibles para las industrias GUDI, invitamos a leer la nota publicada por Dos Florines."
],
    image: "pi-parana.png",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/cerer.camara.energias.er/p/Da8Ne6LkarE/",
  },

  {
    id: 14,
    type: "Noticia",
    date: "2026-07-31",
    title: "La energía solar continua sumando proyectos para el sector productivo",

    subtitle:
    "La Granja Avícola El Ombú, ubicada en El Solar, Entre Ríos, incorporó dos sistemas solares fotovoltaicos on-grid para abastecer parte de su demanda eléctrica, fortaleciendo el uso de energías renovables en el sector productivo.",
  
  content: [
    "En la localidad de El Solar, Entre Ríos, se realizó la instalación de un nuevo sistema de generación solar fotovoltaica en la Granja Avícola El Ombú, incorporando energía renovable para abastecer parte de su demanda eléctrica.",
  
    "La obra comprende dos sistemas solares fotovoltaicos On-Grid de 50 kW cada uno, montados sobre los techos de los galpones productivos. En total, la instalación cuenta con 216 paneles solares bifaciales Jinko de 615 Wp, alcanzando una potencia instalada superior a 130 kWp.",
  
    "El sistema se completa con dos inversores Huawei On-Grid de 50 kW, habilitados para la inyección de excedentes de energía a la Cooperativa CELP, permitiendo aprovechar la generación renovable e integrarla a la red eléctrica.",
  
    "Este tipo de proyectos refleja el crecimiento de la generación distribuida aplicada al sector productivo y la incorporación de tecnologías que promueven un uso más eficiente de la energía, contribuyendo a reducir costos operativos y a mejorar la sostenibilidad de las actividades agroindustriales.",
  
    "Desde la Cámara de Energías Renovables de Entre Ríos celebramos la concreción de este tipo de iniciativas, que impulsan la adopción de energías renovables y demuestran el potencial de la generación distribuida para el desarrollo productivo de la provincia.",
  
    "La obra fue ejecutada por Amperio Energy, empresa asociada de la Cámara de Energías Renovables de Entre Ríos."
  ],
    image: "el-solar.png",
    location: "Entre Ríos",
    instagramUrl: "https://www.instagram.com/p/DbdODaaHEUo/?igsh=anI4OWp4cW9veHdy",
  },

  // ── AGREGAR NUEVAS NOTICIAS AQUÍ ABAJO ──
  // Copiá el bloque de arriba, actualizá id, date, title, etc.
  // La más reciente siempre va al final y aparece primera en pantalla.
];

export default newnews;
