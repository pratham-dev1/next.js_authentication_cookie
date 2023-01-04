import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      {(router.pathname === "/_error" || router.pathname === "/") ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
      </QueryClientProvider>
    </>
  );
}
