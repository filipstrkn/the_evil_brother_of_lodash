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
    | Error messages
    |==============================================================================
    |
    */
    const ERRORS = {
        TYPE: {
            ARRAY: 'Expected an array',
            STRING: 'Expected a string'
        }
    }



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
    EVIL.difference = (arr = [], values = []) => {
        return arr.filter(a => !values.includes(a))
    }



    /**
     * @description Creates a new array of elements split into groups with size of given buffer
     * @param {Array} stream Array to chop
     * @param {Number} buffer Size of chunks
     * @returns {Array}
     */
    EVIL.chunk = (stream = [], buffer = stream.length) => {
        const sipStream = () => {
            result.push(stream.slice(last, last + buffer))
            last = last + buffer
            if (last < stream.length) sipStream()
            return
        }
        const result = []
        let last = 0
        sipStream()
        return result
    }



    /**
     * @description Creates a new array concatenating values from other arguments
     * @param {Array} array Array to concat with
     * @param {Array} values Values to concat
     * @returns {Array}
     */
    EVIL.concat = (array = [], ...values) => {
        const result = array.slice(0)
        for (const value of values) {
            if (Array.isArray(value)) {
                for (const child of value) result.push(child)
            } else {
                result.push(value)
            }
        }
        return result
    }



    /**
     * @description Fills elements of array with value from start up to a defined end.
     * @param {Array} array
     * @param {*} value
     * @param {Number} start
     * @param {Number} end
     */
    EVIL.fill = (array = [], value, start = 0, end = array.length) => {
        const newArr = []
        for (let i = 0; i < array.length; i++) {
            if (i >= start && i < end) newArr.push(value)
            else newArr.push(array[i])
        }
        return newArr
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
    EVIL.capitalize = text => {
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
        } else { throw new TypeError(ERRORS.TYPE.STRING)}
    }



    /*
    |==============================================================================
    | Functions
    |==============================================================================
    |
    */



    /**
     * @description Calling a function only once
     * @param {Function} fn a function that you'd like to call once
     * @param {Object} [ctx]
     */
    EVIL.once = (fn, ctx) => {
        const f = fn.toString()
        let result
        return function () {
            if (fn) {
                result = fn.apply(ctx || this, arguments)
                fn = null
            } else { console.error('Function has already run!', f) }
            return result
        }
    }



    /*
    |==============================================================================
    | Releasing the master plan
    |==============================================================================
    |
    */
    return EVIL



})(_)