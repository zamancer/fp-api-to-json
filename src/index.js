const { curry, compose, prop } = require("ramda");
const request = require("request");

const getApiResponse = curry((callback, url) =>
  request(url, {}, (err, res, body) => callback(body))
);

const apiUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const parseAbilities = compose(prop("abilities"), JSON.parse);
const traceBody = compose(trace("data-from-api"), parseAbilities);

const app = compose(getApiResponse(traceBody), apiUrl);
app("ditto");
