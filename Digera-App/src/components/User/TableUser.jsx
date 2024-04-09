import { Table } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../../slices/Auth/authSlice";

export const TableUser = ({user})=>{
    const dispatch = useDispatch();
  const { register } = useSelector((state) => state.auth);

    useEffect(() => {
      if (register === true) {
        dispatch(setRegister(false));
      }
    }, [register]);
    return (
      <div className="overflow-x-auto ">
        <Table hoverable>
          <Table.Head className="dark:text-white">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Rol</Table.HeadCell>
            <Table.HeadCell>Usuario</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {user &&
              user?.users.map((user) => (
                <Table.Row
                  key={user.Id}
                  className="bg-white font-sans text-slate-800 dark:text-slate-300 dark:border-white dark:bg-gray-700"
                >
                  <Table.Cell >{user.Name}</Table.Cell>
                  <Table.Cell >{user.Lastname}</Table.Cell>
                  <Table.Cell >{user.Role}</Table.Cell>
                  <Table.Cell>{user.Username}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    );
}