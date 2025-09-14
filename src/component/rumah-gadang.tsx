const RumahGadang = () => {
  return (
    <div className="absolute max-w-[500px] flex justify-center items-start lg:items-end h-screen top-0 left-1/2 transform -translate-x-1/2 w-screen pointer-events-none opacity-[0.1]">
      <img
        src="background.jpeg"
        alt="rumah"
        className="opacity-[0.3]"
        style={{
          height: "100vh",
          maxWidth: "500px",
        }}
      />
    </div>
  );
};

export default RumahGadang;
