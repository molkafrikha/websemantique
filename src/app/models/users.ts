type Role = 'admin' | 'expert' | 'practitioner';
export interface Users {
    name: string;
    email: string;
    password: string;
    phone: number;
    age: number;
    weight: GLfloat;
    height:GLfloat;
    activityLevel: number;
    dateOfBirth: number;
    gender: string;
    role: Role;
    
    
  }