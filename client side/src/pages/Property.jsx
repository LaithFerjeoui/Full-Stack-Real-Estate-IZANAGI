import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProperty, cancelBooking } from "../utils/api";
import { useMutation, useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import Map from "../components/Map";
import useAuthCheck from "../components/Hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal";
import UserDetailContext from "../components/context/UserDetailContext";
import { toast } from "react-toastify";
import Heart from "../components/Heart";
const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);
  const { mutate: cancelBookingFN, isLoading: cancelling } = useMutation({
    mutationFn: () => cancelBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });
  
  if (isLoading) {
    return (
      <div>
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }
  if (isError) {
    <div>
      <div className="flexCenter paddings">
        <span>Error while fetching details.</span>
      </div>
    </div>;
  }

  return (
    <div className="flexColCenter paddings innerWidth gap-8 relative ">
      <Heart id={id}/>

      <img
        src={data?.image}
        alt=""
        className="rounded-3xl self-center max-h-[560px] w-[100%]"
      />

      <div className="flexCenter w-full gap-8 justify-between">
        {/* left side */}
        <div className="flexColStart flex-1 gap-6">
          <div className="flex justify-between items-center w-full">
            <span className="primaryText">{data?.title}</span>
            <span className="orangeText" style={{ fontSize: "1.5rem" }}>
              ${data?.price}
            </span>
          </div>
          <div className="flexStart gap-4 text-sm p-4">
            <div className="flexStart gap-2">
              <FaShower size={30} color="#1F3E72" />
              <span>{data?.facilities?.bathrooms} Bathrooms</span>
            </div>
            <div className="flexStart gap-2 ">
              <AiTwotoneCar size={30} color="#1F3E72" />
              <span>{data?.facilities?.parking} Parkings</span>
            </div>
            <div className="flexStart gap-2">
              <MdMeetingRoom size={30} color="#1F3E72" />
              <span>{data?.facilities?.bedrooms} Room/s</span>
            </div>
          </div>

          <span className="secondaryText " style={{ textAlign: "justify" }}>
            {data?.description}{" "}
          </span>
          <div className="flexStart gap-4">
            <MdLocationPin size={25} />
            <span className="secondaryText">
              {data?.address},<span> </span>
              {data?.city},<span> </span>
              {data?.country},<span> </span>
            </span>
          </div>
          {bookings?.map((booking) => booking.id).includes(id) ? (
            <>
              <button
                class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded w-full"
                onClick={() => cancelBookingFN()}
                disabled={cancelling}
              >
                Cancel booking
              </button>
              <span>
                Your Visit is already booked for this date: <span></span>
                {bookings?.filter((booking) => booking?.id === id)[0].date}
              </span>
            </>
          ) : (
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              onClick={() => {
                validateLogin() && setModalOpened(true);
              }}
            >
              Book Visit
            </button>
          )}
          <BookingModal
            opened={modalOpened}
            setOpened={setModalOpened}
            propertyId={id}
            email={user?.email}
          />
        </div>
        {/* right side */}
        <div className="flex-1 gap-6">
          <Map
            address={data?.address}
            city={data?.city}
            country={data?.country}
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
