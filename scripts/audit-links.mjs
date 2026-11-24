import fs from 'node:fs';
import path from 'node:path';

const files=[];
function walk(directory){
  for(const entry of fs.readdirSync(directory,{withFileTypes:true})){
    const file=path.join(directory,entry.name);
    if(entry.isDirectory()) walk(file);
    else if(entry.name.endsWith('.html')) files.push(file);
  }
}
walk('dist');
const broken=[];
for(const file of files){
  const html=fs.readFileSync(file,'utf8');
  for(const match of html.matchAll(/href="(\/[^"#?]*)/g)){
    const url=match[1];
    if(url.startsWith('//')||url.startsWith('/_astro/')) continue;
    const target=url.endsWith('/')?path.join('dist',url,'index.html'):path.join('dist',url);
    if(!fs.existsSync(target)) broken.push({file,url});
  }
}
console.log(`HTML files: ${files.length}; broken internal links: ${broken.length}`);
if(broken.length){console.error(broken);process.exit(1)}
