import {FC} from "react";

const Loading: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 mb-4"></div>
      <p className="text-gray-600">Загрузка данных...</p>
    </div>
  );
};

export default Loading;
