import React from "react";
import styles from "./page.module.css";
export default function OperationsWithdrawModal({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/*  */}
      <div className="bg-[#F3F5F8] py-[16px] px-[24px] rounded-[16px]">
        <div className="flex justify-between mb-[8px]">
          <div>1</div>
          <div>wbtc</div>
        </div>
        <div className="flex justify-between">
          <div>1</div>
          <div>wbtc</div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between my-[16px] text-[#798186] font-[400] text-[14px]">
        Est Rewards
      </div>
      {/*  */}
      <div className="bg-[#F3F5F8] py-[16px] px-[24px] rounded-[16px] mb-[16px]">
        <div className="flex justify-between mb-[8px]">
          <div>1</div>
          <div>wbtc</div>
        </div>
        <div className="flex justify-between">
          <div>1</div>
          <div>wbtc</div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between mb-[16px]">
        <div className="text-[#798186] font-[400] text-[14px]">预计到账</div>
        <div className="text-[#141414] font-[700] text-[14px]">
          申请赎回后T+3
        </div>
      </div>
      {/*  */}
      <button
        onClick={handleModalClose}
        className="bg-[#141414] rounded-[88px] w-[100%] text-[#fff] h-[40px] font-[600] text-[16px] mb-[24px]"
      >
        Confirm
      </button>
      {/*  */}
      <div className="text-[#798186] text-[14px] font-[400] py-[16px] bg-[#F3F5F8] px-[8px] rounded-[8px]">
        <div className={styles.dotText}>
          You will not accrue profit during the redemption period and as long as
          my withdrawal request remains pending.
        </div>
        <div className={styles.dotText}>收益的XX%将作为平台绩效费扣除.</div>
      </div>
    </div>
  );
}
