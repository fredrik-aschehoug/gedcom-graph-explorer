const getUrl = (path: string) => `/api/${path}`;

const headers = {
  'Content-Type': 'application/json'
};

export const getJsonAsync = async (path: string) => {
  const response = await fetch(getUrl(path));
  const data = await response.json();

  return data;
};

export const postJsonAsync = async (path: string, payload: unknown) => {
  const options = { method: 'POST', body: JSON.stringify(payload), headers };
  const response = await fetch(getUrl(path), options);
  const data = await response.json();

  return data;
};
