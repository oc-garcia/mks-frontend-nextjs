import { NextResponse } from "next/server";
import axios from "axios";

const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC";

export async function GET() {
  try {
    const response = await axios.get(API_URL);
    return NextResponse.json(response.data); // Only stringify the data from the Axios response
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
