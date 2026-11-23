import {test} from 'node:test';import assert from 'node:assert/strict';import {validForm,validate} from '../scripts/validate.mjs';import fs from 'node:fs';
const events=()=>JSON.parse(fs.readFileSync('src/content/events.json'));const reg=()=>JSON.parse(fs.readFileSync('src/content/registration.json'));
test('Google form URLs reject unsafe and lookalike destinations',()=>{for(const s of ['javascript:alert(1)','https://forms.gle.evil.test/a','https://docs.google.com/document/a','https://user:pass@forms.gle/a'])assert.equal(validForm(s),false);assert.equal(validForm('https://forms.gle/example'),true)});
test('content is consistent',()=>{validate(events(),reg());assert.throws(()=>validate([...events(),events()[0]],reg()))});
test('invalid form URL is rejected',()=>{const r=reg();r.forms.delegate.url='https://evil.example/x';assert.throws(()=>validate(events(),r))});
