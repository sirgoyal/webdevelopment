const franc= require('franc');
const langs = require('langs');
const input = process.argv[2]
const language= franc(input);
if(language ==='und')
{
    console.log('sorry!!');
}
else{
console.log((langs.where("3", language)).name);
}