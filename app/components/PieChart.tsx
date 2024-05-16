"use client"

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {

    const options = {
        chart: {
            type: 'pie',
            width: 520,
            height: 520,
            backgroundColor: "aliceblue"
            // borderRadius: 20,
            // borderRadius: await initiliazeSeriesDate()
        },
        title: {
            text: '',
        },
        series: [
            {
                name: 'Categories',
                data: [
                    {
                        name: 'Water',
                        y: 55.02
                    },
                    {
                        name: 'Fat',
                        // sliced: true,
                        // selected: true,
                        y: 26.71
                    },
                    {
                        name: 'Carbohydrates',
                        y: 1.09
                    },
                    {
                        name: 'Protein',
                        y: 15.5
                    },
                    {
                        name: 'Ash',
                        y: 1.68
                    }
                ]
                // data

            },
        ],
    };

    // Highcharts.chart('pie-chart-container', options);

    // return <div id="pie-chart-container" style={{ width: '550px', height: '580px', borderRadius: '10px' }}></div>;
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
};

export default PieChart;
