var isOneEdit = function (stringA, stringB) {
    var bigger = 0;
    var smaller = 0;
    if (stringA.length > stringB.length) {
        bigger = stringA.length;
        smaller = stringB.length;
    }
    else {
        bigger = stringB.length;
        smaller = stringA.length;
    }
    if ((bigger - smaller) > 1) {
        return false;
    }
    // if(stringA.length > stringB.length) {
    //     return stringA.includes(stringB)
    // }
    // if(stringB.length > stringA.length) {
    //     return stringB.includes(stringA)
    // }
    var count = 0;
    for (var i = 0; i < bigger; i++) {
        if (stringA[i] !== stringB[i]) {
            count++;
        }
    }
    return count === 1;
};
console.log(isOneEdit("banan", "banana"));
console.log(isOneEdit("banan", "bananaa"));
console.log(isOneEdit("bananaaa", "banana"));
