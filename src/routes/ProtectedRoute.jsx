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

    if (data) {
        return (
            <>
                {/* <Header /> */}
                {children}
            </>
        )
    } else {
        return <><Navigate to="/login" /></>
    }
};

export default ProtectedRoute;