import React, { useState } from "react";

const InteractiveDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex md:hidden">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="peer sr-only relative"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <label
        htmlFor="drawer-toggle"
        className={`absolute left-0 top-0 inline-block rounded-lg bg-green-600 p-4 transition-all duration-500 ${
          isDrawerOpen ? "left-64 rotate-180" : ""
        } neon-glow`}
      >
        <div className="mb-3 h-1 w-6 -rotate-45 rounded-lg bg-black"></div>
        <div className="h-1 w-6 rotate-45 rounded-lg bg-black"></div>
      </label>

      <div
        className={`fixed left-0 top-0 z-20 h-full w-64 -translate-x-full transform bg-white shadow-lg transition-all duration-500 ${
          isDrawerOpen ? "translate-x-0" : ""
        }`}
      >
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Drawer</h2>
          <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDrawer;
