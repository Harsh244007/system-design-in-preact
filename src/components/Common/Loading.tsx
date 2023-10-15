import { memo } from 'preact/compat';
const Loading: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <h2 className="text-white text-lg font-semibold">Loading</h2>
    </div>
  );
};

export default memo(Loading);
