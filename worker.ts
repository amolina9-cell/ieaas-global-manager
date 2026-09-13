interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const prefix = "/ieaas";

    if (url.pathname === prefix || url.pathname.startsWith(prefix + "/")) {
      url.pathname = url.pathname.slice(prefix.length) || "/";
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
