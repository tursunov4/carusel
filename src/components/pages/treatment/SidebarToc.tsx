import {TreatmentSection} from "@/services/TreatmentSection";

interface Props {
  sections: TreatmentSection[]
}

export default function SidebarToc({ sections }: Props) {
  return (
    <nav className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow p-4 border border-gray-200 dark:border-gray-700">
      <div className="space-y-4 text-sm list-none p-0">
        {sections.map((sec) => (
          <div key={sec.id} className="relative group">
            <a
              href={`#section-${sec.id}`}
              className="block text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-200 transition pb-2"
            >
              {sec.title}
            </a>
            <span
              className="absolute bottom-[-5px] left-0 h-[2px] bg-orange-500 w-[30px] group-hover:w-full transition-all duration-300"
            ></span>
          </div>
        ))}
      </div>
    </nav>
  )
}
