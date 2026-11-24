import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {validateRegistrationGroups,formatEventDate} from '../src/lib/registration.mjs';
const groups=()=>JSON.parse(fs.readFileSync('src/content/registration-events.json'));
const events=()=>JSON.parse(fs.readFileSync('src/content/events.json'));

test('registration covers all events once, in the four approved workshop pairs',()=>{
  const g=groups(); validateRegistrationGroups(g,events());
  assert.deepEqual(g.map(x=>x.items.length),[4,4,4,3]);
  assert.equal(g.flatMap(x=>x.items.flatMap(i=>i.eventSlugs)).length,events().length);
  assert.deepEqual(g[0].items.map(x=>x.eventSlugs.length),[2,2,2,2]);
  assert.ok(g[0].items.every(i=>i.registrationUrl===null && i.detailsUrl?.startsWith('/events/')));
});
test('date labels agree with event details and use the approved January dates',()=>{
  const g=groups(); const all=events();
  assert.deepEqual(g.map(x=>x.date),['2027-01-06','2027-01-07','2027-01-07','2027-01-07']);
  assert.equal(formatEventDate(g[0].date),'6 January 2027');
  assert.equal(formatEventDate(g[1].date,true),'7 Jan 2027');
  for(const group of g) for(const item of group.items) for(const slug of item.eventSlugs)
    assert.ok(all.find(e=>e.slug===slug).when.startsWith(formatEventDate(group.date)));
});
test('invalid references, duplicate IDs, impossible dates and unsafe destinations fail validation',()=>{
  for(const mutate of [
    g=>g[0].items[0].eventSlugs=['unknown'],
    g=>g[0].items[1].id=g[0].items[0].id,
    g=>g[0].date='2027-02-30',
    g=>g[0].items[0].registrationUrl='https://evil.example/form',
    g=>g[0].items[0].detailsUrl='javascript:alert(1)',
    g=>g[0].items[0].detailsUrl='//evil.example/page',
  ]) {const g=groups();mutate(g);assert.throws(()=>validateRegistrationGroups(g,events()));}
});
test('individual Google Forms and site-relative details can be configured later',()=>{
  const g=groups();g[0].items[0].registrationUrl='https://forms.gle/example';g[0].items[0].detailsUrl='/events/basic-life-support-heart-sounds/';
  assert.doesNotThrow(()=>validateRegistrationGroups(g,events()));
});
