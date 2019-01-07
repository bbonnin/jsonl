// JSON Lines parser
// TODO: npm install papaparse
const Papa = require('papaparse')

const jsonl = {
  // Return a string containing data formated as json lines
  fromCsv: function (csv, config) {
    // config contains the same paramters as Papa parser:
    // - delimiter (default: ,)
    // - quoteChar
    
    const jsonlines = []
    const rows = Papa.parse(csv, options)
    
    // read each row and convert it into a json string
    rows.forEach(row =>
      jsonlines.push(JSON.stringify(row))
    })
    
    return jsonlines.join('\n')
  },
  
  // Return a csv built with the data in jsonlines
  toCsv: function (jsonlines, config) {
    const jsonlinesObj = JSON.parse('[' + jsonlines.replace(lineSeparator, ',') + ']')
    const csv = Papa.unparse(jsonlinesObj, config)
    return csv
  }
}

modules.export = jsonl
