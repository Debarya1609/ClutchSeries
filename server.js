import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT || 5173);
const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);
const knownRoutes = new Set([
  "/",
  "/about",
  "/tournaments",
  "/registration",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
]);

async function createApp() {
  const app = express();
  let viteDevServer;

  if (isProduction) {
    app.use(
      express.static(path.join(__dirname, "dist", "client"), {
        index: false,
        redirect: false,
      }),
    );
  } else {
    const { createServer } = await import("vite");

    viteDevServer = await createServer({
      appType: "custom",
      server: { middlewareMode: true },
    });

    app.use(viteDevServer.middlewares);
  }

  app.use("*", async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl,
        headersOriginal: req.headers,
      };

      const { renderPage } = isProduction
        ? await import("vike/server")
        : await viteDevServer.ssrLoadModule("vike/server");

      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;

      if (!httpResponse) {
        return next();
      }

      httpResponse.headers.forEach(([name, value]) => {
        res.setHeader(name, value);
      });

      const pathname = new URL(req.originalUrl, "http://localhost").pathname;
      const normalizedPathname =
        pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

      res.statusCode =
        httpResponse.statusCode === 200 && !knownRoutes.has(normalizedPathname)
          ? 404
          : httpResponse.statusCode;

      httpResponse.pipe(res);
    } catch (error) {
      if (viteDevServer) {
        viteDevServer.ssrFixStacktrace(error);
      }

      next(error);
    }
  });

  return app;
}

let appPromise;

function getApp() {
  if (!appPromise) {
    appPromise = createApp();
  }

  return appPromise;
}

export default async function handler(req, res) {
  const app = await getApp();
  return app(req, res);
}

if (isDirectRun) {
  const app = await getApp();

  app.listen(port, () => {
    console.log(
      `Express SSR server running at http://localhost:${port} in ${isProduction ? "production" : "development"} mode.`,
    );
  });
}
