import axios from "axios";
import { serialize } from "cookie";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res
    .setHeader(
      "Set-Cookie",
      serialize("token", "anything", { path: "/", maxAge: 0 })
    )
    .status(200)
    .json({ data: "logged out" });
}
