export class User {
  name: string;
  age: number;
  email: string;
  height: number;
  phone: string;
  weight: number;
  heartRate: number;
  bloodPressure: string;
  cholesterol: number;
  diabetesStatus: string;

  // Default constructor
  constructor(
    name: string = '',
    age: number = 0,
    email: string = '',
    height: number = 0,
    phone: string = '',
    weight: number = 0.0,
    heartRate: number = 0,
    bloodPressure: string = '',
    cholesterol: number = 0,
    diabetesStatus: string = ''
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.height = height;
    this.phone = phone;
    this.weight = weight;
    this.heartRate = heartRate;
    this.bloodPressure = bloodPressure;
    this.cholesterol = cholesterol;
    this.diabetesStatus = diabetesStatus;
  }

  // Method to get the individual URI
  getIndividualUri(): string {
    return `http://example.com/users/${this.email}`;
  }
}
