import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

type CounterState = {
  count: number;
};

export const useCounter = create<CounterState>()(persist(() => ({ count: 0 }), { name: 'my-counter-store', storage: createJSONStorage(() => localStorage) }));

export const increase = () => {
  useCounter.setState((state) => ({
    count: state.count + 1,
  }));
};

export const resetStore = () => {
  useCounter.setState(useCounter.getInitialState());
};
