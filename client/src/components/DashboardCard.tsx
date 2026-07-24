type DashboardCardProps = {
  title: string;
  value: string;
  icon: string;
};

function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6 shadow-lg">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-zinc-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;