export interface Project {
  id: number;
  name: string;
  value: string;        // REQUIRED
  client?: string;      // OPTIONAL
  category?: string;    // OPTIONAL (NEW)
  image?: string;       // OPTIONAL
  images?: string[];    // OPTIONAL
}

export interface Value {
  title: string;
  description: string;
  icon: any;
}

export interface Stat {
  label: string;
  value: string;
}
