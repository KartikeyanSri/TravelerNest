import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import BookTicket from './pages/BookTicket/BookTicket.jsx';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bookTicket",
      element: <BookTicket />,
    },
   
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}