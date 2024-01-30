import Register from "../components/Register";
import Users from "../components/Users";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex">
        <Register />
        <Users />
      </div>
    </>
  );
};

export default Home;
