export function Card({ children }: PageProps) {
  return (
    <div
      className="bg-black border-background border-8 bg-opacity-40 rounded-3xl mx-auto pb-16"
      style={{ overflowY: "scroll", height: "80vh", scrollBehavior: "smooth" }}
    >
      {children}
    </div>
  );
}

type PageProps = {
  children: React.ReactNode;
};
