import { useEffect, useState } from "react";
import { PopUp } from "./popup";
import { CenderedSpinner } from "./centeredspinner/view";


export const MainView = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <div className="flex flex-wrap gap-2 h-screen w-screen justify-center items-center">
        {
            loading?
            <CenderedSpinner/>
            : <PopUp/>
        }
        </div>
    );
}