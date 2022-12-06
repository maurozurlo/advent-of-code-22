const { data, makeListFromTextFile } = require('./common')

function performActionByPairs(listOfPairs){
    const arePairsContained = listOfPairs.map(([p1, p2],i) => {
        const p1Span = getPairSpan(p1)
        const p2Span = getPairSpan(p2)
        return checkOverlap(p1Span, p2Span) || checkOverlap(p2Span,p1Span)
    })

    return arePairsContained.filter(Boolean).length
}


function getPairSpan(pair){
    const ends = pair.split("-")
    let span = []
    for(let i = Number(ends[0]); i <= ends[1]; i++){
        span.push(i);
    }
    return span
}

function checkOverlap(p1, p2){
    return p1.some(n => p2.includes(n))
}


const pairs = makeListFromTextFile(data) // [ [p1,p2],...]
const overlaps = performActionByPairs(pairs)
console.log(overlaps)
