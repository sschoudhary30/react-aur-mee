// eslint-disable-next-line react/prop-types
const Cad = ({ infoN, btnText = "bhai" }) => {
  //   let btnText = "hello me";
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-4">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{infoN.name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {infoN.email} <br />
            {infoN.age}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {
              btnText /*|| 'hello me'   -->by this way we can pass some default value this is not good way */
            }
          </button>
        </div>
      </div>
    </>
  );
};

export default Cad;
