import React from 'react'
import PropTypes from 'prop-types';


function itemize (text) {
          const letters = text.split('')
                    .filter(l => l !== ' ')
                    .reduce((collection, item) => {
                              // ds converted letter to str
                              const letter = item.toLowerCase()


                              return {
                                        ...collection,

                                        [letter]: (collection[letter] || 0) + 1
                              }
                    }, {})
                    console.log(letters)


                    return Object.entries(letters)
                                        .sort((a, b) => b[1] - a[1]);
}

/*
const letters = ["w", "o", "r", "d"]
const wh = letters[2].toLowerCase()
console.log(typeof wh)

let wo = "word"
let newwo = ...wo
tconsole.log(typeof newwo)
*/ 


const CharacterMap = ( { text } ) => {


          return (
                    <div>
                              Character Map: {
                                        itemize(text)
                                                  .map(character => (
                                                            <div key={character[0]}>
                                                                      { character[0] } : {character[1]}
                                                            </div>
                                                  ))
                              }
                    </div>
          )
}


export default CharacterMap


CharacterMap.propTypes = {
          text: PropTypes.string.isRequired
}