export interface Project {
  id: number;
  name: string;
  client?: string;
  value?: string;
  images?: string[];
  heroImage?: string;     // 👈 NEW (optional)
  heroSubtitle?: string;  // 👈 NEW (optional)
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
