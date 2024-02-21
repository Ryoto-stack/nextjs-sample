import Image from "next/image";
import TableSample from "@/components/TableSample"


export default function Home() {
  return (
    <main className="max-w-[1110px] w-full mx-auto">
      <h1 className='text-5xl text-center py-6'> HOME PAGE </h1>
      <TableSample/>
    </main>
  );
}
