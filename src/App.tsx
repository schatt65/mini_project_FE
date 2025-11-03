import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
// import BillExplainer from "./components/BillExplainer/BillExplainer";

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;
function App() {
  const [count, setCount] = useState(0);
  // const { loading, data, error } = useGetCreditRefund();

  return (
    <main>
      {/* <h1>Holaa</h1> */}
      <Navbar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </main>
  );
}

export default App;
