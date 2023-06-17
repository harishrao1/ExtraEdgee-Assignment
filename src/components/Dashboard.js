import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import CardData from "./CardData";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../redux/API";
import { userActions } from "../redux/userSlice";
import Shimmer from "./Shimmer/Shimmer";
import Loader from "./Loader/Loader";
const Dashboard = () => {
  const userList = useSelector((state) => state.userReducer.userList);
  // console.log("UserLIst in component home", userList);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUser());
    }, 1500);
  }, []);

  const handleDeleteUserByEmail = (email) => {
    let updatedList = userList.filter((item) => item.email !== email);
    dispatch(userActions.updateUserList(updatedList));
  };

  return (
    <>
      <Box mt={3}>
        {!userList.length ? (
          <Loader /> || <Shimmer />
        ) : (
          <Flex flexWrap="wrap" gap={3} justifyContent="center">
            {userList?.map((item) => (
              <CardData
                key={item.email}
                {...item}
                handleDeleteUserByEmail={handleDeleteUserByEmail}
              />
            ))}
          </Flex>
        )}
      </Box>
    </>
  );
};
export default Dashboard;
