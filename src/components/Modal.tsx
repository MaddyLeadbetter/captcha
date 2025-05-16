import type { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute bg-black/40 w-full h-full flex items-center justify-center z-2">
      <div className="bg-white h-fit px-6 py-4 rounded-lg flex gap-4 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
