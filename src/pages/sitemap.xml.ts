import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL('https://crystonix.github.io');
  const projects = await getCollection('projects');
  const routes = [
    '/',
    '/projects/',
    '/about/',
    '/resume/',
    '/impressum/',
    '/datenschutz/',
    ...projects.map((project) => `/projects/${project.id}/`),
  ];
  const body = routes
    .map((route) => `<url><loc>${new URL(route, siteUrl)}</loc></url>`)
    .join('');

  return new Response(`<urlset>${body}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
