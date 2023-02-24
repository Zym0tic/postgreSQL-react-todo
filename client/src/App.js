import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import Auth from "./components/Auth";
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = "luker@test.com";
  const [tasks, setTasks] = useState(null);

  const AuthToken = false;

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
      console.log(process.env.REACT_APP_SERVERURL);
    }
  };

  useEffect(() => {
    if(AuthToken) {
        getData()
    }
  });

  console.log(tasks);

  // sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
        {!AuthToken && <Auth/>}
      {AuthToken && 
        <>
          <ListHeader listName={"Holiday tick List"} getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      }
    </div>
  );
};

export default App;
