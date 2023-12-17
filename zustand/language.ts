import { create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Store = {
    language: string;
    locale: string;
    setLanguage: (language : string , locale : string) => void;
}

export const useLanguageStore = create<Store>()(
  persist(
    (set, get) => ({
      language: "English",
      locale: "en",
      setLanguage: (language , locale) => set({ language , locale}),
    }),
    {
      name: 'language',
      storage: createJSONStorage(() => localStorage)
    },
  ),
)