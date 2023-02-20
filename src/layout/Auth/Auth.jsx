import { AuthForm } from "@/components";

export const Auth = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-neutral-800">
      <form className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-4/5 bg-neutral-700 text-white p-4 rounded">
        {children}
      </form>
    </div>
  );
};
