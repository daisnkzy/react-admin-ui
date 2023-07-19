import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './styles/global.scss';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const Layout = () => {
    return (
      <>
        <Header />

        <main className="main">
          <div className="container ">
            <Menu />

            <section className="section-content">
              <Outlet />
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users',
          element: <Users />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
