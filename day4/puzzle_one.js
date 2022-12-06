const { data, makeListFromTextFile } = require('./common')

function performActionByPairs(listOfPairs){
    const arePairsContained = listOfPairs.map(([p1, p2],i) => {
        const p1Span = getPairSpan(p1)
        const p2Span = getPairSpan(p2)
        return checkIfFullyContained(p1Span, p2Span) || checkIfFullyContained(p2Span,p1Span)
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

function checkIfFullyContained(p1, p2){
    return p1.every(n => p2.includes(n))
}


const pairs = makeListFromTextFile(data) // [ [p1,p2],...]
const fullyContained = performActionByPairs(pairs)
console.log(fullyContained)
