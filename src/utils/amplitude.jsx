import { init, track } from "@amplitude/analytics-browser";

export const initAmplitude = () => {
  init("default", undefined, {
    useBatch: true,
    serverUrl: "https://amplitude.nav.no/collect-auto",
    ingestionMetadata: {
      sourceName: window.location.toString(),
    },
  });
};

//TODO: komponent må fylles ut med et identifiserende navn for mikrofrontenden
//Default er at navnet på appen blir benyttet ved replace av "tms-mikrofrontend-template-vitejs"
export const logNavigereEvent = () => {
  track("navigere", { komponent: "tms-mikrofrontend-template-vitejs" });
};
