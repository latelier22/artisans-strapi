import myFetchStrapi from "@/app/component/myFetchSTRAPI";

const externalBrands = {
        "status": true,
        "data": [
          {
            "brand_id": 59,
            "brand_name": "Acer",
            "brand_slug": "acer-phones-59",
            "device_count": 100,
            "detail": "http://phone-specs-api.vercel.app/brands/acer-phones-59"
          },
          {
            "brand_id": 5,
            "brand_name": "alcatel",
            "brand_slug": "alcatel-phones-5",
            "device_count": 409,
            "detail": "http://phone-specs-api.vercel.app/brands/alcatel-phones-5"
          },
          {
            "brand_id": 88,
            "brand_name": "Allview",
            "brand_slug": "allview-phones-88",
            "device_count": 157,
            "detail": "http://phone-specs-api.vercel.app/brands/allview-phones-88"
          },
          {
            "brand_id": 76,
            "brand_name": "Amazon",
            "brand_slug": "amazon-phones-76",
            "device_count": 25,
            "detail": "http://phone-specs-api.vercel.app/brands/amazon-phones-76"
          },
          {
            "brand_id": 28,
            "brand_name": "Amoi",
            "brand_slug": "amoi-phones-28",
            "device_count": 47,
            "detail": "http://phone-specs-api.vercel.app/brands/amoi-phones-28"
          },
          {
            "brand_id": 48,
            "brand_name": "Apple",
            "brand_slug": "apple-phones-48",
            "device_count": 123,
            "detail": "http://phone-specs-api.vercel.app/brands/apple-phones-48"
          },
          {
            "brand_id": 90,
            "brand_name": "Archos",
            "brand_slug": "archos-phones-90",
            "device_count": 43,
            "detail": "http://phone-specs-api.vercel.app/brands/archos-phones-90"
          },
          {
            "brand_id": 46,
            "brand_name": "Asus",
            "brand_slug": "asus-phones-46",
            "device_count": 203,
            "detail": "http://phone-specs-api.vercel.app/brands/asus-phones-46"
          },
          {
            "brand_id": 57,
            "brand_name": "AT&T",
            "brand_slug": "at&t-phones-57",
            "device_count": 4,
            "detail": "http://phone-specs-api.vercel.app/brands/at&t-phones-57"
          },
          {
            "brand_id": 15,
            "brand_name": "Benefon",
            "brand_slug": "benefon-phones-15",
            "device_count": 9,
            "detail": "http://phone-specs-api.vercel.app/brands/benefon-phones-15"
          },
          {
            "brand_id": 31,
            "brand_name": "BenQ",
            "brand_slug": "benq-phones-31",
            "device_count": 35,
            "detail": "http://phone-specs-api.vercel.app/brands/benq-phones-31"
          },
          {
            "brand_id": 42,
            "brand_name": "BenQ-Siemens",
            "brand_slug": "benq_siemens-phones-42",
            "device_count": 28,
            "detail": "http://phone-specs-api.vercel.app/brands/benq_siemens-phones-42"
          },
          {
            "brand_id": 34,
            "brand_name": "Bird",
            "brand_slug": "bird-phones-34",
            "device_count": 61,
            "detail": "http://phone-specs-api.vercel.app/brands/bird-phones-34"
          },
          {
            "brand_id": 36,
            "brand_name": "BlackBerry",
            "brand_slug": "blackberry-phones-36",
            "device_count": 92,
            "detail": "http://phone-specs-api.vercel.app/brands/blackberry-phones-36"
          },
          {
            "brand_id": 116,
            "brand_name": "Blackview",
            "brand_slug": "blackview-phones-116",
            "device_count": 80,
            "detail": "http://phone-specs-api.vercel.app/brands/blackview-phones-116"
          },
          {
            "brand_id": 67,
            "brand_name": "BLU",
            "brand_slug": "blu-phones-67",
            "device_count": 369,
            "detail": "http://phone-specs-api.vercel.app/brands/blu-phones-67"
          },
          {
            "brand_id": 10,
            "brand_name": "Bosch",
            "brand_slug": "bosch-phones-10",
            "device_count": 10,
            "detail": "http://phone-specs-api.vercel.app/brands/bosch-phones-10"
          },
          {
            "brand_id": 108,
            "brand_name": "BQ",
            "brand_slug": "bq-phones-108",
            "device_count": 20,
            "detail": "http://phone-specs-api.vercel.app/brands/bq-phones-108"
          },
          {
            "brand_id": 77,
            "brand_name": "Casio",
            "brand_slug": "casio-phones-77",
            "device_count": 5,
            "detail": "http://phone-specs-api.vercel.app/brands/casio-phones-77"
          },
          {
            "brand_id": 89,
            "brand_name": "Cat",
            "brand_slug": "cat-phones-89",
            "device_count": 22,
            "detail": "http://phone-specs-api.vercel.app/brands/cat-phones-89"
          },
          {
            "brand_id": 75,
            "brand_name": "Celkon",
            "brand_slug": "celkon-phones-75",
            "device_count": 229,
            "detail": "http://phone-specs-api.vercel.app/brands/celkon-phones-75"
          },
          {
            "brand_id": 24,
            "brand_name": "Chea",
            "brand_slug": "chea-phones-24",
            "device_count": 12,
            "detail": "http://phone-specs-api.vercel.app/brands/chea-phones-24"
          },
          {
            "brand_id": 105,
            "brand_name": "Coolpad",
            "brand_slug": "coolpad-phones-105",
            "device_count": 48,
            "detail": "http://phone-specs-api.vercel.app/brands/coolpad-phones-105"
          },
          {
            "brand_id": 130,
            "brand_name": "Cubot",
            "brand_slug": "cubot-phones-130",
            "device_count": 70,
            "detail": "http://phone-specs-api.vercel.app/brands/cubot-phones-130"
          },
          {
            "brand_id": 61,
            "brand_name": "Dell",
            "brand_slug": "dell-phones-61",
            "device_count": 20,
            "detail": "http://phone-specs-api.vercel.app/brands/dell-phones-61"
          },
          {
            "brand_id": 129,
            "brand_name": "Doogee",
            "brand_slug": "doogee-phones-129",
            "device_count": 69,
            "detail": "http://phone-specs-api.vercel.app/brands/doogee-phones-129"
          },
          {
            "brand_id": 93,
            "brand_name": "Emporia",
            "brand_slug": "emporia-phones-93",
            "device_count": 15,
            "detail": "http://phone-specs-api.vercel.app/brands/emporia-phones-93"
          },
          {
            "brand_id": 106,
            "brand_name": "Energizer",
            "brand_slug": "energizer-phones-106",
            "device_count": 77,
            "detail": "http://phone-specs-api.vercel.app/brands/energizer-phones-106"
          },
          {
            "brand_id": 2,
            "brand_name": "Ericsson",
            "brand_slug": "ericsson-phones-2",
            "device_count": 40,
            "detail": "http://phone-specs-api.vercel.app/brands/ericsson-phones-2"
          },
          {
            "brand_id": 40,
            "brand_name": "Eten",
            "brand_slug": "eten-phones-40",
            "device_count": 22,
            "detail": "http://phone-specs-api.vercel.app/brands/eten-phones-40"
          },
          {
            "brand_id": 127,
            "brand_name": "Fairphone",
            "brand_slug": "fairphone-phones-127",
            "device_count": 4,
            "detail": "http://phone-specs-api.vercel.app/brands/fairphone-phones-127"
          },
          {
            "brand_id": 50,
            "brand_name": "Fujitsu Siemens",
            "brand_slug": "fujitsu_siemens-phones-50",
            "device_count": 2,
            "detail": "http://phone-specs-api.vercel.app/brands/fujitsu_siemens-phones-50"
          },
          {
            "brand_id": 65,
            "brand_name": "Garmin-Asus",
            "brand_slug": "garmin_asus-phones-65",
            "device_count": 5,
            "detail": "http://phone-specs-api.vercel.app/brands/garmin_asus-phones-65"
          },
          {
            "brand_id": 47,
            "brand_name": "Gigabyte",
            "brand_slug": "gigabyte-phones-47",
            "device_count": 63,
            "detail": "http://phone-specs-api.vercel.app/brands/gigabyte-phones-47"
          },
          {
            "brand_id": 92,
            "brand_name": "Gionee",
            "brand_slug": "gionee-phones-92",
            "device_count": 95,
            "detail": "http://phone-specs-api.vercel.app/brands/gionee-phones-92"
          },
          {
            "brand_id": 107,
            "brand_name": "Google",
            "brand_slug": "google-phones-107",
            "device_count": 28,
            "detail": "http://phone-specs-api.vercel.app/brands/google-phones-107"
          },
          {
            "brand_id": 33,
            "brand_name": "Haier",
            "brand_slug": "haier-phones-33",
            "device_count": 59,
            "detail": "http://phone-specs-api.vercel.app/brands/haier-phones-33"
          },
          {
            "brand_id": 133,
            "brand_name": "HMD",
            "brand_slug": "hmd-phones-133",
            "device_count": 12,
            "detail": "http://phone-specs-api.vercel.app/brands/hmd-phones-133"
          },
          {
            "brand_id": 121,
            "brand_name": "Honor",
            "brand_slug": "honor-phones-121",
            "device_count": 219,
            "detail": "http://phone-specs-api.vercel.app/brands/honor-phones-121"
          },
          {
            "brand_id": 41,
            "brand_name": "HP",
            "brand_slug": "hp-phones-41",
            "device_count": 41,
            "detail": "http://phone-specs-api.vercel.app/brands/hp-phones-41"
          },
          {
            "brand_id": 45,
            "brand_name": "HTC",
            "brand_slug": "htc-phones-45",
            "device_count": 290,
            "detail": "http://phone-specs-api.vercel.app/brands/htc-phones-45"
          },
          {
            "brand_id": 58,
            "brand_name": "Huawei",
            "brand_slug": "huawei-phones-58",
            "device_count": 452,
            "detail": "http://phone-specs-api.vercel.app/brands/huawei-phones-58"
          },
          {
            "brand_id": 35,
            "brand_name": "i-mate",
            "brand_slug": "i_mate-phones-35",
            "device_count": 34,
            "detail": "http://phone-specs-api.vercel.app/brands/i_mate-phones-35"
          },
          {
            "brand_id": 52,
            "brand_name": "i-mobile",
            "brand_slug": "i_mobile-phones-52",
            "device_count": 37,
            "detail": "http://phone-specs-api.vercel.app/brands/i_mobile-phones-52"
          },
          {
            "brand_id": 69,
            "brand_name": "Icemobile",
            "brand_slug": "icemobile-phones-69",
            "device_count": 61,
            "detail": "http://phone-specs-api.vercel.app/brands/icemobile-phones-69"
          },
          {
            "brand_id": 119,
            "brand_name": "Infinix",
            "brand_slug": "infinix-phones-119",
            "device_count": 131,
            "detail": "http://phone-specs-api.vercel.app/brands/infinix-phones-119"
          },
          {
            "brand_id": 29,
            "brand_name": "Innostream",
            "brand_slug": "innostream-phones-29",
            "device_count": 18,
            "detail": "http://phone-specs-api.vercel.app/brands/innostream-phones-29"
          },
          {
            "brand_id": 60,
            "brand_name": "iNQ",
            "brand_slug": "inq-phones-60",
            "device_count": 5,
            "detail": "http://phone-specs-api.vercel.app/brands/inq-phones-60"
          },
          {
            "brand_id": 102,
            "brand_name": "Intex",
            "brand_slug": "intex-phones-102",
            "device_count": 15,
            "detail": "http://phone-specs-api.vercel.app/brands/intex-phones-102"
          },
          {
            "brand_id": 131,
            "brand_name": "itel",
            "brand_slug": "itel-phones-131",
            "device_count": 35,
            "detail": "http://phone-specs-api.vercel.app/brands/itel-phones-131"
          },
          {
            "brand_id": 84,
            "brand_name": "Jolla",
            "brand_slug": "jolla-phones-84",
            "device_count": 3,
            "detail": "http://phone-specs-api.vercel.app/brands/jolla-phones-84"
          },
          {
            "brand_id": 83,
            "brand_name": "Karbonn",
            "brand_slug": "karbonn-phones-83",
            "device_count": 60,
            "detail": "http://phone-specs-api.vercel.app/brands/karbonn-phones-83"
          },
          {
            "brand_id": 17,
            "brand_name": "Kyocera",
            "brand_slug": "kyocera-phones-17",
            "device_count": 24,
            "detail": "http://phone-specs-api.vercel.app/brands/kyocera-phones-17"
          },
          {
            "brand_id": 94,
            "brand_name": "Lava",
            "brand_slug": "lava-phones-94",
            "device_count": 151,
            "detail": "http://phone-specs-api.vercel.app/brands/lava-phones-94"
          },
          {
            "brand_id": 109,
            "brand_name": "LeEco",
            "brand_slug": "leeco-phones-109",
            "device_count": 9,
            "detail": "http://phone-specs-api.vercel.app/brands/leeco-phones-109"
          },
          {
            "brand_id": 73,
            "brand_name": "Lenovo",
            "brand_slug": "lenovo-phones-73",
            "device_count": 248,
            "detail": "http://phone-specs-api.vercel.app/brands/lenovo-phones-73"
          },
          {
            "brand_id": 20,
            "brand_name": "LG",
            "brand_slug": "lg-phones-20",
            "device_count": 667,
            "detail": "http://phone-specs-api.vercel.app/brands/lg-phones-20"
          },
          {
            "brand_id": 14,
            "brand_name": "Maxon",
            "brand_slug": "maxon-phones-14",
            "device_count": 31,
            "detail": "http://phone-specs-api.vercel.app/brands/maxon-phones-14"
          },
          {
            "brand_id": 87,
            "brand_name": "Maxwest",
            "brand_slug": "maxwest-phones-87",
            "device_count": 41,
            "detail": "http://phone-specs-api.vercel.app/brands/maxwest-phones-87"
          },
          {
            "brand_id": 74,
            "brand_name": "Meizu",
            "brand_slug": "meizu-phones-74",
            "device_count": 74,
            "detail": "http://phone-specs-api.vercel.app/brands/meizu-phones-74"
          },
          {
            "brand_id": 66,
            "brand_name": "Micromax",
            "brand_slug": "micromax-phones-66",
            "device_count": 289,
            "detail": "http://phone-specs-api.vercel.app/brands/micromax-phones-66"
          },
          {
            "brand_id": 64,
            "brand_name": "Microsoft",
            "brand_slug": "microsoft-phones-64",
            "device_count": 32,
            "detail": "http://phone-specs-api.vercel.app/brands/microsoft-phones-64"
          },
          {
            "brand_id": 25,
            "brand_name": "Mitac",
            "brand_slug": "mitac-phones-25",
            "device_count": 12,
            "detail": "http://phone-specs-api.vercel.app/brands/mitac-phones-25"
          },
          {
            "brand_id": 8,
            "brand_name": "Mitsubishi",
            "brand_slug": "mitsubishi-phones-8",
            "device_count": 25,
            "detail": "http://phone-specs-api.vercel.app/brands/mitsubishi-phones-8"
          },
          {
            "brand_id": 63,
            "brand_name": "Modu",
            "brand_slug": "modu-phones-63",
            "device_count": 8,
            "detail": "http://phone-specs-api.vercel.app/brands/modu-phones-63"
          },
          {
            "brand_id": 4,
            "brand_name": "Motorola",
            "brand_slug": "motorola-phones-4",
            "device_count": 624,
            "detail": "http://phone-specs-api.vercel.app/brands/motorola-phones-4"
          },
          {
            "brand_id": 56,
            "brand_name": "MWg",
            "brand_slug": "mwg-phones-56",
            "device_count": 5,
            "detail": "http://phone-specs-api.vercel.app/brands/mwg-phones-56"
          },
          {
            "brand_id": 12,
            "brand_name": "NEC",
            "brand_slug": "nec-phones-12",
            "device_count": 73,
            "detail": "http://phone-specs-api.vercel.app/brands/nec-phones-12"
          },
          {
            "brand_id": 22,
            "brand_name": "Neonode",
            "brand_slug": "neonode-phones-22",
            "device_count": 3,
            "detail": "http://phone-specs-api.vercel.app/brands/neonode-phones-22"
          },
          {
            "brand_id": 79,
            "brand_name": "NIU",
            "brand_slug": "niu-phones-79",
            "device_count": 30,
            "detail": "http://phone-specs-api.vercel.app/brands/niu-phones-79"
          },
          {
            "brand_id": 1,
            "brand_name": "Nokia",
            "brand_slug": "nokia-phones-1",
            "device_count": 585,
            "detail": "http://phone-specs-api.vercel.app/brands/nokia-phones-1"
          },
          {
            "brand_id": 128,
            "brand_name": "Nothing",
            "brand_slug": "nothing-phones-128",
            "device_count": 4,
            "detail": "http://phone-specs-api.vercel.app/brands/nothing-phones-128"
          },
          {
            "brand_id": 97,
            "brand_name": "Nvidia",
            "brand_slug": "nvidia-phones-97",
            "device_count": 3,
            "detail": "http://phone-specs-api.vercel.app/brands/nvidia-phones-97"
          },
          {
            "brand_id": 30,
            "brand_name": "O2",
            "brand_slug": "o2-phones-30",
            "device_count": 45,
            "detail": "http://phone-specs-api.vercel.app/brands/o2-phones-30"
          },
          {
            "brand_id": 95,
            "brand_name": "OnePlus",
            "brand_slug": "oneplus-phones-95",
            "device_count": 74,
            "detail": "http://phone-specs-api.vercel.app/brands/oneplus-phones-95"
          },
          {
            "brand_id": 82,
            "brand_name": "Oppo",
            "brand_slug": "oppo-phones-82",
            "device_count": 311,
            "detail": "http://phone-specs-api.vercel.app/brands/oppo-phones-82"
          },
          {
            "brand_id": 71,
            "brand_name": "Orange",
            "brand_slug": "orange-phones-71",
            "device_count": 19,
            "detail": "http://phone-specs-api.vercel.app/brands/orange-phones-71"
          },
          {
            "brand_id": 134,
            "brand_name": "Oscal",
            "brand_slug": "oscal-phones-134",
            "device_count": 18,
            "detail": "http://phone-specs-api.vercel.app/brands/oscal-phones-134"
          },
          {
            "brand_id": 132,
            "brand_name": "Oukitel",
            "brand_slug": "oukitel-phones-132",
            "device_count": 46,
            "detail": "http://phone-specs-api.vercel.app/brands/oukitel-phones-132"
          },
          {
            "brand_id": 27,
            "brand_name": "Palm",
            "brand_slug": "palm-phones-27",
            "device_count": 17,
            "detail": "http://phone-specs-api.vercel.app/brands/palm-phones-27"
          },
          {
            "brand_id": 6,
            "brand_name": "Panasonic",
            "brand_slug": "panasonic-phones-6",
            "device_count": 123,
            "detail": "http://phone-specs-api.vercel.app/brands/panasonic-phones-6"
          },
          {
            "brand_id": 32,
            "brand_name": "Pantech",
            "brand_slug": "pantech-phones-32",
            "device_count": 72,
            "detail": "http://phone-specs-api.vercel.app/brands/pantech-phones-32"
          },
          {
            "brand_id": 81,
            "brand_name": "Parla",
            "brand_slug": "parla-phones-81",
            "device_count": 10,
            "detail": "http://phone-specs-api.vercel.app/brands/parla-phones-81"
          },
          {
            "brand_id": 11,
            "brand_name": "Philips",
            "brand_slug": "philips-phones-11",
            "device_count": 229,
            "detail": "http://phone-specs-api.vercel.app/brands/philips-phones-11"
          },
          {
            "brand_id": 72,
            "brand_name": "Plum",
            "brand_slug": "plum-phones-72",
            "device_count": 113,
            "detail": "http://phone-specs-api.vercel.app/brands/plum-phones-72"
          },
          {
            "brand_id": 101,
            "brand_name": "Posh",
            "brand_slug": "posh-phones-101",
            "device_count": 30,
            "detail": "http://phone-specs-api.vercel.app/brands/posh-phones-101"
          },
          {
            "brand_id": 86,
            "brand_name": "Prestigio",
            "brand_slug": "prestigio-phones-86",
            "device_count": 56,
            "detail": "http://phone-specs-api.vercel.app/brands/prestigio-phones-86"
          },
          {
            "brand_id": 103,
            "brand_name": "QMobile",
            "brand_slug": "qmobile-phones-103",
            "device_count": 90,
            "detail": "http://phone-specs-api.vercel.app/brands/qmobile-phones-103"
          },
          {
            "brand_id": 38,
            "brand_name": "Qtek",
            "brand_slug": "qtek-phones-38",
            "device_count": 21,
            "detail": "http://phone-specs-api.vercel.app/brands/qtek-phones-38"
          },
          {
            "brand_id": 117,
            "brand_name": "Razer",
            "brand_slug": "razer-phones-117",
            "device_count": 2,
            "detail": "http://phone-specs-api.vercel.app/brands/razer-phones-117"
          },
          {
            "brand_id": 118,
            "brand_name": "Realme",
            "brand_slug": "realme-phones-118",
            "device_count": 209,
            "detail": "http://phone-specs-api.vercel.app/brands/realme-phones-118"
          },
          {
            "brand_id": 13,
            "brand_name": "Sagem",
            "brand_slug": "sagem-phones-13",
            "device_count": 120,
            "detail": "http://phone-specs-api.vercel.app/brands/sagem-phones-13"
          },
          {
            "brand_id": 9,
            "brand_name": "Samsung",
            "brand_slug": "samsung-phones-9",
            "device_count": 1396,
            "detail": "http://phone-specs-api.vercel.app/brands/samsung-phones-9"
          },
          {
            "brand_id": 18,
            "brand_name": "Sendo",
            "brand_slug": "sendo-phones-18",
            "device_count": 19,
            "detail": "http://phone-specs-api.vercel.app/brands/sendo-phones-18"
          },
          {
            "brand_id": 26,
            "brand_name": "Sewon",
            "brand_slug": "sewon-phones-26",
            "device_count": 25,
            "detail": "http://phone-specs-api.vercel.app/brands/sewon-phones-26"
          },
          {
            "brand_id": 23,
            "brand_name": "Sharp",
            "brand_slug": "sharp-phones-23",
            "device_count": 75,
            "detail": "http://phone-specs-api.vercel.app/brands/sharp-phones-23"
          },
          {
            "brand_id": 3,
            "brand_name": "Siemens",
            "brand_slug": "siemens-phones-3",
            "device_count": 94,
            "detail": "http://phone-specs-api.vercel.app/brands/siemens-phones-3"
          },
          {
            "brand_id": 54,
            "brand_name": "Sonim",
            "brand_slug": "sonim-phones-54",
            "device_count": 18,
            "detail": "http://phone-specs-api.vercel.app/brands/sonim-phones-54"
          },
          {
            "brand_id": 7,
            "brand_name": "Sony",
            "brand_slug": "sony-phones-7",
            "device_count": 160,
            "detail": "http://phone-specs-api.vercel.app/brands/sony-phones-7"
          },
          {
            "brand_id": 19,
            "brand_name": "Sony Ericsson",
            "brand_slug": "sony_ericsson-phones-19",
            "device_count": 188,
            "detail": "http://phone-specs-api.vercel.app/brands/sony_ericsson-phones-19"
          },
          {
            "brand_id": 68,
            "brand_name": "Spice",
            "brand_slug": "spice-phones-68",
            "device_count": 120,
            "detail": "http://phone-specs-api.vercel.app/brands/spice-phones-68"
          },
          {
            "brand_id": 55,
            "brand_name": "T-Mobile",
            "brand_slug": "t_mobile-phones-55",
            "device_count": 66,
            "detail": "http://phone-specs-api.vercel.app/brands/t_mobile-phones-55"
          },
          {
            "brand_id": 123,
            "brand_name": "TCL",
            "brand_slug": "tcl-phones-123",
            "device_count": 69,
            "detail": "http://phone-specs-api.vercel.app/brands/tcl-phones-123"
          },
          {
            "brand_id": 120,
            "brand_name": "Tecno",
            "brand_slug": "tecno-phones-120",
            "device_count": 142,
            "detail": "http://phone-specs-api.vercel.app/brands/tecno-phones-120"
          },
          {
            "brand_id": 21,
            "brand_name": "Tel.Me.",
            "brand_slug": "tel_me_-phones-21",
            "device_count": 7,
            "detail": "http://phone-specs-api.vercel.app/brands/tel_me_-phones-21"
          },
          {
            "brand_id": 16,
            "brand_name": "Telit",
            "brand_slug": "telit-phones-16",
            "device_count": 30,
            "detail": "http://phone-specs-api.vercel.app/brands/telit-phones-16"
          },
          {
            "brand_id": 49,
            "brand_name": "Thuraya",
            "brand_slug": "thuraya-phones-49",
            "device_count": 1,
            "detail": "http://phone-specs-api.vercel.app/brands/thuraya-phones-49"
          },
          {
            "brand_id": 44,
            "brand_name": "Toshiba",
            "brand_slug": "toshiba-phones-44",
            "device_count": 35,
            "detail": "http://phone-specs-api.vercel.app/brands/toshiba-phones-44"
          },
          {
            "brand_id": 124,
            "brand_name": "Ulefone",
            "brand_slug": "ulefone-phones-124",
            "device_count": 94,
            "detail": "http://phone-specs-api.vercel.app/brands/ulefone-phones-124"
          },
          {
            "brand_id": 135,
            "brand_name": "Umidigi",
            "brand_slug": "umidigi-phones-135",
            "device_count": 65,
            "detail": "http://phone-specs-api.vercel.app/brands/umidigi-phones-135"
          },
          {
            "brand_id": 91,
            "brand_name": "Unnecto",
            "brand_slug": "unnecto-phones-91",
            "device_count": 30,
            "detail": "http://phone-specs-api.vercel.app/brands/unnecto-phones-91"
          },
          {
            "brand_id": 39,
            "brand_name": "Vertu",
            "brand_slug": "vertu-phones-39",
            "device_count": 17,
            "detail": "http://phone-specs-api.vercel.app/brands/vertu-phones-39"
          },
          {
            "brand_id": 70,
            "brand_name": "verykool",
            "brand_slug": "verykool-phones-70",
            "device_count": 139,
            "detail": "http://phone-specs-api.vercel.app/brands/verykool-phones-70"
          },
          {
            "brand_id": 98,
            "brand_name": "vivo",
            "brand_slug": "vivo-phones-98",
            "device_count": 459,
            "detail": "http://phone-specs-api.vercel.app/brands/vivo-phones-98"
          },
          {
            "brand_id": 37,
            "brand_name": "VK Mobile",
            "brand_slug": "vk_mobile-phones-37",
            "device_count": 31,
            "detail": "http://phone-specs-api.vercel.app/brands/vk_mobile-phones-37"
          },
          {
            "brand_id": 53,
            "brand_name": "Vodafone",
            "brand_slug": "vodafone-phones-53",
            "device_count": 87,
            "detail": "http://phone-specs-api.vercel.app/brands/vodafone-phones-53"
          },
          {
            "brand_id": 96,
            "brand_name": "Wiko",
            "brand_slug": "wiko-phones-96",
            "device_count": 100,
            "detail": "http://phone-specs-api.vercel.app/brands/wiko-phones-96"
          },
          {
            "brand_id": 51,
            "brand_name": "WND",
            "brand_slug": "wnd-phones-51",
            "device_count": 5,
            "detail": "http://phone-specs-api.vercel.app/brands/wnd-phones-51"
          },
          {
            "brand_id": 43,
            "brand_name": "XCute",
            "brand_slug": "xcute-phones-43",
            "device_count": 4,
            "detail": "http://phone-specs-api.vercel.app/brands/xcute-phones-43"
          },
          {
            "brand_id": 80,
            "brand_name": "Xiaomi",
            "brand_slug": "xiaomi-phones-80",
            "device_count": 397,
            "detail": "http://phone-specs-api.vercel.app/brands/xiaomi-phones-80"
          },
          {
            "brand_id": 85,
            "brand_name": "XOLO",
            "brand_slug": "xolo-phones-85",
            "device_count": 81,
            "detail": "http://phone-specs-api.vercel.app/brands/xolo-phones-85"
          },
          {
            "brand_id": 78,
            "brand_name": "Yezz",
            "brand_slug": "yezz-phones-78",
            "device_count": 113,
            "detail": "http://phone-specs-api.vercel.app/brands/yezz-phones-78"
          },
          {
            "brand_id": 99,
            "brand_name": "Yota",
            "brand_slug": "yota-phones-99",
            "device_count": 3,
            "detail": "http://phone-specs-api.vercel.app/brands/yota-phones-99"
          },
          {
            "brand_id": 100,
            "brand_name": "YU",
            "brand_slug": "yu-phones-100",
            "device_count": 13,
            "detail": "http://phone-specs-api.vercel.app/brands/yu-phones-100"
          },
          {
            "brand_id": 62,
            "brand_name": "ZTE",
            "brand_slug": "zte-phones-62",
            "device_count": 382,
            "detail": "http://phone-specs-api.vercel.app/brands/zte-phones-62"
          }
        ]
      
};

async function Page() {
  try {
    // Récupérer les marques existantes depuis Strapi
    const existingBrandsResponse = await myFetchStrapi("/api/brands", "GET", null, "fetch brands");
    const existingBrands = existingBrandsResponse.data;

    // Convertir les marques existantes en une Map pour un accès rapide
    const existingBrandsMap = new Map(existingBrands.map(brand => [brand.attributes.brand_slug, brand]));

    // Parcourir les marques externes
    for (const brand of externalBrands.data) {
      const { brand_slug, brand_name } = brand;

      // Vérifier si la marque existe déjà dans Strapi
      if (!existingBrandsMap.has(brand_slug)) {
        // Si elle n'existe pas, l'ajouter avec active: false
        const payload = {
          data: {
            brand_slug,
            brand_name,
            active: false
          }
        };
        await myFetchStrapi("/api/brands", "POST", payload, "create brand");
        console.log(`Brand ${brand_name} created.`);
      } else {
        console.log(`Brand ${brand_name} already exists.`);
      }
    }
  } catch (error) {
    console.error("Error syncing brands:", error);
  }
}


export default Page;