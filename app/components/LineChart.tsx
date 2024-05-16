import * as React from 'react';
import {
    LineChart,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts';

type dataType = {
    date: string,
    value: number | null
}

type DashedLineChartProps = {
    propData: dataType[];
    country: string
};

export default function DashedLineChart({ propData, country }: DashedLineChartProps) {

    console.log(propData);

    const uData = propData.map((el) => el.value ? Math.floor(el.value) : null).reverse();
    const xLabels = propData.map((el) => Number(el.date)).reverse();

    console.log(uData)
    // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    // const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    // const xLabels = [
    //     'Page A',
    //     'Page B',
    //     'Page C',
    //     'Page D',
    //     'Page E',
    //     'Page F',
    //     'Page G',
    // ];

    return (
        <LineChart
            width={640}
            height={440}
            series={[
                { data: uData, label: `${country}`, id: 'uvId' },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
                // [`.${lineElementClasses.root}`]: {
                //     stroke: '#FFFFFF',
                // },
                // [`.${markElementClasses.root}`]: {
                //     fill: '#FFFFFF',
                // },
                // [`.${markElementClasses.root}`]: {
                //     stroke: '#000'
                // },
                // [`.${axisClasses.tick}`]: {
                //     stroke: '#FFFFFF',
                // },
                // [`.${axisClasses.line}`]: {
                //     stroke: '#FFFFFF',
                // },
                // [`.${axisClasses.label}`]: {
                //     fill: '#FFFFFF',
                // }
            }}
        />
    );
}