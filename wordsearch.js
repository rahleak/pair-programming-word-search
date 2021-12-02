const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
   
    const apple = horizontalJoin.join('')

    let newArr = []
    let currentArr = []

    for (i = 0; i < letters[0].length; i++) {
        for (j = 0; j < letters.length; j++) {
            currentArr.push(letters[j][i])
        }
        newArr.push(currentArr);
        currentArr = [];
    }
    const abc = newArr.map(lv => lv.join(''))
    const orange = abc.join('')
    if (orange.includes(word) || apple.includes(word)) {
        return true
    }
    return false;
}

module.exports =  wordSearch;