import {  BarChart3, CalendarCheck, CalendarPlus, LucideIcon, Rocket, Search, UserCheck } from "lucide-react";

export interface StepItem {
    number:string,
    icon:LucideIcon,
    title:string,
    description:string
}

export const USER_STEPS:StepItem[] = [
  {
    number: "01",
    icon: Search,
    title: "Tadbirni toping",
    description:
      "Sohangiz va qiziqishlaringizga mos keladigan seminarlarni tanlang",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Joy band qiling",
    description:
      "Bir nechta bosish orqali tezkor ro'yxatdan o'ting va chipta xarid qiling",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ishtirok eting",
    description:
      "Tadbirda qatnashing, bilimlaringizni oshiring",
  }
];



export const ORGANIZER_STEPS:StepItem[]=[
  {
    number:"01",
    icon:UserCheck,
    title:"Ariza va Tasdiq",
    description:"Tashkilotchi sifatida ariza topshirasiz va admin modernizatsiyadan so'ng ruxsat olasiz"
  },
    {
    number:"02",
    icon:CalendarPlus,
    title:"Tadbirni yaratish",
    description:"Tadbir vaqti, manzili va chipta shartlarini kiritib tadbir yaratasiz"
  },  {
    number:"03",
    icon:BarChart3,
    title:"Boshqaruv va analitika",
    description:"Ro'yxatdan o'tganlarni real vaqt kuzatasiz"
  }
]
