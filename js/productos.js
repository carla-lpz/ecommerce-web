const productos = [
    {
      "id": "1",
      "imagen": "🍌",
      "nombre": "Bananas",
      "precio": 1220,
      "categoria": "Fruta"
    },
    {
      "id": "2",
      "imagen": "🍎",
      "nombre": "Manzana roja",
      "precio": 1890,
      "categoria": "Fruta"
    },
    {
      "id": "3",
      "imagen": "🥝",
      "nombre": "Kiwis",
      "precio": 760,
      "categoria": "Fruta"
    },
    {
      "id": "4",
      "imagen": "🍈",
      "nombre": "Melón",
      "precio": 350,
      "categoria": "Fruta"
    },
    {
      "id": "5",
      "imagen": "🍍",
      "nombre": "Ananá",
      "precio": 750,
      "categoria": "Fruta"
    },
    {
      "id": "6",
      "imagen": "🍅",
      "nombre": "Tomates",
      "precio": 940,
      "categoria": "Fruta"
    },
    {
      "id": "7",
      "imagen": "🍋‍🟩",
      "nombre": "Lima",
      "precio": 1250,
      "categoria": "Fruta"
    },
    {
      "id": "8",
      "imagen": "🍏",
      "nombre": "Manzana verde",
      "precio": 790,
      "categoria": "Fruta"
    },
    {
      "id": "9",
      "imagen": "🍉",
      "nombre": "Pomelo Rosado",
      "precio": 1200,
      "categoria": "Fruta"
    },
    {
      "id": "10",
      "imagen": "🍑",
      "nombre": "Duraznos",
      "precio": 710,
      "categoria": "Fruta"
    },
    {
      "id": "11",
      "imagen": "🫐",
      "nombre": "Arándanos",
      "precio": 650,
      "categoria": "Fruta"
    },
    {
      "id": "12",
      "imagen": "🥭",
      "nombre": "Mango",
      "precio": 290,
      "categoria": "Fruta"
    },
    {
      "id": "13",
      "imagen": "🍇",
      "nombre": "Uvas",
      "precio": 700,
      "categoria": "Fruta"
    },
    {
      "id": "14",
      "imagen": "🍐",
      "nombre": "Peras",
      "precio": 320,
      "categoria": "Fruta",
      "importe": 1111
    },
    {
      "id": "15",
      "imagen": "🍒",
      "nombre": "Cerezas",
      "precio": 1100,
      "categoria": "Fruta"
    },
    {
      "id": "16",
      "imagen": "🍓",
      "nombre": "Frutillas",
      "precio": 600,
      "categoria": "Fruta"
    },
    {
      "id": "17",
      "imagen": "🍋",
      "nombre": "Limones",
      "precio": 260,
      "categoria": "Fruta"
    },
    {
      "id": "18",
      "imagen": "🍋‍🟩",
      "nombre": "Lima",
      "precio": 2260,
      "categoria": "Fruta"
    },
    {
      "id": "19",
      "imagen": "🍉",
      "nombre": "Sandía",
      "precio": 1140,
      "categoria": "Fruta"
    },
    {
      "id": "20",
      "imagen": "🥑",
      "nombre": "Palta",
      "precio": 850,
      "categoria": "Fruta"
    },
    {
      "id": "22",
      "imagen": "🌽",
      "nombre": "Maíz",
      "precio": 220,
      "categoria": "Verdura"
    },
    {
      "id": "23",
      "imagen": "🥒",
      "nombre": "Pepino",
      "precio": 190,
      "categoria": "Verdura"
    },
    {
      "id": "24",
      "imagen": "🌶️",
      "nombre": "Pimiento",
      "precio": 450,
      "categoria": "Verdura"
    },
    {
      "id": "25",
      "imagen": "🥬",
      "nombre": "Lechuga",
      "precio": 150,
      "categoria": "Verdura"
    },
    {
      "id": "26",
      "imagen": "🫑",
      "nombre": "Morrón verde",
      "precio": 550,
      "categoria": "Verdura"
    },
    {
      "id": "27",
      "imagen": "🧅",
      "nombre": "Cebolla",
      "precio": 130,
      "categoria": "Verdura"
    },
    {
      "id": "28",
      "imagen": "🧄",
      "nombre": "Ajo",
      "precio": 100,
      "categoria": "Verdura"
    },
    {
      "id": "29",
      "imagen": "🥔",
      "nombre": "Papa",
      "precio": 180,
      "categoria": "Verdura"
    },
    {
      "id": "30",
      "imagen": "🫒",
      "nombre": "Aceitunas",
      "precio": 360,
      "categoria": "Verdura"
    },
    {
      "id": "31",
      "imagen": "🍞",
      "nombre": "Pan",
      "precio": 200,
      "categoria": "Comida"
    },
    {
      "id": "32",
      "imagen": "🥫",
      "nombre": "Sopa enlatada",
      "precio": 320,
      "categoria": "Comida"
    },
    {
      "id": "33",
      "imagen": "🍝",
      "nombre": "Pasta",
      "precio": 400,
      "categoria": "Comida"
    },
    {
      "id": "34",
      "imagen": "🧀",
      "nombre": "Queso",
      "precio": 450,
      "categoria": "Comida"
    },
    {
      "id": "35",
      "imagen": "🍪",
      "nombre": "Galletas",
      "precio": 250,
      "categoria": "Comida"
    },
    {
      "id": "36",
      "imagen": "🥤",
      "nombre": "Refresco",
      "precio": 150,
      "categoria": "Bebida"
    },
    {
      "id": "37",
      "imagen": "🍺",
      "nombre": "Cerveza",
      "precio": 500,
      "categoria": "Bebida"
    },
    {
      "id": "38",
      "imagen": "🍷",
      "nombre": "Vino",
      "precio": 1800,
      "categoria": "Bebida"
    },
    {
      "id": "39",
      "imagen": "🧃",
      "nombre": "Jugo",
      "precio": 180,
      "categoria": "Bebida"
    },
    {
      "id": "40",
      "imagen": "☕",
      "nombre": "Café Espresso",
      "precio": 7500,
      "categoria": "Bebida"
    },
    {
      "id": "41",
      "imagen": "🐟",
      "nombre": "Pescado",
      "precio": 700,
      "categoria": "Comida"
    },
    {
      "id": "42",
      "imagen": "🍖",
      "nombre": "Carne",
      "precio": 1200,
      "categoria": "Comida"
    },
    {
      "id": "43",
      "imagen": "🍚",
      "nombre": "Arroz",
      "precio": 250,
      "categoria": "Comida"
    },
    {
      "id": "44",
      "imagen": "🥚",
      "nombre": "Huevos",
      "precio": 180,
      "categoria": "Comida"
    },
    {
      "id": "45",
      "imagen": "🍾",
      "nombre": "Espumante",
      "precio": 1100,
      "categoria": "Bebida"
    },
    {
      "id": "46",
      "imagen": "🥦",
      "nombre": "Brócoli",
      "precio": 750,
      "categoria": "Verdura"
    },
    {
      "id": "47",
      "nombre": "Licores",
      "imagen": "🍹",
      "precio": 9300,
      "categoria": "Bebida"
    },
    {
      "id": "48",
      "nombre": "Agua purificada",
      "imagen": "💧",
      "precio": 1230,
      "categoria": "Bebida"
    },
    {
      "id": "49",
      "imagen": "🥃",
      "nombre": "Whisky añejo",
      "precio": 11820,
      "categoria": "Bebida"
    },
    {
      "id": "50",
      "imagen": "🍊",
      "nombre": "Naranja",
      "precio": 915,
      "categoria": "Fruta"
    }
  ]
  
  