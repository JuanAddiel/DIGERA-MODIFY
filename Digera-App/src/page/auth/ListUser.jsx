import { useEffect, useState } from "react";
import { PaginationCustom } from "../../components/PaginationCustom";
import fetchUsers from "../../slices/Auth/fetchUsers";
import { TableUser } from "../../components/User/TableUser";
import { HeaderTable } from "../../components/User/HeaderTable";
import { CreateUser } from "../../components/User/CreateUser";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../../slices/Auth/authSlice";
import { useGetAllUsersQuery } from "../../slices/Auth/usersApiSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ListUser = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [selectedOption, setSelectedOption] = useState("cliente");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { createModal, register } = useSelector((state) => state.auth);
  const [users, setUsers] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  const handleLimit = (limit) => {
    setLimit(limit);
    setPage(1);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const getAll = async (page, limit) => {
    const result = await axios.get(
      `http://localhost:3000/api/user/getAll?page=${page}&limit=${limit}`
    );
    setUsers(result.data);
  };
  const [prevPage, setPrevPage] = useState(page);
  const [prevLimit, setPrevLimit] = useState(limit);

  useEffect(() => {
    if (users === null || page !== prevPage || limit !== prevLimit) {
      getAll(page, limit);
      setPrevPage(page);
      setPrevLimit(limit);
    }
  }, [users, page, limit]);

  useEffect(() => {
    if (register === true) {
      dispatch(setRegister(false));
      getAll(page, limit);
    }
  }, [register, page, limit, users]);
  return (
    <section
      className={`border-green-700 dark:bg-gray-900 p-3 sm:p-5 flex justify-center items-center h-full`}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow p-2 sm:p-4 md:p-6 xl:p-8 2xl:p-10  w-full sm:max-w-full  md:max-w-full  lg:max-w-full  xl:max-w-full 2xl:max-w-full ${
          createModal && "opacity-60"
        }`}
      >
        <HeaderTable
          dropdownOpen={dropdownOpen}
          handleOptionSelect={handleOptionSelect}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          selectedOption={selectedOption}
          setDropdownOpen={setDropdownOpen}
        />

        <TableUser user={users} />
        <PaginationCustom
          object={users}
          handleLimit={handleLimit}
          handlePage={handlePage}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
      <CreateUser />
    </section>
  );
};
