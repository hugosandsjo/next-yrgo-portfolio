import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENFUL_ACCESS_TOKEN,
});

export default client;
