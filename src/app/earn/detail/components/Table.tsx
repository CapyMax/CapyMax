import { ReactNode } from "react";

interface TableColumn<T> {
  title: ReactNode;
  dataIndex: keyof T;
  render?: (value: unknown, record: T) => ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  dataSource: T[];
}

export default function Table<T>({ columns, dataSource }: TableProps<T>) {
  return (
    <div className="rounded-[8px] bg-[#F3F5F8] overflow-hidden">
      {/* Table Header */}
      <div className="flex px-4 py-3">
        {columns.map((col, index) => (
          <div
            key={index}
            className="flex-1 flex items-center text-[#798186] text-[12px] font-[400]"
          >
            {col.title}
          </div>
        ))}
      </div>

      {/* Header Divider */}
      <div className="h-px mx-4 bg-[#EEF1F3]" />

      {/* Table Body */}
      <div className="bg-[#F3F5F8]">
        {dataSource.map((record, rowIndex) => (
          <div key={rowIndex} className="flex px-4 py-3">
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className="flex-1 flex items-center text-[#141414] text-[12px] font-[400]"
              >
                {col.render
                  ? col.render(record[col.dataIndex], record)
                  : (record[col.dataIndex] as ReactNode)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
