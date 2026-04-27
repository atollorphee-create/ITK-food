import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  useMemo,
  useCallback,
} from "react";
import { uid } from "../utils/cart";

const CartContext = createContext(null);

const STORAGE_KEY = "itk_cart_v1";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return { ...state, items: [...state.items, action.item] };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((i) => i.cartId !== action.cartId),
      };
    }
    case "QTY": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.cartId === action.cartId
            ? { ...i, qty: Math.max(1, action.qty) }
            : i
        ),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      return { ...state, items: action.items || [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [optionsModal, setOptionsModal] = useState(null); // { product, kind, catId }

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", items: JSON.parse(raw) });
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {}
  }, [state.items]);

  const addItem = useCallback((item) => {
    dispatch({ type: "ADD", item: { ...item, cartId: uid(), qty: item.qty || 1 } });
  }, []);

  const removeItem = useCallback((cartId) => {
    dispatch({ type: "REMOVE", cartId });
  }, []);

  const setQty = useCallback((cartId, qty) => {
    dispatch({ type: "QTY", cartId, qty });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const total = useMemo(
    () => state.items.reduce((acc, i) => acc + i.unitPrice * i.qty, 0),
    [state.items]
  );

  const count = useMemo(
    () => state.items.reduce((acc, i) => acc + i.qty, 0),
    [state.items]
  );

  const openOptions = useCallback((payload) => setOptionsModal(payload), []);
  const closeOptions = useCallback(() => setOptionsModal(null), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const value = {
    items: state.items,
    addItem,
    removeItem,
    setQty,
    clear,
    total,
    count,
    drawerOpen,
    openDrawer,
    closeDrawer,
    optionsModal,
    openOptions,
    closeOptions,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
