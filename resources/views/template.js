// ⚡4email
exports.praktikum = (data) => {
  `<p style="color: black;">Data pendaftaran kamu sudah masuk</p>
<tablestyle="border-collapse: collapse; ">
        <tr>
          <th style="text-align: left; font-weight: unset; padding-right: 12px; color: black;">Nama Lengkap</th>
          <th style="text-align: left; font-weight: unset; color: black;">${data.nama}</th>
        </tr>
        <tr>
          <th style="text-align: left; font-weight: unset; padding-right: 12px; color: black;">NIM</th>
          <th style="text-align: left; font-weight: unset; color: black;">${data.nim}</th>
        </tr>
        <tr>
          <th style="text-align: left; font-weight: unset; padding-right: 12px; color: black;">Program Studi</th>
          <th style="text-align: left; font-weight: unset; color: black;">${data.prodi}</th>
        </tr>
        <tr>
          <th style="text-align: left; font-weight: unset; padding-right: 12px; color: black;">Praktikum</th>
          <th style="text-align: left; font-weight: unset; color: black;">${data.praktikum}</th>
        </tr>
        <tr>
          <th style="text-align: left; font-weight: unset; padding-right: 12px; color: black;">Keterangan</th>
          <th style="text-align: left; font-weight: unset; color: black;">${data.keterangan}</th>
        </tr>
      </table>
      <p style="color: black;">
        Jika ada kesalahan dalam pengisian data segera lapor ke Laboratorium
        Fisika Dasar. Untuk info lebih lanjut dapat menghubungi 
        WhatsApp +6285159202046 atau Telegram Channel t.me/labfisikadasar
      </p>
`;
};
