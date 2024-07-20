"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("user not found");
  if (!api_key) throw new Error("api_key not found");
  if (!api_secret) throw new Error("api_secret not found");

  const streamClient = new StreamClient(api_key, api_secret); //DOCs (need api secret to create a new user)
  //Valid for one hour //new client to rgister to stream
  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;
  const token = streamClient.createToken(user.id, expirationTime, issuedAt);

  return token;
};
