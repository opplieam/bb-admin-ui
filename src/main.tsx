import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient: QueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="dark">
        <App />
        <ReactQueryDevtools />
      </MantineProvider>
    </QueryClientProvider>
  </>
);
