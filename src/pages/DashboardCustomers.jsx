import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { useUserStore } from "../store/user.js";
import { toast } from "react-toastify";

const DashboardCustomers = () => {
  const { fetchUsers, users, deleteUser } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDeleteUser = async (pid) => {
    const { success, message } = await deleteUser(pid);
    if (success) {
      toast.success("User deleted successfully");
      fetchUsers();
    } else {
      toast.error(`Error: ${message}`);
    }
  };

  return (
    <div className="px-2 sm:px-4 md:px-1">
      <div className="bg-[#f1e2c2] p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-lg sm:text-xl font-semibold p-2">
            Active Customers
          </h1>
          <div className="flex items-center gap-2 bg-[#fdf4df] p-2 rounded-md border border-[#f1e2c2] w-full sm:w-[50%] lg:w-[40%]">
            <CiSearch className="size-5 sm:size-6" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="overflow-x-auto bg-[#fdf4df] mt-4 rounded-lg">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-sm sm:text-base">
                <th className="p-3">Customer ID</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-100 text-sm sm:text-base"
                >
                  <td className="p-3 break-all">#{item._id}</td>
                  <td className="p-3">{item.firstName}</td>
                  <td className="p-3">{item.lastName}</td>
                  <td className="p-3 break-all">{item.email}</td>
                  <td className="p-3 text-center">
                    <RiDeleteBin2Line
                      className="cursor-pointer text-[#afad55] size-5 sm:size-6"
                      onClick={() => handleDeleteUser(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomers;
