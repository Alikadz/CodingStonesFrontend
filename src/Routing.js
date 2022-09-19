import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leads from "./pages/leads/Leads";
import Technologies from "./pages/technologies/Technology";
import Employees from "./pages/employees/Employees";
import ResourcePlanning from "./pages/resourcePlanning/ResourcePlanning";
import Projects from "./pages/projects/Projects";
import LoginPage from "./pages/login/LoginPage";
import GoogleAuth from "./pages/GoogleAuth";
import Equipment from "./pages/Equipment";
import ValueStreamGrid from "./pages/ValueStreamGrid";
import NoMatchRoute from "./pages/NoMatchRoute";

const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="google-auth" element={<GoogleAuth />} />
      <Route path="login" element={<LoginPage />} />
      <Route exact path="/" element={<Home />} />
      <Route path="employees" element={<Employees />}>
        <Route
          index
          path="employees?filter=all_roles&subfilter=all"
          element={<Employees />}
        />
      </Route>

      <Route path="resource-planning" element={<ResourcePlanning />} />
      <Route path="projects" element={<Projects />}>
        <Route
          index
          path="projects?filter=all&subfilter=all"
          element={<Projects />}
        />
      </Route>
      <Route path="value-stream-grid" element={<ValueStreamGrid />} />
      <Route path="equipment" element={<Equipment />} />
      <Route path="technologies" element={<Technologies />} />
      <Route path="leads" element={<Leads />}>
        <Route
          index
          path="leads?name=&filter=all&subfilter=all"
          element={<Leads />}
        />
      </Route>
      <Route path="*" element={<NoMatchRoute />} />
    </Routes>
  );
};

export default CreateRoutes;
