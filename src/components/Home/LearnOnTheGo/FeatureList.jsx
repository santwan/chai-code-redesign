import { Bolt, Bell, ClipboardList } from "lucide-react";

const features = [
  {
    icon: <Bolt className="text-orange-500 w-5 h-5" />,
    label: "Offline course access",
  },
  {
    icon: <Bell className="text-orange-500 w-5 h-5" />,
    label: "Live session notifications",
  },
  {
    icon: <ClipboardList className="text-orange-500 w-5 h-5" />,
    label: "Revision while commuting",
  },
];

const FeaturesList = () => {
  return (
    <div className="space-y-4 mt-6">
      {features.map((f, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <span className="bg-orange-900/30 p-2 rounded-full">{f.icon}</span>
          <p className="text-sm font-mono dark:text-gray-200">{f.label}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;

