import { createBrowserRouter } from "react-router-dom";
import Cork from "../Cork";
import Note from "../Note";

export const router = createBrowserRouter([
   {
      path: "note",
      element: <Note />,
   },
]);
