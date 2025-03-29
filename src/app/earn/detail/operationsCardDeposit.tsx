import { Table } from "antd";
import Row from "./Row";
export default function OperationsDeposit() {
  return (
    <div className="min-w-[340px]">
      <div className="rounded-[16px] bg-[#F3F5F8] py-[16px] px-[24px] mb-[16px]">
        <div className="flex">
          <input type="text" className="bg-[#F3F5F8]" />
          <div>wbtc</div>
        </div>
        <div className="w-full h-[1px]  bg-[#E0E1E3]"></div>
        <div>balance</div>
      </div>
      {[
        {
          label: "Est Rewards",
          value: "1,000 USDC+1,200Point",
          labelSuffix: "(Per Year)",
          valueColor: "#765BFF",
        },
        { label: "计息日期", value: "T+1" },
        { label: "赎回代币", value: "WBTC,USDC" },
        { label: "赎回日期", value: "7天后随时可赎" },
        { label: "Fee", value: "0.00003 wBTC" },
      ].map((item, index) => (
        <Row
          key={index}
          label={item.label}
          value={item.value}
          labelSuffix={item.labelSuffix}
          valueColor={item.valueColor}
          className="mb-4"
        />
      ))}

      <button className="bg-[#141414] rounded-[88px] w-[100%] text-[#fff] h-[40px] font-[600] text-[16px]">
        Deposit
      </button>
      <div>
        <Table
          className="bg-[#F3F5F8]"
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
              render: (text) => <a>{text}</a>,
            },
          ]}
          dataSource={[
            {
              key: "1",
              name: "John Brown",
              age: 32,
              address: "New York No. 1 Lake Park",
              tags: ["nice", "developer"],
            },
          ]}
          pagination={false}
        />
      </div>
    </div>
  );
}
