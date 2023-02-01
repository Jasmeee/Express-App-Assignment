exports.helloWorld = (req, res, next) => {
  res.send('<h1>Hello World!</h1>');
};

exports.aboutMe = (req, res, next) => {
  res.send({
    Nama: 'Jasmine',
    Alamat: 'Bogor',
  });
};
