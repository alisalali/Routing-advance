import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router";

export default function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
