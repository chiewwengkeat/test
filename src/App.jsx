import { useState } from 'react'
import './App.css'
import Chart from './chart/chart'

function App() {
  return (
    <main>
      <Chart data={data} />
    </main>
  )
}

export default App

const data = {
  response_code: "00",
  pinjaman: {
    totalPinjamanArrears: "0.00",
    totalPinjamanAmount: "0.00",
    totalPinjamanCurrentBalanceAmount: "18,056.41",
    allPinjamanScheme: [
      {
        schemeCode: "12",
        deductionFlag: {
          validDD: true,
          validAD: false,
          validPG: true,
        },
        loanNo: "2619665",
        validForDeduction: true,
        totalLoan: 31560,
        repayAmount: "0.00",
        program: "SEPENUH MASA-BSC (HONS) IN SOFTWARE ENGINEERING",
        tarikhMulaJbb: "",
        intArrears: "0.00",
        ds: "ujrah",
        principalArrears2: -7801.35,
        trxCode: "1228",
        balance: "18454.29",
        intArrears2: 0,
        totalDisbursed: 26300,
        favoriteAccountTypeName: "Pinjaman Ujrah",
        startPay: "01 / 10 / 2018",
        endPay: "",
        openingBalance: -18454.29,
        limitTransfer: -18454.29,
        schemeDesc: "PINJAMAN 2          ",
        eduLevel: "IJAZAH PERTAMA SEPENUH MASA",
        favoriteAccountTypeID: 4,
        yearCreated: "2018",
        module: "ujrah",
        loanPrincipal: "0.00",
        lebihanBayaran: "0.00",
        totalArreas: "0.00",
        tunggakan: 0,
        initialBalance: -18454.29,
        name: "FOO CHE XUIAN",
        institute:
          "ASIA PACIFIC UNIVERSITY OF TECHNOLOGY AND INNOVATION (ASIA PACIFIC UTI)",
        principalArrears: "-7801.35",
        layakPindahan: false,
        statusCode: "TC",
        status: "TAMAT PINJAMAN - CEMERLANG",
      },
      {
        schemeCode: "98",
        deductionFlag: {
          validDD: false,
          validAD: false,
          validPG: false,
        },
        validForDeduction: false,
        repayAmount: "0.00",
        program: "",
        tarikhMulaJbb: "",
        intArrears: "0.00",
        ds: "ujrah",
        principalArrears2: 0,
        trxCode: "9828",
        balance: "-397.88",
        intArrears2: 0,
        favoriteAccountTypeName: "Pinjaman Ujrah",
        endPay: "",
        openingBalance: 398.97,
        limitTransfer: 397.88,
        schemeDesc: "INSURANS            ",
        eduLevel: "",
        favoriteAccountTypeID: 4,
        module: "ujrah",
        loanPrincipal: "0.00",
        lebihanBayaran: "397.88",
        totalArreas: "0.00",
        tunggakan: 0,
        initialBalance: 397.88,
        name: "FOO CHE XUIAN",
        principalArrears: "0.00",
        layakPindahan: false,
      },
    ],
  },
  response_message: "Berjaya",
  name: "FOO CHE XUIAN",
  convStatementYears: [2024],
  ic: "980820565143",
  convMinYear: "",
  ujrahMinYear: "2018",
  ujrahStatementYears: [2024, 2023, 2022, 2021, 2020, 2019, 2018],
};
