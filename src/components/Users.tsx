import { useGetUsers } from "../hooks/useGetUsers";

export const UserList = () => {
    const { data: users, isLoading, isFetching, isError, error, refetch } = useGetUsers({ enabled: false });

    if (isLoading) return <div>Carregando...</div>;
    if (!isLoading && isFetching) return <div>Buscando...</div>;
    if (isError) return <div>Erro: {error.message}</div>;

    return (
        <div className="h-screen flex flex-col gap-10 items-center justify-center w-full">
            <button onClick={() => refetch()}>Atualizar</button>
            <h1>Tabela de usuários</h1>
            <table className="border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100 text-black">
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Phone</th>
                    <th className="p-2 border">Avatar</th>
                    <th className="p-2 border">isActive</th>
                    <th className="p-2 border">CreatedAt</th>
                </tr>
                </thead>
                <tbody>
                {users?.map((user) => (
                    <tr key={user.id}>
                        <td className="p-2 border">{user.name}</td>
                        <td className="p-2 border">{user.email}</td>
                        <td className="p-2 border">{user.phone}</td>
                        <td className="p-2 border">
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-2 border">{user.isActive ? "✅" : "❌"}</td>
                        <td className="p-2 border">{user.createdAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};