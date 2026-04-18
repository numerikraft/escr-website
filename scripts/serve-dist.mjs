import http from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || '127.0.0.1';

const MIME_TYPES = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
  ['.ttf', 'font/ttf'],
  ['.map', 'application/json; charset=utf-8'],
]);

function safeJoin(rootDir, requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const normalized = path.posix
    .normalize(decoded.replaceAll('\\', '/'))
    .replace(/^(\.\.(\/|\\|$))+/, '');
  return path.join(rootDir, normalized);
}

async function fileExists(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
    const requestPath = url.pathname === '/' ? '/index.html' : url.pathname;
    const candidatePath = safeJoin(DIST_DIR, requestPath);

    let finalPath = candidatePath;
    if (!(await fileExists(finalPath))) {
      // SPA fallback
      finalPath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(finalPath).toLowerCase();
    const contentType = MIME_TYPES.get(ext) ?? 'application/octet-stream';
    const body = await fs.readFile(finalPath);

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.end(body);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(`Server error: ${err instanceof Error ? err.message : String(err)}`);
  }
});

server.listen(port, host, () => {
  // Keep output simple for logs/tools.
  // eslint-disable-next-line no-console
  console.log(`Serving dist on http://${host}:${port}/`);
});
