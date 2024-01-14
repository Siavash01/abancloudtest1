import { useEffect, useState } from "react";
import { PopUp } from "./popup";
import { Spinner } from 'flowbite-react';


export const MainView = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
        {
            loading?
            <p>
                <Spinner aria-label="Default status example" />
            </p>
            : <PopUp/>
            
        }
        </>
    );
}