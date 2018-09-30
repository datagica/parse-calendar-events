# Parse Items

If a calendar event is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-calendar-events

## Usage

Example:

```javascript
await parse("anniversaire sabine")
```

Output:

```json
  [
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
```
