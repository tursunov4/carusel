// services/auth.ts
import type {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getServerSession} from "next-auth/next";
import {API_BASE_URL} from "@/services/apiFetch";

declare module "next-auth" {
    interface User {
        accessToken?: string;
        access: string;
        refresh: string;
        accessExpires: number;
    }

    interface Session {
        user: User;
        access: string;
        refresh: string;
    }
}


export const authConfig: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 * 14 }, // 14 дней
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Пароль", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        const res = await fetch(`${API_BASE_URL}/api/user/login/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) return null;
        const data = await res.json();

        // декодируем access токен (JWT)
        const payload = JSON.parse(
          Buffer.from(data.access.split(".")[1], "base64").toString()
        );

        return {
            id: payload.user_id,
            email: payload.email,
            name: payload.full_name,
            access: data.access,
            refresh: data.refresh,
            accessExpires: Date.now() + 14 * 60 * 1000, // 14 мин
        } as User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access = user.access;
        token.refresh = user.refresh;
        token.accessExpires = user.accessExpires;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        email: token.email as string,
        name: token.name as string,
      };
      session.user.accessToken = token.access as string;
      session.access = token.access as string;
      session.refresh = token.refresh as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export const getSession = () => getServerSession(authConfig);