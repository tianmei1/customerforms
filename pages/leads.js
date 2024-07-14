import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LeadsTable from "../components/LeadsTable";

const LeadsList = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session && session.username) {
      setIsAuthenticated(true);
    } else {
      router.push("/");
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="header-title">
        <h1>Leads List</h1>
      </div>
      <div className="lead-container">
        <LeadsTable />
      </div>
    </div>
  );
};

export default LeadsList;
