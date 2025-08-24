import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { createClerkSupabaseClient } from "../utils/supabase"; // adjust path

function TestSupabase() {
  const { getToken } = useAuth();

  useEffect(() => {
    const connectSupabase = async () => {
      try {
        const token = await getToken({ template: "supabase" }); // Clerk → Supabase
        const supabase = createClerkSupabaseClient(token);

        // Simple test query
        const { data, error } = await supabase.from("profiles").select("*");

        if (error) {
          console.error("Supabase error:", error.message);
        } else {
          console.log("Supabase data:", data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    connectSupabase();
  }, []);

  return <div>✅ Check console for Supabase test!</div>;
}

export default TestSupabase;
