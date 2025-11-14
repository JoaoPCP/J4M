import { HeartIcon } from "lucide-react";

function JamCard({ jam }) {
  console.log(jam)
  return (
    <div
      className="size-24 sm:size-50 flex flex-col justify-end items-center bg-cover bg-center rounded-2xl p-2"
      style={{ backgroundImage: `url(${jam.cover})` }}
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
