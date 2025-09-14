import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Filter, 
  Edit,
  Eye,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Users
} from "lucide-react";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
  lastVisit: string;
  status: "active" | "inactive" | "critical";
  medicalHistory: string[];
}

export const PatientView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Simulación de datos de pacientes (normalmente vendría del backend)
  const patients: Patient[] = [
    {
      id: "P001",
      name: "Juan Carlos Pérez",
      age: 45,
      gender: "Masculino",
      phone: "+57 300 123 4567",
      email: "juan.perez@email.com",
      address: "Calle 123 #45-67, Bogotá",
      lastVisit: "2024-01-15",
      status: "active",
      medicalHistory: ["Hipertensión", "Diabetes Tipo 2"]
    },
    {
      id: "P002",
      name: "María Elena González",
      age: 32,
      gender: "Femenino",
      phone: "+57 310 987 6543",
      email: "maria.gonzalez@email.com",
      address: "Carrera 45 #12-34, Medellín",
      lastVisit: "2024-01-20",
      status: "active",
      medicalHistory: ["Asma", "Alergias"]
    },
    {
      id: "P003",
      name: "Carlos Rodríguez",
      age: 67,
      gender: "Masculino",
      phone: "+57 320 456 7890",
      email: "carlos.rodriguez@email.com",
      address: "Avenida 67 #89-12, Cali",
      lastVisit: "2024-01-18",
      status: "critical",
      medicalHistory: ["Cardiopatía", "Hipertensión", "Obesidad"]
    },
    {
      id: "P004",
      name: "Ana Lucía Martín",
      age: 28,
      gender: "Femenino",
      phone: "+57 315 234 5678",
      email: "ana.martin@email.com",
      address: "Transversal 23 #56-78, Barranquilla",
      lastVisit: "2023-12-20",
      status: "inactive",
      medicalHistory: ["Migraña"]
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || patient.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-medical-secondary text-white";
      case "critical": return "bg-medical-danger text-white";
      case "inactive": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Activo";
      case "critical": return "Crítico";
      case "inactive": return "Inactivo";
      default: return "Desconocido";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gestión de Pacientes</h1>
          <p className="text-muted-foreground">
            Administra el registro y información de pacientes usando Hash Maps para acceso rápido
          </p>
        </div>
        <Button className="gap-2 medical-transition hover:medical-shadow">
          <Plus className="h-4 w-4" />
          Nuevo Paciente
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="medical-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 medical-transition"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                onClick={() => setSelectedFilter("all")}
                className="medical-transition"
              >
                Todos
              </Button>
              <Button
                variant={selectedFilter === "active" ? "default" : "outline"}
                onClick={() => setSelectedFilter("active")}
                className="medical-transition"
              >
                Activos
              </Button>
              <Button
                variant={selectedFilter === "critical" ? "default" : "outline"}
                onClick={() => setSelectedFilter("critical")}
                className="medical-transition"
              >
                Críticos
              </Button>
              <Button variant="outline" className="gap-2 medical-transition">
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="medical-card hover:medical-shadow medical-transition">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{patient.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">ID: {patient.id}</p>
                </div>
                <Badge className={getStatusColor(patient.status)}>
                  {getStatusText(patient.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Edad</p>
                  <p className="font-medium">{patient.age} años</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Género</p>
                  <p className="font-medium">{patient.gender}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{patient.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{patient.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs truncate">{patient.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Última visita: {patient.lastVisit}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Historial médico:</p>
                <div className="flex flex-wrap gap-1">
                  {patient.medicalHistory.map((condition, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2 medical-transition">
                  <Eye className="h-4 w-4" />
                  Ver
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2 medical-transition">
                  <Edit className="h-4 w-4" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Summary */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Resumen de Pacientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-medical-secondary">{patients.filter(p => p.status === "active").length}</p>
              <p className="text-sm text-muted-foreground">Activos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-medical-danger">{patients.filter(p => p.status === "critical").length}</p>
              <p className="text-sm text-muted-foreground">Críticos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-muted-foreground">{patients.filter(p => p.status === "inactive").length}</p>
              <p className="text-sm text-muted-foreground">Inactivos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{patients.length}</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};