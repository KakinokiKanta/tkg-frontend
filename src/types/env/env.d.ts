declare namespace NodeJS {
  interface ProcessEnv {
    readonly GITHUB_ID: string;
    readonly GITHUB_SECRET: string;
    readonly NEXTAUTH_URL: string;
    readonly NEXTAUTH_SECRET: string;
  }
}
