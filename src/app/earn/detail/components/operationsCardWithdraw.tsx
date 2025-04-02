import { useState } from "react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import OperationsWithdrawModal from "./operationsCardWithdrawModal";
import Table from "../components/Table";

export default function OperationsWithdraw() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-[16px] text-[#798186] font-[400] text-[14px]">
        <div>Available</div>
        <div>(仅展示质押满7天资产)</div>
      </div>
      {/*  */}
      <div className="bg-[#F3F5F8] py-[16px] px-[24px] rounded-[16px]">
        <div className="flex justify-between mb-[8px] text-[20px] font-[700]">
          <div className="text-[#000] ">1</div>
          <div className="flex items-center">
            <Image
              src="/earn-detail-token1.svg"
              alt="token"
              width={20}
              height={20}
              className="mr-[2px]"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-[#141414]">WBTC</span>
          </div>
        </div>
        <div className="flex justify-between text-[20px] font-[700]">
          <div className="text-[#000]">1</div>
          <div className="flex items-center">
            <Image
              src="/earn-detail-token2.svg"
              alt="token"
              width={20}
              height={20}
              className="mr-[2px]"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-[#141414]">USDC</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between my-[16px] text-[#798186] font-[400] text-[14px]">
        Est Rewards
      </div>
      {/*  */}
      <div className="bg-[#F3F5F8] py-[16px] px-[24px] rounded-[16px] mb-[16px]">
        <div className="flex justify-between mb-[8px] text-[20px] font-[700]">
          <div className="text-[#000] ">1</div>
          <div className="flex items-center">
            <Image
              src="/earn-detail-token1.svg"
              alt="token"
              width={20}
              height={20}
              className="mr-[2px]"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-[#141414]">WBTC</span>
          </div>
        </div>
        <div className="flex justify-between text-[20px] font-[700]">
          <div className="text-[#000]">1</div>
          <div className="flex items-center">
            <Image
              src="/earn-detail-orange.svg"
              alt="token"
              width={22}
              height={22}
              className="mr-[2px]"
              style={{ width: "20px", height: "20px" }}
            />
            <span
              className={`
  text-transparent 
  bg-gradient-to-bl 
  from-[#9884FF] 
  via-[#66CDFF] 
  to-[#05D394] 
  bg-clip-text 
  font-bold 
  text-2xl
`}
            >
              Capy Point
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between mb-[16px]">
        <div className="text-[#798186] font-[400] text-[14px]">预计到账</div>
        <div className="text-[#141414] font-[700] text-[14px]">
          申请赎回后
          <span className="text-[#765BFF] font-[700] text-[14px] ">T+3</span>
        </div>
      </div>
      <div className="flex justify-between mb-[16px]">
        <div className="text-[#798186] font-[400] text-[14px]">跨链服务费</div>
        <div className="text-[#141414] font-[700] text-[14px]">0</div>
      </div>
      {/*  */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Trigger asChild>
          <button className="bg-[#141414] rounded-[88px] w-[100%] text-[#fff] h-[40px] font-[600] text-[16px]  mb-[16px]">
            Redeem
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 fixed inset-0" />
          <Dialog.Content
            className={`
              bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              p-6 rounded-[16px] max-w-[404px] w-full
            `}
          >
            <div className="flex justify-between items-middle mb-[16px]">
              <Dialog.Title className="text-[#141414] font-[700] text-[20px]">
                Confirm Withdraw
              </Dialog.Title>
              <Dialog.Close asChild>
                <button aria-label="Close">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description></Dialog.Description>
            <OperationsWithdrawModal
              setIsModalOpen={setIsModalOpen}
            ></OperationsWithdrawModal>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Table
        columns={[
          {
            title: "test",
            dataIndex: "test",
          },
        ]}
        dataSource={[
          {
            test: "123",
          },
          {
            test: "1234",
          },
        ]}
      ></Table>
    </div>
  );
}
