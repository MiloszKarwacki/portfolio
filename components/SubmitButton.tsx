import { FC } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
        bg-gray-900 text-white rounded-full outline-none transition-all
        focus:scale-110 hover:scale-110 hover:bg-gray-950
        active:scale-105 dark:bg-white dark:bg-opacity-10
        disabled:scale-100 disabled:opacity-65"
    >
      {text.includes("Sending...") ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {text}{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
            group-hover:translate-x-1 group-hover:-translate-y-1"
          />{" "}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
