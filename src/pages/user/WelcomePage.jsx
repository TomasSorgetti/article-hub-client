import { useEffect, useState } from "react";
import AddNewWorkbenchCard from "../../components/ui/cards/AddNewWorkbenchCard";
import WorkbenchCard from "../../components/ui/cards/WorkbenchCard";
import WorkbenchCardTest from "../../components/ui/cards/WorkbenchCardTest";
import PublicLayout from "../../layouts/PublicLayout";
import { useAuthStore } from "../../lib/store/auth";
import AddNewWorkbenchModal from "../../components/ui/NewWorkbenchModal";
import { useWorkbenchStore } from "../../lib/store/workbench";

// todo => when login, redirect to welcome, but workbench is empty. Must return workbenchs in user, or change login and get all workbenchs instead
export default function WelcomePage() {
  const { user } = useAuthStore();
  const { workbenches, loadWorkbenches, createWorkbench } = useWorkbenchStore();
  const [openNewWorkbench, setOpenNewWorkbench] = useState(false);

  useEffect(() => {
    if (user && workbenches.length === 0) {
      loadWorkbenches();
    }
  }, [user, workbenches, loadWorkbenches]);

  const handleCreateWorkbench = (form) => {
    createWorkbench(form);
    setOpenNewWorkbench(false);
  };
  
  return (
    <PublicLayout
      title="Welcome to Article Hub | Start creating and sharing your content"
      description="Get started with Article Hub — create your first articles, explore integrations with your website, and discover a smarter way to manage your blog content."
    >
      <main className="mt-32 container mx-auto min-h-[60vh]">
        <h1 className="relative z-20 text-3xl font-bold">
          Welcome {user?.username}
        </h1>
        <div className="mt-12 flex gap-10 flex-wrap">
          {workbenches?.map((workbench) => (
            <WorkbenchCardTest
              key={workbench.id}
              id={workbench.id}
              title={workbench.name}
              description={workbench.description}
              owner={workbench.owner}
              members={workbench.members}
              // role={workbench.role}
              isArchived={workbench.isArchived}
              createdAt={workbench.createdAt}
              settings={workbench.settings}
            />
          ))}
          <AddNewWorkbenchCard
            handleClick={() => setOpenNewWorkbench((prev) => !prev)}
          />
          <AddNewWorkbenchModal
            isOpen={openNewWorkbench}
            toggleModal={() => setOpenNewWorkbench((prev) => !prev)}
            createWorkbench={handleCreateWorkbench}
          />
        </div>
      </main>
    </PublicLayout>
  );
}
