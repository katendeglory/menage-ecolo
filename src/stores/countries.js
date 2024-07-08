import { writable } from "svelte/store";

let countries = writable([
  {
    "name": "Afghanistan",
    "code": "AF",
    "curr": "AFN",
    "prefix": "+93"
  },
  {
    "name": "Aland Islands",
    "code": "AX",
    "curr": "EUR",
    "prefix": "+358-18"
  },
  {
    "name": "Albania",
    "code": "AL",
    "curr": "ALL",
    "prefix": "+355"
  },
  {
    "name": "Algeria",
    "code": "DZ",
    "curr": "DZD",
    "prefix": "+213"
  },
  {
    "name": "American Samoa",
    "code": "AS",
    "curr": "USD",
    "prefix": "+1-684"
  },
  {
    "name": "Andorra",
    "code": "AD",
    "curr": "EUR",
    "prefix": "+376"
  },
  {
    "name": "Angola",
    "code": "AO",
    "curr": "AOA",
    "prefix": "+244"
  },
  {
    "name": "Anguilla",
    "code": "AI",
    "curr": "XCD",
    "prefix": "+1-264"
  },
  {
    "name": "Antigua & Barbuda",
    "code": "AG",
    "curr": "XCD",
    "prefix": "+1-268"
  },
  {
    "name": "Argentina",
    "code": "AR",
    "curr": "ARS",
    "prefix": "+54"
  },
  {
    "name": "Armenia",
    "code": "AM",
    "curr": "AMD",
    "prefix": "+374"
  },
  {
    "name": "Aruba",
    "code": "AW",
    "curr": "AWG",
    "prefix": "+297"
  },
  {
    "name": "Australia",
    "code": "AU",
    "curr": "AUD",
    "prefix": "+61"
  },
  {
    "name": "Austria",
    "code": "AT",
    "curr": "EUR",
    "prefix": "+43"
  },
  {
    "name": "Azerbaijan",
    "code": "AZ",
    "curr": "AZN",
    "prefix": "+994"
  },
  {
    "name": "Bahamas",
    "code": "BS",
    "curr": "BSD",
    "prefix": "+1-242"
  },
  {
    "name": "Bahrain",
    "code": "BH",
    "curr": "BHD",
    "prefix": "+973"
  },
  {
    "name": "Bangladesh",
    "code": "BD",
    "curr": "BDT",
    "prefix": "+880"
  },
  {
    "name": "Barbados",
    "code": "BB",
    "curr": "BBD",
    "prefix": "+1-246"
  },
  {
    "name": "Belarus",
    "code": "BY",
    "curr": "BYR",
    "prefix": "+375"
  },
  {
    "name": "Belgium",
    "code": "BE",
    "curr": "EUR",
    "prefix": "+32"
  },
  {
    "name": "Belize",
    "code": "BZ",
    "curr": "BZD",
    "prefix": "+501"
  },
  {
    "name": "Benin",
    "code": "BJ",
    "curr": "XOF",
    "prefix": "+229"
  },
  {
    "name": "Bermuda",
    "code": "BM",
    "curr": "BMD",
    "prefix": "+1-441"
  },
  {
    "name": "Bhutan",
    "code": "BT",
    "curr": "BTN",
    "prefix": "+975"
  },
  {
    "name": "Bolivia",
    "code": "BO",
    "curr": "BOB",
    "prefix": "+591"
  },
  {
    "name": "Bosnia & Herzegovina",
    "code": "BA",
    "curr": "BAM",
    "prefix": "+387"
  },
  {
    "name": "Botswana",
    "code": "BW",
    "curr": "BWP",
    "prefix": "+267"
  },
  {
    "name": "Brazil",
    "code": "BR",
    "curr": "BRL",
    "prefix": "+55"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "IO",
    "curr": "USD",
    "prefix": "+246"
  },
  {
    "name": "Brunei",
    "code": "BN",
    "curr": "BND",
    "prefix": "+673"
  },
  {
    "name": "Bulgaria",
    "code": "BG",
    "curr": "BGN",
    "prefix": "+359"
  },
  {
    "name": "Burkina Faso",
    "code": "BF",
    "curr": "XOF",
    "prefix": "+226"
  },
  {
    "name": "Burundi",
    "code": "BI",
    "curr": "BIF",
    "prefix": "+257"
  },
  {
    "name": "Cambodia",
    "code": "KH",
    "curr": "KHR",
    "prefix": "+855"
  },
  {
    "name": "Cameroon",
    "code": "CM",
    "curr": "XAF",
    "prefix": "+237"
  },
  {
    "name": "Canada",
    "code": "CA",
    "curr": "CAD",
    "prefix": "+1"
  },
  {
    "name": "Cape Verde",
    "code": "CV",
    "curr": "CVE",
    "prefix": "+238"
  },
  {
    "name": "Cayman Islands",
    "code": "KY",
    "curr": "KYD",
    "prefix": "+1-345"
  },
  {
    "name": "Central African Republic",
    "code": "CF",
    "curr": "XAF",
    "prefix": "+236"
  },
  {
    "name": "Chad",
    "code": "TD",
    "curr": "XAF",
    "prefix": "+235"
  },
  {
    "name": "Chile",
    "code": "CL",
    "curr": "CLP",
    "prefix": "+56"
  },
  {
    "name": "China",
    "code": "CN",
    "curr": "CNY",
    "prefix": "+86"
  },
  {
    "name": "Christmas Island",
    "code": "CX",
    "curr": "AUD",
    "prefix": "+61"
  },
  {
    "name": "Cocos Islands",
    "code": "CC",
    "curr": "AUD",
    "prefix": "+61"
  },
  {
    "name": "Colombia",
    "code": "CO",
    "curr": "COP",
    "prefix": "+57"
  },
  {
    "name": "Comoros",
    "code": "KM",
    "curr": "KMF",
    "prefix": "+269"
  },
  {
    "name": "Congo Brazzaville",
    "code": "CG",
    "curr": "XAF",
    "prefix": "+242"
  },
  {
    "name": "Cook Islands",
    "code": "CK",
    "curr": "NZD",
    "prefix": "+682"
  },
  {
    "name": "Costa Rica",
    "code": "CR",
    "curr": "CRC",
    "prefix": "+506"
  },
  {
    "name": "Croatia",
    "code": "HR",
    "curr": "HRK",
    "prefix": "+385"
  },
  {
    "name": "Cuba",
    "code": "CU",
    "curr": "CUP",
    "prefix": "+53"
  },
  {
    "name": "Curacao",
    "code": "CW",
    "curr": "ANG",
    "prefix": "+599"
  },
  {
    "name": "Cyprus",
    "code": "CY",
    "curr": "EUR",
    "prefix": "+357"
  },
  {
    "name": "Czech Republic",
    "code": "CZ",
    "curr": "CZK",
    "prefix": "+420"
  },
  {
    "name": "Democratic Republic of the Congo",
    "code": "CD",
    "curr": "CDF",
    "prefix": "+243"
  },
  {
    "name": "Denmark",
    "code": "DK",
    "curr": "DKK",
    "prefix": "+45"
  },
  {
    "name": "Djibouti",
    "code": "DJ",
    "curr": "DJF",
    "prefix": "+253"
  },
  {
    "name": "East Timor",
    "code": "TL",
    "curr": "USD",
    "prefix": "+670"
  },
  {
    "name": "Ecuador",
    "code": "EC",
    "curr": "USD",
    "prefix": "+593"
  },
  {
    "name": "Egypt",
    "code": "EG",
    "curr": "EGP",
    "prefix": "+20"
  },
  {
    "name": "El Salvador",
    "code": "SV",
    "curr": "USD",
    "prefix": "+503"
  },
  {
    "name": "Equatorial Guinea",
    "code": "GQ",
    "curr": "XAF",
    "prefix": "+240"
  },
  {
    "name": "Eritrea",
    "code": "ER",
    "curr": "ERN",
    "prefix": "+291"
  },
  {
    "name": "Estonia",
    "code": "EE",
    "curr": "EUR",
    "prefix": "+372"
  },
  {
    "name": "Ethiopia",
    "code": "ET",
    "curr": "ETB",
    "prefix": "+251"
  },
  {
    "name": "Falkland Islands",
    "code": "FK",
    "curr": "FKP",
    "prefix": "+500"
  },
  {
    "name": "Faroe Islands",
    "code": "FO",
    "curr": "DKK",
    "prefix": "+298"
  },
  {
    "name": "Fiji",
    "code": "FJ",
    "curr": "FJD",
    "prefix": "+679"
  },
  {
    "name": "Finland",
    "code": "FI",
    "curr": "EUR",
    "prefix": "+358"
  },
  {
    "name": "France",
    "code": "FR",
    "curr": "EUR",
    "prefix": "+33"
  },
  {
    "name": "French Guiana",
    "code": "GF",
    "curr": "EUR",
    "prefix": "+594"
  },
  {
    "name": "French Polynesia",
    "code": "PF",
    "curr": "XPF",
    "prefix": "+689"
  },
  {
    "name": "Gabon",
    "code": "GA",
    "curr": "XAF",
    "prefix": "+241"
  },
  {
    "name": "Gambia",
    "code": "GM",
    "curr": "GMD",
    "prefix": "+220"
  },
  {
    "name": "Georgia",
    "code": "GE",
    "curr": "GEL",
    "prefix": "+995"
  },
  {
    "name": "Germany",
    "code": "DE",
    "curr": "EUR",
    "prefix": "+49"
  },
  {
    "name": "Ghana",
    "code": "GH",
    "curr": "GHS",
    "prefix": "+233"
  },
  {
    "name": "Gibraltar",
    "code": "GI",
    "curr": "GIP",
    "prefix": "+350"
  },
  {
    "name": "Greece",
    "code": "GR",
    "curr": "EUR",
    "prefix": "+30"
  },
  {
    "name": "Greenland",
    "code": "GL",
    "curr": "DKK",
    "prefix": "+299"
  },
  {
    "name": "Grenada",
    "code": "GD",
    "curr": "XCD",
    "prefix": "+1-473"
  },
  {
    "name": "Guadeloupe",
    "code": "GP",
    "curr": "EUR",
    "prefix": "+590"
  },
  {
    "name": "Guam",
    "code": "GU",
    "curr": "USD",
    "prefix": "+1-671"
  },
  {
    "name": "Guatemala",
    "code": "GT",
    "curr": "GTQ",
    "prefix": "+502"
  },
  {
    "name": "Guernsey",
    "code": "GG",
    "curr": "GBP",
    "prefix": "+44-1481"
  },
  {
    "name": "Guinea",
    "code": "GN",
    "curr": "GNF",
    "prefix": "+224"
  },
  {
    "name": "Guinea-Bissau",
    "code": "GW",
    "curr": "XOF",
    "prefix": "+245"
  },
  {
    "name": "Guyana",
    "code": "GY",
    "curr": "GYD",
    "prefix": "+592"
  },
  {
    "name": "Haiti",
    "code": "HT",
    "curr": "HTG",
    "prefix": "+509"
  },
  {
    "name": "Honduras",
    "code": "HN",
    "curr": "HNL",
    "prefix": "+504"
  },
  {
    "name": "Hong Kong",
    "code": "HK",
    "curr": "HKD",
    "prefix": "+852"
  },
  {
    "name": "Hungary",
    "code": "HU",
    "curr": "HUF",
    "prefix": "+36"
  },
  {
    "name": "Iceland",
    "code": "IS",
    "curr": "ISK",
    "prefix": "+354"
  },
  {
    "name": "India",
    "code": "IN",
    "curr": "INR",
    "prefix": "+91"
  },
  {
    "name": "Indonesia",
    "code": "ID",
    "curr": "IDR",
    "prefix": "+62"
  },
  {
    "name": "Iran",
    "code": "IR",
    "curr": "IRR",
    "prefix": "+98"
  },
  {
    "name": "Iraq",
    "code": "IQ",
    "curr": "IQD",
    "prefix": "+964"
  },
  {
    "name": "Ireland",
    "code": "IE",
    "curr": "EUR",
    "prefix": "+353"
  },
  {
    "name": "Isle of Man",
    "code": "IM",
    "curr": "GBP",
    "prefix": "+44-1624"
  },
  {
    "name": "Israel",
    "code": "IL",
    "curr": "ILS",
    "prefix": "+972"
  },
  {
    "name": "Italy",
    "code": "IT",
    "curr": "EUR",
    "prefix": "+39"
  },
  {
    "name": "Ivory Coast",
    "code": "CI",
    "curr": "XOF",
    "prefix": "+225"
  },
  {
    "name": "Jamaica",
    "code": "JM",
    "curr": "JMD",
    "prefix": "+1-876"
  },
  {
    "name": "Japan",
    "code": "JP",
    "curr": "JPY",
    "prefix": "+81"
  },
  {
    "name": "Jersey",
    "code": "JE",
    "curr": "GBP",
    "prefix": "+44-1534"
  },
  {
    "name": "Jordan",
    "code": "JO",
    "curr": "JOD",
    "prefix": "+962"
  },
  {
    "name": "Kazakhstan",
    "code": "KZ",
    "curr": "KZT",
    "prefix": "+7"
  },
  {
    "name": "Kenya",
    "code": "KE",
    "curr": "KES",
    "prefix": "+254"
  },
  {
    "name": "Kiribati",
    "code": "KI",
    "curr": "AUD",
    "prefix": "+686"
  },
  {
    "name": "Kuwait",
    "code": "KW",
    "curr": "KWD",
    "prefix": "+965"
  },
  {
    "name": "Kyrgyzstan",
    "code": "KG",
    "curr": "KGS",
    "prefix": "+996"
  },
  {
    "name": "Laos",
    "code": "LA",
    "curr": "LAK",
    "prefix": "+856"
  },
  {
    "name": "Latvia",
    "code": "LV",
    "curr": "EUR",
    "prefix": "+371"
  },
  {
    "name": "Lebanon",
    "code": "LB",
    "curr": "LBP",
    "prefix": "+961"
  },
  {
    "name": "Lesotho",
    "code": "LS",
    "curr": "LSL",
    "prefix": "+266"
  },
  {
    "name": "Liberia",
    "code": "LR",
    "curr": "LRD",
    "prefix": "+231"
  },
  {
    "name": "Libya",
    "code": "LY",
    "curr": "LYD",
    "prefix": "+218"
  },
  {
    "name": "Liechtenstein",
    "code": "LI",
    "curr": "CHF",
    "prefix": "+423"
  },
  {
    "name": "Lithuania",
    "code": "LT",
    "curr": "LTL",
    "prefix": "+370"
  },
  {
    "name": "Luxembourg",
    "code": "LU",
    "curr": "EUR",
    "prefix": "+352"
  },
  {
    "name": "Macao",
    "code": "MO",
    "curr": "MOP",
    "prefix": "+853"
  },
  {
    "name": "Macedonia",
    "code": "MK",
    "curr": "MKD",
    "prefix": "+389"
  },
  {
    "name": "Madagascar",
    "code": "MG",
    "curr": "MGA",
    "prefix": "+261"
  },
  {
    "name": "Malawi",
    "code": "MW",
    "curr": "MWK",
    "prefix": "+265"
  },
  {
    "name": "Malaysia",
    "code": "MY",
    "curr": "MYR",
    "prefix": "+60"
  },
  {
    "name": "Maldives",
    "code": "MV",
    "curr": "MVR",
    "prefix": "+960"
  },
  {
    "name": "Mali",
    "code": "ML",
    "curr": "XOF",
    "prefix": "+223"
  },
  {
    "name": "Malta",
    "code": "MT",
    "curr": "EUR",
    "prefix": "+356"
  },
  {
    "name": "Marshall Islands",
    "code": "MH",
    "curr": "USD",
    "prefix": "+692"
  },
  {
    "name": "Martinique",
    "code": "MQ",
    "curr": "EUR",
    "prefix": "+596"
  },
  {
    "name": "Mauritania",
    "code": "MR",
    "curr": "MRO",
    "prefix": "+222"
  },
  {
    "name": "Mauritius",
    "code": "MU",
    "curr": "MUR",
    "prefix": "+230"
  },
  {
    "name": "Mayotte",
    "code": "YT",
    "curr": "EUR",
    "prefix": "+262"
  },
  {
    "name": "Mexico",
    "code": "MX",
    "curr": "MXN",
    "prefix": "+52"
  },
  {
    "name": "Micronesia",
    "code": "FM",
    "curr": "USD",
    "prefix": "+691"
  },
  {
    "name": "Moldova",
    "code": "MD",
    "curr": "MDL",
    "prefix": "+373"
  },
  {
    "name": "Monaco",
    "code": "MC",
    "curr": "EUR",
    "prefix": "+377"
  },
  {
    "name": "Mongolia",
    "code": "MN",
    "curr": "MNT",
    "prefix": "+976"
  },
  {
    "name": "Montenegro",
    "code": "ME",
    "curr": "EUR",
    "prefix": "+382"
  },
  {
    "name": "Montserrat",
    "code": "MS",
    "curr": "XCD",
    "prefix": "+1-664"
  },
  {
    "name": "Morocco",
    "code": "MA",
    "curr": "MAD",
    "prefix": "+212"
  },
  {
    "name": "Mozambique",
    "code": "MZ",
    "curr": "MZN",
    "prefix": "+258"
  },
  {
    "name": "Myanmar",
    "code": "MM",
    "curr": "MMK",
    "prefix": "+95"
  },
  {
    "name": "Namibia",
    "code": "NA",
    "curr": "NAD",
    "prefix": "+264"
  },
  {
    "name": "Nauru",
    "code": "NR",
    "curr": "AUD",
    "prefix": "+674"
  },
  {
    "name": "Nepal",
    "code": "NP",
    "curr": "NPR",
    "prefix": "+977"
  },
  {
    "name": "Netherlands",
    "code": "NL",
    "curr": "EUR",
    "prefix": "+31"
  },
  {
    "name": "New Caledonia",
    "code": "NC",
    "curr": "XPF",
    "prefix": "+687"
  },
  {
    "name": "New Zealand",
    "code": "NZ",
    "curr": "NZD",
    "prefix": "+64"
  },
  {
    "name": "Nicaragua",
    "code": "NI",
    "curr": "NIO",
    "prefix": "+505"
  },
  {
    "name": "Niger",
    "code": "NE",
    "curr": "XOF",
    "prefix": "+227"
  },
  {
    "name": "Nigeria",
    "code": "NG",
    "curr": "NGN",
    "prefix": "+234"
  },
  {
    "name": "Niue",
    "code": "NU",
    "curr": "NZD",
    "prefix": "+683"
  },
  {
    "name": "Norfolk Island",
    "code": "NF",
    "curr": "AUD",
    "prefix": "+672"
  },
  {
    "name": "Norway",
    "code": "NO",
    "curr": "NOK",
    "prefix": "+47"
  },
  {
    "name": "Oman",
    "code": "OM",
    "curr": "OMR",
    "prefix": "+968"
  },
  {
    "name": "Pakistan",
    "code": "PK",
    "curr": "PKR",
    "prefix": "+92"
  },
  {
    "name": "Palau",
    "code": "PW",
    "curr": "USD",
    "prefix": "+680"
  },
  {
    "name": "Palestinian Territory",
    "code": "PS",
    "curr": "ILS",
    "prefix": "+970"
  },
  {
    "name": "Panama",
    "code": "PA",
    "curr": "PAB",
    "prefix": "+507"
  },
  {
    "name": "Papua New Guinea",
    "code": "PG",
    "curr": "PGK",
    "prefix": "+675"
  },
  {
    "name": "Paraguay",
    "code": "PY",
    "curr": "PYG",
    "prefix": "+595"
  },
  {
    "name": "Peru",
    "code": "PE",
    "curr": "PEN",
    "prefix": "+51"
  },
  {
    "name": "Philippines",
    "code": "PH",
    "curr": "PHP",
    "prefix": "+63"
  },
  {
    "name": "Pitcairn",
    "code": "PN",
    "curr": "NZD",
    "prefix": "+870"
  },
  {
    "name": "Poland",
    "code": "PL",
    "curr": "PLN",
    "prefix": "+48"
  },
  {
    "name": "Portugal",
    "code": "PT",
    "curr": "EUR",
    "prefix": "+351"
  },
  {
    "name": "Qatar",
    "code": "QA",
    "curr": "QAR",
    "prefix": "+974"
  },
  {
    "name": "Reunion",
    "code": "RE",
    "curr": "EUR",
    "prefix": "+262"
  },
  {
    "name": "Romania",
    "code": "RO",
    "curr": "RON",
    "prefix": "+40"
  },
  {
    "name": "Russia",
    "code": "RU",
    "curr": "RUB",
    "prefix": "+7"
  },
  {
    "name": "Rwanda",
    "code": "RW",
    "curr": "RWF",
    "prefix": "+250"
  },
  {
    "name": "Saint Barthelemy",
    "code": "BL",
    "curr": "EUR",
    "prefix": "+590"
  },
  {
    "name": "Saint Helena",
    "code": "SH",
    "curr": "SHP",
    "prefix": "+290"
  },
  {
    "name": "Saint Kitts & Nevis",
    "code": "KN",
    "curr": "XCD",
    "prefix": "+1-869"
  },
  {
    "name": "Saint Lucia",
    "code": "LC",
    "curr": "XCD",
    "prefix": "+1-758"
  },
  {
    "name": "Saint Martin",
    "code": "MF",
    "curr": "EUR",
    "prefix": "+590"
  },
  {
    "name": "Saint Pierre & Miquelon",
    "code": "PM",
    "curr": "EUR",
    "prefix": "+508"
  },
  {
    "name": "Samoa",
    "code": "WS",
    "curr": "WST",
    "prefix": "+685"
  },
  {
    "name": "San Marino",
    "code": "SM",
    "curr": "EUR",
    "prefix": "+378"
  },
  {
    "name": "Sao Tome & Principe",
    "code": "ST",
    "curr": "STD",
    "prefix": "+239"
  },
  {
    "name": "Saudi Arabia",
    "code": "SA",
    "curr": "SAR",
    "prefix": "+966"
  },
  {
    "name": "Senegal",
    "code": "SN",
    "curr": "XOF",
    "prefix": "+221"
  },
  {
    "name": "Serbia",
    "code": "RS",
    "curr": "RSD",
    "prefix": "+381"
  },
  {
    "name": "Seychelles",
    "code": "SC",
    "curr": "SCR",
    "prefix": "+248"
  },
  {
    "name": "Sierra Leone",
    "code": "SL",
    "curr": "SLL",
    "prefix": "+232"
  },
  {
    "name": "Singapore",
    "code": "SG",
    "curr": "SGD",
    "prefix": "+65"
  },
  {
    "name": "Sint Maarten",
    "code": "SX",
    "curr": "ANG",
    "prefix": "+599"
  },
  {
    "name": "Slovakia",
    "code": "SK",
    "curr": "EUR",
    "prefix": "+421"
  },
  {
    "name": "Slovenia",
    "code": "SI",
    "curr": "EUR",
    "prefix": "+386"
  },
  {
    "name": "Solomon Islands",
    "code": "SB",
    "curr": "SBD",
    "prefix": "+677"
  },
  {
    "name": "Somalia",
    "code": "SO",
    "curr": "SOS",
    "prefix": "+252"
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "curr": "ZAR",
    "prefix": "+27"
  },
  {
    "name": "South Korea",
    "code": "KR",
    "curr": "KRW",
    "prefix": "+82"
  },
  {
    "name": "South Sudan",
    "code": "SS",
    "curr": "SSP",
    "prefix": "+211"
  },
  {
    "name": "Spain",
    "code": "ES",
    "curr": "EUR",
    "prefix": "+34"
  },
  {
    "name": "Sri Lanka",
    "code": "LK",
    "curr": "LKR",
    "prefix": "+94"
  },
  {
    "name": "Sudan",
    "code": "SD",
    "curr": "SDG",
    "prefix": "+249"
  },
  {
    "name": "Suriname",
    "code": "SR",
    "curr": "SRD",
    "prefix": "+597"
  },
  {
    "name": "Svalbard & Jan Mayen",
    "code": "SJ",
    "curr": "NOK",
    "prefix": "+47"
  },
  {
    "name": "Swaziland Eswatini",
    "code": "SZ",
    "curr": "SZL",
    "prefix": "+268"
  },
  {
    "name": "Sweden",
    "code": "SE",
    "curr": "SEK",
    "prefix": "+46"
  },
  {
    "name": "Switzerland",
    "code": "CH",
    "curr": "CHF",
    "prefix": "+41"
  },
  {
    "name": "Syria",
    "code": "SY",
    "curr": "SYP",
    "prefix": "+963"
  },
  {
    "name": "Taiwan",
    "code": "TW",
    "curr": "TWD",
    "prefix": "+886"
  },
  {
    "name": "Tajikistan",
    "code": "TJ",
    "curr": "TJS",
    "prefix": "+992"
  },
  {
    "name": "Tanzania",
    "code": "TZ",
    "curr": "TZS",
    "prefix": "+255"
  },
  {
    "name": "Thailand",
    "code": "TH",
    "curr": "THB",
    "prefix": "+66"
  },
  {
    "name": "Togo",
    "code": "TG",
    "curr": "XOF",
    "prefix": "+228"
  },
  {
    "name": "Tokelau",
    "code": "TK",
    "curr": "NZD",
    "prefix": "+690"
  },
  {
    "name": "Tonga",
    "code": "TO",
    "curr": "TOP",
    "prefix": "+676"
  },
  {
    "name": "Trinidad & Tobago",
    "code": "TT",
    "curr": "TTD",
    "prefix": "+1-868"
  },
  {
    "name": "Tunisia",
    "code": "TN",
    "curr": "TND",
    "prefix": "+216"
  },
  {
    "name": "Turkey",
    "code": "TR",
    "curr": "TRY",
    "prefix": "+90"
  },
  {
    "name": "Turkmenistan",
    "code": "TM",
    "curr": "TMT",
    "prefix": "+993"
  },
  {
    "name": "Tuvalu",
    "code": "TV",
    "curr": "AUD",
    "prefix": "+688"
  },
  {
    "name": "U.S. Virgin Islands",
    "code": "VI",
    "curr": "USD",
    "prefix": "+1-340"
  },
  {
    "name": "Uganda",
    "code": "UG",
    "curr": "UGX",
    "prefix": "+256"
  },
  {
    "name": "Ukraine",
    "code": "UA",
    "curr": "UAH",
    "prefix": "+380"
  },
  {
    "name": "United Arab Emirates",
    "code": "AE",
    "curr": "AED",
    "prefix": "+971"
  },
  {
    "name": "United Kingdom",
    "code": "GB",
    "curr": "GBP",
    "prefix": "+44"
  },
  {
    "name": "United States",
    "code": "US",
    "curr": "USD",
    "prefix": "+1"
  },
  {
    "name": "Uruguay",
    "code": "UY",
    "curr": "UYU",
    "prefix": "+598"
  },
  {
    "name": "Uzbekistan",
    "code": "UZ",
    "curr": "UZS",
    "prefix": "+998"
  },
  {
    "name": "Vanuatu",
    "code": "VU",
    "curr": "VUV",
    "prefix": "+678"
  },
  {
    "name": "Venezuela",
    "code": "VE",
    "curr": "VEF",
    "prefix": "+58"
  },
  {
    "name": "Vietnam",
    "code": "VN",
    "curr": "VND",
    "prefix": "+84"
  },
  {
    "name": "Wallis & Futuna",
    "code": "WF",
    "curr": "XPF",
    "prefix": "+681"
  },
  {
    "name": "Western Sahara",
    "code": "EH",
    "curr": "MAD",
    "prefix": "+212"
  },
  {
    "name": "Yemen",
    "code": "YE",
    "curr": "YER",
    "prefix": "+967"
  },
  {
    "name": "Zambia",
    "code": "ZM",
    "curr": "ZMK",
    "prefix": "+260"
  },
  {
    "name": "Zimbabwe",
    "code": "ZW",
    "curr": "ZWL",
    "prefix": "+263"
  }
])

export default countries;