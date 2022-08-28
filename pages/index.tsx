import type { NextPage } from 'next'
import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const Home: NextPage = () => {
  const now = dayjs().tz('Asia/Tokyo');
  const year = now.year();
  const firstDayOfWeeks = [] as number[];
  const lastDates = [] as number[];
  for (let i = 0; i < 12; ++i) {
    firstDayOfWeeks.push((dayjs(new Date(year, i, 1)).tz('Asia/Tokyo')).day());
    lastDates.push(dayjs(new Date(year, i + 1, 0)).tz('Asia/Tokyo').date());
  }
  const dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土"];

  const table = {
    "1": {
      "1": ["リン"],
      "3": ["ミサキ"],
      "12": ["レイ"],
      "23": ["ミヤコ"],
      "24": ["ノゾミ"],
    },
    "2": {
      "2": ["キョウカ", "ラム", "レム"],
      "4": ["ルゥ"],
      "7": ["クリスティーナ"],
      "28": ["ユニ"],
    },
    "3": {
      "1": ["タマキ"],
      "3": ["マヒル"],
      "7": ["ミツキ"],
      "10": ["ジータ"],
      "12": ["アキノ"],
      "14": ["リマ"],
      "16": ["ユカリ"],
      "24": ["ネネカ"],
      "31": ["ペコリーヌ"],
    },
    "4": {
      "3": ["ミミ"],
      "5": ["ユイ"],
      "7": ["アユミ"],
      "10": ["スズナ"],
      "17": ["ホマレ"],
      "24": ["ウヅキ"],
    },
    "5": {
      "5": ["イリヤ"],
      "10": ["アヤネ"],
      "11": ["コッコロ"],
    },
    "6": {
      "3": ["チカ"],
      "6": ["アオイ"],
      "9": ["クルミ"],
      "17": ["アリサ"],
      "25": ["カヤ"],
    },
    "7": {
      "5": ["アンナ"],
      "7": ["カオリ"],
      "11": ["ルカ"],
      "25": ["ラビリスタ"],
      "28": ["モニカ"],
      "30": ["エリコ"],
    },
    "8": {
      "7": ["クロエ"],
      "9": ["マコト"],
      "10": ["ミソギ", "リン(デレマス)"],
      "11": ["トモ", "ムイミ"],
      "14": ["イオ"],
      "21": ["ナナカ"],
      "25": ["リノ"],
      "27": ["ヒヨリ"],
      "31": ["ニノン"],
    },
    "9": {
      "2": ["キャル"],
      "5": ["ミサト"],
      "7": ["ツムギ"],
      "12": ["カリン"],
      "15": ["チエル"],
      "19": ["クレジッタ"],
      "22": ["マホ"],
      "23": ["エミリア"],
      "29": ["イノリ"],
    },
    "10": {
      "4": ["サレン"],
      "10": ["ユキ"],
      "24": ["シズル"],
      "25": ["ジュン"],
    },
    "11": {
      "3": ["シオリ", "カスミ", "グレア"],
      "11": ["ミフユ"],
      "19": ["クウカ"],
      "22": ["アカリ", "ヨリ"],
      "25": ["マツリ"],
    },
    "12": {
      "1": ["アン", "ミオ"],
      "12": ["スズメ"],
      "22": ["シノブ"],
      "24": ["ハツネ"],
      "28": ["ランファ"],
    },
  };

  return (
    <div>
      <p className="fs-1 text-center pt-3">プリコネカレンダー</p>
      <p className="text-center">プリコネRのキャラの誕生日カレンダー</p>
      {
        [...Array(12)].map((_, m) => (
          <div key={m} className="text-center">
            <div className="my-3 fw-bold">{year}年{m + 1}月</div>
            <div className="row gx-0 gy-0">
              { dayOfWeeks.map(e => <div key={e} className="col border-bottom border-dark">{ e }</div>) }
            </div>
            {
              [...Array(Math.trunc(lastDates[m] / 7) + 2)].map((_, w) => {
                const ds = [...Array(7)].map((_, i) => w * 7 + i + 1);
                return (
                  <div key={w} className="row gx-0 gy-0">
                    {
                      ds[0] - firstDayOfWeeks[m] <= lastDates[m] && (
                        [...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className={`col ${1 <= ds[i] - firstDayOfWeeks[m] ? "" : "bg-secondary"} border-bottom ${i !== 6 ? "border-end" : ""}
                              ${ds[i] - firstDayOfWeeks[m] <= lastDates[m] ? "border-dark" : "border-white"}`}
                              style={{minHeight: "80px"}}
                            >
                              <div className="d-flex flex-wrap justify-content-center h-100">
                                <div className="align-self-start w-100">
                                  { 1 <= ds[i] - firstDayOfWeeks[m] && ds[i] - firstDayOfWeeks[m] <= lastDates[m] ? ds[i] - firstDayOfWeeks[m]: ""}
                                </div>
                                <div style={{whiteSpace: "pre-wrap"}}>
                                  {
                                    Object.hasOwnProperty.call(table[(m + 1).toString() as keyof typeof table], (ds[i] - firstDayOfWeeks[m]).toString())
                                      ? `${(table[(m + 1).toString() as keyof typeof table][(ds[i] - firstDayOfWeeks[m]) as keyof typeof table[keyof typeof table]] as string[]).join("\n/")}`
                                      : ""
                                  }
                                </div>
                              </div>
                          </div>
                        ))
                      )
                    }
                  </div>
                );
              })
            }
          </div>
        ))
      }
    </div>
  )
}

export default Home
