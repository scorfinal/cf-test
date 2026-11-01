export default {
  async fetch() {
    return new Response("ScorFinal test: am reusit!", {
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }
};
