import CardOficialJam from "../../../components/CardOficialJam";

function Oficials() {
  return (
    <section className="flex flex-col gap-13 px-20 py-15">
      <h2 className="font-orbitron text-3xl text-pink">OFICIAIS</h2>
      <div className="flex gap-5 justify-center items-center">
        <CardOficialJam size="slim" color="green" />
        <CardOficialJam color="yellow" />
        <CardOficialJam size="slim" color="red" />
      </div>
    </section>
  );
}

export default Oficials;
