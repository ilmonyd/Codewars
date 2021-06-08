let dict = {};

function urlShortener(longURL) {
  let shortURL = "short.ly/" + longURL.replace(/[^a-z]/g, '').slice(-4);
  if (!dict[shortURL]) dict[shortURL] = longURL;
  return shortURL;
}

function urlRedirector(shortURL) {
  return dict[shortURL];
}