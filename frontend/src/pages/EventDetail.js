import React from "react";
import { useParams } from "react-router";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>detail event</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}
