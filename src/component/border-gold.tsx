const BorderGold = () => {
  return (
    <div className="absolute flex z-1 justify-center items-start lg:items-end h-screen top-0 left-1/2 transform -translate-x-1/2 w-screen pointer-events-none opacity-[0.5]">
      <img
        src="border.png"
        alt="rumah"
        className="opacity-[0.3]"
        style={{
          height: "100vh",
          width: "100vw",
          maxWidth: "500px",
        }}
      />
    </div>
  );
};

export default BorderGold;
