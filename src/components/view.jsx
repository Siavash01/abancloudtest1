import { Suspense, lazy, useState } from "react";
import { CenderedSpinner } from "./centeredspinner/view";

const PopUp = lazy(() => import('./popup'));

export const MainView = () => {
    const [isrefresh, setIsrefresh] = useState(false);
    return (
        <Suspense fallback={<CenderedSpinner />}>
            <div className="flex flex-wrap gap-2 justify-center items-center">
                <PopUp onAdd={() => setIsrefresh( state => !state)}/>
            </div>
        </Suspense>
    );
}