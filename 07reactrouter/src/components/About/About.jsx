import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:6/12 lg:w-5/12">
            <img
              className=" rounded-2xl h-100 mx-17"
              src="https://i.pinimg.com/736x/e9/44/d8/e944d8a4d962216bc79d6fe4bc043ecd.jpg"
              alt="image"
            />
          </div>
          <div className="md:5/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
            <NavLink
              to="/about/timepass"
              className={({ isActive }) =>
                /** this logic to highlight link test on active url so here we use css callback stuff  here we get build in variavle isactive*/
                `block py-2 pr-4 pl-3 duration-200 border-b ${
                  isActive ? " text-green-200" : "text-gray-700"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-200 lg:p-0`
              }
            >
              <button className="text-white bg-green-400  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none cursor-pointer">
                Click Me
              </button>
            </NavLink>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
