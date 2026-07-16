// Q :  Count occurrences of each character in a string
function countStr (str){
    str = str.toLowerCase().replace(/\s/g,'');
    let countS = {};
    for ( s of str){
        countS[s] = (countS[s]|| 0)+1; 
    }
    return countS;
}
console.log('str',countStr("testData Hi"))
// { t: 3, e: 1, s: 1, d: 1, a: 2, h: 1, i: 1 };
