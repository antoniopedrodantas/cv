// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export function Disclaimer() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="card-disclaimer">* not publicly available</div>
    </>
  ) : (
    <>
      <div className="card-disclaimer">* não disponível publicamente</div>
    </>
  );
}

export default Disclaimer;
