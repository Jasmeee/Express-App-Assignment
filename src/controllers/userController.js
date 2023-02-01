exports.getUser = (req, res, next) => {
  res.send({
    nama: 'Budi',
    alamat: 'Banten',
    Pekerjaan: 'Programmer',
    Umur: 22
  });
}
