import Sidebar from '@/components/SideBar';
import { Footer, Header, SideBar } from '@/utils/Components.lazy';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // const { data, isLoading } = useGetLogedInUserQuery("");
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     if (data) {
  //         dispatch(setdata(data?.user))
  //     }
  // }, [data])

  // if (isLoading) {
  //     return <Loader />
  // }

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };




  let data= []    


  if (data) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} isMobile={isMobile} toggleSidebar={toggleSidebar} />
            <main className="flex-1 lg:pl-62  left-0 bg-gray-50">
              {/* Replace with your actual content */}
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
};

export default ProtectedRoute;
