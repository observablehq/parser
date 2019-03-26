libraries = {
  async function load() {
    const a = await require("d3@5");
    const b = await require("underscore", "topojson@1");
    return {a, b};
  }
  return await load();
}
