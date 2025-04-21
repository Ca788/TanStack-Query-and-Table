import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from "./components/Header";
import { UserList } from "./components/Users";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Header/>
      <UserList/>
    </QueryClientProvider>
  )
}
