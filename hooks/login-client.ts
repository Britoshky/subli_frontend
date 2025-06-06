"use client";

export async function loginClient(userId: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("currentUser", userId);
  }
}
