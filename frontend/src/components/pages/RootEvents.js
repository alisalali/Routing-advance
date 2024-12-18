import React from "react";
import EventsNavigation from "../EventsNavigation";
import { Outlet } from "react-router";

export default function RootEventsPage() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
}
