import { Icons } from '../assets';

interface Props {
  title: string;
  label: string;
}

export const ArticleCard: React.FC<Props> = ({ title, label }) => {
  return (
    <div className='relative pb-6 cursor-pointer hover:scale-105 transition-all group'>
      <div className="flex items-center content-between p-4 mt-6 rounded-xl bg-blue shadow-lg group-hover:shadow-2xl">
        <div>
          <h3>{title}</h3>
          <h6 className='mt-1'>Article</h6>
        </div>
        <Icons.Arrow />
      </div>
      <div className='absolute flex items-center justify-center right-0 -z-10 -top-6 pt-1 pb-5 px-3 bg-paleBlue rounded-t-md'>
        <h6>{label}</h6>
      </div>
    </div>
  )
}
