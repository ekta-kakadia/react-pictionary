import { PageHeader, Button } from "antd";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <PageHeader
        title="Pictionary"
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      ></PageHeader>
      <Button type="primary">
        <NavLink to="/search">Get Started</NavLink>
      </Button>
    </>
  );
};

export default Home;
