function buatProfileD(nama, umur = 18) {
  return {
    namaLengkap: nama,
    usia: umur,
    kategori: umur >= 18 ? "Dewasa" : "Anak-Anak",
  };
}
const buatProfileA = function (nama, umur) {
  return {
    namaLengkap: nama,
    usia: umur,
    kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
  };
};
const buatProfileAr = () => {
  return {
    namaLengkap: nama,
    usia: umur,
    kategori: umur >= 18 ? "Dewasa" : "Anak-Anak",
  };
};
