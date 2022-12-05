const fs = require('fs');

const getData = () => fs.readFileSync('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data
})


function makeListFromTextFile(data){
    if(!data) return null;
    const byLine = data.split('\r\n')
    const lines = byLine.length
    const groups = []
    let j = 0;

    for(let i = 0; i < lines; i++){
        const num = byLine[i]
        if(num === ""){
            j++;
            continue;
        }
        let group = groups[j]
        
        if(group){
            groups[j] = group + Number(num)
        }
        else{
            groups[j] = Number(num)
        }
    }
    return groups
}

const data = getData();
const groups = makeListFromTextFile(data);

module.exports = {
    groups
}