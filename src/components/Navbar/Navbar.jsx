import { signOut, getAuth } from "firebase/auth";
import { Button } from "@/components";
import { useAuth } from "@/store";

export const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(getAuth());
  };
  return (
    <nav className="bg-neutral-900 px-2">
      <div className="container m-auto flex justify-between items-center py-4">
        <h1 className="text-xl font-black">Note App</h1>
        <div className="flex items-center gap-1">
          <Button
            className="bg-yellow-500 text-black px-4 hover:bg-yellow-400 active:hover:bg-yellow-600"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Sign Out
          </Button>
        </div>
      </div>
    </nav>
  );
};
