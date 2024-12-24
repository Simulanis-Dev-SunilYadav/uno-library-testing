import React, {useEffect } from "react";
import "./App.css";
import { UiComponents, initialize } from "@simulanisindia/ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/Forms/FormPage";
import TabStyle from "./pages/Tabs/TabStyle";
import Button from "./pages/Buttons/Button";


function App() {
  const { ThemeSwitchButton, Header } = UiComponents;

  const searchProps = {
    placeholder: "Search...",
  };

  useEffect(() => {
    initialize("f6547169-f819-4ca9-a5dd-01d7abdc1c30");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header  searchProps={searchProps} showSearch={true} showDrawer={true} showThemeSwitch={true} />
        <Routes>
          <Route path="/home" element={<ThemeSwitchButton />} />
          <Route path="/form-page" element={<FormPage />} />
          <Route path="/tabs" element={<TabStyle />} />
          <Route path="/buttons" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
