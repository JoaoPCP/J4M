import CardComunnity from "../../../components/CardComunnity";

const arr = Array.apply(null, Array(24)).map(function () {});

function Community() {
  console.log(arr);
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-pink font-orbitron text-3xl">COMUNIDADE</h1>
      <div className="grid grid-cols-8 justify-center items-center gap-5">
        {arr.map(() => (
          <CardComunnity />
        ))}
      </div>
    </div>
  );
}

export default Community;
