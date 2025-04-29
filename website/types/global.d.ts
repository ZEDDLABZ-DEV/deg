/**
 * Custom type definitions to help with DOM element typings
 */

// Enhance QuerySelector typings
interface Document {
  // Make sure querySelectorAll with 'img' selector returns HTMLImageElement
  querySelectorAll(selectors: 'img'): NodeListOf<HTMLImageElement>;
  querySelectorAll(selectors: 'img:not([loading])'): NodeListOf<HTMLImageElement>;
  querySelectorAll(selectors: 'img:not([width]):not([height])'): NodeListOf<HTMLImageElement>;
}

// Ensure NodeListOf<Element> can be treated more specifically for images
interface NodeListOf<TNode extends Node> {
  forEach<T extends TNode>(callbackfn: (value: T, key: number, parent: NodeListOf<T>) => void, thisArg?: any): void;
}

// Extend the IntersectionObserverEntry type to have target as HTMLElement
interface IntersectionObserverEntry {
  target: HTMLElement;
}

// Define a global navigator type for prefers-reduced-motion
interface Navigator {
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
  };
}

// Make HTMLImageElement dataset more specific for our usage
interface HTMLImageElement {
  dataset: {
    src?: string;
    [key: string]: string | undefined;
  };
}

// Add our custom window properties
interface Window {
  webpSupported?: boolean;
  avifSupported?: boolean;
} 