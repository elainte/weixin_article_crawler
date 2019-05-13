//累计发文总数
document.getElementById('total_posts_num').innerHTML = 'caoz的梦呓'+' 有效文章601 其中144具有阅读数据 还剩457尚无阅读数据'


// 历史主文章的发布时间/阅读量/点赞量/赞赏量/评论量
echarts.init(document.getElementById('all_mian_date_read')).setOption(
{
    "title": [
        {
            "text": "\u6240\u6709\u53d1\u6587\u5386\u53f2\u6570\u636e",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 7755456,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u9605\u8bfb\u91cf",
            "data": [
                12578.0,
                16182.0,
                28247.0,
                26273.0,
                58090.0,
                12878.0,
                16206.0,
                21846.0,
                14993.0,
                34195.0,
                30403.0,
                39548.0,
                31078.0,
                31497.0,
                21232.0,
                32529.0,
                31508.0,
                15466.0,
                17407.0,
                21089.0,
                22908.0,
                34340.0,
                23724.0,
                33187.0,
                28241.0,
                25103.0,
                61891.0,
                19667.0,
                100001.0,
                55971.0,
                13943.0,
                44856.0,
                14918.0,
                20516.0,
                31810.0,
                22092.0,
                18649.0,
                21091.0,
                18172.0,
                25070.0,
                12448.0,
                40967.0,
                32043.0,
                31072.0,
                20967.0,
                46733.0,
                14070.0,
                18536.0,
                15502.0,
                20383.0,
                18608.0,
                27052.0,
                11108.0,
                16303.0,
                19989.0,
                35001.0,
                13016.0,
                21376.0,
                17980.0,
                15954.0,
                36632.0,
                19660.0,
                21833.0,
                13318.0,
                17126.0,
                15955.0,
                15896.0,
                45753.0,
                23351.0,
                29253.0,
                27033.0,
                29005.0,
                17487.0,
                11617.0,
                37150.0,
                11219.0,
                17672.0,
                17361.0,
                12111.0,
                14721.0,
                34263.0,
                37503.0,
                14294.0,
                28745.0,
                22991.0,
                10438.0,
                35237.0,
                38798.0,
                14651.0,
                23754.0,
                30321.0,
                56404.0,
                19141.0,
                14376.0,
                17621.0,
                14642.0,
                14701.0,
                17972.0,
                27787.0,
                18300.0,
                23530.0,
                15984.0,
                25516.0,
                17584.0,
                21098.0,
                20846.0,
                31257.0,
                25515.0,
                22690.0,
                13819.0,
                23746.0,
                18410.0,
                29048.0,
                24611.0,
                19295.0,
                19534.0,
                19033.0,
                18872.0,
                30692.0,
                32615.0,
                24879.0,
                13540.0,
                36242.0,
                34082.0,
                23492.0,
                14592.0,
                27127.0,
                24768.0,
                21788.0,
                15446.0,
                18539.0,
                19578.0,
                60878.0,
                20889.0,
                17378.0,
                35950.0,
                21513.0,
                69452.0,
                18353.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7755456
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e\u91cf",
            "data": [
                148.0,
                23.0,
                145.0,
                680.0,
                1396.0,
                183.0,
                277.0,
                80.0,
                70.0,
                830.0,
                381.0,
                1116.0,
                56.0,
                1251.0,
                617.0,
                975.0,
                676.0,
                137.0,
                63.0,
                806.0,
                635.0,
                402.0,
                73.0,
                940.0,
                564.0,
                387.0,
                2248.0,
                254.0,
                6736.0,
                1046.0,
                275.0,
                1576.0,
                515.0,
                854.0,
                1440.0,
                607.0,
                71.0,
                432.0,
                521.0,
                728.0,
                49.0,
                2845.0,
                2016.0,
                2.0,
                0.0,
                11.0,
                0.0,
                0.0,
                2.0,
                1.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                1.0,
                0.0,
                12.0,
                1.0,
                1.0,
                1.0,
                0.0,
                5.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                2.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                1.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                7.0,
                0.0,
                0.0,
                0.0,
                1.0,
                1.0,
                0.0,
                0.0,
                0.0,
                15.0,
                0.0,
                3.0,
                0.0,
                0.0,
                2.0,
                1.0,
                0.0,
                1.0,
                0.0,
                1.0,
                0.0,
                0.0,
                2.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7755456
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba\u91cf",
            "data": [
                85.0,
                48.0,
                123.0,
                323.0,
                348.0,
                59.0,
                73.0,
                185.0,
                60.0,
                160.0,
                76.0,
                128.0,
                112.0,
                132.0,
                110.0,
                126.0,
                112.0,
                52.0,
                73.0,
                101.0,
                87.0,
                58.0,
                46.0,
                137.0,
                62.0,
                153.0,
                296.0,
                28.0,
                178.0,
                90.0,
                50.0,
                286.0,
                45.0,
                86.0,
                244.0,
                131.0,
                39.0,
                68.0,
                92.0,
                55.0,
                65.0,
                0.0,
                171.0,
                82.0,
                111.0,
                297.0,
                60.0,
                200.0,
                109.0,
                104.0,
                160.0,
                118.0,
                63.0,
                57.0,
                95.0,
                152.0,
                28.0,
                106.0,
                49.0,
                44.0,
                60.0,
                83.0,
                73.0,
                95.0,
                55.0,
                189.0,
                103.0,
                178.0,
                112.0,
                105.0,
                93.0,
                69.0,
                53.0,
                73.0,
                202.0,
                56.0,
                141.0,
                87.0,
                204.0,
                42.0,
                -1.0,
                87.0,
                37.0,
                111.0,
                35.0,
                26.0,
                111.0,
                126.0,
                44.0,
                89.0,
                151.0,
                302.0,
                112.0,
                110.0,
                175.0,
                93.0,
                72.0,
                55.0,
                68.0,
                86.0,
                204.0,
                145.0,
                90.0,
                55.0,
                77.0,
                133.0,
                76.0,
                136.0,
                96.0,
                91.0,
                156.0,
                63.0,
                152.0,
                120.0,
                63.0,
                86.0,
                77.0,
                108.0,
                148.0,
                108.0,
                62.0,
                63.0,
                142.0,
                100.0,
                94.0,
                62.0,
                138.0,
                203.0,
                166.0,
                34.0,
                123.0,
                72.0,
                109.0,
                68.0,
                45.0,
                78.0,
                132.0,
                154.0,
                61.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7755456
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f\u91cf",
            "data": [
                -1.0,
                -1.0,
                -1.0,
                264.0,
                352.0,
                137.0,
                100.0,
                -1.0,
                -1.0,
                200.0,
                180.0,
                191.0,
                -1.0,
                248.0,
                180.0,
                253.0,
                87.0,
                -1.0,
                -1.0,
                168.0,
                211.0,
                79.0,
                -1.0,
                245.0,
                88.0,
                -1.0,
                759.0,
                -1.0,
                354.0,
                112.0,
                43.0,
                293.0,
                -1.0,
                -1.0,
                374.0,
                177.0,
                -1.0,
                78.0,
                78.0,
                85.0,
                -1.0,
                175.0,
                103.0,
                96.0,
                -1.0,
                441.0,
                42.0,
                -1.0,
                275.0,
                434.0,
                -1.0,
                222.0,
                -1.0,
                106.0,
                116.0,
                189.0,
                53.0,
                -1.0,
                56.0,
                70.0,
                50.0,
                162.0,
                -1.0,
                -1.0,
                118.0,
                65.0,
                247.0,
                311.0,
                -1.0,
                184.0,
                89.0,
                -1.0,
                -1.0,
                73.0,
                181.0,
                45.0,
                587.0,
                106.0,
                95.0,
                43.0,
                -1.0,
                35.0,
                -1.0,
                -1.0,
                41.0,
                -1.0,
                98.0,
                85.0,
                30.0,
                72.0,
                170.0,
                352.0,
                51.0,
                58.0,
                67.0,
                85.0,
                66.0,
                55.0,
                79.0,
                88.0,
                319.0,
                79.0,
                57.0,
                -1.0,
                -1.0,
                -1.0,
                40.0,
                60.0,
                41.0,
                16.0,
                41.0,
                33.0,
                87.0,
                32.0,
                -1.0,
                35.0,
                24.0,
                42.0,
                33.0,
                -1.0,
                39.0,
                44.0,
                88.0,
                -1.0,
                -1.0,
                -1.0,
                65.0,
                -1.0,
                19.0,
                14.0,
                28.0,
                33.0,
                23.0,
                19.0,
                20.0,
                20.0,
                23.0,
                84.0,
                -1.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7755456
        },
        {
            "type": "bar",
            "name": "\u6df1\u5ea6\u6307\u6570",
            "data": [
                11.77,
                1.42,
                5.13,
                25.88,
                24.03,
                14.21,
                17.09,
                3.66,
                4.67,
                24.27,
                12.53,
                28.22,
                1.8,
                39.72,
                29.06,
                29.97,
                21.45,
                8.86,
                3.62,
                38.22,
                27.72,
                11.71,
                3.08,
                28.32,
                19.97,
                15.42,
                36.32,
                12.92,
                67.36,
                18.69,
                19.72,
                35.13,
                34.52,
                41.63,
                45.27,
                27.48,
                3.81,
                20.48,
                28.67,
                29.04,
                3.94,
                69.45,
                62.92,
                0.06,
                0.0,
                0.24,
                0.0,
                0.0,
                0.13,
                0.05,
                0.0,
                0.04,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.05,
                0.0,
                0.06,
                0.0,
                0.61,
                0.05,
                0.08,
                0.06,
                0.0,
                0.31,
                0.0,
                0.0,
                0.03,
                0.0,
                0.0,
                0.0,
                0.0,
                0.03,
                0.0,
                0.11,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.03,
                0.0,
                0.0,
                0.0,
                0.02,
                0.0,
                0.07,
                0.0,
                0.0,
                0.07,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.27,
                0.0,
                0.0,
                0.0,
                0.03,
                0.04,
                0.0,
                0.0,
                0.0,
                0.81,
                0.0,
                0.12,
                0.0,
                0.0,
                0.11,
                0.05,
                0.0,
                0.03,
                0.0,
                0.07,
                0.0,
                0.0,
                0.09,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7755456
        }
    ],
    "legend": [
        {
            "data": [
                "\u9605\u8bfb\u91cf",
                "\u70b9\u8d5e\u91cf",
                "\u8bc4\u8bba\u91cf",
                "\u8d5e\u8d4f\u91cf",
                "\u6df1\u5ea6\u6307\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                "2019/04/06",
                "2019/04/04",
                "2019/04/02",
                "2019/04/01",
                "2019/03/31",
                "2019/03/27",
                "2019/03/25",
                "2019/03/22",
                "2019/03/21",
                "2019/03/20",
                "2019/03/18",
                "2019/03/14",
                "2019/03/12",
                "2019/03/08",
                "2019/03/07",
                "2019/03/03",
                "2019/02/28",
                "2019/02/27",
                "2019/02/26",
                "2019/02/22",
                "2019/02/19",
                "2019/02/18",
                "2019/02/14",
                "2019/02/12",
                "2019/02/08",
                "2019/02/05",
                "2019/02/02",
                "2019/01/30",
                "2019/01/28",
                "2019/01/23",
                "2019/01/21",
                "2019/01/17",
                "2019/01/15",
                "2019/01/14",
                "2019/01/11",
                "2019/01/09",
                "2019/01/08",
                "2019/01/03",
                "2018/12/31",
                "2018/12/28",
                "2018/12/27",
                "2018/12/26",
                "2018/12/23",
                "2018/12/20",
                "2018/12/18",
                "2018/12/15",
                "2018/12/13",
                "2018/12/12",
                "2018/12/10",
                "2018/12/08",
                "2018/12/05",
                "2018/11/28",
                "2018/11/27",
                "2018/11/24",
                "2018/11/21",
                "2018/11/18",
                "2018/11/15",
                "2018/11/12",
                "2018/11/10",
                "2018/11/06",
                "2018/11/02",
                "2018/10/29",
                "2018/10/25",
                "2018/10/23",
                "2018/10/19",
                "2018/10/15",
                "2018/10/11",
                "2018/10/09",
                "2018/10/06",
                "2018/10/01",
                "2018/09/28",
                "2018/09/26",
                "2018/09/22",
                "2018/09/21",
                "2018/09/19",
                "2018/09/16",
                "2018/09/14",
                "2018/09/11",
                "2018/09/06",
                "2018/09/03",
                "2018/08/30",
                "2018/08/29",
                "2018/08/28",
                "2018/08/24",
                "2018/08/21",
                "2018/08/19",
                "2018/08/14",
                "2018/08/05",
                "2018/08/02",
                "2018/07/30",
                "2018/07/28",
                "2018/07/24",
                "2018/07/21",
                "2018/07/18",
                "2018/07/15",
                "2018/07/10",
                "2018/07/05",
                "2018/07/02",
                "2018/06/29",
                "2018/06/25",
                "2018/06/23",
                "2018/06/19",
                "2018/05/30",
                "2018/05/27",
                "2018/05/21",
                "2018/05/17",
                "2018/05/14",
                "2018/05/09",
                "2018/05/05",
                "2018/05/02",
                "2018/04/29",
                "2018/04/25",
                "2018/04/21",
                "2018/04/17",
                "2018/04/11",
                "2018/04/08",
                "2018/04/05",
                "2018/04/01",
                "2018/03/28",
                "2018/03/21",
                "2018/03/17",
                "2018/03/13",
                "2018/03/09",
                "2018/03/06",
                "2018/02/28",
                "2018/02/24",
                "2018/02/21",
                "2018/02/16",
                "2018/02/13",
                "2018/02/09",
                "2018/02/05",
                "2018/02/02",
                "2018/01/30",
                "2018/01/25",
                "2018/01/21",
                "2018/01/17",
                "2018/01/13",
                "2018/01/09",
                "2018/01/06"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ],
    "dataZoom": [
        {
            "show": true,
            "type": "slider",
            "start": 50,
            "end": 100,
            "orient": "horizontal"
        },
        {
            "show": true,
            "type": "inside",
            "start": 50,
            "end": 100,
            "orient": "horizontal"
        }
    ]
})

// 主副文章统计数据
echarts.init(document.getElementById('all_statistic')).setOption(
{
    "title": [
        {
            "text": "\u4e2d\u4f4d\u6570",
            "left": "auto",
            "top": "5%",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        },
        {
            "text": "\u5e73\u5747\u6570",
            "left": "auto",
            "top": "35%",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        },
        {
            "text": "\u6700\u5927\u503c",
            "left": "auto",
            "top": "65%",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 7708244,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u9605\u8bfb",
            "data": [
                21376.0,
                5408.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7708244,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e",
            "data": [
                1.0,
                6.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7708244,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f",
            "data": [
                53.0,
                -1.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7708244,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba",
            "data": [
                93.0,
                17.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 7708244,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u9605\u8bfb",
            "data": [
                25156.661870503598,
                6343.2
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 2950704,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e",
            "data": [
                253.27338129496403,
                5.4
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 2950704,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f",
            "data": [
                92.9568345323741,
                -1.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 2950704,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba",
            "data": [
                106.76258992805755,
                14.4
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 2950704,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u9605\u8bfb",
            "data": [
                100001.0,
                9572.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 3332618,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e",
            "data": [
                6736.0,
                12.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 3332618,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f",
            "data": [
                759.0,
                -1.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 3332618,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba",
            "data": [
                348.0,
                22.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": [
                    {
                        "type": "min",
                        "name": "Minimum"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "average",
                        "name": "mean-Value"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 3332618,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        }
    ],
    "legend": [
        {
            "data": [
                "\u9605\u8bfb",
                "\u70b9\u8d5e",
                "\u8d5e\u8d4f",
                "\u8bc4\u8bba"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        },
        {
            "data": [
                "\u9605\u8bfb",
                "\u70b9\u8d5e",
                "\u8d5e\u8d4f",
                "\u8bc4\u8bba"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        },
        {
            "data": [
                "\u9605\u8bfb",
                "\u70b9\u8d5e",
                "\u8d5e\u8d4f",
                "\u8bc4\u8bba"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                10.0,
                11.0
            ]
        },
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                10.0,
                11.0
            ],
            "gridIndex": 7
        },
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                10.0,
                11.0
            ],
            "gridIndex": 11
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        },
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "gridIndex": 7
        },
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "gridIndex": 11
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ],
    "grid": [
        {
            "top": "10%",
            "bottom": "70%"
        },
        {
            "top": "10%",
            "bottom": "70%"
        },
        {
            "top": "10%",
            "bottom": "70%"
        },
        {
            "top": "10%",
            "bottom": "70%"
        },
        {
            "top": "40%",
            "bottom": "40%"
        },
        {
            "top": "40%",
            "bottom": "40%"
        },
        {
            "top": "40%",
            "bottom": "40%"
        },
        {
            "top": "40%",
            "bottom": "40%"
        },
        {
            "top": "70%",
            "bottom": "10%"
        },
        {
            "top": "70%",
            "bottom": "10%"
        },
        {
            "top": "70%",
            "bottom": "10%"
        },
        {
            "top": "70%",
            "bottom": "10%"
        }
    ]
})

// 分别统计不同主副/小时/星期文章发文数量
echarts.init(document.getElementById('dir_posts_num_related_mov')).setOption(
{
    "title": [
        {
            "text": "\u4e3b\u526f\u6587\u7ae0\u5404\u81ea\u53d1\u6587\u603b\u6570",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 7657330,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u4e3b\u526f\u6587\u7ae0\u5404\u81ea\u53d1\u6587\u603b\u6570",
            "data": [
                139.0,
                5.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7657330
        }
    ],
    "legend": [
        {
            "data": [
                "\u4e3b\u526f\u6587\u7ae0\u5404\u81ea\u53d1\u6587\u603b\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                10.0,
                11.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})
echarts.init(document.getElementById('dir_posts_num_related_hour')).setOption(
{
    "title": [
        {
            "text": "\u4e0d\u540c\u5c0f\u65f6\u6bb5\u5404\u81ea\u53d1\u6587\u603b\u6570",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 5918218,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u4e0d\u540c\u5c0f\u65f6\u6bb5\u5404\u81ea\u53d1\u6587\u603b\u6570",
            "data": [
                4.0,
                1.0,
                9.0,
                18.0,
                4.0,
                5.0,
                7.0,
                5.0,
                2.0,
                4.0,
                49.0,
                15.0,
                3.0,
                3.0,
                15.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 5918218
        }
    ],
    "legend": [
        {
            "data": [
                "\u4e0d\u540c\u5c0f\u65f6\u6bb5\u5404\u81ea\u53d1\u6587\u603b\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                0.0,
                8.0,
                9.0,
                10.0,
                11.0,
                12.0,
                13.0,
                15.0,
                16.0,
                17.0,
                18.0,
                19.0,
                20.0,
                21.0,
                23.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})
echarts.init(document.getElementById('dir_posts_num_related_week')).setOption(
{
    "title": [
        {
            "text": "\u4e0d\u540c\u661f\u671f\u5404\u81ea\u53d1\u6587\u603b\u6570",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 8372402,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u4e0d\u540c\u661f\u671f\u5404\u81ea\u53d1\u6587\u603b\u6570",
            "data": [
                21.0,
                26.0,
                27.0,
                21.0,
                19.0,
                17.0,
                13.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 8372402
        }
    ],
    "legend": [
        {
            "data": [
                "\u4e0d\u540c\u661f\u671f\u5404\u81ea\u53d1\u6587\u603b\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                1.0,
                2.0,
                3.0,
                4.0,
                5.0,
                6.0,
                7.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})

//阅读量分别和点赞量/上一次阅读量之间的关系
echarts.init(document.getElementById('read_vs_like')).setOption(
{
    "title": [
        {
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 569351,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "scatter",
            "name": "\u9605\u8bfb\u91cf\u548c\u70b9\u8d5e\u91cf\u5173\u7cfb",
            "symbol": "circle",
            "symbolSize": 10,
            "data": [
                [
                    12578,
                    148
                ],
                [
                    16182,
                    23
                ],
                [
                    28247,
                    145
                ],
                [
                    26273,
                    680
                ],
                [
                    58090,
                    1396
                ],
                [
                    12878,
                    183
                ],
                [
                    16206,
                    277
                ],
                [
                    21846,
                    80
                ],
                [
                    14993,
                    70
                ],
                [
                    34195,
                    830
                ],
                [
                    30403,
                    381
                ],
                [
                    39548,
                    1116
                ],
                [
                    31078,
                    56
                ],
                [
                    31497,
                    1251
                ],
                [
                    21232,
                    617
                ],
                [
                    32529,
                    975
                ],
                [
                    31508,
                    676
                ],
                [
                    15466,
                    137
                ],
                [
                    17407,
                    63
                ],
                [
                    21089,
                    806
                ],
                [
                    22908,
                    635
                ],
                [
                    34340,
                    402
                ],
                [
                    23724,
                    73
                ],
                [
                    33187,
                    940
                ],
                [
                    28241,
                    564
                ],
                [
                    25103,
                    387
                ],
                [
                    61891,
                    2248
                ],
                [
                    19667,
                    254
                ],
                [
                    100001,
                    6736
                ],
                [
                    55971,
                    1046
                ],
                [
                    13943,
                    275
                ],
                [
                    44856,
                    1576
                ],
                [
                    14918,
                    515
                ],
                [
                    20516,
                    854
                ],
                [
                    31810,
                    1440
                ],
                [
                    22092,
                    607
                ],
                [
                    18649,
                    71
                ],
                [
                    21091,
                    432
                ],
                [
                    18172,
                    521
                ],
                [
                    25070,
                    728
                ],
                [
                    12448,
                    49
                ],
                [
                    40967,
                    2845
                ],
                [
                    32043,
                    2016
                ],
                [
                    31072,
                    2
                ],
                [
                    20967,
                    0
                ],
                [
                    46733,
                    11
                ],
                [
                    14070,
                    0
                ],
                [
                    18536,
                    0
                ],
                [
                    15502,
                    2
                ],
                [
                    20383,
                    1
                ],
                [
                    18608,
                    0
                ],
                [
                    27052,
                    1
                ],
                [
                    11108,
                    0
                ],
                [
                    16303,
                    0
                ],
                [
                    19989,
                    0
                ],
                [
                    35001,
                    0
                ],
                [
                    13016,
                    0
                ],
                [
                    21376,
                    1
                ],
                [
                    17980,
                    0
                ],
                [
                    15954,
                    1
                ],
                [
                    36632,
                    0
                ],
                [
                    19660,
                    12
                ],
                [
                    21833,
                    1
                ],
                [
                    13318,
                    1
                ],
                [
                    17126,
                    1
                ],
                [
                    15955,
                    0
                ],
                [
                    15896,
                    5
                ],
                [
                    45753,
                    0
                ],
                [
                    23351,
                    0
                ],
                [
                    29253,
                    1
                ],
                [
                    27033,
                    0
                ],
                [
                    29005,
                    0
                ],
                [
                    17487,
                    0
                ],
                [
                    11617,
                    0
                ],
                [
                    37150,
                    1
                ],
                [
                    11219,
                    0
                ],
                [
                    17672,
                    2
                ],
                [
                    17361,
                    0
                ],
                [
                    12111,
                    0
                ],
                [
                    14721,
                    0
                ],
                [
                    34263,
                    0
                ],
                [
                    37503,
                    0
                ],
                [
                    14294,
                    0
                ],
                [
                    28745,
                    0
                ],
                [
                    22991,
                    0
                ],
                [
                    10438,
                    0
                ],
                [
                    35237,
                    0
                ],
                [
                    38798,
                    1
                ],
                [
                    14651,
                    0
                ],
                [
                    23754,
                    0
                ],
                [
                    30321,
                    0
                ],
                [
                    56404,
                    1
                ],
                [
                    19141,
                    0
                ],
                [
                    14376,
                    1
                ],
                [
                    17621,
                    0
                ],
                [
                    14642,
                    0
                ],
                [
                    14701,
                    1
                ],
                [
                    17972,
                    0
                ],
                [
                    27787,
                    0
                ],
                [
                    18300,
                    0
                ],
                [
                    23530,
                    0
                ],
                [
                    15984,
                    0
                ],
                [
                    25516,
                    7
                ],
                [
                    17584,
                    0
                ],
                [
                    21098,
                    0
                ],
                [
                    20846,
                    0
                ],
                [
                    31257,
                    1
                ],
                [
                    25515,
                    1
                ],
                [
                    22690,
                    0
                ],
                [
                    13819,
                    0
                ],
                [
                    23746,
                    0
                ],
                [
                    18410,
                    15
                ],
                [
                    29048,
                    0
                ],
                [
                    24611,
                    3
                ],
                [
                    19295,
                    0
                ],
                [
                    19534,
                    0
                ],
                [
                    19033,
                    2
                ],
                [
                    18872,
                    1
                ],
                [
                    30692,
                    0
                ],
                [
                    32615,
                    1
                ],
                [
                    24879,
                    0
                ],
                [
                    13540,
                    1
                ],
                [
                    36242,
                    0
                ],
                [
                    34082,
                    0
                ],
                [
                    23492,
                    2
                ],
                [
                    14592,
                    0
                ],
                [
                    27127,
                    0
                ],
                [
                    24768,
                    0
                ],
                [
                    21788,
                    0
                ],
                [
                    15446,
                    0
                ],
                [
                    18539,
                    0
                ],
                [
                    19578,
                    0
                ],
                [
                    60878,
                    0
                ],
                [
                    20889,
                    0
                ],
                [
                    17378,
                    0
                ],
                [
                    35950,
                    0
                ],
                [
                    21513,
                    0
                ],
                [
                    69452,
                    0
                ],
                [
                    18353,
                    0
                ]
            ],
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 569351
        }
    ],
    "legend": [
        {
            "data": [
                "\u9605\u8bfb\u91cf\u548c\u70b9\u8d5e\u91cf\u5173\u7cfb"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                12578.0,
                16182.0,
                28247.0,
                26273.0,
                58090.0,
                12878.0,
                16206.0,
                21846.0,
                14993.0,
                34195.0,
                30403.0,
                39548.0,
                31078.0,
                31497.0,
                21232.0,
                32529.0,
                31508.0,
                15466.0,
                17407.0,
                21089.0,
                22908.0,
                34340.0,
                23724.0,
                33187.0,
                28241.0,
                25103.0,
                61891.0,
                19667.0,
                100001.0,
                55971.0,
                13943.0,
                44856.0,
                14918.0,
                20516.0,
                31810.0,
                22092.0,
                18649.0,
                21091.0,
                18172.0,
                25070.0,
                12448.0,
                40967.0,
                32043.0,
                31072.0,
                20967.0,
                46733.0,
                14070.0,
                18536.0,
                15502.0,
                20383.0,
                18608.0,
                27052.0,
                11108.0,
                16303.0,
                19989.0,
                35001.0,
                13016.0,
                21376.0,
                17980.0,
                15954.0,
                36632.0,
                19660.0,
                21833.0,
                13318.0,
                17126.0,
                15955.0,
                15896.0,
                45753.0,
                23351.0,
                29253.0,
                27033.0,
                29005.0,
                17487.0,
                11617.0,
                37150.0,
                11219.0,
                17672.0,
                17361.0,
                12111.0,
                14721.0,
                34263.0,
                37503.0,
                14294.0,
                28745.0,
                22991.0,
                10438.0,
                35237.0,
                38798.0,
                14651.0,
                23754.0,
                30321.0,
                56404.0,
                19141.0,
                14376.0,
                17621.0,
                14642.0,
                14701.0,
                17972.0,
                27787.0,
                18300.0,
                23530.0,
                15984.0,
                25516.0,
                17584.0,
                21098.0,
                20846.0,
                31257.0,
                25515.0,
                22690.0,
                13819.0,
                23746.0,
                18410.0,
                29048.0,
                24611.0,
                19295.0,
                19534.0,
                19033.0,
                18872.0,
                30692.0,
                32615.0,
                24879.0,
                13540.0,
                36242.0,
                34082.0,
                23492.0,
                14592.0,
                27127.0,
                24768.0,
                21788.0,
                15446.0,
                18539.0,
                19578.0,
                60878.0,
                20889.0,
                17378.0,
                35950.0,
                21513.0,
                69452.0,
                18353.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ],
    "dataZoom": [
        {
            "show": true,
            "type": "slider",
            "start": 50,
            "end": 100,
            "orient": "horizontal"
        },
        {
            "show": true,
            "type": "inside",
            "start": 50,
            "end": 100,
            "orient": "horizontal"
        }
    ]
})
echarts.init(document.getElementById('read_vs_pre_read')).setOption(
{
    "title": [
        {
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 1748929,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "scatter",
            "name": "\u9605\u8bfb\u91cf\u548c\u4e0a\u4e00\u6b21\u9605\u8bfb\u91cf\u5173\u7cfb",
            "symbol": "circle",
            "symbolSize": 10,
            "data": [
                [
                    12578,
                    16182.0
                ],
                [
                    16182,
                    28247.0
                ],
                [
                    28247,
                    26273.0
                ],
                [
                    26273,
                    58090.0
                ],
                [
                    58090,
                    12878.0
                ],
                [
                    12878,
                    16206.0
                ],
                [
                    16206,
                    21846.0
                ],
                [
                    21846,
                    14993.0
                ],
                [
                    14993,
                    34195.0
                ],
                [
                    34195,
                    30403.0
                ],
                [
                    30403,
                    39548.0
                ],
                [
                    39548,
                    31078.0
                ],
                [
                    31078,
                    31497.0
                ],
                [
                    31497,
                    21232.0
                ],
                [
                    21232,
                    32529.0
                ],
                [
                    32529,
                    31508.0
                ],
                [
                    31508,
                    15466.0
                ],
                [
                    15466,
                    17407.0
                ],
                [
                    17407,
                    21089.0
                ],
                [
                    21089,
                    22908.0
                ],
                [
                    22908,
                    34340.0
                ],
                [
                    34340,
                    23724.0
                ],
                [
                    23724,
                    33187.0
                ],
                [
                    33187,
                    28241.0
                ],
                [
                    28241,
                    25103.0
                ],
                [
                    25103,
                    61891.0
                ],
                [
                    61891,
                    19667.0
                ],
                [
                    19667,
                    100001.0
                ],
                [
                    100001,
                    55971.0
                ],
                [
                    55971,
                    13943.0
                ],
                [
                    13943,
                    44856.0
                ],
                [
                    44856,
                    14918.0
                ],
                [
                    14918,
                    20516.0
                ],
                [
                    20516,
                    31810.0
                ],
                [
                    31810,
                    22092.0
                ],
                [
                    22092,
                    18649.0
                ],
                [
                    18649,
                    21091.0
                ],
                [
                    21091,
                    18172.0
                ],
                [
                    18172,
                    25070.0
                ],
                [
                    25070,
                    12448.0
                ],
                [
                    12448,
                    40967.0
                ],
                [
                    40967,
                    32043.0
                ],
                [
                    32043,
                    31072.0
                ],
                [
                    31072,
                    20967.0
                ],
                [
                    20967,
                    46733.0
                ],
                [
                    46733,
                    14070.0
                ],
                [
                    14070,
                    18536.0
                ],
                [
                    18536,
                    15502.0
                ],
                [
                    15502,
                    20383.0
                ],
                [
                    20383,
                    18608.0
                ],
                [
                    18608,
                    27052.0
                ],
                [
                    27052,
                    11108.0
                ],
                [
                    11108,
                    16303.0
                ],
                [
                    16303,
                    19989.0
                ],
                [
                    19989,
                    35001.0
                ],
                [
                    35001,
                    13016.0
                ],
                [
                    13016,
                    21376.0
                ],
                [
                    21376,
                    17980.0
                ],
                [
                    17980,
                    15954.0
                ],
                [
                    15954,
                    36632.0
                ],
                [
                    36632,
                    19660.0
                ],
                [
                    19660,
                    21833.0
                ],
                [
                    21833,
                    13318.0
                ],
                [
                    13318,
                    17126.0
                ],
                [
                    17126,
                    15955.0
                ],
                [
                    15955,
                    15896.0
                ],
                [
                    15896,
                    45753.0
                ],
                [
                    45753,
                    23351.0
                ],
                [
                    23351,
                    29253.0
                ],
                [
                    29253,
                    27033.0
                ],
                [
                    27033,
                    29005.0
                ],
                [
                    29005,
                    17487.0
                ],
                [
                    17487,
                    11617.0
                ],
                [
                    11617,
                    37150.0
                ],
                [
                    37150,
                    11219.0
                ],
                [
                    11219,
                    17672.0
                ],
                [
                    17672,
                    17361.0
                ],
                [
                    17361,
                    12111.0
                ],
                [
                    12111,
                    14721.0
                ],
                [
                    14721,
                    34263.0
                ],
                [
                    34263,
                    37503.0
                ],
                [
                    37503,
                    14294.0
                ],
                [
                    14294,
                    28745.0
                ],
                [
                    28745,
                    22991.0
                ],
                [
                    22991,
                    10438.0
                ],
                [
                    10438,
                    35237.0
                ],
                [
                    35237,
                    38798.0
                ],
                [
                    38798,
                    14651.0
                ],
                [
                    14651,
                    23754.0
                ],
                [
                    23754,
                    30321.0
                ],
                [
                    30321,
                    56404.0
                ],
                [
                    56404,
                    19141.0
                ],
                [
                    19141,
                    14376.0
                ],
                [
                    14376,
                    17621.0
                ],
                [
                    17621,
                    14642.0
                ],
                [
                    14642,
                    14701.0
                ],
                [
                    14701,
                    17972.0
                ],
                [
                    17972,
                    27787.0
                ],
                [
                    27787,
                    18300.0
                ],
                [
                    18300,
                    23530.0
                ],
                [
                    23530,
                    15984.0
                ],
                [
                    15984,
                    25516.0
                ],
                [
                    25516,
                    17584.0
                ],
                [
                    17584,
                    21098.0
                ],
                [
                    21098,
                    20846.0
                ],
                [
                    20846,
                    31257.0
                ],
                [
                    31257,
                    25515.0
                ],
                [
                    25515,
                    22690.0
                ],
                [
                    22690,
                    13819.0
                ],
                [
                    13819,
                    23746.0
                ],
                [
                    23746,
                    18410.0
                ],
                [
                    18410,
                    29048.0
                ],
                [
                    29048,
                    24611.0
                ],
                [
                    24611,
                    19295.0
                ],
                [
                    19295,
                    19534.0
                ],
                [
                    19534,
                    19033.0
                ],
                [
                    19033,
                    18872.0
                ],
                [
                    18872,
                    30692.0
                ],
                [
                    30692,
                    32615.0
                ],
                [
                    32615,
                    24879.0
                ],
                [
                    24879,
                    13540.0
                ],
                [
                    13540,
                    36242.0
                ],
                [
                    36242,
                    34082.0
                ],
                [
                    34082,
                    23492.0
                ],
                [
                    23492,
                    14592.0
                ],
                [
                    14592,
                    27127.0
                ],
                [
                    27127,
                    24768.0
                ],
                [
                    24768,
                    21788.0
                ],
                [
                    21788,
                    15446.0
                ],
                [
                    15446,
                    18539.0
                ],
                [
                    18539,
                    19578.0
                ],
                [
                    19578,
                    60878.0
                ],
                [
                    60878,
                    20889.0
                ],
                [
                    20889,
                    17378.0
                ],
                [
                    17378,
                    35950.0
                ],
                [
                    35950,
                    21513.0
                ],
                [
                    21513,
                    69452.0
                ],
                [
                    69452,
                    18353.0
                ],
                [
                    18353,
                    NaN
                ]
            ],
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 1748929
        }
    ],
    "legend": [
        {
            "data": [
                "\u9605\u8bfb\u91cf\u548c\u4e0a\u4e00\u6b21\u9605\u8bfb\u91cf\u5173\u7cfb"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                12578.0,
                16182.0,
                28247.0,
                26273.0,
                58090.0,
                12878.0,
                16206.0,
                21846.0,
                14993.0,
                34195.0,
                30403.0,
                39548.0,
                31078.0,
                31497.0,
                21232.0,
                32529.0,
                31508.0,
                15466.0,
                17407.0,
                21089.0,
                22908.0,
                34340.0,
                23724.0,
                33187.0,
                28241.0,
                25103.0,
                61891.0,
                19667.0,
                100001.0,
                55971.0,
                13943.0,
                44856.0,
                14918.0,
                20516.0,
                31810.0,
                22092.0,
                18649.0,
                21091.0,
                18172.0,
                25070.0,
                12448.0,
                40967.0,
                32043.0,
                31072.0,
                20967.0,
                46733.0,
                14070.0,
                18536.0,
                15502.0,
                20383.0,
                18608.0,
                27052.0,
                11108.0,
                16303.0,
                19989.0,
                35001.0,
                13016.0,
                21376.0,
                17980.0,
                15954.0,
                36632.0,
                19660.0,
                21833.0,
                13318.0,
                17126.0,
                15955.0,
                15896.0,
                45753.0,
                23351.0,
                29253.0,
                27033.0,
                29005.0,
                17487.0,
                11617.0,
                37150.0,
                11219.0,
                17672.0,
                17361.0,
                12111.0,
                14721.0,
                34263.0,
                37503.0,
                14294.0,
                28745.0,
                22991.0,
                10438.0,
                35237.0,
                38798.0,
                14651.0,
                23754.0,
                30321.0,
                56404.0,
                19141.0,
                14376.0,
                17621.0,
                14642.0,
                14701.0,
                17972.0,
                27787.0,
                18300.0,
                23530.0,
                15984.0,
                25516.0,
                17584.0,
                21098.0,
                20846.0,
                31257.0,
                25515.0,
                22690.0,
                13819.0,
                23746.0,
                18410.0,
                29048.0,
                24611.0,
                19295.0,
                19534.0,
                19033.0,
                18872.0,
                30692.0,
                32615.0,
                24879.0,
                13540.0,
                36242.0,
                34082.0,
                23492.0,
                14592.0,
                27127.0,
                24768.0,
                21788.0,
                15446.0,
                18539.0,
                19578.0,
                60878.0,
                20889.0,
                17378.0,
                35950.0,
                21513.0,
                69452.0,
                18353.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ],
    "dataZoom": [
        {
            "show": true,
            "type": "slider",
            "start": 50,
            "end": 100,
            "orient": "horizontal"
        },
        {
            "show": true,
            "type": "inside",
            "start": 50,
            "end": 100,
            "orient": "horizontal"
        }
    ]
})

// 探索最佳推文小时 推文星期 标题词数 插图数量 视频数量
echarts.init(document.getElementById('read_vs_hour')).setOption(
{
    "title": [
        {
            "text": "\u53d1\u5e03\u5c0f\u65f6",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 3854832,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u603b\u6570",
            "data": [
                3.0,
                1.0,
                8.0,
                18.0,
                4.0,
                5.0,
                7.0,
                5.0,
                2.0,
                4.0,
                47.0,
                14.0,
                3.0,
                3.0,
                15.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 3854832
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                28067.666666666668,
                14294.0,
                25757.25,
                32739.722222222223,
                25878.75,
                14250.4,
                27962.85714285714,
                33424.6,
                25727.5,
                26684.0,
                23878.744680851065,
                21102.14285714286,
                20543.0,
                19753.333333333332,
                24564.333333333332
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 3854832
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                27033.0,
                14294.0,
                25086.5,
                28626.0,
                21130.0,
                13943.0,
                22991.0,
                35001.0,
                25727.5,
                27785.5,
                21098.0,
                18683.5,
                19141.0,
                19660.0,
                22908.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 3854832
        }
    ],
    "legend": [
        {
            "data": [
                "\u603b\u6570",
                "\u5e73\u5747\u503c",
                "\u4e2d\u4f4d\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                0.0,
                8.0,
                9.0,
                10.0,
                11.0,
                12.0,
                13.0,
                15.0,
                16.0,
                17.0,
                18.0,
                19.0,
                20.0,
                21.0,
                23.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})
echarts.init(document.getElementById('read_vs_week')).setOption(
{
    "title": [
        {
            "text": "\u53d1\u5e03\u661f\u671f",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 7053018,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u603b\u6570",
            "data": [
                20.0,
                26.0,
                25.0,
                21.0,
                17.0,
                17.0,
                13.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7053018
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                25362.05,
                26917.73076923077,
                26235.44,
                21807.761904761905,
                24835.235294117647,
                24751.352941176472,
                25604.076923076922
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7053018
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                20088.0,
                22348.0,
                25515.0,
                20846.0,
                25070.0,
                21513.0,
                19534.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7053018
        }
    ],
    "legend": [
        {
            "data": [
                "\u603b\u6570",
                "\u5e73\u5747\u503c",
                "\u4e2d\u4f4d\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                1.0,
                2.0,
                3.0,
                4.0,
                5.0,
                6.0,
                7.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})
echarts.init(document.getElementById('read_vs_title')).setOption(
{
    "title": [
        {
            "text": "\u6587\u7ae0\u6807\u9898\u5b57\u6570",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 7099300,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u603b\u6570",
            "data": [
                2.0,
                4.0,
                6.0,
                12.0,
                21.0,
                12.0,
                15.0,
                7.0,
                7.0,
                13.0,
                7.0,
                2.0,
                5.0,
                5.0,
                4.0,
                3.0,
                2.0,
                3.0,
                4.0,
                3.0,
                1.0,
                1.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7099300
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                24150.5,
                28759.0,
                22389.166666666668,
                22890.583333333332,
                27161.95238095238,
                26473.416666666668,
                27194.0,
                32765.14285714286,
                24203.428571428572,
                28571.846153846152,
                20236.428571428572,
                23321.5,
                18620.0,
                21614.0,
                19915.0,
                30407.0,
                18935.0,
                20992.333333333332,
                17235.75,
                25775.666666666668,
                19667.0,
                31078.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7099300
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                24150.5,
                25436.5,
                20751.0,
                20334.5,
                22092.0,
                28104.0,
                27052.0,
                23530.0,
                21788.0,
                27787.0,
                17378.0,
                23321.5,
                19141.0,
                21376.0,
                18005.0,
                18539.0,
                18935.0,
                21846.0,
                16194.0,
                22908.0,
                19667.0,
                31078.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7099300
        }
    ],
    "legend": [
        {
            "data": [
                "\u603b\u6570",
                "\u5e73\u5747\u503c",
                "\u4e2d\u4f4d\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                4.0,
                5.0,
                6.0,
                7.0,
                8.0,
                9.0,
                10.0,
                11.0,
                12.0,
                13.0,
                14.0,
                15.0,
                16.0,
                17.0,
                18.0,
                19.0,
                20.0,
                21.0,
                22.0,
                23.0,
                24.0,
                26.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})
echarts.init(document.getElementById('read_vs_pic')).setOption(
{
    "title": [
        {
            "text": "\u6587\u7ae0\u63d2\u56fe\u6570",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 7092000,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u603b\u6570",
            "data": [
                1.0,
                46.0,
                66.0,
                9.0,
                6.0,
                2.0,
                1.0,
                1.0,
                1.0,
                2.0,
                2.0,
                1.0,
                1.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7092000
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                34263.0,
                26670.978260869564,
                25122.10606060606,
                21399.0,
                24235.0,
                32691.0,
                23724.0,
                21846.0,
                16182.0,
                12883.0,
                17971.5,
                31078.0,
                19667.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7092000
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                34263.0,
                20449.5,
                22391.0,
                15954.0,
                22159.0,
                32691.0,
                23724.0,
                21846.0,
                16182.0,
                12883.0,
                17971.5,
                31078.0,
                19667.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 7092000
        }
    ],
    "legend": [
        {
            "data": [
                "\u603b\u6570",
                "\u5e73\u5747\u503c",
                "\u4e2d\u4f4d\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                0.0,
                6.0,
                7.0,
                8.0,
                9.0,
                10.0,
                11.0,
                12.0,
                13.0,
                14.0,
                15.0,
                24.0,
                52.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})
echarts.init(document.getElementById('read_vs_video')).setOption(
{
    "title": [
        {
            "text": "\u6587\u7ae0\u89c6\u9891\u6570",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 110961,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u603b\u6570",
            "data": [
                139.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 110961
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                25156.661870503598
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 110961
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                21376.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 110961
        }
    ],
    "legend": [
        {
            "data": [
                "\u603b\u6570",
                "\u5e73\u5747\u503c",
                "\u4e2d\u4f4d\u6570"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                0.0
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
})



// 表9 100001除外阅读来那个最高的10篇文章
document.getElementById('particular_most_read_10_except_100001').innerHTML = `
<table class="w3-table w3-striped w3-white">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">阅读量</th>
            <th scope="col">点赞量</th>
            <th scope="col">标题</th>
            <th scope="col">发文日期</th>
            <th scope="col">点赞量</th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td>1</td>
            <td>69452</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867565&idx=1&sn=c5a8b8b5e741d1be02d595ec2c37a2e4&chksm=f1075f40c670d6560b6d580b538e48d06844c054d9a0a9d7c460f7fadccb4eb2eb7acf6444f3&scene=27#wechat_redirect target="_blank">不要试图挑战人性</a></td>
            <td>2018/01/09</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>61891</td>
            <td>2248</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868140&idx=1&sn=30c170b079ea70db26fb7bebdca1195a&chksm=f1075d01c670d417159b9d298d84c80f375b1e5bed7332eeb29f567c1b9705eaa78f81a7aab1&scene=27#wechat_redirect target="_blank">人际交往中，我不喜欢的那些</a></td>
            <td>2019/02/02</td>
            <td>2248</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>60878</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867581&idx=1&sn=df547a727ee2706ef1e0fcf6fcc23a17&chksm=f1075f50c670d646c41a8b1a310b4ebfb5dee03ccc713a071135dc7566f0602c0ff4c9dee33a&scene=27#wechat_redirect target="_blank">再谈职场中的用力过猛</a></td>
            <td>2018/01/30</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>58090</td>
            <td>1396</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868296&idx=1&sn=e60fcea4d55441cafbbb0ca98e35f6a7&chksm=f1075265c670db73f215b541bea5c8f6adc713410aeae693ce230a9f71a95ba5589771e6186f&scene=27#wechat_redirect target="_blank">关于程序员的996，我们谈谈历史和逻辑</a></td>
            <td>2019/03/31</td>
            <td>1396</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>56404</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867760&idx=1&sn=72dace4a9cee72dcd446def49372400e&chksm=f1075f9dc670d68b28f35bd1e01c62e0ff41781b1d9b54e0ca7cef75583fdd6e886f16cd8307&scene=27#wechat_redirect target="_blank">小米算不算帮凶？</a></td>
            <td>2018/07/24</td>
            <td>1</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>55971</td>
            <td>1046</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868126&idx=1&sn=8df4cde18558257c3c74c3e334161c69&chksm=f1075d33c670d4254f3e35e88eb581956d303256ee038285871bdfd5878a0a6af0b8e7f83e3b&scene=27#wechat_redirect target="_blank">专心做业务，别想不开搞研发</a></td>
            <td>2019/01/23</td>
            <td>1046</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>46733</td>
            <td>11</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868037&idx=1&sn=a6506c96f059231b7bb354dd1084317f&chksm=f1075d68c670d47eb4ee040f7856c8ee26a2dd43f8b3b456f46254e09461321cc7037750b8f0&scene=27#wechat_redirect target="_blank">你矜持，你活该</a></td>
            <td>2018/12/15</td>
            <td>11</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>45753</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867888&idx=1&sn=d0e026cee06448143336bea08e16a64c&chksm=f1075c1dc670d50b06b80aac52e99b0bee3e3b6f8a64d3b7d428be9d204fa39c0e5740e8a495&scene=27#wechat_redirect target="_blank">与烂人同行</a></td>
            <td>2018/10/09</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>44856</td>
            <td>1576</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868113&idx=1&sn=045892dcd9e5a1e40f108be0acc57fb8&chksm=f1075d3cc670d42ada15a7ea811da149a62ec8fcf840dd361de414b49c4022e4eb8f364721e7&scene=27#wechat_redirect target="_blank">社交网络的先烈们</a></td>
            <td>2019/01/17</td>
            <td>1576</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>40967</td>
            <td>2845</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868063&idx=1&sn=a98a33842df88dacf52503e0e1ae9818&chksm=f1075d72c670d46481de5b3c39fb378a2b28f75aa8bd441f2252e9ae302e3a2061897fc1b271&scene=27#wechat_redirect target="_blank">ofo这事吧，其实也挺好的</a></td>
            <td>2018/12/26</td>
            <td>2845</td>
        </tr>
        
    </tbody>
</table>
`
// 表10 阅读量最低且为非0的10篇文章
document.getElementById('particular_least_read_10_except_0').innerHTML = `
<table class="w3-table w3-striped w3-white">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">阅读量</th>
            <th scope="col">点赞量</th>
            <th scope="col">标题</th>
            <th scope="col">发文日期</th>
            <th scope="col">点赞量</th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td>1</td>
            <td>10438</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867787&idx=1&sn=6b790c5b5e0a9bdfb390d0a59c9275d7&chksm=f1075c66c670d570505d4bbe14c7c9fd62b6d6b1bf7b3c3a7a0f666045cf09f104dbaa9ceade&scene=27#wechat_redirect target="_blank">当微课遇上星球</a></td>
            <td>2018/08/19</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>11108</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867988&idx=1&sn=a146a9cb82cd7ca597f307f8734c828e&chksm=f1075cb9c670d5aff443f40b8d317304790f064c162bea080d3a738e5c8f051249d508f0f5c5&scene=27#wechat_redirect target="_blank">英文水平难提高？也许你该试试这个。</a></td>
            <td>2018/11/27</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>11219</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867835&idx=1&sn=14b12182c829624b462e87f0b7151df7&chksm=f1075c56c670d540cd3fac8a0273b8683c5503bf963b4576bd632783cc0b978a33aa8e031e21&scene=27#wechat_redirect target="_blank">[科幻]钻石王子</a></td>
            <td>2018/09/16</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>11617</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867849&idx=1&sn=150ff511af6523cfa5a8161abafa567a&chksm=f1075c24c670d532a11490b59e3394f83caa30bb524101f6238377ae3bd8f9043b394b495e2f&scene=27#wechat_redirect target="_blank">量子力学与创业</a></td>
            <td>2018/09/21</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>12111</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867819&idx=1&sn=7655f35b70dc8e4d6c7863f9393f92a8&chksm=f1075c46c670d550320c1ad9fae1a583bcf98173686b2260cf8c0f1989f73b2da0fc4eed0e58&scene=27#wechat_redirect target="_blank">[科幻]一堂宇宙生物课</a></td>
            <td>2018/09/06</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>12448</td>
            <td>49</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868065&idx=1&sn=0316f571015eb042ecfbf590125fbbb1&chksm=f1075d4cc670d45a74827700568d58575e9a9c4ec7cca5ea4d44bae27d764e5e4e16291bf870&scene=27#wechat_redirect target="_blank">半年学好英语，一辈子都能受益。</a></td>
            <td>2018/12/27</td>
            <td>49</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>12578</td>
            <td>148</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868314&idx=1&sn=0829774aecae5ed3fbd195f5d5382b46&chksm=f1075277c670db6167e54fb8841224d0ffee0b5d0278dbe97fa7dbf184acb69d4cfbb64c6108&scene=27#wechat_redirect target="_blank">内容广告联盟，劣币是怎么驱逐良币的。</a></td>
            <td>2019/04/06</td>
            <td>148</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>12878</td>
            <td>183</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868286&idx=1&sn=d3d066d1baef3113c78eca7a025ac68f&chksm=f1075d93c670d485bee10b6c2da16b322f44110720de896c55c0058e230bd9264d71e18ec93d&scene=27#wechat_redirect target="_blank">从COD着陆页设计优化谈起</a></td>
            <td>2019/03/27</td>
            <td>183</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>13016</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867959&idx=1&sn=6386dda14bb815aa3c395b56ae1c2c27&chksm=f1075cdac670d5cce2aaa93f87f7b814eabc572c6ba3e0090a8fe6e29664f9ccf5119f52caed&scene=27#wechat_redirect target="_blank">从关键词聚类的案例谈谈数据感</a></td>
            <td>2018/11/15</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>13318</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867912&idx=1&sn=666ff8dc2fadd80e99452c21dd0acb4c&chksm=f1075ce5c670d5f3ebed3e1d3d7292b53a3688d132afd01930cb4e52709ebe483f8799597ef5&scene=27#wechat_redirect target="_blank">敢不敢挑战，半年学好英语。</a></td>
            <td>2018/10/23</td>
            <td>1</td>
        </tr>
        
    </tbody>
</table>
`
// 表11 深度指数最高的10篇文章
document.getElementById('particular_most_deep_10').innerHTML = `
<table class="w3-table w3-striped w3-white">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">阅读量</th>
            <th scope="col">点赞量</th>
            <th scope="col">标题</th>
            <th scope="col">发文日期</th>
            <th scope="col">深度指数</th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td>1</td>
            <td>40967</td>
            <td>2845</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868063&idx=1&sn=a98a33842df88dacf52503e0e1ae9818&chksm=f1075d72c670d46481de5b3c39fb378a2b28f75aa8bd441f2252e9ae302e3a2061897fc1b271&scene=27#wechat_redirect target="_blank">ofo这事吧，其实也挺好的</a></td>
            <td>2018/12/26</td>
            <td>69.45</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>100001</td>
            <td>6736</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868130&idx=1&sn=c1f1ceb402fd8e2ad4eeda42359dd6fd&chksm=f1075d0fc670d4193df6d01c610314e9eb357b2bf145965cccca8dc4405a712b29cf1baf9da6&scene=27#wechat_redirect target="_blank">谈谈To B业务的难点</a></td>
            <td>2019/01/28</td>
            <td>67.36</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>32043</td>
            <td>2016</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868058&idx=1&sn=83b68bfa3dc158b05d6453ba0ec0d4f2&chksm=f1075d77c670d461ca3de424fe2deeb6bb88751e0b638a9e57b23423e6c1ea926267606ca956&scene=27#wechat_redirect target="_blank">看一看，好看不好看</a></td>
            <td>2018/12/23</td>
            <td>62.92</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>31810</td>
            <td>1440</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868095&idx=1&sn=86ae395d3bae072dd88746fb46d6e4c4&chksm=f1075d52c670d4442473ff222ede57cc8058b7eb2a7f5aaf5b55a52942384176b77c59e13a1a&scene=27#wechat_redirect target="_blank">你可以不喜欢</a></td>
            <td>2019/01/11</td>
            <td>45.27</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>20516</td>
            <td>854</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868101&idx=1&sn=1cb09f0473be1fc162eaf00e43929d64&chksm=f1075d28c670d43ec6e4c9529544c4c26711e25cc11e217683faadf90fbda6dc96ba4dcbe9f6&scene=27#wechat_redirect target="_blank">科技向善，一念天堂。</a></td>
            <td>2019/01/14</td>
            <td>41.63</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>31497</td>
            <td>1251</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868232&idx=1&sn=6452818cbe1689fa0a6b6f858221997b&chksm=f1075da5c670d4b3fcdbd48d103d871ca6809b6ea45cecb975f2329259d01ce03c702779c964&scene=27#wechat_redirect target="_blank">当你面临选择，所谓经验可能一文不值</a></td>
            <td>2019/03/08</td>
            <td>39.72</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>21089</td>
            <td>806</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868181&idx=1&sn=8fc4915faf5ac7396933414753ff9bce&chksm=f1075df8c670d4ee8f60ad7c676b4dc34e2e0e54a827397afea794013985dc8773e51bf17cfe&scene=27#wechat_redirect target="_blank">年轻人，如何抗造系列之 - 感恩，树洞及放空</a></td>
            <td>2019/02/22</td>
            <td>38.22</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>61891</td>
            <td>2248</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868140&idx=1&sn=30c170b079ea70db26fb7bebdca1195a&chksm=f1075d01c670d417159b9d298d84c80f375b1e5bed7332eeb29f567c1b9705eaa78f81a7aab1&scene=27#wechat_redirect target="_blank">人际交往中，我不喜欢的那些</a></td>
            <td>2019/02/02</td>
            <td>36.32</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>44856</td>
            <td>1576</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868113&idx=1&sn=045892dcd9e5a1e40f108be0acc57fb8&chksm=f1075d3cc670d42ada15a7ea811da149a62ec8fcf840dd361de414b49c4022e4eb8f364721e7&scene=27#wechat_redirect target="_blank">社交网络的先烈们</a></td>
            <td>2019/01/17</td>
            <td>35.13</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>14918</td>
            <td>515</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868108&idx=1&sn=1ac6e2cfa713810c56647c28df57b542&chksm=f1075d21c670d437fcd098d3cee4cd8a5037f9212879e6275e5a0e7d199bb71080043be1265d&scene=27#wechat_redirect target="_blank">刀锋战士，智能时代的守护者</a></td>
            <td>2019/01/15</td>
            <td>34.52</td>
        </tr>
        
    </tbody>
</table>
`
// 表12 深度指数最低的10篇文章
document.getElementById('particular_least_deep_10').innerHTML = `
<table class="w3-table w3-striped w3-white">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">阅读量</th>
            <th scope="col">点赞量</th>
            <th scope="col">标题</th>
            <th scope="col">发文日期</th>
            <th scope="col">深度指数</th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td>1</td>
            <td>18353</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867562&idx=1&sn=7cd2a2a2b7baa2483766c1658048ab22&chksm=f1075f47c670d6514d004bfe20c0c71c29cae685f424c8eaa8f07a581e3432ea20a8580a818d&scene=27#wechat_redirect target="_blank">出海创业，不要作</a></td>
            <td>2018/01/06</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>30321</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867769&idx=1&sn=fa811cf9b682644059a1ab3ff27001ed&chksm=f1075f94c670d682fd492bf336de050eb004ae001b1bdbcb89be284402496ecdb13970f412bf&scene=27#wechat_redirect target="_blank">再谈话术</a></td>
            <td>2018/07/28</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>23754</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867772&idx=1&sn=4cdfa87384daf674b77c470e3c43ad4a&chksm=f1075f91c670d68733f7cbc248f5b50a68f3b4df75d7265e36915b6458ff2a58e7bcf185dbd2&scene=27#wechat_redirect target="_blank">求职是需要诚意的</a></td>
            <td>2018/07/30</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>14651</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867775&idx=1&sn=4b1b3fe35d7be658d23616e1cfdb3486&chksm=f1075f92c670d68461ae3f3332848a677b9882027fe4a9d3bd29b6ac7a974699d607e0e0e241&scene=27#wechat_redirect target="_blank">浅谈负面评价设计</a></td>
            <td>2018/08/02</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>35237</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867782&idx=1&sn=786dffca984a66dc6f6230aeddca81c2&chksm=f1075c6bc670d57d6f45667e607be58160810afa245a24278b63d91e6d50f110589976db9dac&scene=27#wechat_redirect target="_blank">人在职场，都长点心吧</a></td>
            <td>2018/08/14</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>10438</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867787&idx=1&sn=6b790c5b5e0a9bdfb390d0a59c9275d7&chksm=f1075c66c670d570505d4bbe14c7c9fd62b6d6b1bf7b3c3a7a0f666045cf09f104dbaa9ceade&scene=27#wechat_redirect target="_blank">当微课遇上星球</a></td>
            <td>2018/08/19</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>22991</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867790&idx=1&sn=b2d04f9f88f61fb0f88a8fa4d5071c6e&chksm=f1075c63c670d57522f662c0721d01b833f84bf44376a465e94d16c075cea847245898fb77e4&scene=27#wechat_redirect target="_blank">一个至简推荐系统的实现(附源代码)</a></td>
            <td>2018/08/21</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>20967</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868045&idx=1&sn=05c17f8ad607e24c6937e606a2433cbb&chksm=f1075d60c670d47627f3e4d675d3c7b954177811cbbc853f10ed093c8889bb77c88b4e033920&scene=27#wechat_redirect target="_blank">数据分析这碗饭，怎么吃？</a></td>
            <td>2018/12/18</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>28745</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867794&idx=1&sn=f71824326b321f77388292ef3de815f6&chksm=f1075c7fc670d5695e06265938ce3b4051d648ee18fd45da031c280510b2c016e74e81e6292d&scene=27#wechat_redirect target="_blank">求个合伙人，我是认真的</a></td>
            <td>2018/08/24</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>14070</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868029&idx=1&sn=3f88f304ce3a37a2d12f3f4cab28add3&chksm=f1075c90c670d586a10491e41a097d6753f5569a152753d667ac2b7c82614ee679f65c3e289b&scene=27#wechat_redirect target="_blank">基因算命，心诚则灵</a></td>
            <td>2018/12/13</td>
            <td>0.0</td>
        </tr>
        
    </tbody>
</table>
`
// 表13 落差指数最低的10篇文章
document.getElementById('particular_least_fall_10').innerHTML = `
<table class="w3-table w3-striped w3-white">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">阅读量</th>
            <th scope="col">点赞量</th>
            <th scope="col">标题</th>
            <th scope="col">发文日期</th>
            <th scope="col">落差指数</th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td>1</td>
            <td>58090</td>
            <td>1396</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868296&idx=1&sn=e60fcea4d55441cafbbb0ca98e35f6a7&chksm=f1075265c670db73f215b541bea5c8f6adc713410aeae693ce230a9f71a95ba5589771e6186f&scene=27#wechat_redirect target="_blank">关于程序员的996，我们谈谈历史和逻辑</a></td>
            <td>2019/03/31</td>
            <td>221.69</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>55971</td>
            <td>1046</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868126&idx=1&sn=8df4cde18558257c3c74c3e334161c69&chksm=f1075d33c670d4254f3e35e88eb581956d303256ee038285871bdfd5878a0a6af0b8e7f83e3b&scene=27#wechat_redirect target="_blank">专心做业务，别想不开搞研发</a></td>
            <td>2019/01/23</td>
            <td>249.11</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>69452</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867565&idx=1&sn=c5a8b8b5e741d1be02d595ec2c37a2e4&chksm=f1075f40c670d6560b6d580b538e48d06844c054d9a0a9d7c460f7fadccb4eb2eb7acf6444f3&scene=27#wechat_redirect target="_blank">不要试图挑战人性</a></td>
            <td>2018/01/09</td>
            <td>264.25</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>46733</td>
            <td>11</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868037&idx=1&sn=a6506c96f059231b7bb354dd1084317f&chksm=f1075d68c670d47eb4ee040f7856c8ee26a2dd43f8b3b456f46254e09461321cc7037750b8f0&scene=27#wechat_redirect target="_blank">你矜持，你活该</a></td>
            <td>2018/12/15</td>
            <td>301.07</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>37150</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867841&idx=1&sn=b62bc8066e0d773bf187a85ee9630949&chksm=f1075c2cc670d53a572c686bad2564f333c9333f480459758a7b6020bddf1bc96e3de767e17d&scene=27#wechat_redirect target="_blank">家长是茬好韭菜。</a></td>
            <td>2018/09/19</td>
            <td>301.99</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>61891</td>
            <td>2248</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868140&idx=1&sn=30c170b079ea70db26fb7bebdca1195a&chksm=f1075d01c670d417159b9d298d84c80f375b1e5bed7332eeb29f567c1b9705eaa78f81a7aab1&scene=27#wechat_redirect target="_blank">人际交往中，我不喜欢的那些</a></td>
            <td>2019/02/02</td>
            <td>317.77</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>44856</td>
            <td>1576</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868113&idx=1&sn=045892dcd9e5a1e40f108be0acc57fb8&chksm=f1075d3cc670d42ada15a7ea811da149a62ec8fcf840dd361de414b49c4022e4eb8f364721e7&scene=27#wechat_redirect target="_blank">社交网络的先烈们</a></td>
            <td>2019/01/17</td>
            <td>332.58</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>56404</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867760&idx=1&sn=72dace4a9cee72dcd446def49372400e&chksm=f1075f9dc670d68b28f35bd1e01c62e0ff41781b1d9b54e0ca7cef75583fdd6e886f16cd8307&scene=27#wechat_redirect target="_blank">小米算不算帮凶？</a></td>
            <td>2018/07/24</td>
            <td>339.36</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>60878</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867581&idx=1&sn=df547a727ee2706ef1e0fcf6fcc23a17&chksm=f1075f50c670d646c41a8b1a310b4ebfb5dee03ccc713a071135dc7566f0602c0ff4c9dee33a&scene=27#wechat_redirect target="_blank">再谈职场中的用力过猛</a></td>
            <td>2018/01/30</td>
            <td>343.13</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>35001</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649867963&idx=1&sn=ee835bb6ebeb8b748b1c0c85b06e5f14&chksm=f1075cd6c670d5c0552c5b76b89208e7a56a2c412c6eddcc915478baebbb281d857d5c15b897&scene=27#wechat_redirect target="_blank">见证人人的衰落，讲一句活该</a></td>
            <td>2018/11/18</td>
            <td>371.88</td>
        </tr>
        
    </tbody>
</table>
`
// 表14 所有的100001文章
document.getElementById('particular_all_10001').innerHTML = `
<table class="w3-table w3-striped w3-white">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">阅读量</th>
            <th scope="col">点赞量</th>
            <th scope="col">标题</th>
            <th scope="col">发文日期</th>
            <th scope="col">点赞量</th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td>1</td>
            <td>100001</td>
            <td>6736</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzI0MjA1Mjg2Ng==&mid=2649868130&idx=1&sn=c1f1ceb402fd8e2ad4eeda42359dd6fd&chksm=f1075d0fc670d4193df6d01c610314e9eb357b2bf145965cccca8dc4405a712b29cf1baf9da6&scene=27#wechat_redirect target="_blank">谈谈To B业务的难点</a></td>
            <td>2019/01/28</td>
            <td>6736</td>
        </tr>
        
    </tbody>
</table>
`