const createWordsArray = (senses, word) => senses.reduce((acc, sense) => {
  let subWords = []
  sense.subsenses && (subWords = sense.subsenses.map((subsense) =>
    ({
      id: subsense.id, word,
      meaning: subsense.definitions && subsense.definitions[0] || subsense.crossReferenceMarkers[0] })
    ))

  return [...acc, { id: sense.id, word, meaning: sense.definitions && sense.definitions[0] || sense.crossReferenceMarkers[0], example: sense.examples && sense.examples[0].text }, ...subWords]
}, [])

module.exports = createWordsArray
