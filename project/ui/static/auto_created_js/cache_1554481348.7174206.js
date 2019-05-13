//累计发文总数
document.getElementById('total_posts_num').innerHTML = 'BlueFriday'+' 有效文章40 其中40具有阅读数据 还剩0尚无阅读数据'


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
    "series_id": 5529358,
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
                570.0,
                1876.0,
                376.0,
                312.0,
                535.0,
                371.0,
                1008.0,
                608.0,
                1156.0,
                2758.0,
                1047.0,
                630.0,
                726.0,
                844.0,
                1522.0,
                1854.0,
                597.0,
                787.0,
                2481.0,
                1023.0,
                242.0,
                161.0,
                1165.0,
                267.0,
                209.0,
                476.0,
                1087.0,
                3900.0,
                132.0,
                140.0,
                90.0,
                148.0,
                103.0,
                139.0,
                158.0,
                238.0,
                657.0,
                747.0,
                518.0,
                841.0
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
            "seriesId": 5529358
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e\u91cf",
            "data": [
                3.0,
                29.0,
                3.0,
                2.0,
                6.0,
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
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
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
                6.0,
                0.0,
                0.0,
                2.0
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
            "seriesId": 5529358
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba\u91cf",
            "data": [
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
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
            "seriesId": 5529358
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f\u91cf",
            "data": [
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                4.0,
                0.0,
                5.0,
                3.0,
                3.0,
                1.0,
                1.0,
                1.0,
                3.0,
                -1.0,
                -1.0,
                2.0,
                -1.0,
                7.0,
                0.0,
                -1.0,
                5.0,
                2.0,
                0.0,
                2.0,
                9.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
                -1.0,
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
            "seriesId": 5529358
        },
        {
            "type": "bar",
            "name": "\u6df1\u5ea6\u6307\u6570",
            "data": [
                5.26,
                15.46,
                7.98,
                6.41,
                11.21,
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
                0.0,
                0.0,
                0.0,
                0.0,
                0.86,
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
                9.13,
                0.0,
                0.0,
                2.38
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
            "seriesId": 5529358
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
                "2019/03/29",
                "2019/03/27",
                "2019/03/21",
                "2019/02/23",
                "2019/01/14",
                "2018/12/01",
                "2018/11/06",
                "2018/11/05",
                "2018/10/30",
                "2018/10/27",
                "2018/09/17",
                "2018/09/15",
                "2018/09/11",
                "2018/09/06",
                "2018/09/04",
                "2018/09/03",
                "2018/09/02",
                "2018/08/29",
                "2018/08/24",
                "2018/08/23",
                "2018/08/14",
                "2018/08/12",
                "2018/08/11",
                "2018/07/30",
                "2018/07/24",
                "2018/07/17",
                "2018/07/15",
                "2018/07/06",
                "2018/07/02",
                "2018/07/01",
                "2018/06/30",
                "2018/06/29",
                "2018/06/24",
                "2018/06/21",
                "2018/06/19",
                "2018/06/18",
                "2018/06/17",
                "2018/05/27",
                "2018/05/24",
                "2018/05/23"
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
    "series_id": 3943009,
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
                602.5
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
            "seriesId": 3943009,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e",
            "data": [
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
            "seriesId": 3943009,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f",
            "data": [
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
            "seriesId": 3943009,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba",
            "data": [
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
            "seriesId": 3943009,
            "xAxisIndex": 0,
            "yAxisIndex": 0
        },
        {
            "type": "bar",
            "name": "\u9605\u8bfb",
            "data": [
                812.475
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
            "seriesId": 871571,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e",
            "data": [
                1.3
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
            "seriesId": 871571,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f",
            "data": [
                0.625
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
            "seriesId": 871571,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba",
            "data": [
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
            "seriesId": 871571,
            "xAxisIndex": 1,
            "yAxisIndex": 1
        },
        {
            "type": "bar",
            "name": "\u9605\u8bfb",
            "data": [
                3900.0
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
            "seriesId": 957378,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        },
        {
            "type": "bar",
            "name": "\u70b9\u8d5e",
            "data": [
                29.0
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
            "seriesId": 957378,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        },
        {
            "type": "bar",
            "name": "\u8d5e\u8d4f",
            "data": [
                9.0
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
            "seriesId": 957378,
            "xAxisIndex": 2,
            "yAxisIndex": 2
        },
        {
            "type": "bar",
            "name": "\u8bc4\u8bba",
            "data": [
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
            "seriesId": 957378,
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
                10.0
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
                10.0
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
                10.0
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
    "series_id": 8096802,
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
                40.0
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
            "seriesId": 8096802
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
                10.0
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
    "series_id": 5433087,
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
                3.0,
                2.0,
                1.0,
                1.0,
                2.0,
                1.0,
                5.0,
                5.0,
                1.0,
                3.0,
                1.0,
                2.0,
                4.0,
                1.0,
                1.0,
                2.0,
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
            "seriesId": 5433087
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
                1.0,
                3.0,
                6.0,
                7.0,
                8.0,
                9.0,
                11.0,
                12.0,
                13.0,
                14.0,
                15.0,
                16.0,
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
    "series_id": 5944096,
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
                7.0,
                8.0,
                3.0,
                5.0,
                4.0,
                6.0,
                7.0
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
            "seriesId": 5944096
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
    "series_id": 3008099,
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
                    570,
                    3
                ],
                [
                    1876,
                    29
                ],
                [
                    376,
                    3
                ],
                [
                    312,
                    2
                ],
                [
                    535,
                    6
                ],
                [
                    371,
                    0
                ],
                [
                    1008,
                    0
                ],
                [
                    608,
                    0
                ],
                [
                    1156,
                    0
                ],
                [
                    2758,
                    0
                ],
                [
                    1047,
                    0
                ],
                [
                    630,
                    0
                ],
                [
                    726,
                    0
                ],
                [
                    844,
                    0
                ],
                [
                    1522,
                    0
                ],
                [
                    1854,
                    0
                ],
                [
                    597,
                    0
                ],
                [
                    787,
                    0
                ],
                [
                    2481,
                    0
                ],
                [
                    1023,
                    0
                ],
                [
                    242,
                    0
                ],
                [
                    161,
                    0
                ],
                [
                    1165,
                    1
                ],
                [
                    267,
                    0
                ],
                [
                    209,
                    0
                ],
                [
                    476,
                    0
                ],
                [
                    1087,
                    0
                ],
                [
                    3900,
                    0
                ],
                [
                    132,
                    0
                ],
                [
                    140,
                    0
                ],
                [
                    90,
                    0
                ],
                [
                    148,
                    0
                ],
                [
                    103,
                    0
                ],
                [
                    139,
                    0
                ],
                [
                    158,
                    0
                ],
                [
                    238,
                    0
                ],
                [
                    657,
                    6
                ],
                [
                    747,
                    0
                ],
                [
                    518,
                    0
                ],
                [
                    841,
                    2
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
            "seriesId": 3008099
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
                570.0,
                1876.0,
                376.0,
                312.0,
                535.0,
                371.0,
                1008.0,
                608.0,
                1156.0,
                2758.0,
                1047.0,
                630.0,
                726.0,
                844.0,
                1522.0,
                1854.0,
                597.0,
                787.0,
                2481.0,
                1023.0,
                242.0,
                161.0,
                1165.0,
                267.0,
                209.0,
                476.0,
                1087.0,
                3900.0,
                132.0,
                140.0,
                90.0,
                148.0,
                103.0,
                139.0,
                158.0,
                238.0,
                657.0,
                747.0,
                518.0,
                841.0
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
    "series_id": 4759755,
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
                    570,
                    1876.0
                ],
                [
                    1876,
                    376.0
                ],
                [
                    376,
                    312.0
                ],
                [
                    312,
                    535.0
                ],
                [
                    535,
                    371.0
                ],
                [
                    371,
                    1008.0
                ],
                [
                    1008,
                    608.0
                ],
                [
                    608,
                    1156.0
                ],
                [
                    1156,
                    2758.0
                ],
                [
                    2758,
                    1047.0
                ],
                [
                    1047,
                    630.0
                ],
                [
                    630,
                    726.0
                ],
                [
                    726,
                    844.0
                ],
                [
                    844,
                    1522.0
                ],
                [
                    1522,
                    1854.0
                ],
                [
                    1854,
                    597.0
                ],
                [
                    597,
                    787.0
                ],
                [
                    787,
                    2481.0
                ],
                [
                    2481,
                    1023.0
                ],
                [
                    1023,
                    242.0
                ],
                [
                    242,
                    161.0
                ],
                [
                    161,
                    1165.0
                ],
                [
                    1165,
                    267.0
                ],
                [
                    267,
                    209.0
                ],
                [
                    209,
                    476.0
                ],
                [
                    476,
                    1087.0
                ],
                [
                    1087,
                    3900.0
                ],
                [
                    3900,
                    132.0
                ],
                [
                    132,
                    140.0
                ],
                [
                    140,
                    90.0
                ],
                [
                    90,
                    148.0
                ],
                [
                    148,
                    103.0
                ],
                [
                    103,
                    139.0
                ],
                [
                    139,
                    158.0
                ],
                [
                    158,
                    238.0
                ],
                [
                    238,
                    657.0
                ],
                [
                    657,
                    747.0
                ],
                [
                    747,
                    518.0
                ],
                [
                    518,
                    841.0
                ],
                [
                    841,
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
            "seriesId": 4759755
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
                570.0,
                1876.0,
                376.0,
                312.0,
                535.0,
                371.0,
                1008.0,
                608.0,
                1156.0,
                2758.0,
                1047.0,
                630.0,
                726.0,
                844.0,
                1522.0,
                1854.0,
                597.0,
                787.0,
                2481.0,
                1023.0,
                242.0,
                161.0,
                1165.0,
                267.0,
                209.0,
                476.0,
                1087.0,
                3900.0,
                132.0,
                140.0,
                90.0,
                148.0,
                103.0,
                139.0,
                158.0,
                238.0,
                657.0,
                747.0,
                518.0,
                841.0
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
    "series_id": 4856617,
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
                4.0,
                3.0,
                2.0,
                1.0,
                1.0,
                2.0,
                1.0,
                5.0,
                5.0,
                1.0,
                3.0,
                1.0,
                2.0,
                4.0,
                1.0,
                1.0,
                2.0,
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
            "seriesId": 4856617
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                228.5,
                293.3333333333333,
                2138.0,
                371.0,
                2758.0,
                781.5,
                2481.0,
                751.6,
                605.4,
                1156.0,
                1040.6666666666667,
                747.0,
                236.5,
                691.0,
                841.0,
                597.0,
                1266.5,
                238.0
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
            "seriesId": 4856617
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                153.0,
                140.0,
                2138.0,
                371.0,
                2758.0,
                781.5,
                2481.0,
                726.0,
                267.0,
                1156.0,
                1165.0,
                747.0,
                236.5,
                789.0,
                841.0,
                597.0,
                1266.5,
                238.0
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
            "seriesId": 4856617
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
                1.0,
                3.0,
                6.0,
                7.0,
                8.0,
                9.0,
                11.0,
                12.0,
                13.0,
                14.0,
                15.0,
                16.0,
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
    "series_id": 747081,
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
                7.0,
                8.0,
                3.0,
                5.0,
                4.0,
                6.0,
                7.0
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
            "seriesId": 747081
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                668.7142857142857,
                687.125,
                1168.0,
                580.0,
                1774.75,
                887.6666666666666,
                498.85714285714283
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
            "seriesId": 747081
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                535.0,
                601.0,
                841.0,
                518.0,
                1525.5,
                500.5,
                597.0
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
            "seriesId": 747081
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
    "series_id": 5441404,
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
                7.0,
                3.0,
                1.0,
                3.0,
                1.0,
                5.0,
                1.0,
                1.0,
                2.0,
                1.0,
                1.0,
                3.0,
                1.0,
                2.0,
                2.0,
                1.0,
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
            "seriesId": 5441404
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                103.0,
                454.0,
                284.6666666666667,
                1876.0,
                1030.6666666666667,
                312.0,
                513.0,
                1156.0,
                209.0,
                254.5,
                597.0,
                630.0,
                1341.3333333333333,
                1023.0,
                956.0,
                2473.5,
                2758.0,
                563.0,
                787.0,
                841.0
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
            "seriesId": 5441404
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                103.0,
                148.0,
                238.0,
                1876.0,
                844.0,
                312.0,
                376.0,
                1156.0,
                209.0,
                254.5,
                597.0,
                630.0,
                1008.0,
                1023.0,
                956.0,
                2473.5,
                2758.0,
                563.0,
                787.0,
                841.0
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
            "seriesId": 5441404
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
                3.0,
                6.0,
                7.0,
                8.0,
                11.0,
                13.0,
                14.0,
                15.0,
                17.0,
                18.0,
                23.0,
                26.0,
                27.0,
                29.0,
                31.0,
                33.0,
                34.0,
                35.0,
                43.0,
                45.0
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
    "series_id": 7074820,
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
                3.0,
                8.0,
                6.0,
                5.0,
                3.0,
                2.0,
                1.0,
                2.0,
                1.0,
                1.0,
                2.0,
                1.0,
                1.0,
                1.0,
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
            "seriesId": 7074820
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                1854.0,
                671.0,
                389.125,
                623.8333333333334,
                817.6,
                317.3333333333333,
                190.5,
                312.0,
                2248.5,
                2758.0,
                1165.0,
                688.5,
                1023.0,
                608.0,
                1087.0,
                2481.0,
                1047.0
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
            "seriesId": 7074820
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                1854.0,
                844.0,
                149.0,
                613.5,
                726.0,
                267.0,
                190.5,
                312.0,
                2248.5,
                2758.0,
                1165.0,
                688.5,
                1023.0,
                608.0,
                1087.0,
                2481.0,
                1047.0
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
            "seriesId": 7074820
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
                7.0,
                8.0,
                9.0,
                10.0,
                11.0,
                12.0,
                14.0,
                16.0,
                17.0,
                20.0,
                21.0,
                22.0,
                25.0,
                29.0,
                33.0,
                46.0
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
    "series_id": 6999996,
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
                37.0,
                3.0
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
            "seriesId": 6999996
        },
        {
            "type": "bar",
            "name": "\u5e73\u5747\u503c",
            "data": [
                781.8378378378378,
                1190.3333333333333
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
            "seriesId": 6999996
        },
        {
            "type": "bar",
            "name": "\u4e2d\u4f4d\u6570",
            "data": [
                570.0,
                1087.0
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
            "seriesId": 6999996
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
                1.0
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
            <td>3900</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483745&idx=1&sn=22d8aa72ca51e058ea4992e67e644bfc&chksm=f97ddda6ce0a54b05d597450ba3d48f8253e44481af865c19e97d5ef40fea150dc31cf40cf7f&scene=27#wechat_redirect target="_blank">COD、黑五、游戏&App投放干货分享会 蓝色星期五第八次线下活动</a></td>
            <td>2018/07/06</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>2758</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483985&idx=1&sn=99e0e53c0237efe3e44bd613fadb073e&chksm=f97dde96ce0a5780338b009d0a28d4ba8e9a33bb6790b275fed064d407520b69047b6ce64e01&scene=27#wechat_redirect target="_blank">Pay Per Call日入万刀的秘密--后黑五时代最后一次上岸机会</a></td>
            <td>2018/10/27</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>2481</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483854&idx=1&sn=3b67b65a630123461050458b0652b2da&chksm=f97ddd09ce0a541f866beda0744df5a84b5d5c7aa72a9011c99af9b97fa2cc7c8b1d3f0b8c38&scene=27#wechat_redirect target="_blank">教程篇：手把手教你Google Play  A/B测试</a></td>
            <td>2018/08/24</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>1876</td>
            <td>29</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484047&idx=1&sn=d102333a1b5b3f185acfe202a938ece1&chksm=f97dde48ce0a575ec79d871e449ae402309ae88be1ccf98a1580869f50cda250282d62b4a5e5&scene=27#wechat_redirect target="_blank">这是一个变态的群</a></td>
            <td>2019/03/27</td>
            <td>29</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>1854</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483869&idx=1&sn=24163510ee88472b6abe06d3f5a7a3c5&chksm=f97ddd1ace0a540c3e517b529ca1882577597ee33faeb28aeed5fd9321a4f24e6cec7eece07f&scene=27#wechat_redirect target="_blank">记念刘强东君</a></td>
            <td>2018/09/03</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>1522</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483876&idx=1&sn=dd5a63d7ab2e6c5335e1f7c2f6ea04e1&chksm=f97ddd23ce0a5435bf327b1861ce132c43b20395e67e114ac6e5b7f70059c565a51eeb3e2df2&scene=27#wechat_redirect target="_blank">出海创业者众生相（上）</a></td>
            <td>2018/09/04</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>1165</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483795&idx=1&sn=cbb20713d19935c6fe0bfb6334b3be43&chksm=f97ddd54ce0a54426cd64fa0c8c56f6e8ebad9413058c77cb24ac18ca55e721255b9c0ccaf5d&scene=27#wechat_redirect target="_blank">Cloak前世今生与实战案例解析 - 蓝色星期五第十次线下聚会</a></td>
            <td>2018/08/11</td>
            <td>1</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>1156</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483994&idx=1&sn=438f4402c75476b74ef4c23f294fbfa3&chksm=f97dde9dce0a578be699052796232d492467e5873a04e5498edde037f728d2d6a92f722752ed&scene=27#wechat_redirect target="_blank">互联网出海创业者装逼指南（一）</a></td>
            <td>2018/10/30</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>1087</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483769&idx=1&sn=e3625b2d2d964830fff61acb2eb267e3&chksm=f97dddbece0a54a82d18c514d98b2384646534187c5486e137015b94f84dafb079641f4b4d4d&scene=27#wechat_redirect target="_blank">蓝色星期五第九次线下约会后续</a></td>
            <td>2018/07/15</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>1047</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483971&idx=1&sn=d3eea68c6913f3a9b06bc78a231444b2&chksm=f97dde84ce0a57922479549f145bbc9f4a554190a5a2822deb66a43b72a26d040e1cdba6f513&scene=27#wechat_redirect target="_blank">山竹来袭前那个激情的夜晚与白天--蓝色星期五首届秋季运动会圆满落幕</a></td>
            <td>2018/09/17</td>
            <td>0</td>
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
            <td>90</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483731&idx=1&sn=0cdd06a77dd0293c665ac6bf80623e0b&chksm=f97ddd94ce0a5482417d112a8c1e33fc80083a57cb792a5c50c7071a54154accd920cabd3f84&scene=27#wechat_redirect target="_blank">第七章 陷害</a></td>
            <td>2018/06/30</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>103</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483724&idx=1&sn=2bef22e5c86ba2eb5eeff29fa9273f9e&chksm=f97ddd8bce0a549dd4b28f4ff6e3ba34162599ce5b78b7cf204d9aedfd93eb38e0d6115a17c1&scene=27#wechat_redirect target="_blank">第五章</a></td>
            <td>2018/06/24</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>132</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483738&idx=1&sn=920be4a9379b44c3f3994bd3e197fda2&chksm=f97ddd9dce0a548b8c386838c524d5de6ed67dbe5b512603bccd314f65eb5fbbce3eecd8f4dc&scene=27#wechat_redirect target="_blank">第九章 文斗</a></td>
            <td>2018/07/02</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>139</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483721&idx=1&sn=21344b9cb9adb9b9a275196a0163197b&chksm=f97ddd8ece0a54980bb76e1bc8a2f0893ac3e4cdff6e5a114a15f9dbffd71ff78fb761886ba9&scene=27#wechat_redirect target="_blank">第四章 秘密</a></td>
            <td>2018/06/21</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>140</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483734&idx=1&sn=97f91ab7f4815fb4a9701afcc3c16ffe&chksm=f97ddd91ce0a54873693614af90da40e27a17daea840e312b1b9a0d620762db1ad77bacf2c9c&scene=27#wechat_redirect target="_blank">第八章 看守所</a></td>
            <td>2018/07/01</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>148</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483728&idx=1&sn=103001b3e6067d9c7c5d9fb47c949d2e&chksm=f97ddd97ce0a5481ab8bf3d660cb2c1ffeb381e94cccbf6a27eefc7f9c0c35ccc1afa16fc255&scene=27#wechat_redirect target="_blank">第六章 命案</a></td>
            <td>2018/06/29</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>158</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483713&idx=1&sn=11acbac7d33c6b42206c18c0911cb4b2&chksm=f97ddd86ce0a549046fc3b35fd177f138d81bfca4d4763ff1a2ef279bcf0ce57198f7bd6a322&scene=27#wechat_redirect target="_blank">第三章 网管</a></td>
            <td>2018/06/19</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>161</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483799&idx=1&sn=0d32a24a9458d25a3ba5d4e688357626&chksm=f97ddd50ce0a544615c6a11327be2e903f54ab97add28b0e5055b8675da0db16f9722825ff30&scene=27#wechat_redirect target="_blank">蓝色星期五社群积分制V1.0</a></td>
            <td>2018/08/12</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>209</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483779&idx=1&sn=6f254644ecb61457c2d7d94fe93df035&chksm=f97ddd44ce0a5452a6f8df0abd11c32f3b956bd0ab17079532bad588a36b9b5b5715b8b2d378&scene=27#wechat_redirect target="_blank">蓝色星期五第十次线下分享会主题调查</a></td>
            <td>2018/07/24</td>
            <td>0</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>238</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483712&idx=1&sn=d439e75c5f16002c847d6237dab24f8b&chksm=f97ddd87ce0a5491b84d77d21057f782f9bde991e560cd702319aa33acc2915a222437e3fff0&scene=27#wechat_redirect target="_blank">第二章  穿越</a></td>
            <td>2018/06/18</td>
            <td>0</td>
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
            <td>1876</td>
            <td>29</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484047&idx=1&sn=d102333a1b5b3f185acfe202a938ece1&chksm=f97dde48ce0a575ec79d871e449ae402309ae88be1ccf98a1580869f50cda250282d62b4a5e5&scene=27#wechat_redirect target="_blank">这是一个变态的群</a></td>
            <td>2019/03/27</td>
            <td>15.46</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>535</td>
            <td>6</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484035&idx=1&sn=13c23354dd2c53c7cb07c6dfd091065d&chksm=f97dde44ce0a5752572f0b1b0ecb8d79106e7792d6e7853455f29d36b8efaddaad6a1b39c919&scene=27#wechat_redirect target="_blank">海外流量圣殿--蓝五大学第一届学员招生倒计时最后2天！</a></td>
            <td>2019/01/14</td>
            <td>11.21</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>657</td>
            <td>6</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483711&idx=1&sn=c91c52a7cff458fb55625c7028dc81c7&chksm=f97dddf8ce0a54eeffbcbd0787294080bcb10d471f8c63ba7f204f1ec161992a19b991f63edf&scene=27#wechat_redirect target="_blank">第一章 邂逅</a></td>
            <td>2018/06/17</td>
            <td>9.13</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>376</td>
            <td>3</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484042&idx=1&sn=070677afac980036f01c4641b86bbf4e&chksm=f97dde4dce0a575bfa4d480d1bb93880d986ac90f4c0cba2c9a945f0f254bda04d3106ee2d9e&scene=27#wechat_redirect target="_blank">独立站电商新趋势、新玩法探讨</a></td>
            <td>2019/03/21</td>
            <td>7.98</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>312</td>
            <td>2</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484037&idx=1&sn=4ab5228a381a621bdfe48dac6e28e602&chksm=f97dde42ce0a5754fc09c89d2e81a642851b22f4c321e0d2b10b1fa536ca6262e7fc9f73529a&scene=27#wechat_redirect target="_blank">互联网出海之流量江湖（上）</a></td>
            <td>2019/02/23</td>
            <td>6.41</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>570</td>
            <td>3</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484053&idx=1&sn=3a555af52ad52187c36b4660bded178c&chksm=f97dde52ce0a57440f371352e76a9b672e96355a1e7ac387fe78503f154f207d7d2507026bdd&scene=27#wechat_redirect target="_blank">蓝色星期五4月份群友分享排期</a></td>
            <td>2019/03/29</td>
            <td>5.26</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>841</td>
            <td>2</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483656&idx=1&sn=e4677022e829e005b0d5123871e56d87&chksm=f97dddcfce0a54d925b178b3b387efa80737b910577e82fc6ade74a7adf98b56bac15a768da7&scene=27#wechat_redirect target="_blank">Facebook群控加粉、裂变、变现 脑暴笔记----蓝色星期五【海外】第五次线下聚会分享</a></td>
            <td>2018/05/23</td>
            <td>2.38</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>1165</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483795&idx=1&sn=cbb20713d19935c6fe0bfb6334b3be43&chksm=f97ddd54ce0a54426cd64fa0c8c56f6e8ebad9413058c77cb24ac18ca55e721255b9c0ccaf5d&scene=27#wechat_redirect target="_blank">Cloak前世今生与实战案例解析 - 蓝色星期五第十次线下聚会</a></td>
            <td>2018/08/11</td>
            <td>0.86</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>608</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484019&idx=1&sn=bf9be4afa7c5f5c3bc510da5c20f54b1&chksm=f97ddeb4ce0a57a295403a3eabd8029ab8285391fc7cfa9d30d909b893209225da129f5ddd3b&scene=27#wechat_redirect target="_blank">Pay Per Call 推广秘籍--蓝色星期五第14次线下活动上半场</a></td>
            <td>2018/11/05</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>148</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483728&idx=1&sn=103001b3e6067d9c7c5d9fb47c949d2e&chksm=f97ddd97ce0a5481ab8bf3d660cb2c1ffeb381e94cccbf6a27eefc7f9c0c35ccc1afa16fc255&scene=27#wechat_redirect target="_blank">第六章 命案</a></td>
            <td>2018/06/29</td>
            <td>0.0</td>
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
            <td>1023</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483827&idx=1&sn=ebc5c83ca3998ecff329b6bfb66a4880&chksm=f97ddd74ce0a5462f0f7e4f7f9aff65b83bbd90f52b70b97aae77e3d7202eb591fcf9231d0fa&scene=27#wechat_redirect target="_blank">资源篇：Paypal不能充值FB了，试试BOA无限信用卡？</a></td>
            <td>2018/08/23</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>90</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483731&idx=1&sn=0cdd06a77dd0293c665ac6bf80623e0b&chksm=f97ddd94ce0a5482417d112a8c1e33fc80083a57cb792a5c50c7071a54154accd920cabd3f84&scene=27#wechat_redirect target="_blank">第七章 陷害</a></td>
            <td>2018/06/30</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>140</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483734&idx=1&sn=97f91ab7f4815fb4a9701afcc3c16ffe&chksm=f97ddd91ce0a54873693614af90da40e27a17daea840e312b1b9a0d620762db1ad77bacf2c9c&scene=27#wechat_redirect target="_blank">第八章 看守所</a></td>
            <td>2018/07/01</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>132</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483738&idx=1&sn=920be4a9379b44c3f3994bd3e197fda2&chksm=f97ddd9dce0a548b8c386838c524d5de6ed67dbe5b512603bccd314f65eb5fbbce3eecd8f4dc&scene=27#wechat_redirect target="_blank">第九章 文斗</a></td>
            <td>2018/07/02</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>3900</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483745&idx=1&sn=22d8aa72ca51e058ea4992e67e644bfc&chksm=f97ddda6ce0a54b05d597450ba3d48f8253e44481af865c19e97d5ef40fea150dc31cf40cf7f&scene=27#wechat_redirect target="_blank">COD、黑五、游戏&App投放干货分享会 蓝色星期五第八次线下活动</a></td>
            <td>2018/07/06</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>1087</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483769&idx=1&sn=e3625b2d2d964830fff61acb2eb267e3&chksm=f97dddbece0a54a82d18c514d98b2384646534187c5486e137015b94f84dafb079641f4b4d4d&scene=27#wechat_redirect target="_blank">蓝色星期五第九次线下约会后续</a></td>
            <td>2018/07/15</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>476</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483774&idx=1&sn=79f926f7c13cd446101a49420d7afbdf&chksm=f97dddb9ce0a54af5be86887fb66b32fd3db99242398117b65f65bdac470447528165ffb7daa&scene=27#wechat_redirect target="_blank">第十章 四小队</a></td>
            <td>2018/07/17</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>209</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483779&idx=1&sn=6f254644ecb61457c2d7d94fe93df035&chksm=f97ddd44ce0a5452a6f8df0abd11c32f3b956bd0ab17079532bad588a36b9b5b5715b8b2d378&scene=27#wechat_redirect target="_blank">蓝色星期五第十次线下分享会主题调查</a></td>
            <td>2018/07/24</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>267</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483786&idx=1&sn=51f1fe4df8a90b5f3dfd8b7c9819eb51&chksm=f97ddd4dce0a545b2c056c284f95d507c6cf6c0850f45f65827d6628a0ee57019fa7f6dff063&scene=27#wechat_redirect target="_blank">蓝色星期五第十次聚会主题调查（多选）</a></td>
            <td>2018/07/30</td>
            <td>0.0</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>161</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483799&idx=1&sn=0d32a24a9458d25a3ba5d4e688357626&chksm=f97ddd50ce0a544615c6a11327be2e903f54ab97add28b0e5055b8675da0db16f9722825ff30&scene=27#wechat_redirect target="_blank">蓝色星期五社群积分制V1.0</a></td>
            <td>2018/08/12</td>
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
            <td>3900</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483745&idx=1&sn=22d8aa72ca51e058ea4992e67e644bfc&chksm=f97ddda6ce0a54b05d597450ba3d48f8253e44481af865c19e97d5ef40fea150dc31cf40cf7f&scene=27#wechat_redirect target="_blank">COD、黑五、游戏&App投放干货分享会 蓝色星期五第八次线下活动</a></td>
            <td>2018/07/06</td>
            <td>33.85</td>
        </tr>
        
        <tr>
            <td>2</td>
            <td>1876</td>
            <td>29</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484047&idx=1&sn=d102333a1b5b3f185acfe202a938ece1&chksm=f97dde48ce0a575ec79d871e449ae402309ae88be1ccf98a1580869f50cda250282d62b4a5e5&scene=27#wechat_redirect target="_blank">这是一个变态的群</a></td>
            <td>2019/03/27</td>
            <td>200.43</td>
        </tr>
        
        <tr>
            <td>3</td>
            <td>1165</td>
            <td>1</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483795&idx=1&sn=cbb20713d19935c6fe0bfb6334b3be43&chksm=f97ddd54ce0a54426cd64fa0c8c56f6e8ebad9413058c77cb24ac18ca55e721255b9c0ccaf5d&scene=27#wechat_redirect target="_blank">Cloak前世今生与实战案例解析 - 蓝色星期五第十次线下聚会</a></td>
            <td>2018/08/11</td>
            <td>229.18</td>
        </tr>
        
        <tr>
            <td>4</td>
            <td>1023</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483827&idx=1&sn=ebc5c83ca3998ecff329b6bfb66a4880&chksm=f97ddd74ce0a5462f0f7e4f7f9aff65b83bbd90f52b70b97aae77e3d7202eb591fcf9231d0fa&scene=27#wechat_redirect target="_blank">资源篇：Paypal不能充值FB了，试试BOA无限信用卡？</a></td>
            <td>2018/08/23</td>
            <td>236.56</td>
        </tr>
        
        <tr>
            <td>5</td>
            <td>1854</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483869&idx=1&sn=24163510ee88472b6abe06d3f5a7a3c5&chksm=f97ddd1ace0a540c3e517b529ca1882577597ee33faeb28aeed5fd9321a4f24e6cec7eece07f&scene=27#wechat_redirect target="_blank">记念刘强东君</a></td>
            <td>2018/09/03</td>
            <td>322.01</td>
        </tr>
        
        <tr>
            <td>6</td>
            <td>2758</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483985&idx=1&sn=99e0e53c0237efe3e44bd613fadb073e&chksm=f97dde96ce0a5780338b009d0a28d4ba8e9a33bb6790b275fed064d407520b69047b6ce64e01&scene=27#wechat_redirect target="_blank">Pay Per Call日入万刀的秘密--后黑五时代最后一次上岸机会</a></td>
            <td>2018/10/27</td>
            <td>379.62</td>
        </tr>
        
        <tr>
            <td>7</td>
            <td>2481</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483854&idx=1&sn=3b67b65a630123461050458b0652b2da&chksm=f97ddd09ce0a541f866beda0744df5a84b5d5c7aa72a9011c99af9b97fa2cc7c8b1d3f0b8c38&scene=27#wechat_redirect target="_blank">教程篇：手把手教你Google Play  A/B测试</a></td>
            <td>2018/08/24</td>
            <td>412.33</td>
        </tr>
        
        <tr>
            <td>8</td>
            <td>1047</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483971&idx=1&sn=d3eea68c6913f3a9b06bc78a231444b2&chksm=f97dde84ce0a57922479549f145bbc9f4a554190a5a2822deb66a43b72a26d040e1cdba6f513&scene=27#wechat_redirect target="_blank">山竹来袭前那个激情的夜晚与白天--蓝色星期五首届秋季运动会圆满落幕</a></td>
            <td>2018/09/17</td>
            <td>601.72</td>
        </tr>
        
        <tr>
            <td>9</td>
            <td>1008</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247484026&idx=1&sn=53eb48a0c45e176925fd8f8fa996b635&chksm=f97ddebdce0a57abb561c0c0678f5518ba42f9b63f3ad89d2ff0affdfe8d5c766a89149dd3a3&scene=27#wechat_redirect target="_blank">华山论剑：互联网出海下半场 合适创业公司的出海模式探讨</a></td>
            <td>2018/11/06</td>
            <td>603.17</td>
        </tr>
        
        <tr>
            <td>10</td>
            <td>140</td>
            <td>0</td>
            <td><a class='text-body' href=http://mp.weixin.qq.com/s?__biz=MzUxMDg1NjYxNg==&mid=2247483734&idx=1&sn=97f91ab7f4815fb4a9701afcc3c16ffe&chksm=f97ddd91ce0a54873693614af90da40e27a17daea840e312b1b9a0d620762db1ad77bacf2c9c&scene=27#wechat_redirect target="_blank">第八章 看守所</a></td>
            <td>2018/07/01</td>
            <td>642.86</td>
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
        
    </tbody>
</table>
`