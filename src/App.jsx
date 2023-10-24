import { ToastContainer } from "react-toastify";
import { useAuth } from "./hooks/use-auth";
import Route from "./router/Route";
// import Loading from "./components/Loading";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return;
  }
  return (
    <>
      <Route />
      <ToastContainer />
    </>
  );
}

export default App;
