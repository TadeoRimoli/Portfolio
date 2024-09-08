import React from "react";

interface EducationCardProps {
  degree: string;
  university: string;
  date: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  university,
  date,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-gray-900 rounded-lg max-w-4xl mx-auto">
      <div>
        <h3 className="text-xl font-semibold mb-2">{degree}</h3>
        <p className="text-gray-400">{university}</p>
      </div>
      <p className="text-gray-500 mt-2 md:mt-0">{date}</p>
    </div>
  );
};

export default EducationCard;
