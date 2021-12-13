import { Input, Card, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../redux/actions";
import Data from "./Data";

const Search = () => {
  const dispatch = useDispatch();

  const { Search } = Input;

  const { dicData } = useSelector((state) => state);

  const onSearch = (value) => {
    dispatch(fetchingData(value));
  };

  return (
    <>
      <Card style={{display: "flex", justifyContent: "center"}}>
        <Search
        style={{width: "400px"}}
          placeholder="Search here..."
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Card>
      <Space style={{display: "flex", justifyContent: "center", flexDirection: "row", marginTop: "50px"}}>
        <Data searchData={dicData}/>
      </Space>
    </>
  );
};

export default Search;
