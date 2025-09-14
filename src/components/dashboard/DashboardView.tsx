import { StatsCard } from "./StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Stethoscope, 
  Activity,
  AlertTriangle,
  Clock,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import hospitalHero from "@/assets/hospital-hero.jpg";

export const DashboardView = () => {
  const stats = [
    {
      title: "Total Pacientes",
      value: "2,847",
      change: "+12% respecto al mes anterior",
      changeType: "positive" as const,
      icon: Users,
      description: "Pacientes registrados en el sistema"
    },
    {
      title: "Citas Hoy",
      value: "47",
      change: "8 citas pendientes",
      changeType: "neutral" as const,
      icon: Calendar,
      description: "Programadas para hoy"
    },
    {
      title: "Médicos Activos",
      value: "24",
      change: "+2 nuevos este mes",
      changeType: "positive" as const,
      icon: Stethoscope,
      description: "Médicos disponibles"
    },
    {
      title: "Emergencias",
      value: "3",
      change: "Crítico: 1, Moderado: 2",
      changeType: "negative" as const,
      icon: AlertTriangle,
      description: "En cola de prioridad"
    }
  ];

  const recentActivities = [
    {
      type: "appointment",
      message: "Nueva cita programada - Dr. García con Juan Pérez",
      time: "Hace 5 min",
      priority: "normal"
    },
    {
      type: "emergency",
      message: "Emergencia registrada - Paciente crítico en urgencias",
      time: "Hace 12 min",
      priority: "high"
    },
    {
      type: "completion",
      message: "Consulta completada - Dra. Martínez con Ana López",
      time: "Hace 20 min",
      priority: "normal"
    },
    {
      type: "registration",
      message: "Nuevo paciente registrado - Carlos Rodríguez",
      time: "Hace 35 min",
      priority: "normal"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl medical-card">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${hospitalHero})` }}
        >
          <div className="absolute inset-0 medical-gradient opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <h1 className="text-3xl font-bold mb-2">MediSystem Dashboard</h1>
              <p className="text-primary-foreground/90">
                Sistema de Gestión Hospitalaria - Bienvenido al panel principal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className={`h-2 w-2 rounded-full mt-2 flex-shrink-0 ${
                  activity.priority === "high" ? "bg-medical-danger" : "bg-medical-secondary"
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full medical-transition">
              Ver todas las actividades
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Acciones Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <Button className="w-full justify-start gap-3 medical-transition hover:medical-shadow">
                <Users className="h-4 w-4" />
                Registrar Nuevo Paciente
              </Button>
              <Button variant="secondary" className="w-full justify-start gap-3 medical-transition">
                <Calendar className="h-4 w-4" />
                Programar Cita
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 medical-transition">
                <AlertTriangle className="h-4 w-4" />
                Registrar Emergencia
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 medical-transition">
                <CheckCircle className="h-4 w-4" />
                Completar Consulta
              </Button>
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Citas completadas hoy</span>
                  <span className="font-medium">32/47</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-medical-secondary h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};