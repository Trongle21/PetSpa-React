import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import Loading from "../components/Loading";
import useProductContext from "../hooks/useProductContext";

const Root = () => {
  const [state, dispatch] = useProductContext();
  const { loading } = state;

  return (
    <>
      <Header />
      {loading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Root;
