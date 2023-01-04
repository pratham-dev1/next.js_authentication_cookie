import axios from "axios";
import { serialize } from "cookie";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let body = req.body;
  console.log("body", body);
  let { data } = await axios.get(process.env.ENDPOINT ?? "");
  // console.log("result",result.data)
  if (data) {
    return res
      .setHeader("Set-Cookie", serialize("token", "Login", { path: "/" }))
      .status(200)
      .json(data);
  } else {
    return res.status(401).json({ message: "Invalid username or password" });
  }
}
