import React from "react";
import PathLink from "../../components/PathLink";
import ServicePackage from "./ServicePackage";
import ServicePackageMb from "./ServicePackageMb";

const ServiceSection = () => {
  return (
    <section className="service--section__page pc container--padding">
      <div className="container--service">
        <PathLink content="Service" />
        <div className="line" />
        <ServicePackage />
        {/* <ServicePackageMb /> */}
      </div>
    </section>
  );
};

export default ServiceSection;
