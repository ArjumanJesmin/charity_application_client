import { TDrawerItem } from "@/types/common";
import { USER_ROLE, UserRole } from "../contants/role";

export const drawerItems = (role: UserRole): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Manage-users",
          path: `${role}/manage-users`,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Manage-users",
          path: `${role}/manage-users`,
        }
      );
      break;
    case USER_ROLE.MANAGER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Users-details",
          path: `${role}/user-details`,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "My-profile",
          path: `${role}/my-profile`,
        }
      );
      break;
  }
  return [...roleMenus];
};
