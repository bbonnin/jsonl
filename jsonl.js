// JSON Lines parser
// TODO: npm install papaparse
const Papa = require('papaparse')

const jsonl = {
  toJsonl: function (csvFile, options) {
    // options contains:
    // - delimiter (default: ,)
    // - field names (default: the first line contains this information or it just generates an array of values)
    // - quoteChar
    
    // read each line and convert it into json
    const jsonlines = []
    blabla.forEach(line => {
      const json = Papa.parse(line, options)
      if (!json.errors) {
        jsonlines.push(JSON.stringify(json.data[0]))
      }
    })
  }
}

modules.export = jsonl
