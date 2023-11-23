import { autoOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(autoOptions);

export {handler as GET, handler as POST}