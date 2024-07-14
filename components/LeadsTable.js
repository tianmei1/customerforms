import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";

const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    const storedLeads = JSON.parse(localStorage.getItem("leads")) || [];
    setLeads(storedLeads);
    setFilteredLeads(storedLeads);
  }, []);

  useEffect(() => {
    const filtered = leads.filter((lead) => {
      const fullName = `${lead.firstName} ${lead.lastName}`.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        fullName.includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.country.toLowerCase().includes(query) ||
        lead.visaCategory?.join(", ").toLowerCase().includes(query) ||
        (lead.status && lead.status.toLowerCase().includes(query)) ||
        (lead.submitted && lead.submitted.toLowerCase().includes(query))
      );
    });
    setFilteredLeads(filtered);
  }, [searchQuery, leads]);

  const handleStatusChange = (id) => {
    const updatedLeads = leads.map((lead, index) => {
      if (index + 1 === id) {
        return { ...lead, status: "REACHED_OUT" };
      }
      return lead;
    });
    setLeads(updatedLeads);
    setFilteredLeads(updatedLeads);
    localStorage.setItem("leads", JSON.stringify(updatedLeads));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "visaCategory", headerName: "Visa Category", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "submitted", headerName: "Submitted", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleStatusChange(params.row.id)}
          disabled={params.row.status === "REACHED_OUT"}
        >
          Mark as Reached Out
        </Button>
      ),
    },
  ];

  const rows = filteredLeads.map((lead, index) => ({
    id: index + 1,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    country: lead.country,
    visaCategory: lead.visaCategory?.join(", ") || "",
    status: lead.status || "PENDING",
    submitted: new Date(lead.submitted).toLocaleString(),
  }));

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <DataGrid rows={rows} columns={columns} pageSize={5} />
      <Link href="/">
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Back to Form
        </Button>
      </Link>
    </Box>
  );
};

export default LeadsTable;
