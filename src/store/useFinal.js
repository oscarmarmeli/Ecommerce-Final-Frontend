import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFinal = create(
  persist(
    (set) => ({
      cart: [],
      setCart: (cierroCarrito) => set(() => ({ cart: cierroCarrito })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useFinal;