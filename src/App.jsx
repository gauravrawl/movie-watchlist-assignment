import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import ProtectedRoute from "./protected/ProtectedRoute";
import Spinner from "./components/common/Spinner";

//Lazy loading to import component when needed.
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const ListView = lazy(() => import("./components/watchlist/ListView"));
const Layout = lazy(() => import("./layout"));
const NotFound = lazy(() => import("./pages/notFound"));
const PlotDetails = lazy(() => import("./pages/movieDetails"));

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Suspense fallback={<Spinner/>}>
            <Routes>
            {/* Auth */}
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              {/* Not found */}
              <Route exact path="/*" element={<NotFound />} />

              {/* Dashboard */}
              <Route
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/list-view"
                  element={
                    <ProtectedRoute>
                      <ListView />
                    </ProtectedRoute>
                  }
                />
                   <Route
                  path="/movie-details/:id"
                  element={
                    <ProtectedRoute>
                      <PlotDetails />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </Provider>
      </Router>
    </>
  );
}

export default App;
