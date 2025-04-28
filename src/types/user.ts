export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  isSeller: boolean;
  createdAt: Date;
  password?: string;
}

export interface Address {
  id: string;
  userId: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}
