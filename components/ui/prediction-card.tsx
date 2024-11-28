import React from "react";

interface PredictionCardProps {
  label: string;
  value: number | string;
  predictedValue?: number | string; // Optional prop for predicted value
  unit?: string; // Unit of measurement
}

export const PredictionCard: React.FC<PredictionCardProps> = ({
  label,
  value,
  predictedValue,
  unit,
}) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{label}</h3>
      <div className="mt-2 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-bold">Actual:</span> {value}
          {unit && <span className="ml-1">{unit}</span>}
        </p>
        {predictedValue !== undefined && (
          <p>
            <span className="font-bold">Predicted:</span> {predictedValue}
            {unit && <span className="ml-1">{unit}</span>}
          </p>
        )}
      </div>
    </div>
  );
};
