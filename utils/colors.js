export function getLanguageColor(language) {
  switch (language.toLowerCase()) {
    case "html":
      return "#E34F26";
    case "css":
      return "#1572B6";
    case "javascript":
      return "#F7DF1E";
    case "typescript":
      return "#3178C6";
    default:
      return "#6b7e80";
  }
}
