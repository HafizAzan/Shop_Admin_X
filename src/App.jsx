import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";
import { ConfigProvider } from "antd";
import { THEME_CONFIG } from "utils/constant";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <ConfigProvider theme={THEME_CONFIG}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
