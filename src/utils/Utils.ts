import differenceInMonths from "date-fns/differenceInMonths";
import differenceInWeeks from "date-fns/differenceInWeeks";
import differenceInYears from "date-fns/differenceInYears";
import millisecondsToHours from "date-fns/millisecondsToHours";
import millisecondsToMinutes from "date-fns/millisecondsToMinutes";
import millisecondsToSeconds from "date-fns/millisecondsToSeconds";

export const MOTE_VALUE = 1000000000;

export const KNOW_ADDRESSES = [
  {
    public_key:
      "0203f3f44c9e80e2cedc1a2909631a3adea8866ee32187f74d0912387359b0ff36a2",
    name: "Gate.io",
    img: "/gateio.png",
  },
  {
    public_key:
      "0203A5C03D9F7D6885276D0FAA25D412ECC1369F6573856C321D99CAFC0DAC2A8C12",
    name: "Casper Association - Developer grants",
    img: "/ca.png",
  },
  {
    public_key:
      "02024C5E3BA7B1DA49CDA950319AEC914CD3C720FBEC3DCF25AA4ADD631E28F70AA9",
    name: "Casper - Association",
    img: "/ca.png",
  },
  {
    public_key:
      "02036210C108F7E819A38AE05CC7B1DC39A2E6366F1404CE4C12E9C05B3832D811BB",
    name: "Casper - Team",
    img: "/labs.png",
  },
  {
    public_key:
      "0140a48b549ae33cf28e39241a33dd5e22f491d8811f9d83981f3549d418e06da0",
    name: "OKX",
    img: "/okx.png",
  },
  {
    public_key:
      "02035C47CCBEAA32040D6904B6DC163C3B546314C52B2A78583835F54A224AB365A4",
    name: "CasperLabs Holding AG",
    img: "/labs.png",
  },
  {
    public_key:
      "020268d1bfe476bc6a05e4db2e82d40c6f877c5a133817923784fc48563f2c77db8d",
    name: "Coinlist",
    img: "/coinlist.jpeg",
  },
  {
    public_key:
      "01b92e36567350dd7b339d709bfe341df6fda853e85315418f1bb3ddd414d9f5be",
    name: "Huobi",
    img: "/huobi.png",
  },
  {
    public_key:
      "01a0d23e084a95cdee9c2fb226d54033d645873a7c7c9739de2158725c7dfe672f",
    name: "Uphold",
    img: "/Uphold.png",
  },
  {
    public_key:
      "0203fd663354cab9127c7f30a1746f3d36984c467f7c4343bf1da5607f4239167beb",
    name: "Uphold",
    img: "/Uphold.png",
  },
  {
    public_key:
      "0202ed20f3a93b5386bc41b6945722b2bd4250c48f5fa0632adf546e2f3ff6f4ddee",
    name: "Kucoin",
    img: "/kucoin.png",
  },
  {
    public_key:
      "020232ee968558c70952e472bd4ac47d5830f317e91a00a033b45fbab2f7b75e0158",
    name: "Coinlist",
    img: "/coinlist.jpeg",
  },
  {
    public_key:
      "020268d1bfe476bc6a05e4db2e82d40c6f877c5a133817923784fc48563f2c77db8d",
    name: "Coinlist",
    img: "/coinlist.jpeg",
  },
  {
    public_key:
      "016470ae57b0a3ad5a679d2e0422909bfb9ded445e20cbe6b4c9806f844c94d401",
    name: "Mexc",
    img: "/mexc.png",
  },
  {
    public_key:
      "01d6aceccfa3063684901d800b82e16682aaa163b9559985231591d04e43c0e14d",
    name: "CoinEx",
    img: "/coinex.png",
  },
  {
    public_key:
      "020396133b3bbbfcf7d1961390f9449e2de5813523180376df361cb31a1ca965b576",
    name: "Crypto.com",
    img: "/cryptocom.png",
  },
  {
    public_key:
      "02020e377ce7425130b4e40181be3b5b424fe802f294db2362ccbe0682dc8d8c93a7",
    name: "Kucoin Cold Wallet",
    img: "/kucoin.png",
  },
  {
    public_key:
      "0202d219ef1f971118e33eacbad3d01c66cd07abc59d269e28253189dab15232479d",
    name: "Kucoin Cold Wallet 2",
    img: "/kucoin.png",
  },
  {
    public_key:
      "01d612c88c8cf783115e162183754ab807e74e7fe02308bf78f7847694cb87844a",
    name: "Bitvavo",
    img: "/bitvavo.png",
  },
  {
    public_key:
      "011c74ebfcc1b19bc3e578bec3ecfa2d484f2a00d7e9e8152c4c70f519f6a89f6a",
    name: "Crypto.com",
    img: "/cryptocom.png",
  },
];

export const formatNumber = (number: number) => {
  // Limit to three significant digits
  return number.toLocaleString("en-US");
};

export const truncateString = (string: string, number: number) => {
  if (number >= string?.length) {
    return string;
  }
  return string?.slice(0, number).concat("...");
};

export const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

export const DeployColors = {
  transfer: "#118ab2",
  storedContractByHash: "#8E8ab2",
  moduleBytes: "#9Ad166",
  storedVersionedContractByHash: "#E3H348",
};

