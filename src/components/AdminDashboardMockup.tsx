import Image from "next/image";

const AdminDashboardMockup = () => {
  return (
    <div className="w-full max-w-[640px] mx-auto group">
      <div className="relative aspect-square sm:aspect-[16/12] w-full rounded-[28px] md:rounded-[40px] overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.25)] border border-white/60">
        <Image
          src="/media/admin-panel.webp"
          alt="8AM school admin dashboard"
          fill
          preload
          sizes="(max-width: 1024px) 92vw, 600px"
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-12 bg-gray-300" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">School Admin Dashboard</p>
        <div className="h-px w-12 bg-gray-300" />
      </div>
    </div>
  );
};

export default AdminDashboardMockup;
