export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex items-center justify-center bg-[#FAF8FC] p-4 w-full">
      {children}
    </div>
  );
}