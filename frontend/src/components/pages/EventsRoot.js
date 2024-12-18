import React from "react";
import EventsNavigation from "../EventsNavigation";
import { Outlet } from "react-router";

export default function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
