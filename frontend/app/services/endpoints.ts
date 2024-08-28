"use client";
export const API_URL = process.env.NEXT_PUBLIC_API_URL_TESTING as string;
// export const API_URL = "http://localhost:8000"
export const helpCenterEnpoints = {
  getAllCards: "/cards/",
  createCard: "/cards/",
  getSingleCard: "/cards/",
};
