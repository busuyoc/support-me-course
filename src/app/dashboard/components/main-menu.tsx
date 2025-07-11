import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/light-dark-toggler";

export default function MainMenu({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav className={className}>
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        {children}
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center ">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Layout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
