export interface StoreProps {
  id: number;
  name: string;
  deliveryAmount: number;
  rating: number;
  isOpen: boolean;
  logoUrl: string;
}

export interface DetailedStoreProps {
  id: number;
  name: string;
  deliveryAmount: number;
  rating: number;
  isOpen: boolean;
  logoUrl: string;
  closingTime: string;
  minimumOrder: number;
  categories: ICategoryFood[];
}

export interface ICategoryFood {
  name: string;
  description: string | undefined;
  promotion: boolean;
  foods: IFood[];
}

export interface IFood {
  name: string;
  description: string | undefined;
  price: number;
  initialPrice: boolean;
  promotionPrice: number | undefined;
  details: string[];
}
