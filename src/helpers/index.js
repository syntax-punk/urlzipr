"use strict";

export function clipIt(inputId) {
  const node = document.querySelector("#" + inputId);
  node.select();
  node.setSelectionRange(0, 99999);
  document.execCommand("copy");
  return node.value;
} 

export function isValidUrl (input) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(input);
}

export function normalizeUrl(url) {
  url = url.toLowerCase().trim();
  const hasProtocol = url.startsWith("http://") || url.startsWith("https://");

  if (!hasProtocol) {
    url = "https://" + url;
  }
  return url;
}