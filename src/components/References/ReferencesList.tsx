import React from "react";
import ReferenceItem from "./ReferenceItem";

export type ReferenceInfo = {
  title: string;
  description: string;
};

const referencesList: Array<ReferenceInfo> = [
  {
    description:
      '"A musician of the utmost brilliance and creativity. He will always have a place with us."',
    title: "Berlin Philharmonic",
  },
  {
    description:
      '"He recorded his latest album, Art Nuvau x-23, with us, and we couldnt be happier with the results"',
    title: "Abbey Road Studios",
  },
  {
    description:
      '"Deryaba is a professional through and through. I had the pleasure of him recording violin for my upcoming album."',
    title: "Beyonce",
  },
];

export default function ReferencesList() {
  return (
    <div className="gap-8 md:flex md:justify-between">
      {referencesList.map((referenceInfo, index) => (
        <ReferenceItem
          referenceInfo={referenceInfo}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}
