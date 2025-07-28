import { Dispatch, SetStateAction } from "react";

export const handleUserSharingLocation = (setLocation: Dispatch<SetStateAction<{
    latitude: number;
    longitude: number;
}>>) =>
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(
                {latitude,
                longitude,}
            );
        },
        (error) => {
            console.error('Error getting location:', error.message);
        }
    );