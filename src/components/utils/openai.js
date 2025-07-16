import OpenAI from "openai";
import { API_Key } from "./Constant";

const client = new OpenAI({
  apiKey: API_Key,
  dangerouslyAllowBrowser: false,
});

export default client;
