import _ from 'lodash';

// BEGIN
const countWords = (text) => {
    let countedWords = {};
    let splitText = text.toLowerCase().split(' ');

    let uniqWords = _.uniq(splitText);

    if (text.length === 0) return {};

    for (let key of uniqWords) {
        countedWords[key] = 0;
    }

    for (let key of splitText) {
        countedWords[key] += 1
    } 

    return countedWords;
}


export default countWords;
// END