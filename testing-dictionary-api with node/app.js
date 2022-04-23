const axios = require('axios');
const e = require('express');
wordm=[];
const kwords=["speech","definitionss"];
axios
  .get('https://api.dictionaryapi.dev/api/v2/entries/en/wet')
  .then(res => {
    console.log(`statusCode: `)
    console.log(res.data)
    if(res.data)
    for (i of res.data[0].meanings)
    {
        let diffspeach={};
        console.log(i);
        diffspeach[kwords[0]]=i.partOfSpeech,
   
    def=[];
    for (j of i.definitions )   
    { 
    def.push(j.definition);
    } 
    diffspeach[kwords[1]]=def;
    wordm.push(diffspeach);
}   
let s=""
console.log(wordm);
for (k of wordm)
{s+="\n";
     s+=`${kwords[0]}:${k[kwords[0]]}\n`;
     s+=`${kwords[1]}:${k[kwords[1]]}\n`;  
    }
     console.log(s);
})
  .catch(error => {
    console.error(error)
  })