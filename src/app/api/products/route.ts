import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  try {
    if (!API_URL) {
      throw new Error("API_URL is undefined");
    }
    const response = await axios.get(API_URL);
    return NextResponse.json(response.data); // Only stringify the data from the Axios response
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
