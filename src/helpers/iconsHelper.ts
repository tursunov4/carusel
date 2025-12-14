import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as CiIcons from 'react-icons/ci'
import * as DiIcons from 'react-icons/di'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import * as FcIcons from 'react-icons/fc'
import * as GiIcons from 'react-icons/gi'
import * as GoIcons from 'react-icons/go'
import * as GrIcons from 'react-icons/gr'
import * as HiIcons from 'react-icons/hi'
import * as ImIcons from 'react-icons/im'
import * as IoIcons from 'react-icons/io'
import * as Io5Icons from 'react-icons/io5'
import * as LuIcons from 'react-icons/lu'
import * as MdIcons from 'react-icons/md'
import * as PiIcons from 'react-icons/pi'
import * as RiIcons from 'react-icons/ri'
import * as RxIcons from 'react-icons/rx'
import * as SiIcons from 'react-icons/si'
import * as SlIcons from 'react-icons/sl'
import * as TbIcons from 'react-icons/tb'
import * as TfiIcons from 'react-icons/tfi'
import * as TiIcons from 'react-icons/ti'
import * as VscIcons from 'react-icons/vsc'
import * as CgIcons from 'react-icons/cg'

const allIcons = {
  Ai: AiIcons,
  Bs: BsIcons,
  Bi: BiIcons,
  Ci: CiIcons,
  Di: DiIcons,
  Fi: FiIcons,
  Fa: FaIcons,
  Fc: FcIcons,
  Gi: GiIcons,
  Go: GoIcons,
  Gr: GrIcons,
  Hi: HiIcons,
  Im: ImIcons,
  Io: IoIcons,
  Io5: Io5Icons,
  Lu: LuIcons,
  Md: MdIcons,
  Pi: PiIcons,
  Ri: RiIcons,
  Rx: RxIcons,
  Si: SiIcons,
  Sl: SlIcons,
  Tb: TbIcons,
  Tfi: TfiIcons,
  Ti: TiIcons,
  Vsc: VscIcons,
  Cg: CgIcons,
}

// Универсальный хелпер
export const getReactIconByName = (iconName: string) => {
  if (!iconName) return null

  const specialCases: Record<string, string[]> = {
    Io: ['Io5', 'Io'], // пробовать Io5 перед Io
  }

  const prefix3 = iconName.slice(0, 3)
  const prefix2 = iconName.slice(0, 2)

  // если есть спец. порядок
  if (prefix2 in specialCases) {
    for (const pack of specialCases[prefix2]) {
      const iconPack = allIcons[pack as keyof typeof allIcons] as any
      if (iconPack?.[iconName]) return iconPack[iconName]
    }
  }

  // обычная логика
  const iconPack = (allIcons[prefix3 as keyof typeof allIcons] || 
                   allIcons[prefix2 as keyof typeof allIcons]) as any

  return iconPack?.[iconName] || null
}

