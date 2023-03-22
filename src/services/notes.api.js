import { useAuth } from "@/store";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const getNotes = () => {
  const { user } = useAuth();
  const notes = [];
  const q = collection(getFirestore(), `${user.uid}/user/todos`);
  return getDocs(q)
    .then((qSnapshot) => {
      qSnapshot.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() });
        console.log(notes);
      });
    })
    .then(() => notes);
};
