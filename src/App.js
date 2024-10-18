import logo from "./logo.svg";
import "./output.css";

function App() {
  return (
    <div className=" h-full w-full items-center justify-center">
      <span className="flex justify-center items-center w-full p-4">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, error! Voluptate totam, quaerat illo iste dolores eaque. Ab minima nemo sequi. Illum quidem quod neque voluptates necessitatibus maxime corporis voluptatibus.</p>
      </span>
      <form className="flex flex-col w-full h-full p-4 sm:w-1/2 justify-center  gap-4">
        
        <input type="text" className="border border-gray-300 p-2 rounded-xl w-full" />
        <input type="text" className="border border-gray-300 p-2 rounded-xl w-full" />
        <input type="text" className="border border-gray-300 p-2 rounded-xl w-full" />
        <input type="text" className="border border-gray-300 p-2 rounded-xl" />
        <input type="date" className="border border-gray-300 p-2 rounded-xl" />
        <input type="tel" className="border border-gray-300 p-2 rounded-xl" />
        <input type="tel" className="border border-gray-300 p-2 rounded-xl" />
        <input type="tel" className="border border-gray-300 p-2  rounded-xl" />
        <input
          type="email"
          className="border border-gray-300 py-2 rounded-xl"
          name=""
          id=""
        />
        <button className="w-full mt-4 bg-blue-400 p-3 rounded-xl">Submit</button>
      </form>
    </div>
  );
}

export default App;
