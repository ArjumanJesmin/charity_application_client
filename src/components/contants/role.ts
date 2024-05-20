export const USER_ROLE = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  USER: "user",
  MANAGER: "manager",
};

export type UserRole = keyof typeof USER_ROLE;
