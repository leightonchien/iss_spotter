const request = require('request');

// Fetch Geo Coordinates by IP
const fetchCoordsByIP = function(ip, callback) {
    request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {

      if (error) {
        callback(error, null);
        return;
      }

      if (response.statusCode !== 200) {
        callback(
          Error(
            `Status Code ${response.statusCode} when fetching Coordinates for I{: ${body}}`
          ),
          null
        );
        return;
      }
      const { latitude, longitude } = JSON.parse(body).data;
      callback(null, { latitude, longitude });
    });

    
  };
  
  module.exports = { fetchCoordsByIP };



/**STEP 1
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  
  const ApiIP = "https://api.ipify.org/?format=json";

  request(ApiIP, (error, response, body) => {

    if (error) return callback(error, null);

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {

      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      
      callback(Error(msg), null);
      return;
    } 
      const ip = JSON.parse(body).ip; //parse the JSON string into a object
      //console.log(JSONbody); // retrieves IP
      return callback(null, ip);
    
  });
};


