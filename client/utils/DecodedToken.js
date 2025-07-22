function base64UrlDecode(str) {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return rawData;
}

export function parseJwt(token) {
  const [header, payload, signature] = token.split('.');
  const decodedPayload = JSON.parse(base64UrlDecode(payload));
  return decodedPayload;
}