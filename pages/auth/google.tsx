import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const GoogleSignIn = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!(status === "loading") && !session) void signIn("google");
    if (session) window.close();
  }, [session, status]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        background: "white",
        color: "#202124",
        fontSize: "24px",
        display: "flex",
        height: "100vh",
        width: "100vw",
        left: 0,
        top: 0,
      }}
    >
      Please wait...
    </div>
  );
};

export default GoogleSignIn;
