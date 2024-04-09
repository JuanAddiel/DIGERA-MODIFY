import { useGetAllUsersQuery } from "./usersApiSlice";

const fetchUsers = ({
  page,
  limit,
}) => {
  return useGetAllUsersQuery({
    page,
    limit,
  });
};

export default fetchUsers;
