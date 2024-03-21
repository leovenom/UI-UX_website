import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] ox-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img src={loading} alt="loading" className="w-5 h-5 mx-4" />
      AI is generating
    </div>
  );
};

export default Generating;
