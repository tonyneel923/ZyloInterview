// --------------------!!!!IMPORTANT!!!!--------------------
// NOTE: It is important to know that all environment variables that start with
// "REACT_APP_" will be injected into the client at runtime. This follows what
// webpack does at compile-time

// default config. Keys are environment variables. e.g. REACT_APP_SOME_VAR

const baseUrl = 'https://localhost';

export default {
  REACT_APP_VERSION: process.env.REACT_APP_VERSION,
  REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL || `${baseUrl}:8000`,
};
