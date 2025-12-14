import {FaArrowsRotate} from "react-icons/fa6";

const SidebarReset = ({action}: {action: ()=>void}) => {
    return (
        <button
                onClick={action}
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-2 text-sm font-medium transition"
            >
                <FaArrowsRotate className="mr-2"/> Сбросить
            </button>
    );
};

export default SidebarReset;