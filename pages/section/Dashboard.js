import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import {
//   getStatBukulink,
//   getStatDmw,
//   getStatDbo,
//   getStatUser,
//   getStatProgram,
//   getStatIos,
// } from "@/services/chart";
// import { verifyToken } from "@/components/verifyToken";
import PopUp from "@/components/Popup";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = ({
  isAdmin,
  //   initialChartData,
  //   initialDmwData,
  //   initialDboData,
  //   initialUserData,
  //   initialProgramData,
  //   initialIosData,
}) => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  //   const [chartData, setChartData] = useState(initialChartData || {});
  //   const [dmwData, setDmwData] = useState(initialDmwData || {});
  //   const [dboData, setDboData] = useState(initialDboData || {});
  //   const [userData, setUserData] = useState(initialUserData || {});
  //   const [programData, setProgramData] = useState(initialProgramData || {});
  //   const [iosData, setIosData] = useState(initialIosData || {});

  //   const polarAreaChartOptions = {
  //     chart: {
  //       type: "polarArea",
  //       height: "100%",
  //       width: "100%",
  //     },
  //     stroke: {
  //       colors: ["#fff"],
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       position: "bottom",
  //     },
  //     labels: ["Alumni", "Mahasiswa"],
  //     title: {
  //       text: "Data BukuLink",
  //       align: "left",
  //     },
  //   };

  //   const splineAreaChartOptions = {
  //     chart: {
  //       type: "area",
  //       height: "100%",
  //       width: "100%",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     xaxis: {
  //       categories: ["Matkul", "Soal", "Pembahasan", "Modul"],
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     legend: {
  //       position: "bottom",
  //     },
  //     title: {
  //       text: "Data DMW",
  //       align: "left",
  //     },
  //   };

  //   const multiYAxisChartOptions = {
  //     chart: {
  //       height: 350,
  //       type: "line",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     title: {
  //       text: "Data DBO",
  //       align: "left",
  //     },
  //     xaxis: {
  //       categories: ["Total DBO", "Total Fungsio", "Total Staff"],
  //     },
  //     yaxis: [
  //       {
  //         seriesName: "Total DBO",
  //         axisTicks: {
  //           show: true,
  //         },
  //         axisBorder: {
  //           show: true,
  //           color: "#008FFB",
  //         },
  //         labels: {
  //           style: {
  //             colors: "#008FFB",
  //           },
  //         },
  //         title: {
  //           text: "Total DBO",
  //           style: {
  //             color: "#008FFB",
  //           },
  //         },
  //         tooltip: {
  //           enabled: true,
  //         },
  //       },
  //       {
  //         seriesName: "Fungsio",
  //         opposite: true,
  //         axisTicks: {
  //           show: true,
  //         },
  //         axisBorder: {
  //           show: true,
  //           color: "#00E396",
  //         },
  //         labels: {
  //           style: {
  //             colors: "#00E396",
  //           },
  //         },
  //         title: {
  //           text: "Fungsio",
  //           style: {
  //             color: "#00E396",
  //           },
  //         },
  //       },
  //       {
  //         seriesName: "Staff",
  //         opposite: true,
  //         axisTicks: {
  //           show: true,
  //         },
  //         axisBorder: {
  //           show: true,
  //           color: "#FEB019",
  //         },
  //         labels: {
  //           style: {
  //             colors: "#FEB019",
  //           },
  //         },
  //         title: {
  //           text: "Staff",
  //           style: {
  //             color: "#FEB019",
  //           },
  //         },
  //       },
  //     ],
  //     tooltip: {
  //       fixed: {
  //         enabled: true,
  //         position: "topLeft", // position of the tooltip
  //         offsetY: 30,
  //         offsetX: 60,
  //       },
  //     },
  //     legend: {
  //       horizontalAlign: "left",
  //       offsetX: 40,
  //     },
  //   };

  //   const userPolarAreaChartOptions = {
  //     chart: {
  //       type: "polarArea",
  //       height: "100%",
  //       width: "100%",
  //     },
  //     stroke: {
  //       colors: ["#fff"],
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       position: "bottom",
  //     },
  //     labels: ["Admin", "Diklat", "Kominfo"],
  //     title: {
  //       text: "Data Users",
  //       align: "left",
  //     },
  //   };

  //   const programPolarAreaChartOptions = {
  //     chart: {
  //       type: "polarArea",
  //       height: "100%",
  //       width: "100%",
  //     },
  //     stroke: {
  //       colors: ["#fff"],
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       position: "bottom",
  //     },
  //     labels: ["Proker", "Agenda"],
  //     title: {
  //       text: "Program Statistics",
  //       align: "left",
  //     },
  //   };

  //   const iosPolarAreaChartOptions = {
  //     chart: {
  //       type: "polarArea",
  //       height: "100%",
  //       width: "100%",
  //     },
  //     stroke: {
  //       colors: ["#fff"],
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       position: "bottom",
  //     },
  //     labels: ["iOS Story"],
  //     title: {
  //       text: "iOS Story Statistics",
  //       align: "left",
  //     },
  //   };

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       router.push("/login");
  //     } else {
  //       const fetchData = async () => {
  //         const bukulinkData = await getStatBukulink(token);
  //         setChartData(
  //           bukulinkData || {
  //             alumni_count: 0,
  //             mahasiswa_count: 0,
  //             total_bukulink: 0,
  //           }
  //         );

  //         const dmwData = await getStatDmw(token);
  //         setDmwData(
  //           dmwData || {
  //             total_matkul: 0,
  //             total_soal: 0,
  //             total_pembahasan: 0,
  //             total_modul: 0,
  //           }
  //         );

  //         const dboData = await getStatDbo(token);
  //         setDboData(
  //           dboData || { total_dbo: 0, unique_fungsio: 0, unique_posisi: 0 }
  //         );

  //         const userData = await getStatUser(token);
  //         setUserData(
  //           userData || {
  //             admin_count: 0,
  //             diklat_count: 0,
  //             kominfo_count: 0,
  //             total_users: 0,
  //           }
  //         );

  //         const programData = await getStatProgram(token);
  //         setProgramData(
  //           programData || { total_program: 0, proker_count: 0, agenda_count: 0 }
  //         );

  //         const iosData = await getStatIos(token);
  //         setIosData(iosData || { total_ios: 0 });
  //       };
  //       fetchData();
  //     }

  //     const popupStatus = sessionStorage.getItem("showPopup");
  //     if (popupStatus === "true") {
  //       setShowPopup(true);
  //       setPopupText("Selamat Datang!");
  //       setPopupType("success");
  //       sessionStorage.removeItem("showPopup");
  //     }
  //   }, [router]);

  //   const {
  //     alumni_count = 0,
  //     mahasiswa_count = 0,
  //     total_bukulink = 0,
  //   } = chartData;
  //   const {
  //     total_matkul = 0,
  //     total_soal = 0,
  //     total_pembahasan = 0,
  //     total_modul = 0,
  //   } = dmwData;
  //   const { total_dbo = 0, unique_fungsio = 0, unique_posisi = 0 } = dboData;
  //   const {
  //     admin_count = 0,
  //     diklat_count = 0,
  //     kominfo_count = 0,
  //     total_users = 0,
  //   } = userData;
  //   const { total_program = 0, proker_count = 0, agenda_count = 0 } = programData;
  //   const { total_ios = 0 } = iosData;

  //   const polarAreaChartSeries = [alumni_count, mahasiswa_count];
  //   const splineAreaChartSeries = [
  //     {
  //       name: "Total Matkul",
  //       data: [total_matkul],
  //     },
  //     {
  //       name: "Total Soal",
  //       data: [total_soal],
  //     },
  //     {
  //       name: "Total Pembahasan",
  //       data: [total_pembahasan],
  //     },
  //     {
  //       name: "Total Modul",
  //       data: [total_modul],
  //     },
  //   ];
  //   const multiYAxisChartSeries = [
  //     {
  //       name: "Total DBO",
  //       type: "line",
  //       data: [total_dbo, total_dbo, total_dbo, total_dbo], // Duplicate data to match categories length
  //     },
  //     {
  //       name: "Fungsio",
  //       type: "line",
  //       data: [unique_fungsio, unique_fungsio, unique_fungsio, unique_fungsio], // Duplicate data to match categories length
  //     },
  //     {
  //       name: "Staff",
  //       type: "line",
  //       data: [unique_posisi, unique_posisi, unique_posisi, unique_posisi], // Duplicate data to match categories length
  //     },
  //   ];
  //   const userPolarAreaChartSeries = [admin_count, diklat_count, kominfo_count];
  //   const programPolarAreaChartSeries = [proker_count, agenda_count];
  //   const iosPolarAreaChartSeries = [total_ios];

  return (
    <main className="flex-1 max-h-full p-5">
      <div className="flex flex-col items-start justify-between pb-6 gap-4 border-b border-gray-300 lg:flex-row lg:items-center lg:gap-0">
        <h1 className="text-3xl font-semibold whitespace-nowrap">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </h1>
      </div>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="grid grid-cols-3 gap-6 mt-8 w-full">
        <div className="w-full overflow-hidden">
          {/* <Chart
            options={polarAreaChartOptions}
            series={polarAreaChartSeries}
            type="polarArea"
            height={350}
          /> */}
        </div>
      </div>
    </main>
  );
};

// export const getServerSideProps = async ({ req }) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const decoded = verifyToken(token);

//   if (!decoded) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const isAdmin = decoded.role === "Admin";
//   const initialChartData = (await getStatBukulink(token)) || {
//     alumni_count: 0,
//     mahasiswa_count: 0,
//     total_bukulink: 0,
//   };
//   const initialDmwData = (await getStatDmw(token)) || {
//     total_matkul: 0,
//     total_soal: 0,
//     total_pembahasan: 0,
//     total_modul: 0,
//   };
//   const initialDboData = (await getStatDbo(token)) || {
//     total_dbo: 0,
//     unique_fungsio: 0,
//     unique_posisi: 0,
//   };
//   const initialUserData = (await getStatUser(token)) || {
//     admin_count: 0,
//     diklat_count: 0,
//     kominfo_count: 0,
//     total_users: 0,
//   };
//   const initialProgramData = (await getStatProgram(token)) || {
//     total_program: 0,
//     proker_count: 0,
//     agenda_count: 0,
//   };
//   const initialIosData = (await getStatIos(token)) || { total_ios: 0 };

//   return {
//     props: {
//       isAdmin,
//       initialChartData,
//       initialDmwData,
//       initialDboData,
//       initialUserData,
//       initialProgramData,
//       initialIosData,
//     },
//   };
// };

export default Dashboard;
