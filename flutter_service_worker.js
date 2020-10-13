'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
".git/config": "e41f368d48526ade25fecb13eec0de68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3a37e47822f51c691cacc178d6e91118",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "7f7d8fb79ecc049a121a49d4972742cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7c46f0aea15a33306651d7f29bfeaf1",
".git/logs/refs/heads/master": "d7c46f0aea15a33306651d7f29bfeaf1",
".git/logs/refs/remotes/origin/master": "d4446013e3baee9ec78dc4ac0d6c63b4",
".git/objects/00/7bb0b7f54d9f0803db717dbf9871aba539888c": "7a68197d59ab1d97c39c3315325dcf0d",
".git/objects/03/e9d9d95844c06feddc0458cd7ce288d022010e": "d244d9627fec60ff4662b610944490b0",
".git/objects/07/36dd415763f0cbd16929ce8857f24109b1434b": "72f7da6497d1b459b8e18b656cf74f82",
".git/objects/10/70aacda9489240308493094defb23ce0d1bedc": "f471f76fbc5a741c3ee62d32e23609b3",
".git/objects/11/c648cc27fbf74f1e45e1a5898096e4adab5167": "d175c7ced8417f28c9d57d322a75340d",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/16/21328382dd5d382032ee7dec47929f38c46902": "b2bea56080f8929e1c2a6fdfd9ef53d8",
".git/objects/1a/5246ee030745eda552e14dc8172f2fb6e9ad60": "bd856cf39f3b6dfd8ec5ae63b57db089",
".git/objects/1b/e937e9b89039b3e477b972561e8c03454790d1": "013c55ebee6d545e6df1ba007de19c90",
".git/objects/1c/485ab5ab8ff21d0d15323672cf23f8702a7811": "630771ffddd948a7efdac302f8ef1fd1",
".git/objects/1f/cb8644e0a73b7c89736337adeabe314b4a4de5": "3a4321ff34dce1d59e7d0eaef6c1b0f7",
".git/objects/1f/e929087fb539c7b3c466bbf373319ddf0c1445": "d1f15467c0bb48ef0502ac9be0e711b6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/3c8d7ff64309936bd035293e4aa871198a01c4": "7b1a50d9adebb9ee607da683d7633f9d",
".git/objects/2a/c17bab7c61de287eb451d5f1772dca5473319a": "5519fd648bdf1eeef160f8eb25ef830c",
".git/objects/2a/d29268dd8748229cda8167ca9382d9cd56ef46": "0fae0605a8b8f833b42f256e10601e1d",
".git/objects/2c/0afbc560c280692fb5ed6c0d52c7d9ccd6a709": "a12bcaaef5e9cd711e3ec53b1a2718e2",
".git/objects/30/45b050a89648a40f37343dbb2f9d2cffb328f7": "1435a1b3839578e782a57d801671f487",
".git/objects/30/9ad676b09f55ea23cce6ad54b4d87edf01618d": "65e9b43b7419414739005d0d2ae9730f",
".git/objects/30/e579440aaf9a758f7b19f3fb61a99e81888dd3": "22d3f95a7d38e5b7c619e8c17aae4568",
".git/objects/3b/30b06f605ae98ffd8f15bdc883430327eff85e": "095a08b4dbb20b220de67f2884f7208e",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4c/65c849821e4497b1303ec18b7cc941bfef42d6": "b0009cf52fc32ae29c4c0c4400556a39",
".git/objects/4c/aa3bd1312c2b45238e02ec1dc96fadf853b57d": "9f6f513fbf6809f6a76fd4b48725aa0b",
".git/objects/4d/211ea07d839ddecedd67ef7b1b6e65a53652f4": "88ecfb50f7a59790061fc9c3a0ea9e39",
".git/objects/50/879aa0ba53b2e5e02c49c5d0d27f86b84c6dae": "96fd15f458a44032ca545fe3d2958311",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/52/c0d60d73c6267028900eaba228999fb642fccb": "cdb47ec70fb746988332b7900983b2e8",
".git/objects/53/a9fe86b68c953b89664a7262df9ed7e3ac8638": "c064f8b0afa5c284a84ff19c1be21604",
".git/objects/54/6a34d2bb214bb437399af5b356bd8c9372f8d3": "38c5c0e48af3ee9efaa9bbb7d78c1cba",
".git/objects/56/557215542b82248b5121dd1b034294be48a446": "fa0cf17f5f0dca191e4b47f86f36d0ef",
".git/objects/5a/b0c416fa7321263e708ebcdb7914663b4a4895": "61f275b8616c23b061805c7b2b8ffbbc",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/60/ae791f90fca2ebdca1856e015ccf2fd60934a7": "56305df861b144d5ea5c430600dbfe84",
".git/objects/63/5328f9dbc7e5fe3a7d5125130a41b3886f2768": "6dcf2f3165f9ab5319eed3bbd759ad2b",
".git/objects/64/41cfac332034d14945e4e1b6fedc32767bf86f": "86caa92536843212641dfea891fada4e",
".git/objects/68/a97a9bb0293151263ae4b39f27aed49694e3cd": "3f01052b2ffd179a4e6502e95877810b",
".git/objects/6d/fc170c222abb6e71cf1f449c85be720dff6449": "1d93b37cdaaa307da99ebd0d90697896",
".git/objects/70/50b5aabedcf016247b1468c127195fe15d8c0a": "a0bb9e6f41ca7f1c6e06a2a70c9d46d7",
".git/objects/71/41432f5fe48b55ceb17154bd78a48340be65b9": "18ce12abe0c83db560afd8b5c15e0a43",
".git/objects/75/098678641f097dd0f7a9c3e650a34459a29673": "6bd58c862cc0444c2da604bb661c1bee",
".git/objects/75/856ec5fa62835a3dea9d6056752c20b1e67833": "41e94e4e7ee139e0046721f51930b919",
".git/objects/77/3a2a4144faf4fabe58948561df0971c5ac169b": "9e600501dfaaaded72377ce6e59c6328",
".git/objects/7a/00d5bc7964b5adfba48aeca7c1949ce989b09f": "17ab757d581fadb7b7033e8d6df25e6c",
".git/objects/7c/1dd84185203d5d9e1f47866d9e34c178326eb4": "e23fce859ce301c797a91b8ed122050e",
".git/objects/7e/1fc88cddcdba1b53ee7b681930092a62f0f12d": "7891c478cce2ba13efdfaf6afcd18b5e",
".git/objects/7e/8999b91ed4eeffffd30827c799621fab74174c": "d39b6af32afbd7cd38f9d523e29239ec",
".git/objects/7f/23cc9ce1015f1d70a7e1100eb491a1b12626d9": "005f6e95d1fe484cd18cc4c110c797d5",
".git/objects/83/b5a6f11e75a9c14e462abe2930844e0693b4a2": "c5c9381b978122d5e9c257552208507f",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/32dd0032a47f130310b3e2705b0b214097bbf5": "40f2e18fe21e5a561453021903525866",
".git/objects/8a/15c4cec0ad0bca1313dd8650b5c43c70ed763c": "7563d42634f42f36b11ac1ad8572c9a7",
".git/objects/8d/bb2795b7ccd12db82b1836fa3baf42d7439ce2": "66f3ddfeb0c1d04e927a52741a7ad4b6",
".git/objects/93/645348e902ab2246d615386feafdb5925568f2": "2ccb78e62ea198ba6dc1cde8d1727be0",
".git/objects/95/815b46c55a3c42d79690bba42f90cecf8e7503": "d85a2931cfea0317a0ff94efa8de863a",
".git/objects/9a/d076a83baedfefb46ac55ff025197cabb77101": "d0caa7d2661186b81bf5809d2da28677",
".git/objects/9b/6bcc65153bf037d4e65cdc29d18fce48e8229d": "f1daf005176786f2c6608ce3784ceff1",
".git/objects/9e/2332e66d986f4e68787c73d4df327799dc567f": "69dc4a50d90e2eeda9629b6f2ae20083",
".git/objects/a6/13b513a9e0decdc1927157bd16c5c9eb10e3d6": "a4c1a67b0223c304bcda257ddaca3b33",
".git/objects/a6/8fc2f9f653480b4c7e8256d66b2d847d85d4be": "a4749d12b3105db7a4187cbeb90eac92",
".git/objects/a7/caa45e7352ed2d14bbfd135d0c24c70e714f8d": "81394878dd3c2a488c23cd87cf02b551",
".git/objects/ab/583a1fe3a71be2381d47f457b292cae9c1fe7b": "714478c170de2248b66936812d6dc379",
".git/objects/ab/f228ed9f83f56906b69813a1231f9bfac0f334": "def41fc5d7da5e1233b17d838f5e4624",
".git/objects/ac/d929fbd4ae2e8f9da7ea264567828825bcee1f": "b26056974ff580c1386de6ab8f1314e1",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/c4df6261d10ef22dad5571c0f6d2e17ac89aa8": "43146bcddb6e0d589a201d13d009310a",
".git/objects/bc/4a6cf7c1be003f0b0029c6353153bb7d493213": "e7745285fab8d416e8b2dc74ab9865a0",
".git/objects/ca/85fbf1848f096bcaf98ed8f310b0ec98a6dc65": "466eebe64b1df54a78bad0d52995f3aa",
".git/objects/ca/95b68364a52e809fa281b52917ab8dd2d2ef61": "755e8911a8afaba1382dcc81debe4494",
".git/objects/ca/d4ede1eb0dd5843b6ccdaf64990f6dd5d0ee79": "20d3b2ad4ce5231b7e430e16b4cc82ed",
".git/objects/cd/899b3a318cc2a6eb2ef75e33d01901a6ac9262": "868b83d9b2e128bde084d252918a5939",
".git/objects/d1/f1b78344de96340363de26226635d0b02ea34f": "6c9bb6d116daee1f8d9606ae912aa2ec",
".git/objects/d2/70ce5e04d111be2f57e48acf7a1e6c0a5f608f": "bdf1b4ba0debd249e79493700dc3c144",
".git/objects/d4/c1ea2af3a597678122532f45f3139352f240d7": "392da38c148e4b8b52d7874c39138ae1",
".git/objects/d5/79b8a7d6bd38abcad2693224a1d884f413b9ab": "9fdbe40303c28af6fe182586b491a7fd",
".git/objects/d5/b66bd5f56283829e9cdf3f1697fd0e3ff9156f": "34af1dcf4704869b6c1889a8e242e203",
".git/objects/d6/2c67a3d7e9cc10fb6daea123c24b4a6f6ca9ae": "f8afe5c62a0efe849ae3ad06a5682482",
".git/objects/d8/f4d53a7a3f154d3be97de3611c343abc295597": "86e81ec66f573e3ad0dd0d0402905b4a",
".git/objects/dc/3a06d5710aab3306721db05fc19b589a4a196e": "799f69db445595f9874177f8eae86584",
".git/objects/dd/646ec7dc476b3c3951185f90243512ab1cdcf6": "14ac05509ae01a9538b5e96af5d19123",
".git/objects/dd/cfd4c1968002d9754359f18e976a13eb0124eb": "d9d2975c3030d79915f5b04f30d9c285",
".git/objects/de/e74385b0346501660172f06f13b0de68f9c1e1": "ce9121c476d7dcc394c6e25ffaf01273",
".git/objects/e3/c6519d7405c2919a4ab40b7a7789085376300e": "3b375c1c3888bfb234987a4529e74368",
".git/objects/e7/1ab567a2fd71e2cb638ac7cf14e07527617bcc": "5d6b08b59e277e431efa1a262c34b29a",
".git/objects/e7/8593e1b1f6a08bbd20318239540eaf7cad9184": "b3d82e0514dbd892164e76f178cf15d6",
".git/objects/e7/9ab51e5d265877e0085a1dc4a2c2b2f0797c29": "aa151875c258600661b8328595d1a28e",
".git/objects/e8/4dc7c84afb4bdfff715c84b0dddb3f130bc4e8": "fcd96158aaab0cad5a37fd8c374f3b12",
".git/objects/ea/8fd5cfb46d7be45bf029fda740d220125db36d": "a6af8a684663c7aacb602c2ac640ebd5",
".git/objects/ec/dc8413c474e88e3745787ee57f70b5595412cf": "6b5f20df58c24ee3393f55a9aa7130da",
".git/objects/f2/6e749a4328625b49cf33404ceb1c58c08f0980": "101b6d7c580211d08f30733d2ba8c60c",
".git/objects/f2/728db6a8129a49e892d0c6b350413a96df51a8": "102f6be6e06d87fec6c71a3a171782c4",
".git/objects/f2/7b1ca8ba410cb343e44c5725945296585e7a2d": "bcff9b4b5a8b33011fe40fd01c988682",
".git/objects/f2/fddd8426faf722fe461849b555621af227dfe5": "d3ca80c9cd722521d6beb17b11d097e3",
".git/objects/f6/ca83ca9ca1323898142990d5b069a9c04eb8f2": "deaab21cbb0c2d4f274b69d90335e314",
".git/objects/f7/aa806a2aca3cebd50f09a378a923d7ff58607b": "bef28ab9550e6d69c760b5ad2a39f742",
".git/objects/fb/08d8c98716426125e0bcadc8a350d673dda82e": "a49004184bcd516c1209f3b10c13e9c0",
".git/objects/fb/b169016029d844e1fc7eb25eefe9ce4bb47999": "c7e4958fe35631e633fe22d3ab04984c",
".git/objects/fb/f749c03a6a3c15849e08581209885fb7920982": "5f3dfa02dbe6027fd9f35468ae5c2b7a",
".git/objects/fd/44170e8d2462c3745483141658e55c92942f86": "5e094e4159ecd865eb50b8c6b63e818b",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/ORIG_HEAD": "c5fae8e79572c120b8dfb0ddf809390d",
".git/refs/heads/master": "31fede2bedea7e9873011fc6ae672271",
".git/refs/remotes/origin/master": "31fede2bedea7e9873011fc6ae672271",
"assets/AssetManifest.json": "08c7fd5f5127b2397f1217c229e5f3c9",
"assets/assets/images/aa.jpg": "610d91ecb513a79817790f816cae4040",
"assets/assets/images/android.png": "0a094b6927626d8d1e3243bf7991210d",
"assets/assets/images/anim.gif": "eef1299826a777a7d251ab4c8066b044",
"assets/assets/images/api.png": "c0a7f4699fdc43bff5addf16f3661313",
"assets/assets/images/cv.png": "0a00f140aac23c49eaf5c16c267d6edb",
"assets/assets/images/decla.jpg": "353aff224acc6f45c496fc0d23e665ed",
"assets/assets/images/dps.png": "138466b214f8e3d15891f9032218de39",
"assets/assets/images/dpsBanner.jpg": "1da10cf9bd49d20ba8226aad50439a2b",
"assets/assets/images/facebook.png": "82921e292773b513164a01478faf8abc",
"assets/assets/images/ff.jpg": "e2cad18dbd7cee6ef549cc383a53a978",
"assets/assets/images/firebase.png": "55fad351bd7de3e6312e4ab20de59eca",
"assets/assets/images/first-min.jpg": "08d71fc75b9e6e768b54cd6608b9844c",
"assets/assets/images/flutter.png": "d67c5451d95bec02ea6f8d3920df8c0e",
"assets/assets/images/git.png": "e45dbb88d35e9870dd1733c3b6e2ac53",
"assets/assets/images/github.png": "c5b2a15ede8fa463cd8297a36e35963e",
"assets/assets/images/hackathon.jpg": "1c350e1f2efc008491fdb6b198c383f8",
"assets/assets/images/hRank.jpg": "f8e5836765d82b4a8c4957ea938f25c0",
"assets/assets/images/instagram.png": "3d6bed969d9c44ff31af4ebe10c8e5b1",
"assets/assets/images/java.png": "7d9859f8e4db3ccaf7d0c3dea2052f48",
"assets/assets/images/kotlin.png": "834e6fc6eddd1e8b5abef77fbdaad05e",
"assets/assets/images/linkedin.png": "c6688d5c4775e2ddf961644957d010ea",
"assets/assets/images/mongo.png": "46afd6cbedb35628741e40e814238d4e",
"assets/assets/images/nasa.jpg": "98a84310ad1538d50a71f9f3f53e3fdd",
"assets/assets/images/node.png": "d1abd54743d124894df961ce694b4af6",
"assets/assets/images/npm.png": "5d3abffd681c754a6b83301c8646eb27",
"assets/assets/images/poi.png": "667e6238a72501d5bf7f2be9dc4dd9cb",
"assets/assets/images/poiBanner.jpg": "3f09290406cea3f3d86f2239b0377a20",
"assets/assets/images/qr.png": "21758561a8e5f02a0ca4679d64191d02",
"assets/assets/images/qrF.jpg": "d2a6bd0639a1e1a6f85bff1251885de6",
"assets/assets/images/quizBanner.jpg": "f34561e841aed9b361bd9985e52c4030",
"assets/assets/images/quiz_bg.png": "d80c7e0f54b360816c112471a769f779",
"assets/assets/images/restAPIBanner.jpg": "c04c12c39e54e6c9133e1fbe1f57fb47",
"assets/assets/images/resume2.jpg": "a29ce56c70d4fdb27dce9d9cceee9b79",
"assets/assets/images/sebiz.jpg": "60d91f5d5de04b7ce4439e82b1426477",
"assets/assets/images/side.png": "2e1dca67a25ddb349a735bf7aa33320c",
"assets/assets/images/stack.png": "7d2da191609bd73570fbc1e2546bf44c",
"assets/assets/images/twitter.png": "42491d3809532795d5fd4bf2dfd2ea42",
"assets/assets/images/user-g.png": "f6e864d5a157417ed925eb5eca3bcb04",
"assets/assets/images/user.png": "401fd4f868ca4f537c32d1b6a4740981",
"assets/FontManifest.json": "31fb32695319536899b1e4ad4c990ac8",
"assets/fonts/Bubble.ttf": "f08875198203069e203b5373d3d43dca",
"assets/fonts/Indie.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/Yan.ttf": "d3e30c393c37d05e2a80a35b05b5a8d1",
"assets/NOTICES": "fce1b0682c1df642732a3dd9ef54b24e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"CNAME": "acb189bbb6faedc9d0ff115b4093161e",
"favicon.png": "f3b5ffde766530fb2b470ef10b3adb65",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "83f15b2e200ae672596f89c1eb0f6e10",
"/": "83f15b2e200ae672596f89c1eb0f6e10",
"main.dart.js": "b415d2eb636ed575e38badbfc81c605b",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
