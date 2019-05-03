import { AdBrand } from '../../models/adBrand'
import { AdCategory } from '../../models/adCategory'

export const AD_TYPES: string[] = [
  'Deo',
  'Oprema'
]

export const AD_VEHICLE_TYPES: string[] = [
  'Automobil',
  'Kombi vozilo'
]

export const AD_PART_CATEGORIES: AdCategory[] = [
  {
    name: "Audio i video oprema",
    subcategories: [
      "Antene",
      "Auto televizor",
      "Zvučnici",
      "Bluetooth (handsfree) uređaj",
      "Radio / CD / DVD plejeri",
      "DVR kamera",
      "FM transmiteri",
      "GPS navigacija i mape",
      "Konektori I punjači",
      "Multimedija",
      "Parking kamera",
      "Auto pojačalo",
      "Radio",
      "Ramovi i maske",
      "Vufer",
      "Ostalo"
    ]
  },
  {
    name: "Amortizeri i opruge",
    subcategories: [
      "Amortizer haube",
      "Amortizer gepeka",
      "Bombe",
      "Gasni amortizeri",
      "Gibnjevi",
      "Nosači amortizera",
      "Opruge",
      "Pogača",
      "Šolja amortizera",
      "Uljni amortizeri",
      "Ostalo"
    ]
  },
  {
    name: "Elektrika i paljenje",
    subcategories: [
      "Akumulator",
      "Alternator",
      "Anlaser",
      "Automat",
      "Bendiks",
      "Biksna",
      "Bobina",
      "Centralna brava",
      "Četkice",
      "El. podizači prozora",
      "Elektromotor brave",
      "Elektromotor brisača",
      "Grejač motora",
      "Kablovi za svećice",
      "Kleme",
      "Kompjuter",
      "Komutator",
      "Osigurači",
      "Razvodna kapa",
      "Razvodna ruka",
      "Razvodnik paljenja",
      "Regler",
      "Releji",
      "Senzor bregaste osovine",
      "Senzor hladnog starta",
      "Senzor radilice",
      "Svećice",
      "Tabla za osigurače",
      "Ostalo"
    ]
  },
  {
    name: "Enterijer",
    subcategories: [
      "Airbag",
      "Brava za paljenje",
      "Instrument tabla",
      "Kaseta-fioka",
      "Keder za vrata",
      "Kilometar sat-brzinomer",
      "Unutrašnja maska,lajsna",
      "Naslon za ruke-rukohvat",
      "Nebo",
      "Papučice-pedale",
      "Patosnice",
      "Pepeljara,upaljač",
      "Pojas",
      "Polica gepeka",
      "Prekidači-tasteri",
      "Ručica menjača",
      "Ručice za vrata(Kvake)",
      "Sedišta",
      "Srednji(kabinski) retrovizor",
      "Suncobran",
      "Tapacirung za vrata",
      "Tepih",
      "Tunel",
      "Ventilator",
      "Volan",
      "Ostalo"
    ]
  },
  {
    name: "Filteri i ulja",
    subcategories: [
      "Filter za gas",
      "Filter za gorivo",
      "Filter za ulje",
      "Filter za vazduh",
      "Kućište filtera",
      "Ulja i maziva",
      "Ostalo"
    ]
  },
  {
    name: "Izduvni sistem",
    subcategories: [
      "Cev auspuha",
      "DPF filter",
      "Držač auspuha",
      "Flexi crevo-pletenica izduva",
      "Gume za auspuh",
      "Izduvna grana",
      "Katalizator",
      "Kompletan auspuh",
      "Lambda sonda",
      "Lonac auspuha",
      "Nastavak auspuha",
      "Rezonator",
      "Ostalo"
    ]
  },
  {
    name: "Karoserija",
    subcategories: [
      "Blatobran",
      "Brave i kvake",
      "Brisači",
      "Donja zaštita(šuspleh)",
      "Hauba",
      "Koševi",
      "Krilo",
      "Krov",
      "Lajsne",
      "Maska",
      "Potkrilo",
      "Polustranica,stub",
      "Polukoš",
      "Prag-sajtna",
      "Prednji branik",
      "Prednji vezni lim",
      "Retrovizori",
      "Rezervoar",
      "Rubovi",
      "Sistem za pranje stakala",
      "Spojler",
      "Šiber",
      "Šarke / zglob / graničnik",
      "Vrata",
      "Vrata gepeka",
      "Zadnji branik",
      "Zadnji vezni lim",
      "Ostalo"
    ]
  },
  {
    name: "Kočioni sistem",
    subcategories: [
      "ABS",
      "Cevčice i creva",
      "Diskovi i doboši",
      "Gumice za kočnice",
      "Kočiona servo pumpa",
      "Kočiona klešta",
      "Kočioni cilindri",
      "Paknovi",
      "Pločice",
      "Posuda kočionog ulja",
      "Ručica ručne kočnice",
      "Sajla ručne kočnice",
      "Vakum uređaj",
      "Ostalo"
    ]
  },
  {
    name: "Auto gas oprema",
    subcategories: [
      "Boca za gas",
      "Creva za gas",
      "Elektroventili",
      "Emulator",
      "Isparivač",
      "Sonde",
      "Ostalo"
    ]
  },
  {
    name: "Prenosni sistem",
    subcategories: [
      "Cilindri",
      "Diferencijal",
      "Druk lager",
      "Homokinetički zglob",
      "Kardan",
      "Kompletan menjač",
      "Korpa kvačila",
      "Lamela",
      "Ležaj točka",
      "Manžetna",
      "Nosač menjača",
      "Osovina i poluosovina",
      "Poluge menjača",
      "Ručica menjača",
      "Sajle",
      "Semering i zaptivač",
      "Set kvačila",
      "Sinhron",
      "Teleskop volana",
      "Zamajac",
      "Zupčanici",
      "Ostalo"
    ]
  },
  {
    name: "Motor i delovi motora",
    subcategories: [
      "Pumpa",
      "Bregasta osovina",
      "Cev-crevo",
      "Čaure male pesnice",
      "Dihtunzi",
      "Dizne",
      "Glava i blok motora",
      "Grejači dizni",
      "Gumice za ventile",
      "Hidropodizači",
      "Hilzne",
      "Kaiš,remenica i španer",
      "Karburator",
      "Karike",
      "Karter",
      "Klackalice",
      "Klipnjače",
      "Klipovi",
      "Kompletan motor",
      "Lanac,lančanik",
      "Leteći lageri",
      "Ležeći lageri",
      "Nosač motora",
      "Poklopac motora",
      "Polumesec",
      "Protokomer",
      "Radilica",
      "Turbina",
      "Uljna pumpa",
      "Usisna glava",
      "Ventili",
      "Vodena pumpa",
      "Vođice ventila",
      "Webasto",
      "Ostalo"
    ]
  },
  {
    name: "Rashladni sistem",
    subcategories: [
      "Ekspanzioni sud",
      "Hladnjak",
      "Hladnjak klime",
      "Interkuler",
      "Klima uređaj",
      "Termodavač",
      "Termostat",
      "Ventilator za hladnjak",
      "Ostalo"
    ]
  },
  {
    name: "Stakla",
    subcategories: [
      "Leptir staklo",
      "Staklo prednjih vrata",
      "Staklo gepeka",
      "Staklo zadnjih vrata",
      "Prednje staklo(Šoferšajbna)",
      "Ostalo"
    ]
  },
  {
    name: "Svetla i signalizacija",
    subcategories: [
      "Katadiopter",
      "Migavci(Žmigavci)",
      "Prednji farovi",
      "Rikverc svetlo",
      "Sijalice",
      "Svetla za maglu(maglenke)",
      "Unutrašnja svetla",
      "Zadnji farovi",
      "Ostalo"
    ]
  },
  {
    name: "Trap i vešanje",
    subcategories: [
      "Balans štangle",
      "Kugla",
      "Letva volana",
      "Oscilirajuće rame",
      "Silen blokovi",
      "Spone",
      "Stabilizatori",
      "Viljuške",
      "Servo pumpa",
      "Torziona osovina",
      "Ostalo"
    ]
  }
]

