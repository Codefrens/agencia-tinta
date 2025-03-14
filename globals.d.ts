declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
      ar?: boolean;
      poster?: string;
      "shadow-intensity"?: string | number;
      "camera-controls"?: boolean;
      "touch-action"?: string;
      // Añade aquí cualquier otra propiedad específica que necesites
    };
  }
}
