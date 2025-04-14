import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from "./components/Header.tsx";
import { UserList } from "./components/Users.tsx";

const queryClient = new QueryClient();

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header/>
            <UserList/>
        </QueryClientProvider>
    )
}
