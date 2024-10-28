// src/app/models/health-activity.model.ts
export class HealthActivity {
  id?: string; // Optional if not provided by the backend
  type: string;
  duration: number;
  caloriesBurned: number;
  stepsCount: number;
  date?: Date; // Optional if not provided by the backend
  userId?: string; // Optional if not provided by the backend
}