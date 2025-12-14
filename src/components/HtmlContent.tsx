import {FC} from "react";

interface HtmlContentProps {
  html: string;
}

const HtmlContent: FC<HtmlContentProps> = ({ html }) => {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default HtmlContent;
