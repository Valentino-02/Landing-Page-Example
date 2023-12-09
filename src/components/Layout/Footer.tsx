import SocialMediaIcons from "../shared/SocialMediaIcons";

<SocialMediaIcons />;

export default async function Footer() {
  return (
    <footer className="h-64 pt-10 bg-red">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="justify-center text-center md:flex md:justify-between ">
          <p className="text-2xl font-semibold text-yellow">Deryaba Collin</p>
          <p className=" text-md text-yellow">©2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
