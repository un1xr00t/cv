

// Fetch skills from this JSON
export const prerender = true;

// src/routes/+page.ts
import type { PageLoad } from './$types';

const endpoint = 'https://gist.githubusercontent.com/un1xr00t/2b98ea1059e45490bdd72425efb0a824/raw/0d223d793e73d1023037045eeb23d3a1b6cba8fb/cv-data.json';

export const load: PageLoad = async () => {
  const response = await fetch(endpoint);
  return await response.json();
};
