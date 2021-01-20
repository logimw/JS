const files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportacar-thumb-330x330.jpg",
    "brazil-thumb-1150x1150.jpg",
  ];

  const regex = /-thumb-\d{1,4}x\d{1,4}/;

  const search = files[0].search(regex);

  console.log(search);

  files.forEach((file, i) => {
    let index = file.search(regex);

    if (index > -1) {
        files[i] = file.substring(0, index);
    }
  });

  console.log(files);

  const stringContains = (string, pattern) => {
      const regexpression = new RegExp(pattern),
            index = string.search(regexpression);

            return index > -1;
  }