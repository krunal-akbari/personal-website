import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(import.meta.dirname, '../dist');
const types = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp' };
createServer(async (request, response) => {
  try {
    const path = resolve(root, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname === '/' ? '/index.html' : new URL(request.url, 'http://localhost').pathname));
    if (!path.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    const content = await readFile(path);
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' }).end(content);
  } catch { response.writeHead(404).end('Not found'); }
}).listen(Number(process.env.PORT || 5173), '0.0.0.0', () => console.log(`http://localhost:${process.env.PORT || 5173}`));