export const AD_EQUIPMENT_CATEGORIES: AdCategory[] = [
  {
    name: "Održavanje vozila",
    subcategories: [
      "Aditivi",
      "Antifriz",
      "Četke i krpe",
      "Grebači za stakla",
      "Jelenska koža",
      "Jelkice i osveživači",
      "Lakovi sprejevi i olovke",
      "Oznake i nalepnice",
      "Polir paste",
      "Šamponi",
      "Sunđeri i jastučići",
      "Tečnost za vetrobrane",
      "Ostalo"
    ]
  },
  {
    name: "Obavezna oprema",
    subcategories: [
      "Dizalica",
      "Ključ za točak",
      "Kuka za vuču",
      "Lanci za sneg",
      "Protiv požarni aparat",
      "Prsluk",
      "Prva pomoć",
      "Rezervni točak",
      "Sajle za vuču",
      "Trougao",
      "Ostalo"
    ]
  },
  {
    name: "Tunning i styling",
    subcategories: [
      "Auto folije i trake",
      "Branici i spojleri (tunning)",
      "Farovi i stop svetla (tunning)",
      "LED sijalice, diode i trake",
      "Obrve farova",
      "Xenon sijalice i oprema",
      "Ostalo"
    ]
  },
  {
    name: "Dodatna oprema",
    subcategories: [
      "Auto alarm",
      "Auto cerada",
      "Auto pepeljare",
      "Dečije sedište",
      "Držači čaše",
      "Držač za mobilni tel.",
      "Frižider",
      "Krovni nosač",
      "Krovni kofer",
      "Auto kuka",
      "Nosač za bicikle",
      "Obloga volana",
      "Okviri za tablice",
      "Ostalo"
    ]
  }
]

