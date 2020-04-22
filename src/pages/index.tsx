import React from "react";

import { Button, Input, Card } from "../components";

const HomePage: React.FC<any> = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Card title="muhammed" like={12} sale={20} price={89} />
    </div>
  );
};

export default HomePage;
