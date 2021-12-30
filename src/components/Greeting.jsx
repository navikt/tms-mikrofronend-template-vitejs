import React from "react";
import { Panel } from "@navikt/ds-react";

const Greeting = ({ tekst }) => {
  return (
    <div className="greeting">
      <Panel className="greeting__panel">
        <p>Dette kommer til å bli en awesome mikrofrontend! 😊 🎉</p>
      </Panel>
    </div>
  );
};

export default Greeting;
