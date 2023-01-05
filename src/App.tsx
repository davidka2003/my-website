import React from "react";
import Main from "@components/Main";
import SideBar from "@components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  * {
    /* outline: solid 1px red; */
  }
`;
function App() {
  return (
    <StyledAppLayout>
      <SideBar />
      <Main />
      <ToastContainer position={"top-right"} />
    </StyledAppLayout>
  );
}
export default App;
