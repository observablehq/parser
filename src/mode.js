export const MODES = {
  js: "js",
  html: "html",
  tex: "tex",
  md: "md",
  sql: "sql"
};

export function getModeTag(mode, data) {
  switch (mode) {
    case MODES.html: return "htl.html";
    case MODES.md: return "md";
    case MODES.tex: return "tex.block";
    case MODES.sql: return data.source.type === "database" ? `(await DatabaseClient("${data.source.name}")).sql` : `${data.source.name}.sql`;
  }
}

export function getModeRaw(mode) {
  switch (mode) {
    case MODES.html, MODES.tex: return true;
    default: return false;
  }
}

export function getModeAsync(mode, data) {
  return mode === MODES.sql && data.source.type === "database";
}

export function getModeReference(mode, data) {
  switch (mode) {
    case MODES.html: return "htl";
    case MODES.md: return "md";
    case MODES.tex: return "tex";
    case MODES.sql: return data.source.type === "database" ? "DatabaseClient" : data.source.name;
  }
}

export function getModeDatabaseClient(mode, data) {
  return mode === MODES.sql && data.source.type === "database" ? data.source.name : undefined;
}
