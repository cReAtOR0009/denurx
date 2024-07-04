// Assuming you're using Vite, and the environment variable is VITE_APP_MODE

const VITE_APP_MODE = "DEV"
const baseUrl = VITE_APP_MODE === "DEV" ? "/denurx" : "";


export { baseUrl };
