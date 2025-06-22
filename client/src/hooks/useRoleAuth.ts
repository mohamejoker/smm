import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const useRoleAuth = () => {
  const { user, isAuthenticated } = useAuth();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user) {
      // Mock role assignment - in real app this would come from backend
      setUserRole('admin');
    } else {
      setUserRole(null);
    }
    setIsLoading(false);
  }, [isAuthenticated, user]);

  const hasRole = (role: string) => {
    return userRole === role;
  };

  const hasAnyRole = (roles: string[]) => {
    return userRole ? roles.includes(userRole) : false;
  };

  return {
    userRole,
    isLoading,
    hasRole,
    hasAnyRole,
    isAdmin: userRole === 'admin',
    isEditor: userRole === 'editor',
    isViewer: userRole === 'viewer'
  };
};

