import AddNewWorkbenchCard from "../../components/ui/cards/AddNewWorkbenchCard";
import WorkbenchCard from "../../components/ui/cards/WorkbenchCard";
import WorkbenchCardTest from "../../components/ui/cards/WorkbenchCardTest";
import PublicLayout from "../../layouts/PublicLayout";
import { useAuthStore } from "../../lib/store/auth";

export default function WelcomePage() {
  const { user } = useAuthStore();

  return (
    <PublicLayout title="Welcome Page" description="Welcome Page">
      <main className="mt-32 container mx-auto">
        <h1 className="relative z-20 text-3xl font-bold">
          Welcome {user?.username}
        </h1>
        <div className="mt-12 flex gap-10 flex-wrap">
          {user?.workbenches?.map((workbench) => (
            <WorkbenchCardTest
              key={workbench.id}
              id={workbench.id}
              title={workbench.name}
              owner={workbench.owner}
              members={workbench.members}
              // role={workbench.role}
              isArchived={workbench.isArchived}
              createdAt={workbench.createdAt}
              settings={workbench.settings}
            />
          ))}
          <AddNewWorkbenchCard />
        </div>
      </main>
    </PublicLayout>
  );
}
