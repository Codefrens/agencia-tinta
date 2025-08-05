// Configuración de Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

// Función para enviar eventos personalizados a GTM
// Compatible con @next/third-parties/google
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

// Funciones adicionales para eventos comunes
export const gtmTrackClick = (elementName: string, category?: string) => {
  gtmEvent('click', {
    element_name: elementName,
    event_category: category || 'UI',
  });
};

export const gtmTrackFormSubmit = (formName: string, success: boolean = true) => {
  gtmEvent('form_submit', {
    form_name: formName,
    success,
  });
};

export const gtmTrackScroll = (scrollDepth: number) => {
  gtmEvent('scroll', {
    scroll_depth: scrollDepth,
  });
}; 