import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types';


function itemize (text, transformer) {
          const letters = text.split('')
                    .filter(l => l !== ' ')
                    .reduce((collection, item) => {

                              // const letter = item.toLowerCase()
                              // console.log(typeof letter)  //string

                              const letter = transformer ? transformer(item) : item;


                              return {
                                        ...collection,

                                        /*
                                                  [letter]: is a way of declaring letter as d key 
                                                  of d obj (remember key/value pair?) 
                                        */ 
                                        [letter]: (collection[letter] || 0) + 1
                              }
                    }, {})


                    return Object.entries(letters)
                                        .sort((a, b) => b[1] - a[1]);
}

/*
const letters = ["w", "o", "r", "d"]
const wh = letters[2].toLowerCase()
console.log(typeof wh)

let wo = "word"
let newwo = ...wo
console.log(typeof newwo)
*/ 


const CharacterMap = ( { text, showExpl, transformer } ) => {
          const characters = useMemo(() => itemize(text, transformer), [text, transformer])


          return (
                    <div>
                              {
                                        showExpl && 
                                                  <p> This display a list of the most common characters </p>
                              }

                              
                              Character Map: 
                              {
                                        // itemize(text)
                                        characters
                                                  .map(character => (
                                                            <div key={character[0]}>
                                                                      { character[0] } : {character[1]}
                                                            </div>
                                                  ))
                              }
                    </div>
          )
}


CharacterMap.propTypes = {
          showExpl: PropTypes.bool.isRequired,

          text: PropTypes.string.isRequired,

          transformer: PropTypes.func
}


CharacterMap.defaultProps = {
          transformer: null
}


// export default CharacterMap;

export default memo(CharacterMap);