import fs from 'node:fs';
export function validateAccommodation(a){
  if(typeof a.enabled!=='boolean'||!['pending','open','closed'].includes(a.status)||typeof a.organizerVerified!=='boolean'||!a.label?.trim()||!a.pendingLabel?.trim()) throw Error('Invalid accommodation announcement configuration');
  if(a.url!==null&&!validForm(a.url)) throw Error('Invalid accommodation Google Form URL');
  if(a.status==='open'&&(!a.organizerVerified||!validForm(a.url))) throw Error('Open accommodation registration requires a verified Google Form');
}
if(process.argv[1]?.endsWith('validate.mjs')) validateAccommodation(JSON.parse(fs.readFileSync('src/content/accommodation.json')));
export function validForm(value){try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password&&((u.hostname==='forms.gle'&&u.pathname.length>1)||(u.hostname==='docs.google.com'&&u.pathname.startsWith('/forms/')))}catch{return false}}
export function validate(events,reg){const ids=new Set();const cats=['workshop','academic','cultural','online'];for(const e of events){if(ids.has(e.slug)||!/^[-a-z0-9]+$/.test(e.slug))throw Error('Invalid or duplicate slug: '+e.slug);ids.add(e.slug);if(!cats.includes(e.category))throw Error('Invalid category');if(!reg.forms[e.form])throw Error('Unknown form key '+e.form);if(e.art&&!fs.existsSync('public/art/'+e.art+'.webp'))throw Error('Missing artwork');if(e.img&&!fs.existsSync('public/brochure/'+e.img+'.webp'))throw Error('Missing image')}
for(const e of events){if(e.artwork){if(!/^[-a-z0-9]+$/.test(e.artwork))throw Error('Invalid artwork key: '+e.slug);for(const width of [400,800,1200]){if(!fs.existsSync(`public/art/events/${e.artwork}-${width}.webp`))throw Error('Missing responsive artwork: '+e.slug+' '+width)}}}
for(const [k,f] of Object.entries(reg.forms)){if(f.url!==null&&!validForm(f.url))throw Error('Invalid Google Form URL for '+k)}}
if(process.argv[1]?.endsWith('validate.mjs')){validate(JSON.parse(fs.readFileSync('src/content/events.json')),JSON.parse(fs.readFileSync('src/content/registration.json')));console.log('Content validated')}
