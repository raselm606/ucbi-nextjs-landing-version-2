

//  Slug বানানো (blog / dynamic route)
export const slugify = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

//  Capitalize first letter
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

//  Title Case (Hello World Type)
export const toTitleCase = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

//  Trim by characters
export const trimText = (text, limit = 100) => {
  if (!text) return "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

//  Trim by words
export const trimByWords = (text, words = 20) => {
  if (!text) return "";
  const arr = text.split(" ");
  return arr.length > words
    ? arr.slice(0, words).join(" ") + "..."
    : text;
};

//  Remove extra spaces
export const normalizeSpace = (text) => {
  if (!text) return "";
  return text.replace(/\s+/g, " ").trim();
};

//  Short ID (key / temp id)
export const shortId = () => {
  return Math.random().toString(36).substring(2, 9);
};

//  Mask text (password / email preview)
export const maskText = (text, visible = 4) => {
  if (!text) return "";
  return text.slice(0, visible) + "*".repeat(text.length - visible);
};

//  Check empty or whitespace
export const isEmpty = (text) => {
  return !text || !text.trim();
};

//  Pluralize (comment(s), day(s))
export const pluralize = (count, singular, plural = singular + "s") => {
  return `${count} ${count === 1 ? singular : plural}`;
};
