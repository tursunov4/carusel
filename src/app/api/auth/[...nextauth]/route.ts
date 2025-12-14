// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { setAuthCookies, clearAuthCookies } from "@/services/cookies";
import {API_BASE_URL} from "@/services/apiFetch";


const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Пароль", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const res = await fetch(`${API_BASE_URL}/api/users/login/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!res.ok) return null;
        const data = await res.json();
        // Установим HttpOnly куки
        setAuthCookies(data.access, data.refresh);

        return {
          id: String(data.user.id),
          email: data.user.email,
          full_name: data.user.full_name,
          avatar: data.user.avatar,
          access: data.access,
          refresh: data.refresh,
          accessExpires: Date.now() + 23 * 60 * 60 * 1000, // 23 часа до истечения срока действия
        } as any; // Используем as any, чтобы обойти строгую проверку типов NextAuth
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  events: {
    async signOut() {
      clearAuthCookies();
    },
  },
});

export { handler as GET, handler as POST };
