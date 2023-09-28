export function Card({ children }: PageProps) {
  return (
    <div
      className="bg-black border-background border-8 bg-opacity-40 rounded-3xl "
      style={{ overflowY: "auto", scrollBehavior: "smooth", height: "9vh" }}
    >
      {children}
    </div>
  );
}

type PageProps = {
  children: React.ReactNode;
};
