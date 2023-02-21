import { signOut, useSession } from "next-auth/react";
import { GoogleSignInButton } from "./GoogleSignInButton";

export function Header() {
  const { data: session } = useSession();

  const Headers = {
    Public: (
      <header>
        <GoogleSignInButton />
      </header>
    ),
    Private: (
      <header>
        <button onClick={() => signOut()}>
          {session?.user?.name} -- Log out
        </button>
      </header>
    ),
  };

  if (!session) {
    return Headers.Public;
  }

  return Headers.Private;
}
