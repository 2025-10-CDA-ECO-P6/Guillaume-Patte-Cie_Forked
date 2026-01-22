const API_BASE_URL = "https://patte-cie-np.onrender.com/api";

export async function fetchApi({ endpoint, method = "GET", body = null, headers = {}, params = {} }) {
  const url = new URL(`${API_BASE_URL}/${endpoint}`);


  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const config = {
    method,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body !== null) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url.toString(), config);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`HTTP ${response.status} on ${endpoint}: ${errorBody}`);
  }

  if (response.status === 204) return null;

  return response.json();
}