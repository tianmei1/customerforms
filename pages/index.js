import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CustomerForm from "../components/CustomerForm";
import Button from "@mui/material/Button";
import LoginModal from "../components/LoginModal";
import { useRouter } from "next/router";

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleViewLeadsClick = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session && session.username) {
      router.push("/leads");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = () => {
    localStorage.setItem("session", JSON.stringify({ username: "admin" }));
    setIsLoginModalOpen(false);
    router.push("/leads");
  };

  return (
    <>
      <Head>
        <title>Customer Information Form</title>
        <meta name="description" content="Collect customer information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div id="header">
          <h5>Alma'</h5>
          <div className="header-title">
            <h1>Get An Assessment Of Your Immigration Case</h1>
          </div>
        </div>

        <div className="form-header">
          <h2>Want to understand your visa options? </h2>
          <h3>
            Submit the form below and our team of experienced attorneys will
            review your information and send a preliminary assessment of your
            case based on your goals.
          </h3>
        </div>
        <div id="form">
          <CustomerForm />
        </div>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "20px" }}
          onClick={handleViewLeadsClick}
        >
          View Leads
        </Button>
        <LoginModal
          open={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </>
  );
};

export default Home;
