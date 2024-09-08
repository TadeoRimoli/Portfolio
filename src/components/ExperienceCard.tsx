import React from "react";

interface ExperienceCardProps {
  title: string;
  company?: string;
  date: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  description,
}) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {company && <p className="text-gray-400">{company}</p>}
        </div>
        <p className="text-gray-500 mt-2 md:mt-0">{date}</p>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ExperienceCard;
