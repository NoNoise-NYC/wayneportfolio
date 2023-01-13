import React from "react";

interface Props {
  children: any;
  id: string;
}

const SectionLayout = ({ children, id }: Props) => {
  return (
    <div id={id} className="w-full scroll-mt-16 mb-4 md:mb-12">
      {children}
    </div>
  );
};

export default SectionLayout;
