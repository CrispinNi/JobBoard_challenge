import { useState } from "react";

export const mockRegister = async (email, password) => {
  const res = await fetch("/mock/auth.json");
  const data = await res.json();
  const exists = data.users.find((user) => user.email === email);
  if (exists) throw new Error("User already exists");
  return { email };
};

export const mockLogin = async (email, password) => {
  const res = await fetch("/mock/auth.json");
  const admin = await fetch("/mock/adminAuth.json");
  const data = await res.json();
  const adminData = await admin.json();

  const match = data.users.find(
    (user) => user.email === email && user.password === password
  );

  // console.log("Match", match);

  const adminMatch = adminData.admins.find(
    (admin) => admin.email === email && admin.password === password
  );

  if (!match && !adminMatch) throw new Error("Invalid credentials");
  return { email };
};