export const getPerfColor = (percent: number) => {
  if (percent > 99.5) {
    return "#16a34a";
  }
  if (percent > 98) {
    return "#84cc16";
  }
  if (percent > 97) {
    return "#a3e635";
  }
  if (percent > 96) {
    return "#facc15";
  }
  return "#ea580c";
};

/**
 * Get relative date/time format from Intl
 * @param {Object} params
 * @param {date} params.date1 The first date
 * @param {string} params.token The token
 * @param {string} params.locale The locale
 * @param {string} params.style The style of the output
 * @param {string} params.numeric Also affect the style of the output
 * @return {string} Ex: 2 days ago
 */
// @ts-ignore should add compilerOptions.noImplicitThis=false in tsconfig
export const getRelativeDateTime = ({
  date1 = new Date(),
  date2 = new Date(),
  locale = "en",
  token = "$relative-time-long",
}: IRelativeDatetime) => {
  const { style, numeric } = tokens[token];
  const selectedFormat = getFormatFromDifference(date2, date1);
  const timeDifference = getTimeDifference(date2, date1, selectedFormat);
  const rtf1 = new Intl.RelativeTimeFormat(locale, { style, numeric });
  return rtf1.format(Math.round(timeDifference), selectedFormat);
};

const tokens: {
  [key: string]: Intl.RelativeTimeFormatOptions;
} = {
  "$relative-time-long": {
    style: "short",
    numeric: "always",
  },
  "$relative-weekday-long": {
    style: "long",
    numeric: "auto",
  },
};

export type IRelativeDateTimeToken = keyof typeof tokens;

export interface IRelativeDatetime {
  date1: Date;
  date2?: Date;
  locale?: string;
  token?: IRelativeDateTimeToken;
}

/**
 * Get the best format to display difference between 2 dates
 * @param {date} date1 The first date
 * @param {date} date2 The second date
 * @return {format} Ex: year
 */
function getFormatFromDifference(date1: Date, date2: Date) {
  const millisecondes: number = Math.abs(date2.getTime() - date1.getTime());
  const hours = millisecondsToHours(millisecondes);

  const minimumHourInOneYear = 8761;
  const minimumHourInOneMonth = 730;
  const minimumHourInOneWeek = 168;
  const minimumHourInOneDay = 24;

  if (hours > minimumHourInOneYear) {
    return "year";
  }
  if (hours > minimumHourInOneMonth) {
    return "month";
  }
  if (hours > minimumHourInOneWeek) {
    return "week";
  }
  if (hours > minimumHourInOneDay) {
    return "day";
  }
  if (millisecondsToMinutes(millisecondes) >= 60) {
    return "hour";
  }
  if (millisecondsToMinutes(millisecondes) >= 1) {
    return "minute";
  }
  return "second";
}

/**
 * Get time difference between 2 dates in millisecond, seconds, minutes or hours
 * @param {date} date1 The first date
 * @param {date} date2 The second date
 * @param {string} format milliseconds, hours, minutes or seconds
 * @return {number} Ex: 112300000
 */
function getTimeDifference(
  date1: Date,
  date2: Date,
  format?: "second" | "minute" | "hour" | "day" | "week" | "month" | "year"
) {
  let millisecond: number = date2.getTime() - date1.getTime();
  if (format === "second") {
    return millisecondsToSeconds(millisecond);
  }
  if (format === "minute") {
    return millisecondsToMinutes(millisecond);
  }
  if (format === "hour") {
    return millisecondsToHours(millisecond);
  }
  if (format === "day") {
    millisecond = date2.getTime() - date1.getTime();
    return millisecondsToHours(millisecond) / 24;
  }
  if (format === "week") {
    return differenceInWeeks(date2, date1);
  }
  if (format === "month") {
    return differenceInMonths(date2, date1);
  }
  if (format === "year") {
    return differenceInYears(date2, date1);
  }
  return millisecond;
}

export const getAvatarUrl = (
  publicKey: string,
  delegatorsInfos?: {
    publicKey?: string;
    name?: string;
    img?: string;
  }[]
) => {
  const isKnow = KNOW_ADDRESSES.find(
    add => add.public_key.toLocaleLowerCase() === publicKey?.toLocaleLowerCase()
  );
  let img = `https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${
    publicKey ? publicKey.slice(12) : "abby"
  }`;

  if (isKnow) {
    img = isKnow.img;
  }
  if (delegatorsInfos) {
    const isDelegatorKnow = delegatorsInfos.find(
      del => del.publicKey === publicKey
    );
    if (isDelegatorKnow) {
      img = isDelegatorKnow.img || "";
    }
  }
  return img;
};

export const getPublicKeyName = (
  publicKey: string,
  delegatorsInfos?: {
    publicKey?: string;
    name?: string;
    img?: string;
  }[]
) => {
  const isKnow = KNOW_ADDRESSES.find(
    add => add.public_key.toLocaleLowerCase() === publicKey?.toLocaleLowerCase()
  );
  let name = publicKey;

  if (isKnow) {
    name = isKnow.name;
  }
  if (delegatorsInfos) {
    const isDelegatorKnow = delegatorsInfos.find(
      del => del.publicKey === publicKey
    );
    if (isDelegatorKnow) {
      name = isDelegatorKnow.name || publicKey;
    }
  }
  return name;
};
