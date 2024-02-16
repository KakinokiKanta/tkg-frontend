// import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import { randomUUID, randomBytes } from "crypto";

export const authOptions: NextAuthOptions = {
  // debug: true,
  /* providers */
  providers: [
    // ユーザ用認証
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: { scope: "user" },
      },
    }),
  ],

  /* callbacks */
  // callbacks: {
  //   async redirect({ baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, user }) {
  //     if (session?.user) session.user.id = user.id;
  //     return session;
  //   },
  // },
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },

  /* secret */
  secret: process.env.NEXTAUTH_SECRET,

  /* jwt */
  jwt: {
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },

  /* session */
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  /* secure */
  useSecureCookies: process.env.NODE_ENV === "production",

  pages: {
    signIn: "/login",
  },
};
