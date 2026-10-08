const dataPembeli = {
  name: "Afif Rizal",
  email: "minggupertamakodalangsungkerja@koda.com",
  address:
    "Jl. Papua Aceh Merdeka No. 17, Kec. Prabowo, Kab. Bogor, Jawa Barat",
};

const detailPesanan = {
  items: [
    {
      id: 1,
      itemId: "sku-1",
      itemPrice: 20000,
      qty: 2,
      subtotal: 40000,
    },
    {
      id: 2,
      itemId: "sku-2",
      itemPrice: 30200,
      qty: 1,
      subtotal: 30200,
    },
  ],
  total: 70200,
};

let fakturPembayaran = {
  ...dataPembeli,
  ...detailPesanan,
};

function setStatusPembayaran(statusPembayaran) {
  fakturPembayaran = {
    ...fakturPembayaran,
    statusPembayaran: statusPembayaran,
  };
}

setStatusPembayaran("Lunas");

const { name, email, total } = fakturPembayaran;

console.log(`
    Struk dicetak untuk ${name} (${email}) dengan total tagihan Rp ${total.toLocaleString("id-ID")},-
  `);
