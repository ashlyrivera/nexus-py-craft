import { Button } from "@/components/ui/button";
import { Bell, Search, User, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg medical-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H+</span>
            </div>
            <div>
              <h1 className="font-semibold text-foreground">MediSystem</h1>
              <p className="text-xs text-muted-foreground">Hospital Management</p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar pacientes, médicos..."
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring medical-transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-medical-danger rounded-full text-xs"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};