import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import GifProvider from "./context/gif-context";

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
