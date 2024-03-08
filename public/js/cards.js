const cardImages = new Map();

cardImages.set(1, "ace-club");
cardImages.set(2, "two-club");
cardImages.set(3, "three-club");
cardImages.set(4, "four-club");
cardImages.set(5, "five-club");
cardImages.set(6, "six-club");
cardImages.set(7, "seven-club");
cardImages.set(8, "eight-club");
cardImages.set(9, "nine-club");
cardImages.set(10, "ten-club");
cardImages.set(11, "jack-club");
cardImages.set(12, "queen-club");
cardImages.set(13, "king-club");
cardImages.set(14, "ace-diamond");
cardImages.set(15, "two-diamond");
cardImages.set(16, "three-diamond");
cardImages.set(17, "four-diamond");
cardImages.set(18, "five-diamond");
cardImages.set(19, "six-diamond");
cardImages.set(20, "seven-diamond");
cardImages.set(21, "eight-diamond");
cardImages.set(22, "nine-diamond");
cardImages.set(23, "ten-diamond");
cardImages.set(24, "jack-diamond");
cardImages.set(25, "queen-diamond");
cardImages.set(26, "king-diamond");
cardImages.set(27, "ace-heart");
cardImages.set(28, "two-heart");
cardImages.set(29, "three-heart");
cardImages.set(30, "four-heart");
cardImages.set(31, "five-heart");
cardImages.set(32, "six-heart");
cardImages.set(33, "seven-heart");
cardImages.set(34, "eight-heart");
cardImages.set(35, "nine-heart");
cardImages.set(36, "ten-heart");
cardImages.set(37, "jack-heart");
cardImages.set(38, "queen-heart");
cardImages.set(39, "king-heart");
cardImages.set(40, "ace-spade");
cardImages.set(41, "two-spade");
cardImages.set(42, "three-spade");
cardImages.set(43, "four-spade");
cardImages.set(44, "five-spade");
cardImages.set(45, "six-spade");
cardImages.set(46, "seven-spade");
cardImages.set(47, "eight-spade");
cardImages.set(48, "nine-spade");
cardImages.set(49, "ten-spade");
cardImages.set(50, "jack-spade");
cardImages.set(51, "queen-spade");
cardImages.set(52, "king-spade");
cardImages.set(100, "back-red");
cardImages.set(200, "back-blue");

function getCardImage(value) {
  return cardImages.get(value);
}