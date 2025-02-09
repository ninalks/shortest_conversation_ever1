
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeAnimation() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div 
        className="w-80 h-[500px] rounded-[50px] border-[10px] border-gray-700 shadow-xl relative bg-black overflow-hidden"
      >
        <div className="h-full flex flex-col items-center justify-end p-6">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setLiked((prev) => !prev)}
            className="absolute bottom-8 right-8"
          >
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={liked ? { scale: [1, 1.4, 1], opacity: [0.5, 1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Heart size={48} className={liked ? "text-red-500" : "text-white"} fill={liked ? "#ef4444" : "none"} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
