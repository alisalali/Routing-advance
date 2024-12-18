import React from "react";
import MainNavigation from "../MainNavigation";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
