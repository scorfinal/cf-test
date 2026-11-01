export default {
  async fetch() {
    return new Response("ScorFinal test: GitHub to Cloudflare works!", {
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }
};
