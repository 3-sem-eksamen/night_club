// Date converter lavet med AI

export function eventDate(dateString) {
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

export function reviewDate(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "numeric", // 17
    month: "long", // April
    year: "numeric", // 2026
  };

  return date.toLocaleDateString("da-DK", options);
}
