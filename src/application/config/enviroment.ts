
/**
|----------------------------------------------------------------------------------------|
    App Configuration
|----------------------------------------------------------------------------------------|
*/
export const ENVIRONMENT = "development";
export const PORT = "9000"


/**
|----------------------------------------------------------------------------------------|
    Authentication Configuration
|----------------------------------------------------------------------------------------|
*/

export const SESSION_SECRET = "4FB2CA80BAE7C66A721418A81CDFE3C1688F4D187EA16F9E9E2E19999893042F"

/**
* Use only if you include jwt
*/
 if (!SESSION_SECRET) process.exit(1)


/**
|----------------------------------------------------------------------------------------|
    Database Configuration
|----------------------------------------------------------------------------------------|
*/

export const MONGODB_URI = "mongodb+srv://admin:mongoose@cluster0.rhw56.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" // $ExpectType string
    