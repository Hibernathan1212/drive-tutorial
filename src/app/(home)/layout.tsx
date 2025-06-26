export default function HomePage(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <main className="flex flex-col items-center gap-8">{props.children}</main>
    </div>
  );
}