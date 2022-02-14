import path from "path";
import dotenv from "dotenv";

dotenv.config({ path:".env"});

interface ENV {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    PIPEDRIVE_KEY: string;
    BLING_KEY: string;
}
  
interface Config {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    PIPEDRIVE_KEY: string;
    BLING_KEY: string;
}

const getConfig = (): ENV => {
    return {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
      MONGO_URI: process.env.MONGO_URI,
      JWT_SECRET: process.env.JWT_SECRET,
      PIPEDRIVE_KEY: process.env.PIPEDRIVE_KEY,
      BLING_KEY: process.env.BLING_KEY
    };
  };
  

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
      if (value === undefined) {
        throw new Error(`Missing key ${key} in config.env`);
      }
    }
    return config as Config;
  };
  
  const config = getConfig();
  
  const sanitizedConfig = getSanitzedConfig(config);
  
  export default sanitizedConfig;