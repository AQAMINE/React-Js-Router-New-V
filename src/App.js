import { createBrowserRouter,
  // createRoutesFromElements, 
  // Route, 
  RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />,
//     <Route path="/products" element={<ProductsPage/>} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    //the first path is just to show menu in all pages like wrapper 
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> }
    ]
  },
  
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
