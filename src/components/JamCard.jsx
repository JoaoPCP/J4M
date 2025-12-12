import { HeartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function JamCard({ jam }) {
  const nav = useNavigate()
  console.log(jam)
  return (
    <div
      className="size-24 sm:size-50 flex flex-col justify-end items-center bg-cover bg-center rounded-2xl p-2 transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${jam.cover})` }}
      onClick={() => nav(`/jam-detail/${jam.path}`)}
    >
      <div className="flex flex-col items-center text-white">
        {jam.likes && (
          <div>
            <h3 className="text-xl">{jam.likes}</h3>
            <HeartIcon/>
          </div>
        )}
      </div>
    </div>
  );
}
export default JamCard;
