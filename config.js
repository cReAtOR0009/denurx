// Assuming you're using Vite, and the environment variable is VITE_APP_MODE

const baseUrl = import.meta.env.VITE_APP_MODE === "DEV" ? "/denurx" : "";


export { baseUrl };
