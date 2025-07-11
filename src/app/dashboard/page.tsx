import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmployeesStats from "./components/employees/employees-stats";
import TeamsStats from "./components/teams/teams-stats";
export default function DashboardPage() {
  return (
    <>
      <Tabs defaultValue="employees">
        <TabsList className="mb-4">
          <TabsTrigger value="employees">Employees stats</TabsTrigger>
          <TabsTrigger value="teams">Teams stats</TabsTrigger>
        </TabsList>
        <TabsContent value="employees">
          <EmployeesStats></EmployeesStats>
        </TabsContent>
        <TabsContent value="teams">
          <TeamsStats></TeamsStats>
        </TabsContent>
      </Tabs>
    </>
  );
}
