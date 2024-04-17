import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://api.example.com/products"; // replace with your actual API URL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(API_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
