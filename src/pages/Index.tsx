import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardView } from "@/components/dashboard/DashboardView";
import { PatientView } from "@/components/patients/PatientView";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardView />;
      case "patients":
        return <PatientView />;
      case "doctors":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Gestión de Médicos</h2>
            <p className="text-muted-foreground">Módulo en desarrollo - Implementará Hash Maps para gestión de médicos</p>
          </div>
        );
      case "appointments":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Sistema de Citas</h2>
            <p className="text-muted-foreground">Módulo en desarrollo - Implementará Priority Queue para citas prioritarias</p>
          </div>
        );
      case "medical-history":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Historial Clínico</h2>
            <p className="text-muted-foreground">Módulo en desarrollo - Implementará Lista Doblemente Enlazada</p>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Reportes y Análisis</h2>
            <p className="text-muted-foreground">Módulo en desarrollo - Implementará BST para reportes ordenados</p>
          </div>
        );
      case "recommendations":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Sistema de Recomendaciones</h2>
            <p className="text-muted-foreground">Módulo en desarrollo - Implementará Grafos para recomendaciones</p>
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "ml-0"
        }`}>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
