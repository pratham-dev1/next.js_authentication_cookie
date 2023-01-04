import axios from "axios";

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result = await axios.get(process.env.ENDPOINT ?? "");
  // console.log("result",result.data)
  return res.status(200).json(result.data)
}

