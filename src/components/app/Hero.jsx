export const Hero = () => {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 w-full">
        <div className="grid h-full w-full grid-cols-2">
          <div className="bg-white"></div>
          <div className="bg-[#FFF68F]"></div>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="underline decoration-2">My Store</span>
          <br />
          Your Shopping
          <br />
          Destination
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
        </p>
      </div>
    </section>
  );
};
