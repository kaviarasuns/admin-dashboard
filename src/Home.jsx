import React, { useState } from 'react'
import Chart from './components/Doughnut/Doughnut'
import Colors from './components/colorboxes/Colors'
import Illustrations from './components/illustrations/Illustrations'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Table from './components/table/Table'
import Widget from './components/widget/Widget'
import Development from './components/developmentapproch/Development'
import "./home.scss"
import { UserData } from './Data'
import { BarChart } from 'recharts'
import List from './components/table/Table'
import LineCha from './components/LineChart/LineChart'
import DoughnutChart from './components/Doughnut/Doughnut'

export const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
    }]
  });

  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
          <div className="charts">
          <div className='lineContainer'>
            <div className="lineTitle">Earnings Overview</div>
            <LineCha/>
          </div>
          <DoughnutChart/>
          <div className="listContainer">
          <div className="listTitle">Latest Transcations</div>
          <Table/>
        </div>
          <Illustrations/>
          <Colors/>
          <Development/>
          <BarChart chartData={userData} />
        </div>
      </div>
    </div>
  )
}
