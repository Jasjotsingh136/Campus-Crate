export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  hostelBlock: string;
  status: 'Available' | 'Reserved' | 'Sold';
  imageUrl: string;
  sellerId: string;
  createdAt: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Ergonomic Study Chair",
    description: "Used for 1 semester, in perfect condition. Adjustable height and lumbar support.",
    price: 850,
    category: "Furniture",
    hostelBlock: "Block A",
    status: "Available",
    imageUrl: "/images/premium_chair_1777571395373.png",
    sellerId: "user_1",
    createdAt: "2026-04-28T10:00:00Z"
  },
  {
    id: "2",
    title: "Engineering Drawing Board",
    description: "Standard size drawing board with drafter. A few scratches but works fine.",
    price: 300,
    category: "Books & Notes",
    hostelBlock: "Block C",
    status: "Available",
    imageUrl: "/images/premium_board_1777571412481.png",
    sellerId: "user_2",
    createdAt: "2026-04-29T14:30:00Z"
  },
  {
    id: "3",
    title: "Wooden Storage Cabinet",
    description: "Compact wooden almirah perfect for keeping clothes and valuables safe in a hostel room.",
    price: 1500,
    category: "Furniture",
    hostelBlock: "Block M",
    status: "Reserved",
    imageUrl: "/images/premium_cabinet_1777571428148.png",
    sellerId: "user_3",
    createdAt: "2026-04-25T09:15:00Z"
  },
  {
    id: "4",
    title: "Hercules Cycle (Non-gear)",
    description: "Recently serviced, new brakes. Essential for getting to early classes.",
    price: 2200,
    category: "Cycles",
    hostelBlock: "Block H",
    status: "Available",
    imageUrl: "/images/premium_cycle_1777571444722.png",
    sellerId: "user_4",
    createdAt: "2026-04-30T08:00:00Z"
  },
  {
    id: "5",
    title: "Hostel Mattress (Single)",
    description: "Clean mattress, used with protector. Includes two pillows.",
    price: 500,
    category: "Furniture",
    hostelBlock: "Block J",
    status: "Available",
    imageUrl: "/images/premium_mattress_1777571461312.png",
    sellerId: "user_5",
    createdAt: "2026-04-27T11:20:00Z"
  },
  {
    id: "6",
    title: "Scientific Calculator FX-991EX",
    description: "Almost new, with box and manual. Allowed in all exams.",
    price: 900,
    category: "Electronics",
    hostelBlock: "Block A",
    status: "Available",
    imageUrl: "/images/premium_calculator_1777571479869.png",
    sellerId: "user_6",
    createdAt: "2026-04-30T10:05:00Z"
  }
];
