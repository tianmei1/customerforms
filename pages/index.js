import React from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "@mui/material/Button";
import CustomerForm from "../components/CustomerForm";

const Home = () => {
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
        <Link href="/leads">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px" }}
          >
            View Leads
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
