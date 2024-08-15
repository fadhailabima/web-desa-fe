import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  getStatCategories,
  getStatCatlocs,
  getStatNews,
  getStatVideo,
} from "@/services/chart";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = ({
  isAdmin,
  initialChartData,
  initialLocsData,
  initialVideosData,
  initialNewsData,
}) => {
  const router = useRouter();
  const [chartData, setChartData] = useState(initialChartData || {});
  const [videoData, setVideoData] = useState(initialVideosData || {});
  const [locsData, setLocsData] = useState(initialLocsData || {});
  const [newsData, setNewsData] = useState(initialNewsData || {});
  const [jumlahCatlocs, setJumlahCatlocs] = useState(0);
  const [jumlahFacilities, setJumlahFacilities] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      const fetchData = async () => {
        const response = await getStatCatlocs(token);
        if (response && response.data) {
          const chartDataLoc = response.data.map((catloc) => ({
            id: catloc.id,
            name: catloc.kategori_lokasi,
            locations_count: catloc.locations_count,
          }));
          setLocsData(chartDataLoc);
          setJumlahCatlocs(response.jumlah_catlocs);
        } else {
          setLocsData([]);
          setJumlahCatlocs(0);
        }

        const kategoriData = await getStatCategories(token);
        if (kategoriData && kategoriData.data) {
          const chartDataFac = kategoriData.data.map((kategori) => ({
            id: kategori.id,
            name: kategori.kategori,
            facilities_count: kategori.facilities_count,
          }));
          setChartData(chartDataFac);
          setJumlahFacilities(kategoriData.jumlah_kategori);
        } else {
          setChartData([]);
          setJumlahFacilities(0);
        }

        const newsData = await getStatNews(token);
        setNewsData(newsData || { jumlahNews: 0 });

        const videoData = await getStatVideo(token);
        setVideoData(
          videoData || {
            jumlahVideos: 0,
          }
        );
      };
      fetchData();
    }
  }, [router]);

  const locationPolarAreaChartLabels = Array.isArray(locsData)
    ? locsData.map((catloc) => catloc.name)
    : [];

  const locationPolarAreaChartOptions = {
    chart: {
      type: "polarArea",
      height: "100%",
      width: "100%",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    labels: locationPolarAreaChartLabels,
    title: {
      text: "Data Lokasi",
      align: "left",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };
  const locationPolarAreaChartSeries = Array.isArray(locsData)
    ? locsData.map((catloc) => catloc.locations_count)
    : [];

  const facilitiesPolarAreaChartLabels = Array.isArray(chartData)
    ? chartData.map((catloc) => catloc.name)
    : [];

  const facilitiesPolarAreaChartOptions = {
    chart: {
      type: "polarArea",
      height: "100%",
      width: "100%",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    labels: facilitiesPolarAreaChartLabels,
    title: {
      text: "Data Wisata",
      align: "left",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const facilitiesPolarAreaChartSeries = Array.isArray(chartData)
    ? chartData.map((catloc) => catloc.facilities_count)
    : [];

  const videoPolarAreaChartOptions = {
    chart: {
      type: "polarArea",
      height: "100%",
      width: "100%",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    labels: ["Video"],
    title: {
      text: "Data Video",
      align: "left",
    },
  };

  const videoAreaChartSeries = [videoData];

  const blogPolarAreaChartOptions = {
    chart: {
      type: "polarArea",
      height: "100%",
      width: "100%",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    labels: ["Blog"],
    title: {
      text: "Data Blog",
      align: "left",
    },
  };

  const blogAreaChartSeries = [newsData];
  return (
    <main className="flex-1 max-h-full p-5">
      <div className="flex flex-col items-start justify-between pb-6 gap-4 border-b border-gray-300 lg:flex-row lg:items-center lg:gap-0">
        <h1 className="text-3xl font-semibold whitespace-nowrap">
          {isAdmin ? "Admin Dashboard" : "Admin Dashboard"}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-8 w-full md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full overflow-hidden">
          <Chart
            options={locationPolarAreaChartOptions}
            series={locationPolarAreaChartSeries}
            type="polarArea"
            height={350}
          />
        </div>
        <div className="w-full overflow-hidden">
          <Chart
            options={facilitiesPolarAreaChartOptions}
            series={facilitiesPolarAreaChartSeries}
            type="polarArea"
            height={350}
          />
        </div>
        <div className="w-full overflow-hidden">
          <Chart
            options={videoPolarAreaChartOptions}
            series={videoAreaChartSeries}
            type="polarArea"
            height={350}
          />
        </div>
        <div className="w-full overflow-hidden">
          <Chart
            options={blogPolarAreaChartOptions}
            series={blogAreaChartSeries}
            type="polarArea"
            height={350}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
