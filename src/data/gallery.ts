export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

// Untuk foto lokal:
// 1. Taruh file foto di public/media
// 2. Isi url dengan format "/media/nama-file.jpg"
// Contoh: public/media/foto-1.jpg -> url: "/media/foto-1.jpg"
// Kamu juga tetap bisa memakai URL internet penuh seperti "https://..."
export const galleryData: GalleryImage[] = [
  {
    id: 1,
    url: "/media/senyum.jpg",
    caption: "Senyum favorit aku.",
  },
  {
    id: 2,
    url: "/media/hujan.jpg",
    caption: "Hujan hujan with princess",
  },
  {
    id: 3,
    url: "/media/graduate.jpg",
    caption: "Graduation my princess",
  },
  {
    id: 4,
    url: "/media/hacipupu.jpg",
    caption: "Bayi kecil dan mamah nya",
  },
  {
    id: 5,
    url: "/media/princess.jpg",
    caption: "princess tambun akuu",
  },
  {
    id: 6,
    url: "/media/fashionshow.jpg",
    caption: "kita fashion show cuy",
  },
];
