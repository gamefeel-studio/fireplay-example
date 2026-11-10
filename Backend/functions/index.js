// Callable functions used by the FirePlay example (Cloud Functions screen).
// Deploy with: firebase deploy --only functions   (see README.md)
const { onCall } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");

// Must match FunctionsRegion in DA_DemoConfig (and the region in the demo's URL field).
// invoker "public": callable functions are reached by the app over plain HTTPS
// (auth and App Check travel inside the request), so Cloud Run must let anyone in.
setGlobalOptions({ region: "us-central1", maxInstances: 5, invoker: "public" });

// Set to true once App Check is registered for your app (Firebase console >
// App Check): calls without a valid App Check token are then refused. Left off
// so the example works as soon as it is deployed.
const callableOptions = { enforceAppCheck: false };

// Returns the payload it received, plus who called it and whether the call
// carried a valid App Check token.
exports.echo = onCall(callableOptions, (request) => {
  const payload =
    request.data !== null && typeof request.data === "object" && !Array.isArray(request.data)
      ? request.data
      : { value: request.data };

  return {
    ...payload,
    uid: request.auth ? request.auth.uid : null,
    appCheck: request.app ? "verified" : "missing",
  };
});

// Returns the server clock, so the demo can show a round trip.
exports.serverTime = onCall(callableOptions, () => {
  const now = new Date();
  return { iso: now.toISOString(), millis: now.getTime() };
});
