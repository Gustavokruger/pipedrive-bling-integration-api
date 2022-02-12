
/**
|----------------------------------------------------------------------------------------|
    App Configuration
|----------------------------------------------------------------------------------------|
*/
export const ENVIRONMENT = "development";
export const PORT = "9000"
export const PIPEDRIVE_KEY= "7ba0b907f21eb4fa08d96b877e069e175397a48c";
export const BLING_KEY=  "6216b723f3b34b8cc12395a46807d2a287bab8c80d23d9ea4399291feb6f9d506623cc24";



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
    