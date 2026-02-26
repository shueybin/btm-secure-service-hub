import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/button';
import { LogOut, ShoppingBag, LayoutDashboard } from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-indigo-600">
          <ShoppingBag className="h-8 w-8" />
          <span>TalentFlow</span>
        </Link>

        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup/customer">
                <Button variant="primary">Join as Client</Button>
              </Link>
              <Link to="/signup/creator">
                <Button variant="secondary">Become a Creator</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to={user.role === 'customer' ? '/customer/dashboard' : '/creator/dashboard'}>
                <Button variant="ghost" className="space-x-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm" className="space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};