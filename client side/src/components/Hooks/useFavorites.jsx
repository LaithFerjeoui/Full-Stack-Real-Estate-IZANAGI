import React from 'react'

const useFavorites = () => {
    const { userDetails, setUserDetails } = useContext(UserDetailContext);
    const queryRef = useRef();
    const { user } = useAuth0();
  
    const { data, isLoading, isError, refetch } = useQuery({
      queryKey: "allFavourites",
      queryFn: () => getAllFav(user?.email, userDetails?.token),
      onSuccess: (data) =>
        setUserDetails((prev) => ({ ...prev, favourites: data })),
      enabled: user !== undefined,
      staleTime: 30000,
    });
  
    queryRef.current = refetch;
  
    useEffect(() => {
      queryRef.current && queryRef.current();
    }, [userDetails?.token]);
  
    return { data, isError, isLoading, refetch };
  };
  

export default useFavorites