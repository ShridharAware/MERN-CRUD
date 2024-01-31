import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  name: string;
  company: string;
};

const Users: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const users = await axios.get("https://crud-backend-lac.vercel.app/user/getUser");
        setData(users.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const deleteUser = async (id: number) => {
    const url = `https://crud-backend-lac.vercel.app/user/${id}`;
    await axios.delete(url);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="flex w-2/4 mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company name
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr
                key={entry.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {entry.id}
                </td>
                <td className="px-6 py-4">{entry.name}</td>
                <td className="px-6 py-4">{entry.company}</td>
                <td className="px-6 py-4">
                  <a href={`/user/${entry.id}`}>Update</a>
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => deleteUser(entry.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
