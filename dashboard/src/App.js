import DeleteTask from "./components/DeleteTask/DeleteTask";
import GetAllTasks from "./components/GetAllTasks/GetAllTasks";
import GetTask from "./components/GetTask/GetTask";
import PatchTask from "./components/PatchTask/PatchTask";
import PostTask from "./components/PostTask/PostTask";

function App() {
  return (
    <div className="App">
      <GetAllTasks />
      <GetTask />
      <PostTask />
      <PatchTask />
      <DeleteTask />
    </div>
  );
}

export default App;
