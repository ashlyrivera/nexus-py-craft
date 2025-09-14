import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings, 
  Stethoscope,
  UserPlus,
  ClipboardList,
  TrendingUp,
  History
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen?: boolean;
}

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    description: "Vista general del sistema"
  },
  {
    id: "patients",
    label: "Pacientes",
    icon: Users,
    description: "Gestión de pacientes"
  },
  {
    id: "doctors",
    label: "Médicos",
    icon: Stethoscope,
    description: "Gestión de médicos"
  },
  {
    id: "appointments",
    label: "Citas",
    icon: Calendar,
    description: "Programación de citas"
  },
  {
    id: "medical-history",
    label: "Historial",
    icon: FileText,
    description: "Historial clínico"
  },
  {
    id: "reports",
    label: "Reportes",
    icon: TrendingUp,
    description: "Análisis y reportes"
  },
  {
    id: "recommendations",
    label: "Recomendaciones",
    icon: ClipboardList,
    description: "Sistema de recomendaciones"
  }
];

export const Sidebar = ({ activeSection, onSectionChange, isOpen = true }: SidebarProps) => {
  return (
    <aside className={cn(
      "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-sidebar-border bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60 transition-transform duration-300 z-40",
      !isOpen && "-translate-x-full md:translate-x-0"
    )}>
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4 space-y-2">
          <div className="mb-6">
            <h2 className="text-sm font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-3">
              Navegación
            </h2>
          </div>
          
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-left medical-transition",
                activeSection === item.id 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground medical-shadow" 
                  : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <div className="flex flex-col items-start">
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-sidebar-foreground/60">
                  {item.description}
                </span>
              </div>
            </Button>
          ))}
        </div>
        
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => onSectionChange("settings")}
          >
            <Settings className="h-4 w-4" />
            Configuración
          </Button>
        </div>
      </div>
    </aside>
  );
};