
import { CONFIG } from '../config';

export const gasService = {
  /**
   * Obtiene datos de Google Sheets (FAQs, Cursos, etc.)
   */
  async fetchData(action: string, params: Record<string, string> = {}) {
    if (!CONFIG.GAS_DEPLOY_URL || CONFIG.GAS_DEPLOY_URL.includes('TU_URL')) return null;

    try {
      const queryParams = new URLSearchParams({ action, ...params }).toString();
      const response = await fetch(`${CONFIG.GAS_DEPLOY_URL}?${queryParams}`);
      if (!response.ok) throw new Error("Error en la respuesta de Google");
      return await response.json();
    } catch (error) {
      console.warn("GAS no configurado o error de conexión:", error);
      return null;
    }
  },

  /**
   * Envía datos a Google Sheets (Logs, Formularios, Leads)
   */
  async postData(action: string, data: any) {
    if (!CONFIG.GAS_DEPLOY_URL || CONFIG.GAS_DEPLOY_URL.includes('TU_URL')) return null;

    try {
      // Usamos no-cors para evitar bloqueos si Google no devuelve JSON
      await fetch(CONFIG.GAS_DEPLOY_URL, {
        method: 'POST',
        mode: 'no-cors', 
        body: JSON.stringify({ action, ...data }),
      });
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
};
