function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return "Active";
    }
    return "Inactive";
  }
}

function formatCoordinate(
  point: readonly [number, number, string]
): string {
  const lat = point[0];
  const lng = point[1];
  const name = point[2];
  return "Location: " + name + " (" + lat + ", " + lng + ")";
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let combined: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    combined = combined.concat(arrays[i]);
  }
  return combined;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popular: Course[] = [];
  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      popular.push(course);
    }
  }
  return popular;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];
  for (const item of items) {
    values.push(item[key]);
  }
  return values;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(function () {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
