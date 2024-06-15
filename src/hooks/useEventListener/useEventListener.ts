import { useEffect, useRef } from 'react';

type AnyElement = HTMLElement | Document | Window | MediaQueryList;
type AllEventMaps = HTMLElementEventMap &
  DocumentEventMap &
  WindowEventMap &
  MediaQueryListEventMap;

export function useEventListener<T extends keyof HTMLElementEventMap>(
  event: T,
  eventHandler: (event: HTMLElementEventMap[T]) => void,
  element: HTMLElement,
  options?: AddEventListenerOptions
): void;

export function useEventListener<T extends keyof DocumentEventMap>(
  event: T,
  eventHandler: (event: DocumentEventMap[T]) => void,
  element: Document,
  options?: AddEventListenerOptions
): void;

export function useEventListener<T extends keyof WindowEventMap>(
  event: T,
  eventHandler: (event: WindowEventMap[T]) => void,
  element?: Window,
  options?: AddEventListenerOptions
): void;

export function useEventListener<T extends keyof MediaQueryListEventMap>(
  event: T,
  eventHandler: (event: MediaQueryListEventMap[T]) => void,
  element: MediaQueryList,
  options?: AddEventListenerOptions
): void;

export function useEventListener<T extends keyof AllEventMaps>(
  event: T,
  eventHandler: (event: AllEventMaps[T] | Event) => void,
  element: AnyElement = window,
  options?: AddEventListenerOptions
) {
  const eventHandlerRef = useRef(eventHandler);

  useEffect(() => {
    eventHandlerRef.current = eventHandler;
  }, [eventHandler]);

  useEffect(() => {
    const internalHandler: typeof eventHandler = (event) => {
      return eventHandlerRef.current(event);
    };

    element.addEventListener(event, internalHandler, options);

    return () => {
      element.removeEventListener(event, internalHandler, options);
    };
  }, [event, element]);
}
