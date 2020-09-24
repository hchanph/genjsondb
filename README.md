# genjsondb

genjsondb is a cli tool that generates random data, genjsondb uses (**mocker-data-generator, Faker, Chance, 
RanExpJs, typescript-starter, yargs**) to accomplish this feat.

_This is the generated data._

```json
{
  "user": [
    {
      "id": "82fccbfb-8449-54ba-9717-a1ff98f44159",
      "name": "Bettye",
      "email": "Rodolfo.Daniel21@hotmail.com"
    },
    {
      "id": "c2a3dd32-3a4a-5634-b541-4bff88a71d98",
      "name": "Retta",
      "email": "Johnnie_Anderson80@gmail.com"
    },
    {
      "id": "1048161f-5a4b-5954-8a12-cb20c30f0672",
      "name": "Jalon",
      "email": "Barton47@yahoo.com"
    },  
    ...
```

# Installation

```
   npm install -g genjsond
```

# Usage

```
   genjsondb --nr 5 --sn user --sf sample.json

   --or--

   genjsondb --nr 5 --sn user --sf sample.json --fs

   --or--

   genjsondb --nr 5 --sn user --sf sample.json > db.json
```

# Sample schema

```json
{
    "id": "chance": "guid",
    "field name 1": "faker": "name.firstName",
    "field name 2": "faker": "internet.email",
    ...
}
```

# Credits

* Faker: [https://github.com/Marak/faker.js]
* Chance: [https://github.com/victorquinn/chancejs]
* RanExpJs: [https://github.com/fent/randexp.js]
* typescript-starter: [https://github.com/bitjson/typescript-starter]
* mocker-data-generator: [https://github.com/danibram/mocker-data-generator]
* yargs: [https://github.com/yargs/yargs]

# License

Licensed Under MIT license, 2020
