import { useEffect, useState, Suspense, lazy } from "react";
import { CenderedSpinner } from "./centeredspinner/view";

const PopUp = lazy(() => import('./popup'));

export const MainView = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <Suspense fallback={<CenderedSpinner />}>
            <div className="flex flex-wrap gap-2 h-screen w-screen justify-center items-center">
            {
                <PopUp/>
            }
            </div>
        </Suspense>
    );
}