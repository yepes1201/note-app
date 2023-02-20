import { signOut, getAuth } from "firebase/auth";
import { Button } from "@/components";

export const Home = () => {
  const handleLogout = async () => {
    await signOut(getAuth());
  };

  return (
    <div>
      <Button onClick={handleLogout}>Sign Out</Button>
    </div>
  );
};
