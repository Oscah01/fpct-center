import prog1 from '../../assets/prog1.jpg'
import prog2 from '../../assets/prog2.jpg'
import prog3 from '../../assets/maombi.jpg'
import news from '../../assets/new.gif'
import { Calendar } from 'lucide-react'
import { Clock9 } from 'lucide-react'
import { FaFilePdf } from "react-icons/fa";

export const postsInfo = [
  {
    id: 1,
    image: prog1,
    title: 'Muumini asoma biblia',
    icon:<Calendar />,
    date: '31 May, 2024'
  },
  {
    id: 2,
    image: prog2,
    title: 'Waumini katika maombi',
    icon:<Calendar />,
    date: '02 June, 2024'
  },
  {
    id: 3,
    image: prog3,
    title: 'Believer in deep prayers',
    icon:<Calendar />,
    date: '11 July, 2024'
  },
]

export const announcementsInfo = [
  {
    id: 1,
    image: news,
    title: 'Joining instructions',
    icon:<Clock9 />,
    pdf: <FaFilePdf />,
    date: 'June 14, 2024'
  },
  {
    id: 2,
    image: news,
    title: 'Services offered',
    icon:<Clock9 />,
    pdf: <FaFilePdf />,
    date: 'May 2, 2024'
  },
  {
    id: 3,
    image: news,
    title: 'Programs bronchure',
    icon:<Clock9 />,
    pdf: <FaFilePdf />,
    date: '11 July, 2024'
  },
]