// Contenido extraído del diseño de Canva "Copy of LO QUE OBTENDRAS DE MP LANDING"
// y de la página de referencia beacons.ai/moneyprojectsv.
// Los datos marcados como PLACEHOLDER deben ser confirmados/editados por el cliente.

export const WHATSAPP_NUMBER = "50312345678"; // PLACEHOLDER — reemplazar con el número real (con código de país, sin +, sin espacios)
export const WHATSAPP_MESSAGE =
  "¡Hola! Quiero reservar mi lugar en Money Project 🎟️";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const BRAND = {
  name: "Money Project",
  suffix: "inc.",
  hashtag: "#movimiento",
};

export const KEY_DATES = {
  presaleLabel: "Preventa",
  presaleDate: "31 de enero",
  presaleTime: "12:00 pm",
  startLabel: "Inicio del programa",
  startDate: "9 de febrero 2026",
  eventLabel: "Evento presencial",
  eventWindow: "Junio – Julio 2026",
};

export const PRICING = {
  totalValue: 450,
  realPrice: 124.95,
  earlyBid: 99.99,
  currency: "$",
  perPerson: "p/p",
  seatsLimit: 150,
  seatsNote: "Esta edición de Money Project tendrá un límite de 150 cupos únicamente",
  disclaimer: "Y no... no son valores inventados. Cotizá en otro lugar, luego nos cuentas.",
};

export const RECEIVE_TABLE = [
  { label: "2 sesiones enfocadas en finanzas personales", value: 100 },
  { label: "2 sesiones enfocadas en inversión en bolsa (Stocks y ETFs)", value: 120 },
  { label: "2 sesiones enfocadas en inversión en criptomonedas", value: 120 },
  { label: "Trackers (de deudas y presupuesto) para ordenar y crear una estrategia con tu dinero", value: 29 },
  { label: "Ebook premium de tarjetas de crédito (comprenderlas y usarlas a full)", value: 9.99 },
  { label: "Rifas de libros sobre crecimiento personal, finanzas y emprendimiento", value: "25–30" },
];

export const FOUNDERS = [
  {
    name: "Juanjo Llovera",
    tag: "Inversiones en acciones y trading",
    photo: "/assets/foto_periodico_juanjo_llovera.png",
  },
  {
    name: "Carlos Rivera",
    tag: "Finanzas personales",
    photo: "/assets/foto_periodico_carlos_rivera.png",
  },
  {
    name: "Javier Portillo",
    tag: "Inversiones en cripto",
    photo: "/assets/foto_periodico_javier_portillo.png",
  },
];

export const FOUNDERS_INTRO =
  "En Money Project vas a tener 6 sesiones virtuales en las que vas a aprender a manejar tu dinero, cambiar tu mentalidad, atacar tus deudas, e invertir en acciones, ETFs y criptomonedas. Luego tendrás acceso a una comunidad exclusiva de Money Project, donde podrás adquirir entradas para un evento presencial de medio año, hacer networking con los creadores y con gente que también quiere crecer.";

export const PAIN_POINTS = [
  {
    number: "1",
    text: "Estás dejando pasar BUENAS oportunidades. Cada día que pasa, dejas de ganar.",
  },
  {
    number: "2",
    text: "Te estresa pensar en ahorrar/invertir porque no tienes un método claro.",
  },
  {
    number: "3",
    text: "Cada vez que te pagan, parece que el dinero desaparece y no te ayuda a crecer.",
  },
];

export const PAIN_CONCLUSION =
  "Lo que necesitas es conocer las opciones que hay al frente y cambiar tu mindset con el dinero.";

export const WHAT_YOU_GET = [
  "Vas a tener un sistema claro para manejar tu dinero sin sentirte perdido",
  "Cambiarás tu mindset con el dinero: de la envidia a la gratitud y la abundancia",
  "Aprenderás las estrategias para salir de deudas de forma más rápida",
  "Aprenderás a invertir a largo plazo para que tu dinero trabaje por vos",
  "Vas a conocer las opciones reales que existen para invertir",
];

export const IS_NOT_FOR = [
  "Personas que actualmente no generan ningún tipo de ingresos",
];

export const IS_FOR = [
  "Alguien que genera ingresos propios",
  "Te interesa hacer algo más con tu dinero (y conocer las opciones)",
  "Quien quiere retirarse tranquilo sin trabajar toda la vida (literal)",
  "Quien busca un método claro, sencillo y aplicable desde ya",
  "Quien está dispuesto a aplicar lo aprendido",
];

export const HONEST_NO = [
  "No vas a hacerte rico de la noche a la mañana ni te vamos a prometer retornos irreales",
  "No vas a salir con deudas mágicamente pagadas, pero sí con un plan real para liquidarlas",
  "No saldrás siendo un gurú en inversiones (eso se logra con años de práctica y experiencia)",
];

export const INCLUSIVITY =
  "Money Project es para todos. No importa tu género, religión ni de dónde vengas. Aquí todos compartimos el mismo objetivo: mejorar nuestra relación con el dinero y vivir con más libertad.";

