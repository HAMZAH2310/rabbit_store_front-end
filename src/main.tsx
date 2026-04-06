import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import AppRouter from "./app/AppRoutes.tsx"

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)

