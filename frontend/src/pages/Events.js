import { Await, useLoaderData } from "react-router";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Error("Could not fetch events.");
  }

  const resData = await response.json();
  return resData.events;
}

export function loader() {
  try {
    const events = loadEvents();
    return { events };
  } catch (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

// export async function loader() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     // return { isError: true, message: 'Could not fetch events.' };
//     throw Response.json(
//       { message: "Could not fetch events." },
//       {
//         status: 500,
//       }
//     );
//     // throw json(
//     //   { message: 'Could not fetch events.' },
//     //   {
//     //     status: 500,
//     //   }
//     // );
//   } else {
//     return response;
//   }
// }
