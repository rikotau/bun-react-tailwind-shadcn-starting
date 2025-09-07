import { create } from 'zustand';
import { api2 } from '@/lib';
import Cookies from 'js-cookie';
import type { AuthMe, AuthState, AuthUser, LoginFormValues, LoginResponse } from '@/interfaces';
import type { CookieType, ThemeStorageKey,  } from '@/types';

const cookieName: CookieType = 'accessToken';
const themeStorageKey: ThemeStorageKey = 'theme';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  login: async ({ value }: { value: LoginFormValues }): Promise<LoginResponse> => {
    set({ isLoading: true });
    try {
      const res = await api2.post<LoginResponse>('/auth/login', value);

      const token: string = res.data.data.accessToken;
      const expires: string = res.data.data.expiresIn;

      const expirationDate = new Date();
      const valueInSeconds = parseInt(expires);

      if (expires.endsWith('d')) {
        expirationDate.setDate(expirationDate.getDate() + valueInSeconds);
      } else if (expires.endsWith('h')) {
        expirationDate.setHours(expirationDate.getHours() + valueInSeconds);
      } else if (expires.endsWith('m')) {
        expirationDate.setMinutes(expirationDate.getMinutes() + valueInSeconds);
      }

      Cookies.set(cookieName, token, { expires: expirationDate, path: '/' });

      const response = await api2.get<AuthMe>('/auth/me');
      const user: AuthUser = response.data.data;

      set({ user, isAuthenticated: true });
      return res.data;
    } catch (error) {
      Cookies.remove(cookieName);
      set({ user: null, isAuthenticated: false });
      throw new Error(error.response?.data?.message || 'Login failed');
    } finally {
      set({ isLoading: false });
    }
  },
  checkAuth: async () => {
    const token = Cookies.get(cookieName);

    if (!token) {
      set({ user: null, isAuthenticated: false, isLoading: false });
      return;
    }

    try {
      set({ isLoading: true });
      const response = await api2.get<AuthMe>('/auth/me');
      const user: AuthUser = response.data.data;
      set({ user, isAuthenticated: true });
    } catch (error) {
      Cookies.remove(cookieName);
      set({ user: null, isAuthenticated: false });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    // 1. Hapus token otentikasi dari cookie browser.
    Cookies.remove(cookieName);
    localStorage.removeItem(themeStorageKey);

    // 2. Atur ulang state otentikasi di Zustand ke kondisi awal (tidak login).
    set({
      user: null,           // Hapus data pengguna dari state.
      isAuthenticated: false, // Tandai bahwa pengguna tidak lagi terotentikasi.
      isLoading: false,       // status loading dimatikan.
    });
  },

}));