function myForEach() {
  var kalimat = "Saya ingin belajar bersama";
  var kalimat2 = kalimat.split(" ");
  kalimat2.forEach(function(item, index, array) {
    console.log("item : " + item + " index ke " + index);
  });
}
myForEach();
