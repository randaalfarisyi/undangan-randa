const BorderSide = () => {
  return (
    <div
      className="absolute z-10 top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.11] h-full w-screen"
      style={{
        backgroundImage: "url('/border-side.png')",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center", // atau 'left', 'right'
        backgroundSize: "contain", // atau "auto 500px" sesuai kebutuhan
      }}
    />
  );
};

export default BorderSide;
