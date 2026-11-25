import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateAccommodation} from '../scripts/validate.mjs';
const pending = {enabled:true,status:'pending',url:null,organizerVerified:false,label:'Register for Accommodation',pendingLabel:'Link coming soon'};
test('accommodation permits pending content but requires verified Google Forms before opening', () => {
  assert.doesNotThrow(() => validateAccommodation(pending));
  assert.throws(() => validateAccommodation({...pending,status:'open'}));
  assert.throws(() => validateAccommodation({...pending,status:'open',url:'https://forms.gle/test'}));
  assert.throws(() => validateAccommodation({...pending,status:'open',organizerVerified:true,url:'https://example.com/form'}));
  assert.doesNotThrow(() => validateAccommodation({...pending,status:'open',organizerVerified:true,url:'https://forms.gle/test'}));
  assert.doesNotThrow(() => validateAccommodation({...pending,status:'closed'}));
});
