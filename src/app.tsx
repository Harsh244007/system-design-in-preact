import { Suspense, memo, useState } from "preact/compat";
import { Loading, Navbar } from "./components";
import { renderActiveComponent } from "./components/Common/RenderActiveComponent";

const App = () => {
  const [activeComponent, setActiveComponent] = useState<number>(0);

  return (
    <div className="flex flex-col items-center min-h-screen py-5">
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="py-4 w-auto overflow-auto px-6 max-w-3xl m-auto">
        <Suspense fallback={<Loading />}>{renderActiveComponent(activeComponent)}</Suspense>
      </div>
      <p>Made by Harsh with ❤️</p>
    </div>
  );
};
export default memo(App);
