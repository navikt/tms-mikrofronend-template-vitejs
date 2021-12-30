export default [
  {
    url: "/api/tekst",
    method: "get",
    response: () => {
      return {
        tekst: "Dette kommer til å bli en awesome mikrofrontend! 😊 🎉",
      };
    },
  },
];
