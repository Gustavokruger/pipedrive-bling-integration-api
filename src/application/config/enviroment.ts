import config from "../../../config";

/**
|----------------------------------------------------------------------------------------|
    App Configuration
|----------------------------------------------------------------------------------------|
*/
export const ENVIRONMENT = config.NODE_ENV;
export const PORT = config.PORT
export const PIPEDRIVE_KEY= config.PIPEDRIVE_KEY;
export const BLING_KEY=  config.BLING_KEY;



/**
|----------------------------------------------------------------------------------------|
    Authentication Configuration
|----------------------------------------------------------------------------------------|
*/

export const SESSION_SECRET = config.JWT_SECRET;

/**
* Use only if you include jwt
*/
 if (!SESSION_SECRET) process.exit(1)


/**
|----------------------------------------------------------------------------------------|
    Database Configuration
|----------------------------------------------------------------------------------------|
*/

export const MONGODB_URI = config.MONGO_URI // $ExpectType string
    