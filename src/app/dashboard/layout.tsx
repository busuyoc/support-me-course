import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <MainMenu className="bg-muted  overflow-auto p-4 flex flex-col">
        <MenuTitle />
      </MainMenu>
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Vici!</h1>
        {children}
      </div>
    </div>
  );
}
