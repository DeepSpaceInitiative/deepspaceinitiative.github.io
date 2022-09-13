import { createClient } from "contentful";

const spaceID = process.env.CONTENFUL_SPACE_ID
const accessToken = process.env.CONTENFUL_CONTEN_DELIVERY_API_KEY
const hostName = process.env.CONTENFUL_HOST_NAME
const environment = process.env.CONTENFUL_ENVIRONMANT

export const client = createClient({
  accessToken: accessToken,
  space: spaceID,
  host: hostName,
  environment: environment,
})
