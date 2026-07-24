import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-zinc-400">
        Here's your coding progress today.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <DashboardCard
          title="Current Streak"
          value="12 Days"
          icon="🔥"
        />

        <DashboardCard
          title="Tasks Completed"
          value="8"
          icon="✅"
        />

        <DashboardCard
          title="Active Courses"
          value="3"
          icon="📚"
        />
      </div>
    </MainLayout>
  );
}

export default Dashboard;