const parse = require('./index')

const testData = [
  {
    input: "brian farewell party",
    expected: [
      {
        "ngram": "farewell party",
        "position": {
          "begin": 6,
          "end": 20,
          "sentence": 0,
          "word": 1,
        },
        "score": 1,
        "value": {
          "aliases": {
            "en": [
              "office farewell party",
              "office farewell",
              "farewell",
              "farewell party",
            ],
            "fr": [
              "pot de départ",
              "pots de départ",
              "pot de départs",
              "pots de départs",
              "pot de depart",
              "pots de depart",
              "pot de departs",
              "pots de departs",
            ],
          },
          "category": "party",
          "icons": {},
          "id": "office-farewell-party",
          "label": {
            "en": "Office farewell party",
            "fr": "Pot de départ",
          },
          "locations": [
            "office",
          ],
          "plural": {
            "en": "Office farewell parties",
            "fr": "Pots de départ",
          },
          "recommend": [
            "gift",
          ],
        },
      },
    ]
  },{
    input: "party at harry's bar",
    expected:       [
      {
        "ngram": "party",
        "position": {
          "begin": 0,
          "end": 5,
          "sentence": 0,
          "word": 0,
        },
        "score": 1,
        "value": {
          "aliases": {
            "en": [
              "party",
              "parties",
            ],
            "fr": [
              "fête",
              "fêtes",
              "fete",
              "fetes",
            ],
          },
          "category": "party",
          "icons": {},
          "id": "party",
          "label": {
            "en": "Party",
            "fr": "Fête",
          },
          "locations": [
            "home",
            "bar",
            "office",
          ],
          "plural": {
            "en": "Parties",
            "fr": "Fêtes",
          },
          "recommend": [],
        },
      },
    ]
  },
  {
  input: "anniversaire sabine",
  expected: [
    {
      "ngram": "anniversaire",
      "position": {
        "begin": 0,
        "end": 12,
        "sentence": 0,
        "word": 0,
      },
      "score": 1,
      "value": {
        "aliases": {
          "en": [
            "bday",
            "birthday",
            "birthdays",
          ],
          "fr": [
            "anniv",
            "anniversaire",
            "anniversaires",
          ],
        },
        "category": "party",
        "icons": {},
        "id": "birthday",
        "label": {
          "en": "Birthday",
          "fr": "Anniversaire",
        },
        "locations": [
          "home",
          "bar",
          "park",
        ],
        "plural": {
          "en": "Birthdays",
          "fr": "Anniversaires",
        },
        "recommend": [
          "gift",
        ],
      },
    },
  ]
  },{
    input: "soirée jeux avec steph",
    expected: [
    {
      "ngram": "soirée jeux",
      "position": {
        "begin": 0,
        "end": 11,
        "sentence": 0,
        "word": 0,
      },
      "score": 1,
      "value": {
        "aliases": {
          "en": [
            "game night",
            "games night",
            "board game night",
            "board games night",
            "board game evening",
            "board games evening",
            "board game party",
            "board games party",
          ],
          "fr": [
            "soirée jeu",
            "soirée jeux",
            "soirée jeux de société",
            "soirée jeu de société",
            "jeux de société",
            "jeu de société",
          ],
        },
        "category": "party",
        "icons": {},
        "id": "game-night",
        "label": {
          "en": "Game night",
          "fr": "Soirée jeux",
        },
        "locations": [
          "home",
          "bar",
          "office",
        ],
        "plural": {
          "en": "Game nights",
          "fr": "Soirées jeux",
        },
        "recommend": [],
      },
    },
  ]
}]

test('extract items', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))