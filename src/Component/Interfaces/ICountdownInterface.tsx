export interface ICountdownInterface {
 targetDate: string; 
 onComplete: () => void;
messagesByHour?: ICountdownMessageInterface[];
};

export interface ICountdownProps {
 total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  message: string;
}

export interface ICountdownMessageInterface {
  start: number;
  end: number;
  texts: string[];
}