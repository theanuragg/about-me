import type { NextApiRequest, NextApiResponse } from "next";

let visitorCount = 3663; // Replace with database later

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    visitorCount++;
    res.status(200).json({ count: visitorCount });
  } else if (req.method === "GET") {
    res.status(200).json({ count: visitorCount });
  }
}