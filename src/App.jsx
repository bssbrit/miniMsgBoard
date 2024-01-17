import { useState, useEffect } from "react";
import Comment from "./components/Comment";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (data != null) {
    return (
      <div>
        <button onClick={() => console.log(data)}> Data Log</button>
        <Comment data={data.comments} />
      </div>
    );
  } else
    return (
      <div>
        <button onClick={() => console.log(data)}> Data Log</button>
      </div>
    );
}
export default App;
