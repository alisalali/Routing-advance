import React, { Suspense } from "react";
import { Await, redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(events) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw Response.json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  }
  const resData = await response.json();
  return resData.event;
}
async function loadedEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Error("Could not fetch events.");
  }

  const resData = await response.json();
  return resData.events;
}

export async function loader({ request, params }) {
  const id = params.eventId;

  const event = await loadEvent(id);
  const events = loadedEvents();

  return {
    event,
    events,
  };
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw Response.json(
      { message: "Could not delete event." },
      { status: 500 }
    );
  }

  return redirect("/events");
}
