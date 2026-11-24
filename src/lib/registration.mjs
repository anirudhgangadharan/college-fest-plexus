import {validForm} from '../../scripts/validate.mjs';

export function formatEventDate(value, short = false) {
  return new Intl.DateTimeFormat('en-GB', {day:'numeric', month:short?'short':'long', year:'numeric', timeZone:'Asia/Kolkata'}).format(new Date(value+'T12:00:00+05:30'));
}

export function validateRegistrationGroups(groups, events) {
  const ids = new Set();
  const slugs = new Set(events.map(event => event.slug));
  const dates = new Map();
  for (const group of groups) {
    if (!group.id || ids.has(group.id)) throw Error('Duplicate or missing registration group ID');
    ids.add(group.id);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(group.date) || !Number.isFinite(Date.parse(group.date)) || new Date(group.date).toISOString().slice(0,10)!==group.date) throw Error('Invalid registration date: '+group.id);
    for (const item of group.items) {
      if (!item.id || ids.has(item.id) || !item.title) throw Error('Duplicate or incomplete registration item');
      ids.add(item.id);
      if (!item.eventSlugs?.length || item.eventSlugs.some(slug=>!slugs.has(slug))) throw Error('Unknown registration event: '+item.id);
      for (const slug of item.eventSlugs) {
        if (dates.has(slug)) throw Error('Event appears in multiple registration entries: '+slug);
        dates.set(slug, group.date);
      }
      if (item.registrationUrl !== null && !validForm(item.registrationUrl)) throw Error('Invalid registration form: '+item.id);
      if (item.detailsUrl !== null && !/^\/[^/]/.test(item.detailsUrl)) throw Error('Details must use a site-relative path or null: '+item.id);
    }
  }
}
