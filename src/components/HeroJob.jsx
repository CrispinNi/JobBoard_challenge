import { Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center p-6 mx-12">
      <div className="relative w-full rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 h-48">
        {/* Floating Icon */}
        <div className="absolute -bottom-8 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <Briefcase className="w-8 h-8 text-black" />
        </div>
      </div>
    </div>
  );
}
