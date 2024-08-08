import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

const queryClient: QueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="dark">
        <ModalsProvider>
          <Notifications radius="md" position="top-right" />
          <App />
          <ReactQueryDevtools />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  </>
);
