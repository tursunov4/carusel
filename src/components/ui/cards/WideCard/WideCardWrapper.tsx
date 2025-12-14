import {ReactNode} from "react";

const WideCardWrapper = ({children}: { children: ReactNode }) => {

    return (
        <div className="wide-card flex flex-wrap">
            {children}
        </div>
    );
};

export default WideCardWrapper;