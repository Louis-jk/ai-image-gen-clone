interface ApiConfig {
  url: string;
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
    'Content-Type': string;
  };
}

export const API_CONFIG: ApiConfig = {
  url: process.env.NEXT_PUBLIC_RAPIDAPI_URL || '',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
    'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || '',
    'Content-Type': 'application/json'
  }
};

export const validateApiConfig = (): boolean => {
  return Boolean(
    API_CONFIG.url &&
    API_CONFIG.headers['x-rapidapi-key'] &&
    API_CONFIG.headers['x-rapidapi-host']
  );
}; 