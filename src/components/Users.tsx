import { useGetUsers } from "../hooks/useGetUsers";
import { useCreateUser } from "../hooks/useCreateUser";
import { ColumnDef } from "@tanstack/react-table";
import { AppTable } from "./common/AppTable";
import { Users } from "../models/user";

export const UserList = () => {
  const { data: users = [], isLoading, isError, error, refetch } = useGetUsers({ enabled: true });
  const { mutate: createUser, isPending } = useCreateUser();

  const handleCreateUser = () => {
    createUser({
      name: "Juninho da padaria",
      email: "junin@example.com",
      phone: "+55 11 99999-9999",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      birthDate: "2000-01-01",
      role: "user",
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  };

  const columns: ColumnDef<Users>[] = [
    { accessorKey: 'name', header: 'Nome' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'phone', header: 'Telefone' },
    {
      accessorKey: 'avatar',
      header: 'Avatar',
      cell: ({ row }) => (
        <img
          src={row.original.avatar}
          alt={row.original.name}
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      accessorKey: 'isActive',
      header: 'Ativo',
      cell: ({ row }) => (row.original.isActive ? 'yes' : 'no'),
    },
    { accessorKey: 'createdAt', header: 'Criado em' },
  ];

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro: {error.message}</div>;

  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center w-full p-4">
      <div className="flex gap-4">
        <button  onClick={() => refetch()}>Atualizar</button>
        <button onClick={handleCreateUser} disabled={isPending}>
          {isPending ? "Criando..." : "Criar Usuário"}
        </button>
      </div>

      <h1 className="text-2xl font-bold">Tabela de usuários</h1>

      <AppTable data={users} columns={columns} />
    </div>
  );
};
