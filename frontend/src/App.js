// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./components/pages/Home";
import Root from "./components/pages/Root";
import EventsPage from "./components/pages/Events";
import EventDetailPage from "./components/pages/EventDetail";
import NewEventsPage from "./components/pages/NewEvent";
import EditEventPage from "./components/pages/EditEvent";
import RootEventsPage from "./components/pages/RootEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <RootEventsPage />,
        children: [
          {
            path: "/events/",
            element: <EventsPage />,
          },
          {
            path: "/events/:id",
            element: <EventDetailPage />,
          },
          {
            path: "/events/new",
            element: <NewEventsPage />,
          },
          {
            path: "/events/:id/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
