// Date converter lavet med AI

export function formatApiDate(dateString) {
  const date = new Date(dateString);

  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formatted = date.toLocaleString("en-US", options);

  return formatted.replace(",", " ·");
}