export const AD_BRANDS: AdBrand[] = [
  {
    name: "AC",
    models: [
      "Cobra",
      "Ostalo"
    ]
  },
  {
    name: "Acura",
    models: [
      "NSX",
      "Ostalo",
    ]
  },
  {
    name: "Alfa Romeo",
    models: [
      "4C",
      "33",
      "75",
      "90",
      "145",
      "146",
      "147",
      "155",
      "156",
      "156 Crosswagon",
      "159",
      "164",
      "166",
      "Alfasud",
      "Alfetta",
      "Brera",
      "Giulia",
      "Giulietta",
      "GT",
      "GTV",
      "MiTo",
      "Spider",
      "Sprint",
      "Stelvio",
      "Ostalo"
    ]
  },
  {
    name: "Alpina",
    models: [
      "B3",
      "B5",
      "B7",
      "B8",
      "B10",
      "B12",
      "D3",
      "Roadster S",
      "Ostalo"
    ]
  },
  {
    name: "Aro",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Asia Motors",
    models: [
      "Rocsta",
      "Ostalo"
    ]
  },
  {
    name: "Aston Martin",
    models: [
      "V8",
      "Ostalo"
    ]
  },
  {
    name: "Audi",
    models: [
      "80",
      "90",
      "100",
      "200",
      "A1",
      "A2",
      "A3",
      "A4",
      "A4 Allroad",
      "A5",
      "A6",
      "A6 Allroad",
      "A7",
      "A8",
      "Coupe",
      "Q2",
      "Q3",
      "Q5",
      "Q7",
      "Quattro",
      "R8",
      "RS2",
      "RS4",
      "RS6",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "S8",
      "SQ5",
      "TT",
      "TT RS",
      "TTS",
      "V8",
      "Ostalo"
    ]
  },
  {
    name: "Austin",
    models: [
      "Maestro",
      "Metro",
      "Mini",
      "Montego",
      "Ostalo"
    ]
  },
  {
    name: "Autobianchi",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Bentley",
    models: [
      "Arange",
      "Azure",
      "Brooklands",
      "Continental",
      "Eight",
      "Mulsanne",
      "Turbo R",
      "Turbo RT",
      "Turbo S",
      "Ostalo"
    ]
  },
  {
    name: "BMW",
    models: [
      "114",
      "116",
      "118",
      "120",
      "123",
      "125",
      "135",
      "216",
      "218",
      "220",
      "225",
      "315",
      "316",
      "318",
      "320",
      "323",
      "324",
      "325",
      "328",
      "330",
      "335",
      "Compact",
      "320 GT",
      "318 GT",
      "418",
      "420",
      "428",
      "430",
      "435",
      "518",
      "520",
      "523",
      "524",
      "525",
      "528",
      "530",
      "535",
      "540",
      "545",
      "550",
      "520 GT",
      "525 GT",
      "528 GT",
      "530 GT",
      "535 GT",
      "540 GT",
      "545 GT",
      "550 GT",
      "630",
      "635",
      "640",
      "645",
      "650",
      "700",
      "725",
      "728",
      "730",
      "732",
      "735",
      "740",
      "745",
      "750",
      "760",
      "840",
      "850",
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "Z3 M",
      "X1",
      "X2",
      "X3",
      "X4",
      "X5",
      "X6",
      "I3",
      "I8",
      "Z3",
      "Z4",
      "Z8",
      "1602",
      "1802",
      "2002",
      "Ostalo"
    ]
  },
  {
    name: "Brilliance",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Bugatti",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Buick",
    models: [
      "Century",
      "Electra",
      "Park Avenue",
      "Regal",
      "Riviera",
      "Roadmaster",
      "Skyhawk",
      "Ostalo"
    ]
  },
  {
    name: "Cadillac",
    models: [
      "BLS",
      "CTS",
      "Deville",
      "Escalade",
      "Fleetwood",
      "Seville",
      "SRX",
      "XLR",
      "Ostalo"
    ]
  },
  {
    name: "Chery",
    models: [
      "Ego",
      "Tengo",
      "Tiggo",
      "Ostalo"
    ]
  },
  {
    name: "Chevrolet",
    models: [
      "Alero",
      "Astro",
      "Avalanche",
      "Aveo",
      "Belair",
      "Beretta",
      "Blazer",
      "Camaro",
      "Caprice",
      "Captiva",
      "Cavalier",
      "Chevelle",
      "Colorado",
      "Corsa",
      "Corsica",
      "Corvette",
      "Cruze",
      "El Camino",
      "Epica",
      "Evanda",
      "HHR",
      "Impala",
      "Kalos",
      "Lacetti",
      "Lumina",
      "Malibu",
      "Matiz",
      "Metro",
      "Niva",
      "Nubira",
      "Orlando",
      "Prizm",
      "Rezzo",
      "S10",
      "Silverado",
      "Spark",
      "Suburban",
      "SSR",
      "Tacuma",
      "Tahoe",
      "Tracker",
      "Trailblazer",
      "Trans Sport",
      "Trax",
      "Venture",
      "Ostalo"
    ]
  },
  {
    name: "Chrysler",
    models: [
      "300M",
      "300C",
      "Aspen",
      "Concorde",
      "Crossfire",
      "Daytona",
      "ES",
      "Grand Voyager",
      "GS",
      "GTS",
      "Intrepid",
      "Le Baron",
      "New Yorker",
      "Pacifica",
      "PT Cruiser",
      "Saratoga",
      "Sebring",
      "Stratus",
      "Sunbeam",
      "Town & Country",
      "Valiant",
      "Viper",
      "Vision",
      "Voyager",
      "Ostalo"
    ]
  },
  {
    name: "Citroen",
    models: [
      "2CV",
      "Ami",
      "AX",
      "Berlingo",
      "BX",
      "C-Crosser",
      "C-ELYSEE",
      "C1",
      "C2",
      "C3",
      "C3 Picasso",
      "C3 pluriel",
      "C4",
      "C4 Aircross",
      "C4 Cactus",
      "C4 Grand Picasso",
      "C4 Picasso",
      "C5",
      "C6",
      "C8",
      "C15",
      "Cx",
      "Drugi",
      "DS",
      "DS3",
      "DS4",
      "DS5",
      "Dyane",
      "Evasion",
      "GS",
      "GSA",
      "Jumpy",
      "Nemo",
      "Oltcit",
      "Saxo",
      "Velur",
      "Visa",
      "Xantia",
      "XM",
      "Xsara",
      "Xsara Picasso",
      "ZX",
      "Ostalo"
    ]
  },
  {
    name: "Comarth",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Dacia",
    models: [
      "1100",
      "1304",
      "1307",
      "1310",
      "Aro",
      "Dokker",
      "Double",
      "Duster",
      "Lodgy",
      "Logan",
      "Nova",
      "Pickup",
      "Sandero",
      "Solenza",
      "Stepway",
      "Super Nova",
      "Ostalo"
    ]
  },
  {
    name: "Daewoo",
    models: [
      "Aranos",
      "Espero",
      "Evanda",
      "Kalos",
      "Korando",
      "Lacetti",
      "Lanos",
      "Leganza",
      "Matiz",
      "Musso",
      "Nexia",
      "Nubira",
      "Racer",
      "Rezzo",
      "Tacuma",
      "Tico",
      "Ostalo"
    ]
  },
  {
    name: "Daihatsu",
    models: [
      "Applause",
      "Charade",
      "Charmant",
      "Copen",
      "Cuore",
      "Domino",
      "Extol",
      "Feroza",
      "Freeclimber",
      "Gran Move",
      "Hijet",
      "Materia",
      "Move",
      "Rocky",
      "Sirion",
      "Taft",
      "Terios",
      "Trevis",
      "Valera",
      "YRV",
      "Dodge",
      "Avenger",
      "Caliber",
      "Challenger",
      "Charger",
      "Caravan",
      "Dakota",
      "Daytona",
      "Durango",
      "Grand Caravan",
      "Intrepid",
      "Journey",
      "Magnum",
      "Neon",
      "Nitro",
      "RAM",
      "Stealth",
      "Stratus",
      "Viper",
      "Ostalo"
    ]
  },
  {
    name: "DR",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Ferrari",
    models: [
      "208",
      "328",
      "330",
      "348",
      "360",
      "308",
      "400",
      "550",
      "750",
      "Daytona",
      "Ostalo"
    ]
  },
  {
    name: "Fiat",
    models: [
      "124",
      "125",
      "126",
      "127",
      "128",
      "130",
      "131",
      "132",
      "242",
      "500",
      "500L",
      "500X",
      "600",
      "850",
      "1100",
      "1107",
      "1300",
      "Albea",
      "Argenta",
      "Barchetta",
      "Brava",
      "Bravo",
      "Campagnola",
      "Cinquecento",
      "Coupe",
      "Croma",
      "Dino",
      "Doblo",
      "Duna",
      "Elba",
      "Fiorino",
      "Freemont",
      "Grande Punto",
      "Idea",
      "Linea",
      "Marea",
      "Marengo",
      "Maxi",
      "Multipla",
      "Palio",
      "Panda",
      "Penny",
      "Punto",
      "Qubo",
      "Regata",
      "Ritmo",
      "Scudo",
      "Sedici",
      "Seicento",
      "Siena",
      "Spider Europa",
      "Stilo",
      "Tempra",
      "Tipo",
      "Ulysse",
      "Uno",
      "x 1/9",
      "Ostalo"
    ]
  },
  {
    name: "Ford",
    models: [
      "Aerostar",
      "B-Max",
      "Bronco",
      "C-Max",
      "Capri",
      "Cortina",
      "Cougar",
      "Courier",
      "Escape",
      "Escort",
      "Excursion",
      "Expedition",
      "Explorer",
      "F 150",
      "F 250",
      "F 350",
      "Festiva",
      "Fiesta",
      "Focus",
      "Fusion",
      "Galaxy",
      "Granada",
      "Grand C-Max",
      "Ka",
      "Kuga",
      "Maverick",
      "Mondeo",
      "Mustang",
      "Orion",
      "Probe",
      "Puma",
      "Ranger",
      "S-Max",
      "Scorpio",
      "Sierra",
      "Street Ka",
      "Taunus",
      "Taurus",
      "Thunderbird",
      "Tourneo",
      "Tourneo Connect",
      "Tourneo Courier",
      "Tournero Custom",
      "Transit Connect",
      "Windstar",
      "Ostalo"
    ]
  },
  {
    name: "GAZ",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Great Wall",
    models: [
      "H5",
      "H6",
      "Ostalo"
    ]
  },
  {
    name: "GMC",
    models: [
      "Safari",
      "Sierra",
      "Ostalo"
    ]
  },
  {
    name: "GWM",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Honda",
    models: [
      "Accord",
      "Aerodeck",
      "Civic",
      "Concerto",
      "CR-V",
      "CR-Z",
      "CRX",
      "Element",
      "FR-V",
      "HR-V",
      "Insight",
      "Integra",
      "Jazz",
      "Legend",
      "Logo",
      "Odyssey",
      "Prelude",
      "S2000",
      "Shuttle",
      "Stream",
      "Ostalo"
    ]
  },
  {
    name: "Hummer",
    models: [
      "H1",
      "H2",
      "H3",
      "Ostalo"
    ]
  },
  {
    name: "Hyundai",
    models: [
      "Accent",
      "Atos",
      "Coupe",
      "Elantra",
      "Excel",
      "Galloper",
      "Genesis",
      "Getz",
      "Grandeur",
      "H 1",
      "H 100",
      "i20",
      "i30",
      "i40",
      "Ioniq",
      "ix20",
      "ix35",
      "ix55",
      "Lantra",
      "Matrix",
      "Pony",
      "S-Coupe",
      "Santa Fe",
      "Santamo",
      "Sonata",
      "Sonica",
      "Terracan",
      "Trajet",
      "Tucson",
      "Veloster",
      "XG 30",
      "Ostalo"
    ]
  },
  {
    name: "Infiniti",
    models: [
      "EX30",
      "FX30",
      "FX35",
      "FX45",
      "G35",
      "Ostalo"
    ]
  },
  {
    name: "Innocenti",
    models: [
      "Elba",
      "Ostalo"
    ]
  },
  {
    name: "Isuzu",
    models: [
      "Axiom",
      "Campo",
      "DLX",
      "D-Max",
      "Gemini",
      "Midi",
      "NKR",
      "NPR",
      "Piazza",
      "Pickup",
      "Rodeo",
      "Trooper",
      "WFR",
      "Ostalo"
    ]
  },
  {
    name: "Jaguar",
    models: [
      "S-Tyoe",
      "X-Type",
      "XE",
      "XF",
      "XJ",
      "XJ6",
      "XJ8",
      "XJ12",
      "XJ40",
      "XJR",
      "XJS",
      "XK",
      "XKP",
      "Ostalo"
    ]
  },
  {
    name: "Jeep",
    models: [
      "Cherokee",
      "CJ",
      "Comanche",
      "Commander",
      "Compass",
      "Grand Cherokee",
      "Liberty",
      "Patriot",
      "Renegade",
      "Wagoneer",
      "Willys",
      "Wrangler",
      "Ostalo"
    ]
  },
  {
    name: "Katay Gonow",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Kia",
    models: [
      "Besta",
      "Borrego",
      "Carens",
      "Carnival",
      "cee'd",
      "cee'd sw",
      "Cerato",
      "Clarus",
      "Credos",
      "Elan",
      "Joice",
      "K2500",
      "K2700",
      "Leo",
      "Magentis",
      "Mentor",
      "Mini",
      "Mohave",
      "Opirus",
      "Optima",
      "Picanto",
      "Pregio",
      "Pride",
      "pro_cee'd",
      "Retona",
      "Rio",
      "Roadster",
      "Rocsta",
      "Sephia",
      "Shuma",
      "Sorento",
      "Soul",
      "Spectra",
      "Sportage",
      "Venga",
      "Ostalo"
    ]
  },
  {
    name: "KTM",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Lada",
    models: [
      "110",
      "111",
      "112",
      "1200",
      "1300",
      "1500",
      "1600",
      "2101",
      "2103",
      "2104",
      "2105",
      "2107",
      "2110",
      "2120",
      "Aleko",
      "C-Cross",
      "Forma",
      "Kalina",
      "Niva",
      "Oka",
      "Priora",
      "Riva",
      "Samara",
      "Ostalo"
    ]
  },
  {
    name: "Lamborghini",
    models: [
      "Countach",
      "Diablo",
      "Espada",
      "Gallardo",
      "Jalpa",
      "LM",
      "Miura",
      "Murcielago",
      "Urraco",
      "Ostalo"
    ]
  },
  {
    name: "Lancia",
    models: [
      "Aurelia",
      "Beta",
      "Dedra",
      "Delta",
      "Flaminia",
      "Fulvia",
      "Gamma",
      "K",
      "Kappa",
      "Lybra",
      "Musa",
      "Phedra",
      "Prisma",
      "Stratos",
      "Thema",
      "Thesis",
      "Ypsilon",
      "Zeta",
      "Ostalo"
    ]
  },
  {
    name: "Land Rover",
    models: [
      "Defender",
      "Discovery",
      "Freelander",
      "Lightweight",
      "LRX",
      "Range Rover",
      "Range Rover Evoque",
      "Range Rover Sport",
      "Serija I",
      "Serija II",
      "Serija III",
      "Ostalo"
    ]
  },
  {
    name: "Lexus",
    models: [
      "CT 200h",
      "CT 300h",
      "CT 400h",
      "ES",
      "ES 300",
      "ES 330",
      "ES 350",
      "GS",
      "GS 300",
      "GS 430",
      "GS 450",
      "GS 460",
      "GS 470",
      "GX",
      "GX 470",
      "IS",
      "IS 200",
      "IS 220",
      "IS 250",
      "IS 300",
      "IS-F",
      "LS",
      "LS 400",
      "LS 430",
      "LS 460",
      "LS 600",
      "LX",
      "LX 470",
      "LX 570",
      "RX",
      "RX 300",
      "RX 330",
      "RX 350",
      "RX 400",
      "RX 450",
      "SC",
      "Ostalo"
    ]
  },
  {
    name: "Ligier",
    models: [
      "Nova",
      "Optima",
      "Ostalo"
    ]
  },
  {
    name: "Lincoln",
    models: [
      "Continental",
      "Navigator",
      "Town car",
      "Ostalo"
    ]
  },
  {
    name: "Lotus",
    models: [
      "Cortina",
      "Elan",
      "Excel",
      "V8",
      "Ostalo"
    ]
  },
  {
    name: "Mahindra",
    models: [
      "CJ",
      "Scorpio",
      "Ostalo"
    ]
  },
  {
    name: "Maserati",
    models: [
      "4200",
      "Ghibli",
      "Granturismo",
      "Levante",
      "Quattroporte",
      "Ostalo"
    ]
  },
  {
    name: "Maybach",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Mazda",
    models: [
      "2",
      "3",
      "5",
      "6",
      "121",
      "323",
      "626",
      "929",
      "1500",
      "BT-50",
      "CX-3",
      "CX-5",
      "CX-7",
      "Demio",
      "Millenia",
      "MPV",
      "MX-3",
      "MX-5",
      "MX-6",
      "Premacy",
      "Protégé",
      "RX-7",
      "RX-8",
      "Serija B",
      "Serija E",
      "Tribute",
      "Xedos",
      "Ostalo"
    ]
  },
  {
    name: "Mercedes Benz",
    models: [
      "A Klasa",
      "A 140",
      "A 150",
      "A 160",
      "A 170",
      "A 180",
      "A 190",
      "A 200",
      "A 210",
      "A 220",
      "A 250",
      "A 45 AMG",
      "B Klasa",
      "B 150",
      "B 160",
      "B 170",
      "B 180",
      "B 200",
      "C Klasa",
      "C 180",
      "C 200",
      "C 220",
      "C 230",
      "C 240",
      "C 250",
      "C 270",
      "C 280",
      "C 300",
      "C 320",
      "C 400",
      "C 32 AMG",
      "C 350",
      "C 36 AMG",
      "C 55 AMG",
      "C 63 AMG",
      "CE Klasa",
      "CE 200",
      "CE 220",
      "CE 230",
      "CE 300",
      "Citan",
      "CLA Klasa",
      "CLA 180",
      "CLA 200",
      "CLA 220",
      "CLA 250",
      "CLA 45 AMG",
      "CL Klasa",
      "CL 220",
      "CL 500",
      "CL 55 AMG",
      "CL 600",
      "CL 63 AMG",
      "CLC Klasa",
      "CLC 180",
      "CLC 200",
      "CLC 220",
      "CLK Klasa",
      "CLK 200",
      "CLK 220",
      "CLK 230",
      "CLK 240",
      "CLK 270",
      "CLK 280",
      "CLK 320",
      "CLK 350",
      "CLK 430",
      "CLK 500",
      "CLK 55 AMG",
      "CLK 63 AMG",
      "CLS Klasa",
      "CLS 220",
      "CLS 250",
      "CLS 280",
      "CLS 320",
      "CLS 350",
      "CLS 500",
      "CLS 55 AMG",
      "CLS 63 AMG",
      "E Klasa",
      "E 200",
      "E 220",
      "E 230",
      "E 240",
      "E 250",
      "E 260",
      "E 270",
      "E 280",
      "E 290",
      "E 300",
      "E 320",
      "E 350",
      "E 400",
      "E 420",
      "E 430",
      "E 43 AMG",
      "E 50",
      "E 500",
      "E 55",
      "E 63 AMG",
      "G Klasa",
      "G 230",
      "G 240",
      "G 250",
      "G 270",
      "G 280",
      "G 290",
      "G 300",
      "G 320",
      "G 400",
      "G 500",
      "G 55 AMG",
      "G 63 AMG",
      "GL Klasa",
      "GL 320",
      "GL 350",
      "GL 420",
      "GL 450",
      "GL 500",
      "GLA Klasa",
      "GLA 45 AMG",
      "GLA 180",
      "GLA 200",
      "GLA 220",
      "GLA 250",
      "GLC Klasa",
      "GLC 63",
      "GLC 220",
      "GLC 250",
      "GLC 350",
      "GLE Klasa",
      "GLE 63 AMG",
      "GLE 250",
      "GLE 300",
      "GLE 350",
      "GLK Klasa",
      "GLK 200",
      "GLK 220",
      "GLK 250",
      "GLK 320",
      "GLK 350",
      "GLS Klasa",
      "GLS 63 AMG",
      "GLS 350 D",
      "GLS 400",
      "GLS 500",
      "MB 100",
      "ML Klasa",
      "ML 230",
      "ML 250",
      "ML 270",
      "ML 280",
      "ML 300",
      "ML 320",
      "ML 350",
      "ML 400",
      "ML 420",
      "ML 430",
      "ML 500",
      "ML 55 AMG",
      "ML 63 AMG",
      "R Klasa",
      "R 280",
      "R 320",
      "R 350",
      "R 500",
      "R 63 AMG",
      "S Klasa",
      "S 220",
      "S 250",
      "S 260",
      "S 280",
      "S 300",
      "S 320",
      "S 350",
      "S 400",
      "S 420",
      "S 430",
      "S 500",
      "S 55",
      "S 550",
      "S 600",
      "S 63 AMG",
      "S 65 AMG",
      "SL Klasa",
      "SL 280",
      "SL 300",
      "SL 320",
      "SL 350",
      "SL 380",
      "SL 450",
      "SL 500",
      "SL 55 AMG",
      "SL 63 AMG",
      "SLK Klasa",
      "SLK 200",
      "SLK 230",
      "SLK 320",
      "SLK 32 AMG",
      "SLK 350",
      "SLK 55 AMG",
      "SLS AMG",
      "Vaneo",
      "180",
      "190",
      "X klasa",
      "Ostalo"
    ]
  },
  {
    name: "Mercury",
    models: [
      "Capri",
      "Cougar",
      "Monterey",
      "Ostalo"
    ]
  },
  {
    name: "Mini",
    models: [
      "1000",
      "1150",
      "1300",
      "Clubman",
      "Cooper",
      "Cooper S",
      "Countryman",
      "John Cooper Works",
      "Paceman",
      "One",
      "Ostalo"
    ]
  },
  {
    name: "MG",
    models: [
      "MGF",
      "TF",
      "ZR",
      "ZS",
      "ZT",
      "Ostalo"
    ]
  },
  {
    name: "Mitsubishi",
    models: [
      "3000GT",
      "400",
      "ASX",
      "Canter",
      "Carisma",
      "Colt",
      "Cordia",
      "Diamante",
      "Eclipse",
      "Endeavor",
      "Galant",
      "Galloper",
      "Grandis",
      "L200",
      "L300",
      "L400",
      "Lancer",
      "Montero",
      "Outlander",
      "Pajero",
      "Pajero Pinin",
      "Santamo",
      "Sapporo",
      "Sigma",
      "Space Gear",
      "Space Runner",
      "Space Star",
      "Space Wagon",
      "Starion",
      "Tredia",
      "Ostalo"
    ]
  },
  {
    name: "Moszkvics",
    models: [
      "2137",
      "2140",
      "402",
      "Aleko 2141",
      "Ostalo"
    ]
  },
  {
    name: "Nissan",
    models: [
      "100 NX",
      "200 SX",
      "240 SX",
      "280 ZX",
      "300 ZX",
      "350",
      "350Z",
      "370Z",
      "Almera",
      "Almera Tino",
      "Altima",
      "Armanda",
      "Bluebird",
      "Cabstar",
      "Cargo",
      "Cherry",
      "Cube",
      "Figaro",
      "Frontier",
      "Gloria",
      "GT-R",
      "Interstar",
      "Juke",
      "King Cab",
      "Kubistar",
      "Laurel",
      "Liberty",
      "Maxima",
      "Micra",
      "Murano",
      "Navara",
      "Note",
      "NP 300",
      "Pathfinder",
      "Patrol",
      "Pixo",
      "Praire",
      "Primastar",
      "Primera",
      "Pulsar",
      "Qashqai",
      "Qashqai + 2",
      "Quest",
      "Rogue",
      "Sentra",
      "Serena",
      "Silvia",
      "Skyline",
      "Stagea",
      "Stanza",
      "Sunny",
      "Terrano",
      "Tiida",
      "Titanijum",
      "Trade",
      "Urvan",
      "Vanette",
      "Xterra",
      "X-Trail",
      "Ostalo"
    ]
  },
  {
    name: "NSU",
    models: [
      "Ostale",
    ]
  },
  {
    name: "Oldsmobile",
    models: [
      "Alero",
      "Ninety-Eight",
      "Ostalo"
    ]
  },
  {
    name: "Opel",
    models: [
      "Adam",
      "Admiral",
      "Agila",
      "Ampera",
      "Antara",
      "Arena",
      "Ascona",
      "Astra",
      "Astra F",
      "Astra G",
      "Astra H",
      "Astra J",
      "Astra K",
      "Calibra",
      "Campo",
      "Combo",
      "Commodore",
      "Corsa",
      "Corsa A",
      "Corsa B",
      "Corsa C",
      "Corsa D",
      "Diplomat",
      "Corsa E",
      "Frontera",
      "GT",
      "Insignia",
      "Kadett",
      "Manta",
      "Meriva",
      "Monterey",
      "Mokka",
      "Monza",
      "Olympia",
      "Omega",
      "Rekord",
      "Senator",
      "Signum",
      "Sintra",
      "Speedster",
      "Tigra",
      "Vectra",
      "Vectra A",
      "Vectra B",
      "Vectra C",
      "Zafira",
      "Ostalo"
    ]
  },
  {
    name: "Perodua",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Peugeot",
    models: [
      "104",
      "106",
      "107",
      "108",
      "204",
      "205",
      "206",
      "207",
      "208",
      "301",
      "304",
      "305",
      "306",
      "307",
      "308",
      "309",
      "404",
      "405",
      "406",
      "407",
      "504",
      "505",
      "508",
      "604",
      "605",
      "607",
      "806",
      "807",
      "1007",
      "2008",
      "3008",
      "4007",
      "4008",
      "5008",
      "Bipper",
      "Expert",
      "Partner",
      "Ranch",
      "RCZ",
      "TePee",
      "Ostalo"
    ]
  },
  {
    name: "Piaggio",
    models: [
      "Porter",
      "Ostalo"
    ]
  },
  {
    name: "Plymouth",
    models: [
      "Colt",
      "Grand Caravan",
      "Neon",
      "Voyager",
      "Ostalo"
    ]
  },
  {
    name: "Polonez",
    models: [
      "Atu",
      "Caro",
      "Coupe",
      "Ostalo"
    ]
  },
  {
    name: "Polski Fiat",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Pontiac",
    models: [
      "Trans Sport",
      "Ostalo"
    ]
  },
  {
    name: "Porsche",
    models: [
      "356",
      "911",
      "924",
      "928",
      "944",
      "997",
      "Boxster",
      "Carrera GT",
      "Cayenne",
      "Cayman",
      "Macan",
      "Panamera",
      "Ostalo"
    ]
  },
  {
    name: "Proton",
    models: [
      "Serija 400",
      "Ostalo"
    ]
  },
  {
    name: "Rayton Fissore",
    models: [
      "Magnum",
      "Ostalo"
    ]
  },
  {
    name: "Renault",
    models: [
      "Avantime",
      "Captur",
      "Clio",
      "Espace",
      "Express",
      "Fluence",
      "Fuego",
      "Grand Espace",
      "Grand Modus",
      "Grand Scenic",
      "Kadjar",
      "Kangoo",
      "Koleos",
      "Laguna",
      "Latitude",
      "Megane",
      "Modus",
      "Nevada",
      "R 4",
      "R 5",
      "R 6",
      "R 8",
      "R 9",
      "R 10",
      "R 11",
      "R 12",
      "R 14",
      "R 18",
      "R 19",
      "R 20",
      "R 21",
      "R 25",
      "R 30",
      "Rapid",
      "RX",
      "Safrane",
      "Scenic",
      "Spider",
      "Super 5",
      "Talisman",
      "Thalia",
      "Twingo",
      "Vel Satis",
      "Ostalo"
    ]
  },
  {
    name: "Rolls Royce",
    models: [
      "Touring",
      "Ostalo"
    ]
  },
  {
    name: "Rover",
    models: [
      "100",
      "114",
      "115",
      "200",
      "214",
      "216",
      "220",
      "25",
      "400",
      "414",
      "416",
      "418",
      "45",
      "600",
      "618",
      "620",
      "623",
      "75",
      "800",
      "820",
      "825",
      "827",
      "CityRover",
      "Maestro",
      "Metro",
      "Montego",
      "Streetwise",
      "Ostalo"
    ]
  },
  {
    name: "Saab",
    models: [
      "90",
      "900",
      "9000",
      "9-3",
      "9-4x",
      "9-5",
      "96",
      "9-7x",
      "99",
      "Ostalo"
    ]
  },
  {
    name: "Saturn",
    models: [
      "Astra",
      "SC",
      "Ostalo"
    ]
  },
  {
    name: "Seat",
    models: [
      "Alhambra",
      "Altea",
      "Altea XL",
      "Arosa",
      "Cordoba",
      "Exeo",
      "Ibiza",
      "Inca",
      "Leon",
      "Malaga",
      "Marbella",
      "Mii",
      "Ronda",
      "Terra",
      "Toledo",
      "Ostalo"
    ]
  },
  {
    name: "Shuanghuan",
    models: [
      "CEO",
      "Ostalo"
    ]
  },
  {
    name: "Simca",
    models: [
      "1100",
      "1150",
      "1200",
      "1301",
      "Ostalo"
    ]
  },
  {
    name: "Smart",
    models: [
      "Crossblade",
      "ForFour",
      "ForTwo",
      "Roadster",
    ]
  },
  {
    name: "SsangYong",
    models: [
      "Actyon",
      "Chairman",
      "Family",
      "Korando",
      "Kyron",
      "Musso",
      "Rexton",
      "Rodius",
      "Ostalo"
    ]
  },
  {
    name: "Subaru",
    models: [
      "1800",
      "BRZ",
      "Forester",
      "Impreza",
      "Justy",
      "Legacy",
      "Leone",
      "Levorg",
      "Libero",
      "Outback",
      "Sumo",
      "SVX",
      "Tribeca",
      "Vivio",
      "XT",
      "XV",
      "Ostalo"
    ]
  },
  {
    name: "Suzuki",
    models: [
      "Alto",
      "Baleno",
      "Cappuccino",
      "Carry",
      "Grand Vitara",
      "Ignis",
      "Jimny",
      "Kizashi",
      "Liana",
      "Maruti",
      "Ritz",
      "SJ Samurai",
      "Splash",
      "Super Carry",
      "Swift",
      "SX4",
      "Vitara",
      "Wagon R+",
      "X-90",
      "Ostalo"
    ]
  },
  {
    name: "Škoda",
    models: [
      "100",
      "105",
      "110",
      "120",
      "135",
      "1000 MB",
      "Citigo",
      "Fabia",
      "Favorit",
      "Felicia",
      "Forman",
      "Kodiaq",
      "Octavia",
      "Praktik",
      "Rapid",
      "Roomster",
      "Superb",
      "Yeti",
      "Ostalo"
    ]
  },
  {
    name: "Talbot",
    models: [
      "Simca",
      "Ostalo"
    ]
  },
  {
    name: "Tata",
    models: [
      "Safari",
      "Sumo",
      "Ostalo"
    ]
  },
  {
    name: "Tavria",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Tesla",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Toyota",
    models: [
      "4Runner",
      "Auris",
      "Avensis",
      "Avensis Verso",
      "Aygo",
      "C-HR",
      "Camry",
      "Carina",
      "Celica",
      "Corolla",
      "Corolla Verso",
      "Corona",
      "Cressida",
      "GT86",
      "Hiace",
      "Hilux",
      "iQ",
      "Land Cruiser",
      "LC",
      "Liteace",
      "Matrix",
      "MR2",
      "Paseo",
      "Pickup",
      "Picnic",
      "Previa",
      "Prius",
      "RAV 4",
      "Starlet",
      "Supra",
      "Tercel",
      "Tundra",
      "Urban Cruiser",
      "Verso",
      "Yaris",
      "Yaris Verso",
      "Ostalo"
    ]
  },
  {
    name: "Trabant",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Triumph",
    models: [
      "1300",
      "Ostalo"
    ]
  },
  {
    name: "TVR",
    models: [
      "S2",
      "Ostalo"
    ]
  },
  {
    name: "UAZ",
    models: [
      "Ostalo"
    ]
  },
  {
    name: "Vauxhall",
    models: [
      "Astra",
      "Vectra",
      "Ostalo"
    ]
  },
  {
    name: "Volkswagen",
    models: [
      "181",
      "Amarok",
      "Arteon",
      "Bora",
      "Buggy",
      "Buba",
      "Caddy",
      "Corrado",
      "Cross Polo",
      "Derby",
      "EOS",
      "Fox",
      "Golf",
      "Golf 1",
      "Golf 2",
      "Golf 3",
      "Golf 4",
      "Golf 5",
      "Golf 6",
      "Golf 7",
      "Golf Sportsvan",
      "Golf Plus",
      "Jetta",
      "Karmann Ghia",
      "Lupo",
      "Nova Buba",
      "Passat",
      "Passat B1",
      "Passat B2",
      "Passat B3",
      "Passat B4",
      "Passat B5",
      "Passat B5.5",
      "Passat B6",
      "Passat B7",
      "Passat B8",
      "Passat CC",
      "Phaeton",
      "Polo",
      "Santana",
      "Scirocco",
      "Sharan",
      "T-Cross",
      "T-Roc",
      "Taro",
      "Tiguan",
      "Touareg",
      "Touran",
      "up!",
      "Vento",
      "Ostalo"
    ]
  },
  {
    name: "Volvo",
    models: [
      "66",
      "142",
      "144",
      "240",
      "244",
      "245",
      "340",
      "360",
      "440",
      "460",
      "480",
      "740",
      "744",
      "745",
      "760",
      "780",
      "850",
      "940",
      "945",
      "960",
      "Amazon",
      "C30",
      "C70",
      "Polar",
      "S40",
      "S60",
      "S70",
      "S80",
      "S90",
      "V40",
      "V50",
      "V60",
      "V70",
      "V90",
      "XC40",
      "XC60",
      "XC70",
      "XC90",
      "Ostalo"
    ]
  },
  {
    name: "Wartburg",
    models: [
      "353",
      "Ostalo"
    ]
  },
  {
    name: "Zastava",
    models: [
      "10",
      "101",
      "128",
      "1300",
      "1500",
      "750",
      "850",
      "AR 55",
      "Florida",
      "Florida In",
      "Koral",
      "Koral In",
      "Poly",
      "Skala 55",
      "Yugo",
      "Yugo 45",
      "Yugo 55",
      "Yugo 60",
      "Yugo 65",
      "Yugo Cabrio",
      "Yugo Ciao",
      "Yugo In L",
      "Yugo Tempo",
      "Ostalo"
    ]
  },
  {
    name: "Ostalo",
    models: [
      "Ostalo"
    ]
  }
]