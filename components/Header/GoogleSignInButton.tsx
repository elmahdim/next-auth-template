import { openRequestedResource } from "@/lib/openRequestedResource";

export function GoogleSignInButton() {
  return (
    <button
      onClick={() =>
        openRequestedResource("/auth/google", "Continue with Google")
      }
    >
      Continue with Google
    </button>
  );
}
