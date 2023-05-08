import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ooparts-creative",
  apiKey: process.env.API_KEY,
});