export type Module = {
  badge: string;
  icon: string;
  title: string;
  sessions: string;
  bullets: string[];
};

export const MODULES: Module[] = [
  {
    badge: "Módulo 1",
    icon: "/assets/badge_clase1_mindset_abundante.png",
    title: "Finanzas personales",
    sessions: "2 sesiones · Mindset abundante y deudas",
    bullets: [
      "Tu relación y tus resultados con el dinero",
      "Los secretos de la psicología del dinero",
      "Un sistema real para organizar y controlar tus ingresos, sin importar cuánto ganes (provisiones y automatización)",
      "Cómo poner tu dinero a trabajar por vos: lo invertís una vez y lo dejás crecer mientras seguís con tu vida",
      "Uso correcto de las tarjetas de crédito",
      "Estrategias prácticas para salir de deudas y maximizar tus recursos actuales",
    ],
  },
  {
    badge: "Módulo 2",
    icon: "/assets/badge_clase5_trading_acciones_etf.png",
    title: "Inversión en bolsa (Stocks y ETFs)",
    sessions: "2 sesiones · Trading práctico con acciones y ETF's",
    bullets: [
      "La diferencia entre invertir a largo plazo y hacer trading a corto plazo",
      "Cómo usar plataformas de trading paso a paso para comprar y vender acciones o ETFs",
      "Reglas prácticas para gestionar riesgos y proteger tu dinero",
      "Cómo planificar tu primera operación con confianza y seguridad",
    ],
  },
  {
    badge: "Módulo 3",
    icon: "/assets/badge_clase_criptomonedas.png",
    title: "Inversión en criptomonedas",
    sessions: "2 sesiones · El mundo de las criptomonedas desde cero",
    bullets: [
      "Los fundamentos de las criptomonedas explicados en simple, sin tecnicismos",
      "Cómo comprarlas y guardarlas de forma segura",
      "Qué mirar antes de invertir en un proyecto cripto",
      "Cómo evitar los errores más comunes de quien recién empieza",
    ],
  },
];

export const MODALITY = {
  title: "Las sesiones son online por medio de Zoom",
  description:
    "6 sesiones virtuales en vivo, organizadas en 3 módulos de 2 sesiones cada uno.",
};

export const PRESENCIAL_EVENT = {
  title: "Evento presencial Money Project",
  description:
    "Acceso a la comunidad exclusiva de Money Project, con la oportunidad de adquirir entradas para un evento presencial de medio año (Junio – Julio 2026), con kit exclusivo, almuerzo, premios, descuentos y networking con los creadores y con gente que también quiere crecer.",
  perks: ["Kit exclusivo", "Almuerzo incluido", "Premios y descuentos", "Networking real"],
};

export const ALLIES = [
  { name: "Librería Internacional", logo: "/assets/logo_libreria_internacional.png" },
  { name: "n1co", logo: null },
  { name: "Carne y Calle", logo: null },
];

export const WHY_PAID = {
  question: "¿Por qué cobramos?",
  answer:
    "Porque lo que vas a vivir en Money Project tiene un valor real. Son 6 clases llenas de conocimiento que te van a acompañar toda la vida + 1 evento presencial de magnitud, no solo para aprender a manejar tu dinero, sino para transformar tu mentalidad y tu futuro. 3 creadores de contenido son la cara, pero detrás de todo esto hay muchas personas trabajando para que la experiencia sea inolvidable: desde el lugar, los materiales, el kit exclusivo, la comida, hasta el equipo y los aliados que hacen que todo funcione. Y también, porque cuando uno paga, se compromete. No es solo dinero: es una forma de decir 'esto importa para mí', es mi primera inversión (y la más importante), inversión en mi educación, y voy a dar lo mejor de mí para aprovecharlo.",
};

export const WHY_PRICE = {
  question: "¿Por qué $124.95?",
  answer:
    "Porque no lo elegimos nosotros, lo eligió la comunidad. Hicimos una encuesta entre todos ustedes y este fue el precio que la mayoría eligió. Queríamos que fuera justo, accesible y con sentido, y por eso el valor de $124.95 refleja exactamente eso: una inversión consciente en ti, creada por una comunidad que busca crecer junta.",
};

export const FAQ = [
  WHY_PAID,
  WHY_PRICE,
  {
    question: "¿Puedo entrar si no sé nada de dinero ni de inversiones?",
    answer:
      "Sí. Money Project está pensado para arrancar desde cero: no necesitás experiencia previa en finanzas ni en inversiones.",
  },
  {
    question: "¿Qué pasa si me pierdo una sesión en vivo?",
    answer:
      "Escribinos por WhatsApp y te contamos cómo funciona el acceso a cada sesión para que no te quedes sin el contenido.",
  },
];

export const LEGAL_DISCLAIMERS = [
  "Money Project NO es una formación en trading.",
  "Money Project NO es una asesoría financiera.",
  "Money Project NO te pide dinero para invertir.",
];

export const TAGLINE_EDUCATION = "No somos asesoría financiera. Somos educación.";
