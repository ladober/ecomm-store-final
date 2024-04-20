export const isUserAdmin = (user) => {
  if (!user) return false;
  return user.role.includes("admin");
};
