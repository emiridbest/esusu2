import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      if (process.env.NEXT_PUBLIC_SOCIAL_CONNECT_PROVIDER === "TWITTER") {
        const base64Credentials = Buffer.from(
          `${process.env.TWITTER_ID}:${process.env.TWITTER_SECRET}`
        ).toString('base64');
        const headers = new Headers({
          Authorization: `Basic ${base64Credentials}`,
        });

        const res = await fetch(`https://api.twitter.com/2/users/${token.sub}`, {
          headers,
        });
        const data = await res.json();
        session.username = data.username;
      }
      else if (process.env.NEXT_PUBLIC_SOCIAL_CONNECT_PROVIDER === "GITHUB") {
        const base64Credentials = btoa(
          `${process.env.GITHUB_ID}:${process.env.GITHUB_SECRET}`
        );
        const headers = new Headers({
          Authorization: `Basic ${base64Credentials}`,
        });

        const res = await fetch(`https://api.github.com/user/${token.sub}`, {
          headers,
        });
        const data = await res.json();
        session.username = data.login;
      }

      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
