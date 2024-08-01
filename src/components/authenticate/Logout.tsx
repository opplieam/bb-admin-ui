import { IconLogout } from "@tabler/icons-react";
import useLogout from "./hooks/useLogout.ts";

function Logout({ classes }) {
  const { mutate, isPending } = useLogout();
  return (
    <a
      href="#"
      className={classes.link}
      onClick={event => {
        event.preventDefault();
        mutate();
      }}
      style={isPending ? { pointerEvents: "none" } : undefined}
    >
      <IconLogout className={classes.linkIcon} stroke={1.5} />
      <span>Logout</span>
    </a>
  );
}

export default Logout;
