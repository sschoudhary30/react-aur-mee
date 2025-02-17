function Timepass() {
  const data = [
    { id: 1, name: "suresh", job: "SDE" },
    { id: 2, name: "rahul", job: "SDC" },
  ];

  return (
    <>
      {data.map((info) => {
        return (
          <div key={info.id}>
            <h2 className="text-lg font-bold">Name: {info.name}</h2>
            <p className="text-gray-700">Job: {info.job}</p>
          </div>
        );
      })}
    </>
  );
}

export default Timepass;
