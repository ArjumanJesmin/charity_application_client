import { UserRole } from "@/components/contants/role";
import { drawerItems } from "@/components/utils/drawerItems";

const Sidebar = () => {
  return (
    <div className="h-full w-64 ">
      <ul className="space-y-2 p-4">
        {drawerItems("admin" as UserRole).map((item, index) => (
          <li key={index} className="hover:bg-amber-200 p-2 rounded">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
