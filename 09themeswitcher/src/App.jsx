import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import { Card, ThemeBtn } from "./components";

const dummyData = [
  {
    id: 1,
    title: "Apple Watch Series 7",
    price: "$599",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/88/ab/62/88ab62333f5db8854790294fdff41b4e.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch 5",
    price: "$349",
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/56/c8/5a/56c85a09640c9e5de54bacc80d2d5b05.jpg",
  },
  {
    id: 3,
    title: "Fitbit Versa 3",
    price: "$229",
    rating: 4.0,
    image:
      "https://i.pinimg.com/736x/e6/7d/c5/e67dc5fe99ec3c3b4e3cbbbdca35c228.jpg",
  },
  {
    id: 4,
    title: "Garmin Forerunner 955",
    price: "$499",
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/88/ab/62/88ab62333f5db8854790294fdff41b4e.jpg",
  },
  {
    id: 5,
    title: "Amazfit GTR 3",
    price: "$179",
    rating: 3.9,
    image:
      "https://i.pinimg.com/736x/73/4c/3f/734c3f5ce72eda989c9bb3f0716e7ddc.jpg",
  },
];

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => setthemeMode("light");
  const darkTheme = () => setthemeMode("dark");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
        <div className="flex justify-end mb-4">
          <ThemeBtn />
        </div>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyData.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
