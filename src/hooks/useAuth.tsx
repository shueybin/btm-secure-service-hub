import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'customer' | 'creator';

interface User {
  id: string;
  email: string;
  role: UserRole;
  profile?: any;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mocking auth check
    const storedUser = localStorage.getItem('market_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (role: UserRole) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: `${role}@example.com`,
      role,
    };
    setUser(mockUser);
    localStorage.setItem('market_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('market_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};