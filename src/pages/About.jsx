import React from "react";

const InfoPage = () => {
  return (
    <div className="dark:bg-gradient-to-t from-dark-primary to-light-quaternary min-h-screen">
      <div className="container mx-auto py-8 ">
        <div className="p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">About</h1>
          <p className=" mb-6">
            Welcome to our course project! Below, you'll find information about
            the project.
          </p>
          <h2 className="text-lg font-semibold mb-2">Transfer Fees</h2>
          <p className=" mb-4">
            We charge a 0.5% fee on all transfers. This fee is used to cover the
            costs of running the project.
          </p>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className=" mb-4">
            If you have any questions or concerns about our fee policies, please
            don't hesitate to{" "}
            <a href="#" className="">
              contact us
            </a>
            . We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
