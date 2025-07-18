import { LightDarkToggle } from "@/components/ui/light-dark-toggler";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>

      <LightDarkToggle className="fixed right-0 top-1/2" />
    </>
  );
}
