export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const timelineData: TimelineEvent[] = [
  {
    id: 1,
    date: "3 maret 2024",
    title: "Fotbar pertama kita",
    description: "ini kamu waktu nemenin aku lomba, kamu perhatian banget waktu itu",
    image: "/media/fotbar1.jpg",
  },
  {
    id: 2,
    date: "7 maret 2024",
    title: "Date pertama kita",
    description: "Tebak dimana hayooo iniii?? keknya aku gak akan tau tempat ini kalo gak di kasih tau kamu,makasi yaaa udah ngasih tau tempat ini",
    image: "/media/date2.jpg",
  },
  {
    id: 3,
    date: "25 juni 2024",
    title: "Foto pertama kita after jadian",
    description: "Ciee ciee udah jadian nihh disini,aku aja gak nyangka bisa jadi cowo kamu ibarat kaya beauty and the beast , kamu seorang princess yang mau menerima orang jelek kaya aku,btw I lovee uu cantikk",
    image: "/media/jadian1.jpg",
  },
  {
    id: 4,
    date: "7 desember 2024",
    title: "Photo booth pertama kita",
    description: "Photo booth pertama kita ini gak akan pernah aku lupain dari kita mati gaya buat fotonya terus outfit aku yang udah kaya mau nyawah tapi kamu asli cakep banget lucu banget sayang disini,tapii emang si kamu mau kaya apapun tetep cantik polll",
    image: "/media/fotobut1.jpg",
  },
  {
    id: 5,
    date: "8 Juni 2025",
    title: "Anniversary pertama kita",
    description: "satu tahun anniversary banyak cerita,banyak tawa dan juga sedih tapi kita bisa laluin sama sama sampe gak kerasa udah 1 tahun aja hubungan dan kamu adalah alasan kenapa hubungan ini masih lanjut baby. I love uuu so much babe",
    image: "/media/anniv2.jpg",
  },
];
