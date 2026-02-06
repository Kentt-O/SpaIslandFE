import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
    const [bookingData, setBookingData] = useState({
        selectedService: null,
        selectedTherapist: null,
        selectedDate: null,
        selectedTime: null,
        contactDetails: {
            fullName: "",
            email: "",
            phone: "",
            preferredContact: "email",
        },
        specialRequests: "",
        healthNotes: "",
        isFirstTime: false,
        preferredAmbiance: "relaxing",
        paymentMethod: "pay-at-spa",
    });

    const updateBooking = (field, value) => {
        setBookingData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const updateContactDetails = (field, value) => {
        setBookingData((prev) => ({
            ...prev,
            contactDetails: {
                ...prev.contactDetails,
                [field]: value,
            },
        }));
    };

    const resetBooking = () => {
        setBookingData({
            selectedService: null,
            selectedTherapist: null,
            selectedDate: null,
            selectedTime: null,
            contactDetails: {
                fullName: "",
                email: "",
                phone: "",
                preferredContact: "email",
            },
            specialRequests: "",
            healthNotes: "",
            isFirstTime: false,
            preferredAmbiance: "relaxing",
            paymentMethod: "pay-at-spa",
        });
    };

    const getTotalPrice = () => {
        return bookingData.selectedService?.price || 0;
    };

    return (
        <BookingContext.Provider
            value={{
                bookingData,
                updateBooking,
                updateContactDetails,
                resetBooking,
                getTotalPrice,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within BookingProvider");
    }
    return context;
}
