export function WorkItem(props) {
  return (
    <div className="w-80 h-60 m-4">
      <img src={props.image} alt={props.imageAlt} className="absolute rounded-2xl w-80 z-[-1]" />
      <a href={props.link} target="__blank">
        <div className="opacity-0 hover:opacity-100 h-full duration-500 bg-[#000000c0] p-4 rounded-2xl">
          <h2 className="text-text text-3xl font-bold text-center">{props.title}</h2>
          <p className="text-text text-xl text-center">{props.description}</p>
        </div>
      </a>
    </div>
  );
}
