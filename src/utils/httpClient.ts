interface HttpRequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: any;
    headers?: HeadersInit;
}

export const httpClient = async <TResponse>(
  url: string,
  options: HttpRequestOptions = {}
): Promise<TResponse> => {
  const { method = 'GET', body, headers = {} } = options;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Erro de requisição: ${response.statusText}`);
  }

  return response.json();
};
