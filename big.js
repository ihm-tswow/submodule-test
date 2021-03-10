const fs = require('fs');

let str = "";
for(let i=0;i<100000000;++i)
{
	str+="a";
}
fs.writeFileSync('./bigfile.txt',str);