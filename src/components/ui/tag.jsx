import React from 'react';

export const Tag = (props) => {
return (
  <div className="border px-4 py-1.5 inline-block rounded-full text-(--white-75) border-white/100 text-0.8 text-sm mb-6">
    {props.value}
  </div>
);
}