import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon, 
  description,
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn("medical-card medical-transition hover:medical-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {change && (
            <p className={cn(
              "text-xs font-medium",
              changeType === "positive" && "text-medical-secondary",
              changeType === "negative" && "text-medical-danger",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};