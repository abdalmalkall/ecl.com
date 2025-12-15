// Page6.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Page6: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold text-[#A67C52] mb-8">
        اختر الطالب الذي تريد متابعة أدائه
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* زر للطالب الأول → Page7 */}
        <button
          onClick={() => navigate("/Page7")}
          className="px-6 py-4 bg-gradient-to-r from-[#F5F5DC] to-[#E4DFC1] text-[#5C4633] font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
      عبد الملك احمد نعيم
        </button>

        {/* زر للطالب الثاني → Page8 */}
        <button
          onClick={() => navigate("#")}
          className="px-6 py-4 bg-gradient-to-r from-[#F5F5DC] to-[#E4DFC1] text-[#5C4633] font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          عمرو احمد نعيم
        </button>
      </div>
    </div>
  );
};

export default Page6;
