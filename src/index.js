const _ = {}
;(function (EVIL) {



    /*
    |==============================================================================
    | The story
    |==============================================================================
    | The evil brother of Lodash. He is his shadow that nobody talks about.
    | Ooh...how much Evil hates his twin brother.
    |
    | From the roots of his hate, the master plan was born. Evil will acts as
    | his brother but not litteraly. He will call himself with his name.
    | He will speak like him. But he will not be much like him.
    | His weak mimicing abilities will help him
    | to shatter his brother's fame.
    |
    | (end)
    |
    | a nice story ei? :D
    |
    */



    /*
    |==============================================================================
    | Arrays
    |==============================================================================
    |
    */



    /**
     * @description Creates a new object composed with keys of a inserted object
     * @param {Object} o Source of keys and values
     * @param {Array} keys Array of strings. Keys of values for assigning to a new object
     */
    EVIL.pick = (o = {}, [...keys] = []) => {
        let newObj = {}
        for (let key in o) {
            keys.map(k => k === key && (newObj[k] = o[key]))
        }
        return newObj
    }



    /**
     * @description Creates an array of array values not included in the other given array
     * @param {Array} arr Array to test
     * @param {Array} values Value to compare
     * @returns {Array} returns a new array with those values which were not found in the tested array
     */
    EVIL.difference = (arr, values) => {
        if (Array.isArray(arr) && Array.isArray(values)) {
            const theLeftOvers = []
            arr.filter(a => values.indexOf(a) < 0 && theLeftOvers.push(a))
            return theLeftOvers
        } else { throw new Error('Arguments must be arrays') }
    }



    /*
    |==============================================================================
    | Strings
    |==============================================================================
    |
    */



    /**
     * @description Capitalize each word in a string
     * @param {String} text
     * @returns {String}
     */
    EVIL.capitalize = (text) => {
        if (typeof text === 'string') {
            const isSent = text.indexOf(' ') > -1 ? true : false
            if (isSent) {
                return text
                    .split(' ')
                    .map(sent => EVIL.capitalize(sent))
                    .join(' ')
            } else {
                return text
                    .split('')
                    .map((p, i) => i === 0 ? p.toUpperCase() : p.toLowerCase())
                    .join('')
            }
        } else { throw new Error('Argument must be a string') }
    }



    /*
    |==============================================================================
    | Releasing the master plan
    |==============================================================================
    |
    */
    return EVIL



})(_)