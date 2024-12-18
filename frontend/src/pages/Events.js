import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;
