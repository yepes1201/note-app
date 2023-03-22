import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useAuth } from "@/store";
import { useNotes } from "@/store";

export const useLoadNotes = () => {
  const { user } = useAuth();
  const { setNotes } = useNotes();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNotes = async () => {
    try {
      const notes = [];
      const q = collection(getFirestore(), `${user.uid}/user/todos`);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() });
      });
      setNotes(notes);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return { loading, error };
};
