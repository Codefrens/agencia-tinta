// Configuración de Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

// Función para enviar eventos personalizados a GTM
export const gtmEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    // Inicializar dataLayer si no existe
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

// Función para enviar eventos de página vista
export const gtmPageView = (url: string) => {
  gtmEvent('page_view', {
    page_location: url,
  });
}; 