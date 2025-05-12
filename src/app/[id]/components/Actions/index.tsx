import HeartIcon from '@/assets/icons/HeartIcon';
import MoreInfoIcon from '@/assets/icons/MoreInfoIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import React from 'react';

export default function Actions() {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-3">
        <span className="p-2">
          <ShareIcon />
        </span>
        <span className="p-2">
          <HeartIcon />
        </span>
      </div>
      <span className="flex items-center gap-1.5 text-[#00A296] text-xs font-bold">
        mais infos <MoreInfoIcon />
      </span>
    </div>
  );
}
