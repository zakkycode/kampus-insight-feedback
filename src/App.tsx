
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/Login";
import AkademikDashboard from "@/pages/akademik/AkademikDashboard";
import DosenDashboard from "@/pages/dosen/DosenDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RoleBasedRedirect = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (user.role === 'akademik') {
    return <Navigate to="/akademik" replace />;
  } else if (user.role === 'dosen') {
    return <Navigate to="/dosen" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<RoleBasedRedirect />} />
            
            {/* Akademik Routes */}
            <Route path="/akademik" element={
              <ProtectedRoute allowedRoles={['akademik']}>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AkademikDashboard />} />
            </Route>
            
            {/* Dosen Routes */}
            <Route path="/dosen" element={
              <ProtectedRoute allowedRoles={['dosen']}>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<DosenDashboard />} />
            </Route>
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
