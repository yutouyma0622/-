import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yuto062246",
  apiKey: process.env.API_KEY || "",
});
