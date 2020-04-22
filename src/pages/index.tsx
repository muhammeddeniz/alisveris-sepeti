import React from "react";

import { Button, Input } from "../components";

const HomePage: React.FC<any> = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button primary>Muhammed Deniz</Button>
      <Input placeholder="deneme" />
    </div>
  );
};

export default HomePage;
