import Vue from 'vue'
import Vuex from 'vuex'
  Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DataShipsSource:  [{
      "ID": "207001d07c1a280cc000f326dd49779fec3bfc9b85079cf3880b30b3c9bfadc6",
      "NameShip": "Oeiras Airport",
      "IMO": "02bf52605576543b9d62df0962c47ffdd1a1af77",
      "MMSI": "dkislingbury0@kickstarter.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 19.89,
      "MerShip": 108.65934845,
      "LatShip": 16.85428362,
      "TimeGetData": 0
    }, {
      "ID": "99c8ec78fd7b6e80967d4dc3b37b78176f0afb9f4c4d2d5556c1ac087d3e7fbe",
      "NameShip": "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
      "IMO": "486b35ff90b4d7b736f24c7a6c70d07c3c28054c",
      "MMSI": "mchaplin1@admin.ch",
      "TypeShip": 9,
      "Country": "United States",
      "PortShip": 3,
      "WeightShip": 19.48,
      "MerShip": 107.74304366,
      "LatShip": 10.72077208,
      "TimeGetData": 0
    }, {
      "ID": "6eb4ad239bdc0fdf0cdda6793dff509437fefcc121428378d170fefe6754b20f",
      "NameShip": "Kuala Lumpur International Airport",
      "IMO": "041eba0c1e58069790e39de06ab6c9139a2b905b",
      "MMSI": "tabercrombie2@yelp.com",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 15.33,
      "MerShip": 106.39489918,
      "LatShip": 17.16228396,
      "TimeGetData": 0
    }, {
      "ID": "b021aa4687f31ca5fd06de05721f59afe3412569f44a34dcf7c77b4081b3b23c",
      "NameShip": "Capitán Av. Selin Zeitun Lopez Airport",
      "IMO": "994ff2f556bb9c1739b330fd2d41fd9366435b98",
      "MMSI": "bmcwilliams3@mit.edu",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 19.73,
      "MerShip": 108.37252026,
      "LatShip": 17.4912755,
      "TimeGetData": 0
    }, {
      "ID": "701293a3b96ca25400db4c9ff91c78906c2549a72c297b746c7596b6899df091",
      "NameShip": "Zabrat Airport",
      "IMO": "88dc01f3c19366cdcfdad881703f4e162835ade8",
      "MMSI": "aranahan4@t-online.de",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 23.1,
      "MerShip": 109.10135285,
      "LatShip": 17.90255186,
      "TimeGetData": 0
    }, {
      "ID": "2bb3bef035aec4c78c60bfe6078bc962b55feacd729a5ec6ec87ba67e4324a8e",
      "NameShip": "Silangit Airport",
      "IMO": "92e66e8cd4a45110315aef0511d34b8bbfe7c0b3",
      "MMSI": "rshipperbottom5@livejournal.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 17.31,
      "MerShip": 106.77031651,
      "LatShip": 17.80887633,
      "TimeGetData": 0
    }, {
      "ID": "f4745849bd3838149fe4bec30900ca0ff8700cb08dd489518293ad2ef057e728",
      "NameShip": "Millville Municipal Airport",
      "IMO": "1468b6b1d5cc22875631f005fc3b3060c2236a36",
      "MMSI": "cwinridge6@qq.com",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.32,
      "MerShip": 106.43931178,
      "LatShip": 17.10832507,
      "TimeGetData": 0
    }, {
      "ID": "939aa259bc5d92185f045721a0f17611391715bbe60f00afc696a651adc8dcd2",
      "NameShip": "John C. Munro Hamilton International Airport",
      "IMO": "bc8de934c32cf881a6c8df6717462a7831fbe61e",
      "MMSI": "dkmieciak7@ehow.com",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 17.87,
      "MerShip": 109.29660154,
      "LatShip": 16.91830989,
      "TimeGetData": 0
    }, {
      "ID": "8b0e35e8b2898510d307b542304d4ee8c96e97b86a3b32152e2021da70ceb07c",
      "NameShip": "Stronsay Airport",
      "IMO": "ed0ab710886a38f522da7710c58188307207b380",
      "MMSI": "mcorbitt8@multiply.com",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.13,
      "MerShip": 109.5359799,
      "LatShip": 10.88534201,
      "TimeGetData": 0
    }, {
      "ID": "cd53e8a09006dfefd10958c1f161d4dae28d89171869f782c7dad15e816f8b6a",
      "NameShip": "Penneshaw Airport",
      "IMO": "98f5d943e5c1293747903d6f57de5dd1a3511ebb",
      "MMSI": "nubach9@weebly.com",
      "TypeShip": 7,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 20.19,
      "MerShip": 107.26676363,
      "LatShip": 17.97564639,
      "TimeGetData": null
    }, {
      "ID": "fffd3118088a8d4dbb03155a3da8f84a2d43f85510668cfad47b8a06765ffe4a",
      "NameShip": "Beatty Airport",
      "IMO": "5b1c85ed4011f40da45b07d3124c4a66a3c34a70",
      "MMSI": "bmanthorpea@google.ca",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.61,
      "MerShip": 108.4175816,
      "LatShip": 17.15702238,
      "TimeGetData": 0
    }, {
      "ID": "01817a352b318421de6d31a9828fdc249fc973ee145da3967334cdd6b78b88c9",
      "NameShip": "Macomb Municipal Airport",
      "IMO": "97720fccb25561dbad763e180d28d9322a0b4195",
      "MMSI": "lheepsb@ihg.com",
      "TypeShip": 4,
      "Country": "Thailand",
      "PortShip": 3,
      "WeightShip": 17.09,
      "MerShip": 109.25646911,
      "LatShip": 11.05609702,
      "TimeGetData": null
    }, {
      "ID": "0fd64a43327f69b59437efd054ca1889526298f10003ad1b8f6ed7e598319cbb",
      "NameShip": "Wee Waa Airport",
      "IMO": "1db8e397a7c284d9cddba1e87dd73ad36caa1875",
      "MMSI": "fvallentinc@eepurl.com",
      "TypeShip": 1,
      "Country": "Thailand",
      "PortShip": 2,
      "WeightShip": 24.84,
      "MerShip": 108.19016153,
      "LatShip": 12.81791613,
      "TimeGetData": 0
    }, {
      "ID": "4013d6af295a3047a6c3b025e931874f4e4d461053533929d568b971ff17e954",
      "NameShip": "Pender Harbour Seaplane Base",
      "IMO": "37184b1e396c9bdd2f967c9dfb8188723e17d695",
      "MMSI": "nmcbrierd@sbwire.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.4,
      "MerShip": 106.00607904,
      "LatShip": 17.92710468,
      "TimeGetData": 0
    }, {
      "ID": "ba79b1d810d0d5621d2aec8b1b21e04bca5cb497eb77c9bb3b40845411742b8a",
      "NameShip": "Voinjama Airport",
      "IMO": "611d0b529af52d84153bc40bcc8f84d7ae662d78",
      "MMSI": "rgummowe@privacy.gov.au",
      "TypeShip": 8,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 15.56,
      "MerShip": 107.05494158,
      "LatShip": 16.55592107,
      "TimeGetData": 0
    }, {
      "ID": "d4982d0f27cd4b4b32b73d975d66a9d97ce56df1c2d737906a1e0a019b1a7518",
      "NameShip": "Flotta Isle Airport",
      "IMO": "4568f62aecece4b2c802cbc5d0c69516c239fc3e",
      "MMSI": "cblantf@reference.com",
      "TypeShip": 9,
      "Country": "Vietnam",
      "PortShip": 3,
      "WeightShip": 15.59,
      "MerShip": 109.47479285,
      "LatShip": 14.85694601,
      "TimeGetData": 0
    }, {
      "ID": "b429d9871057ad58dea7e75b8c115152d162a91045b93179506de1f43472b967",
      "NameShip": "Dauphin Barker Airport",
      "IMO": "bc4401f27178bb8188ed954bcacf127ee95e15d2",
      "MMSI": "wallewayg@apache.org",
      "TypeShip": 1,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 17.89,
      "MerShip": 109.5999088,
      "LatShip": 18.69906648,
      "TimeGetData": 0
    }, {
      "ID": "3f6f38a1a3017f85ecf4809c6a19b0b47f63edeb583458e32c9d660628beae38",
      "NameShip": "Khowai Airport",
      "IMO": "3ff47cc76d3e4945ae4a7aaf9a12b14d6ddb5480",
      "MMSI": "jhardacreh@parallels.com",
      "TypeShip": 4,
      "Country": "United States",
      "PortShip": 2,
      "WeightShip": 18.06,
      "MerShip": 109.802758,
      "LatShip": 15.98917489,
      "TimeGetData": 0
    }, {
      "ID": "e8d8ede8add047dcab5938d4cb180cd03b00a6501f60df7167016231e3a3b702",
      "NameShip": "Nalchik Airport",
      "IMO": "c79b11c510b5b148b00f2195ab585aeab7e4a1e0",
      "MMSI": "wallaini@tripadvisor.com",
      "TypeShip": 7,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 15.24,
      "MerShip": 106.9116696,
      "LatShip": 18.03900772,
      "TimeGetData": 0
    }, {
      "ID": "31fdb28f1560e26800a4aecb6ee26ba34ab914f14f3c2ffb5f5fc99edce81f6e",
      "NameShip": "Gustavo Artunduaga Paredes Airport",
      "IMO": "002420513b9c6b03cc77699adb4ff4e863acb2d7",
      "MMSI": "obranstonj@aboutads.info",
      "TypeShip": 1,
      "Country": "Malaysia",
      "PortShip": 2,
      "WeightShip": 21.29,
      "MerShip": 108.25867129,
      "LatShip": 16.01180505,
      "TimeGetData": 0
    }, {
      "ID": "18e617c9b00820cc3f4448aeaefcbd828c1ebc4af6232243c197b9c0b44dafa0",
      "NameShip": "Churchill Airport",
      "IMO": "8e294112e7de8641928d9f9cc0da50e5d4942bd2",
      "MMSI": "strevillionk@sphinn.com",
      "TypeShip": 1,
      "Country": "United Kingdom",
      "PortShip": 3,
      "WeightShip": 24.96,
      "MerShip": 108.13055118,
      "LatShip": 10.9575157,
      "TimeGetData": null
    }, {
      "ID": "4b191766f082d2343061a3d2a19691cfe2813812114d3739ac9a36af28ff72f3",
      "NameShip": "Melbourne Moorabbin Airport",
      "IMO": "96ec19b8806999438561e93fa732c26bfb73bc9b",
      "MMSI": "mdolbeyl@ezinearticles.com",
      "TypeShip": 8,
      "Country": "United States",
      "PortShip": 2,
      "WeightShip": 16.53,
      "MerShip": 106.95885236,
      "LatShip": 10.48478554,
      "TimeGetData": null
    }, {
      "ID": "ba2087d815499ea42477a22c2f2712ca0c0eeb8cdcc604fb91f4df0975ea13e5",
      "NameShip": "Xanxerê Airport",
      "IMO": "af83e3f6bdf8bdcfecb49c0842088a36553487aa",
      "MMSI": "vcrathernm@cocolog-nifty.com",
      "TypeShip": 2,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 21.13,
      "MerShip": 107.21610566,
      "LatShip": 16.80158392,
      "TimeGetData": 0
    }, {
      "ID": "23b4d7a42274807379ce9decdca6a8eb8d8ecf2c3b7b9c4ed7325fc2eac9dc97",
      "NameShip": "Momote Airport",
      "IMO": "7cd60ee7f28aeb05ba5a03b62b96810adf8bbd4e",
      "MMSI": "apestricken@google.co.jp",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 24.64,
      "MerShip": 109.6273031,
      "LatShip": 16.46425521,
      "TimeGetData": 0
    }, {
      "ID": "0de55c20f9603306ded3ec221644bc1d810d15d0354a69b46afb4e4f07cd4b0b",
      "NameShip": "Osaka International Airport",
      "IMO": "2c65d4c704db896622cd30480ccb72501e4242f1",
      "MMSI": "sgeramo@addtoany.com",
      "TypeShip": 5,
      "Country": "United States",
      "PortShip": 2,
      "WeightShip": 16.22,
      "MerShip": 108.37590456,
      "LatShip": 17.15722316,
      "TimeGetData": 0
    }, {
      "ID": "cc098697d42a359ec44201e307408b657c47dfd38144e960316f849c1556d085",
      "NameShip": "Bateen Airport",
      "IMO": "415703c52be8a22eaf57f5ce98e2fee957367f07",
      "MMSI": "choldeyp@cbsnews.com",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 15.63,
      "MerShip": 108.44603104,
      "LatShip": 17.1540185,
      "TimeGetData": 0
    }, {
      "ID": "04b86c7a0ca4c537fc0b01c220860d706b3c6ab68a285406fd68a4761e7fe44c",
      "NameShip": "Kazi Nazrul Islam Airport",
      "IMO": "356f3d02d44ab109d09ce9f77cace6f5b5641cc1",
      "MMSI": "ppasseq@histats.com",
      "TypeShip": 1,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.67,
      "MerShip": 106.18587181,
      "LatShip": 17.14053848,
      "TimeGetData": 0
    }, {
      "ID": "c1b3bd630c3dabbc1cd527b2a3711f4e30fbeecb24b969d4476ae382a2464676",
      "NameShip": "Fahud Airport",
      "IMO": "b8146b4dd57f7cf9c95385cbdeb3be2dd4837f69",
      "MMSI": "adeanr@acquirethisname.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 20.77,
      "MerShip": 108.24973154,
      "LatShip": 17.15485424,
      "TimeGetData": 0
    }, {
      "ID": "d95d444d33d4368afc9114bc2d2135979ac20e3eef09a63c1bd93f196de5950b",
      "NameShip": "Kandep Airport",
      "IMO": "39ce57f87aea697161ba4a9ea97c3d277c4543b4",
      "MMSI": "mbennies@shop-pro.jp",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 22.04,
      "MerShip": 106.23857749,
      "LatShip": 17.11566398,
      "TimeGetData": null
    }, {
      "ID": "ddee6a51cc1a8f12a8b82ec6d49e8c62dfdc053e5b21d164dff03858feb13ad6",
      "NameShip": "Fianarantsoa Airport",
      "IMO": "5db970b1974811152bf830d9ed75096c011662bf",
      "MMSI": "abockettt@irs.gov",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 15.22,
      "MerShip": 109.99586782,
      "LatShip": 17.22766179,
      "TimeGetData": 0
    }, {
      "ID": "3e625e9b7015ee3e7b5fd6d2c552b6348c02497b7895b1c5d6e292c94bf1593e",
      "NameShip": "El Embrujo Airport",
      "IMO": "e7b73759a8537cade69cbcf305765b5fa53b2cb0",
      "MMSI": "ddambrosiu@dailymotion.com",
      "TypeShip": 9,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 23.64,
      "MerShip": 107.07856484,
      "LatShip": 10.20114298,
      "TimeGetData": 0
    }, {
      "ID": "c8cd644e6d1efb7934392d655e77c67995c8bc483020ee9ed31c04466da9856b",
      "NameShip": "São Jorge Airport",
      "IMO": "29862a8bbc0e4f0d574f82994ba616aa67dd9722",
      "MMSI": "jauchterloniev@tinypic.com",
      "TypeShip": 4,
      "Country": "Thailand",
      "PortShip": 1,
      "WeightShip": 24.74,
      "MerShip": 109.95553101,
      "LatShip": 17.96510026,
      "TimeGetData": 0
    }, {
      "ID": "3c6ee0cece3b11f3eedbbad48b18f8fd7e4df3a1fd904e4195bfe527fd82407a",
      "NameShip": "Agrinion Air Base",
      "IMO": "3d0619b68d5288f51e84fb46c55a3f6fdb6a3c71",
      "MMSI": "rjemisonw@prweb.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 24.94,
      "MerShip": 109.32619026,
      "LatShip": 17.81562458,
      "TimeGetData": 0
    }, {
      "ID": "7f81534f9a304182027640bcb10c38d508d3cae120f70ad63b083904cb97bc29",
      "NameShip": "Tabubil Airport",
      "IMO": "e6a2f55b3bf413b42ab7d22b4401c1f98f81667b",
      "MMSI": "mbrimilcombex@ucla.edu",
      "TypeShip": 6,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 18.43,
      "MerShip": 106.14722836,
      "LatShip": 17.15415,
      "TimeGetData": 0
    }, {
      "ID": "169b44561a1999b6b9a398921033d94661aba6663d0cca9e8cf0e2193d016c36",
      "NameShip": "La Grande-4 Airport",
      "IMO": "b160f8109cec1f21dceb67aba1be38ea848c8087",
      "MMSI": "jmiramsy@google.ca",
      "TypeShip": 1,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 20.09,
      "MerShip": 108.26052442,
      "LatShip": 11.6152355,
      "TimeGetData": null
    }, {
      "ID": "09e5d3a0de4ca4d32266881b84392d3ebdba75fb5f76d8162f67687b81e9a633",
      "NameShip": "Shahid Ashrafi Esfahani Airport",
      "IMO": "8ae8a8510b7ab0236c8ae6e8c5f63ac39f94e729",
      "MMSI": "gemmittz@ustream.tv",
      "TypeShip": 1,
      "Country": "United Kingdom",
      "PortShip": 2,
      "WeightShip": 17.47,
      "MerShip": 106.0904403,
      "LatShip": 17.1563821,
      "TimeGetData": 0
    }, {
      "ID": "f75cfc241e2f361425f22679f5d5df83cfec425dc02055bfc40dbf85e38a7e20",
      "NameShip": "Kirkuk Air Base",
      "IMO": "646c693ab6dd27e620b0fa5e6d3bcd44318771d3",
      "MMSI": "tdovington10@theatlantic.com",
      "TypeShip": 7,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 19.36,
      "MerShip": 106.33422753,
      "LatShip": 18.87457868,
      "TimeGetData": 0
    }, {
      "ID": "2ac194ff77212dd68b930feda19d326ce530e05ce2979cef13cd54a5c7eb18ed",
      "NameShip": "Monastir Habib Bourguiba International Airport",
      "IMO": "076da8c4e07cda388a49fad4a4078bab29c7baf1",
      "MMSI": "hannatt11@reuters.com",
      "TypeShip": 6,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 21.25,
      "MerShip": 106.86223007,
      "LatShip": 17.15137536,
      "TimeGetData": 0
    }, {
      "ID": "2809ec15c16b91fe4c074e2b5eb9f27e34b06a98f23080e0841fe7aa54281d9b",
      "NameShip": "Termas de Río Hondo international Airport",
      "IMO": "d2896fcfb33fb5fcac65123b807e0687f4be8a9d",
      "MMSI": "ibrass12@discovery.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.54,
      "MerShip": 107.4417518,
      "LatShip": 14.48794005,
      "TimeGetData": 0
    }, {
      "ID": "8bc2c58300fe056cbf91bed2cbb5850647a6d94358bc8e0868d63e32f842763b",
      "NameShip": "Adi Sutjipto International Airport",
      "IMO": "fe8f2b204c393d274df81ef510067a3f21d2408c",
      "MMSI": "clowin13@census.gov",
      "TypeShip": 8,
      "Country": "United Kingdom",
      "PortShip": 3,
      "WeightShip": 16.77,
      "MerShip": 107.08794525,
      "LatShip": 10.6991671,
      "TimeGetData": 0
    }, {
      "ID": "94a334f17a9474ba6c761ab0999ce35f78f8835c87b4df8c88e36d2f8db4551f",
      "NameShip": "Christiansted Harbor Seaplane Base",
      "IMO": "23cc34a5e406cd91fbcefab38a0c455d6079f3ca",
      "MMSI": "jexon14@spiegel.de",
      "TypeShip": 2,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 18.78,
      "MerShip": 107.3278032,
      "LatShip": 16.06940735,
      "TimeGetData": 0
    }, {
      "ID": "67c252e6d9b3fdf1d47086fa197aa6ad88c086a34e7b6799c125ecbe7aeaacd3",
      "NameShip": "Islita Airport",
      "IMO": "5215c919e04d3c003de90b1cb1149024dc8cf18d",
      "MMSI": "dbelfitt15@sphinn.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.42,
      "MerShip": 109.76167998,
      "LatShip": 11.05735302,
      "TimeGetData": 0
    }, {
      "ID": "2647aa49ef1d541e0bdaf2658c17bdd495cd4aece9afddbd8ac930d84a8a341c",
      "NameShip": "Rocha Airport",
      "IMO": "bac79fa5c2546e6ae97697851d871e666ca4dac8",
      "MMSI": "ktomovic16@whitehouse.gov",
      "TypeShip": 6,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 24.21,
      "MerShip": 108.2003143,
      "LatShip": 14.00843506,
      "TimeGetData": null
    }, {
      "ID": "bc7d90c8fdd9178a285b1a8240491c68779968c0416627f2d8219d73a75b948e",
      "NameShip": "Bumi Airport",
      "IMO": "c0e3cf2fc81630a09d56db84999b7939f08c5877",
      "MMSI": "theinert17@ycombinator.com",
      "TypeShip": 6,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 19.05,
      "MerShip": 106.53970734,
      "LatShip": 17.98032165,
      "TimeGetData": 0
    }, {
      "ID": "dc0640f368de6a5137f866655bb15d913a9aace6626fad5b63fd4c93ab228d90",
      "NameShip": "Anglesey Airport",
      "IMO": "c685117d76795aa85124466abcd636d996c96572",
      "MMSI": "mfranzini18@t-online.de",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 24.06,
      "MerShip": 107.72828859,
      "LatShip": 16.09529366,
      "TimeGetData": 0
    }, {
      "ID": "f6654af0d6bde754fc287887b750e3b64538aa5a1e5b4847a0c3c4c8ef39fefe",
      "NameShip": "Tonghua Sanyuanpu Airport",
      "IMO": "a471896d69c353a2004c1197e1a745e7477c89c2",
      "MMSI": "lredsell19@free.fr",
      "TypeShip": 9,
      "Country": "Thailand",
      "PortShip": 3,
      "WeightShip": 17.0,
      "MerShip": 109.72573302,
      "LatShip": 16.21520944,
      "TimeGetData": 0
    }, {
      "ID": "c1d53614b8974fb97323a42c0093287a6ef2b7daa08e893cabb1fa34ddeb6f6c",
      "NameShip": "General Abelardo L. Rodríguez International Airport",
      "IMO": "1a0950d5b3ee4349749f7167f7acad952bfb0574",
      "MMSI": "chabberjam1a@zimbio.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 21.04,
      "MerShip": 107.02077204,
      "LatShip": 14.96082847,
      "TimeGetData": 0
    }, {
      "ID": "c44ea462b7440cd89e29b729657c04fd6c233006d67921b9463fc51dab1eaf31",
      "NameShip": "Kikwit Airport",
      "IMO": "8721ca4c7107abd014ea1a2b751a9f62dba32ebb",
      "MMSI": "creglar1b@flickr.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 17.51,
      "MerShip": 108.73450584,
      "LatShip": 17.76602983,
      "TimeGetData": 0
    }, {
      "ID": "547be31a37e62737bfd5ea2e00942dcc030e4f04a3d6631f300527608d186886",
      "NameShip": "Malindi Airport",
      "IMO": "9d7d5eeec164db547140ca46fef29d6d744ad1ef",
      "MMSI": "calday1c@businessinsider.com",
      "TypeShip": 9,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 23.1,
      "MerShip": 106.99825312,
      "LatShip": 17.15666212,
      "TimeGetData": 0
    }, {
      "ID": "a2311ce02d67c57ac05b1d1d848d53b1f8d6b439095133b905b6c7fe6b80d0a5",
      "NameShip": "Tianshui Maijishan Airport",
      "IMO": "278dbdcee20d8087d42cfa5dbae6d99021e19e4a",
      "MMSI": "ebucktrout1d@gmpg.org",
      "TypeShip": 1,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.68,
      "MerShip": 107.11585114,
      "LatShip": 17.15935567,
      "TimeGetData": 0
    }],
    DataShips: [{
      "ID": "207001d07c1a280cc000f326dd49779fec3bfc9b85079cf3880b30b3c9bfadc6",
      "NameShip": "Oeiras Airport",
      "IMO": "02bf52605576543b9d62df0962c47ffdd1a1af77",
      "MMSI": "dkislingbury0@kickstarter.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 19.89,
      "MerShip": 108.65934845,
      "LatShip": 16.85428362,
      "TimeGetData": 0
    }, {
      "ID": "99c8ec78fd7b6e80967d4dc3b37b78176f0afb9f4c4d2d5556c1ac087d3e7fbe",
      "NameShip": "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
      "IMO": "486b35ff90b4d7b736f24c7a6c70d07c3c28054c",
      "MMSI": "mchaplin1@admin.ch",
      "TypeShip": 9,
      "Country": "United States",
      "PortShip": 3,
      "WeightShip": 19.48,
      "MerShip": 107.74304366,
      "LatShip": 10.72077208,
      "TimeGetData": 0
    }, {
      "ID": "6eb4ad239bdc0fdf0cdda6793dff509437fefcc121428378d170fefe6754b20f",
      "NameShip": "Kuala Lumpur International Airport",
      "IMO": "041eba0c1e58069790e39de06ab6c9139a2b905b",
      "MMSI": "tabercrombie2@yelp.com",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 15.33,
      "MerShip": 106.39489918,
      "LatShip": 17.16228396,
      "TimeGetData": 0
    }, {
      "ID": "b021aa4687f31ca5fd06de05721f59afe3412569f44a34dcf7c77b4081b3b23c",
      "NameShip": "Capitán Av. Selin Zeitun Lopez Airport",
      "IMO": "994ff2f556bb9c1739b330fd2d41fd9366435b98",
      "MMSI": "bmcwilliams3@mit.edu",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 19.73,
      "MerShip": 108.37252026,
      "LatShip": 17.4912755,
      "TimeGetData": 0
    }, {
      "ID": "701293a3b96ca25400db4c9ff91c78906c2549a72c297b746c7596b6899df091",
      "NameShip": "Zabrat Airport",
      "IMO": "88dc01f3c19366cdcfdad881703f4e162835ade8",
      "MMSI": "aranahan4@t-online.de",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 23.1,
      "MerShip": 109.10135285,
      "LatShip": 17.90255186,
      "TimeGetData": 0
    }, {
      "ID": "2bb3bef035aec4c78c60bfe6078bc962b55feacd729a5ec6ec87ba67e4324a8e",
      "NameShip": "Silangit Airport",
      "IMO": "92e66e8cd4a45110315aef0511d34b8bbfe7c0b3",
      "MMSI": "rshipperbottom5@livejournal.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 17.31,
      "MerShip": 106.77031651,
      "LatShip": 17.80887633,
      "TimeGetData": 0
    }, {
      "ID": "f4745849bd3838149fe4bec30900ca0ff8700cb08dd489518293ad2ef057e728",
      "NameShip": "Millville Municipal Airport",
      "IMO": "1468b6b1d5cc22875631f005fc3b3060c2236a36",
      "MMSI": "cwinridge6@qq.com",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.32,
      "MerShip": 106.43931178,
      "LatShip": 17.10832507,
      "TimeGetData": 0
    }, {
      "ID": "939aa259bc5d92185f045721a0f17611391715bbe60f00afc696a651adc8dcd2",
      "NameShip": "John C. Munro Hamilton International Airport",
      "IMO": "bc8de934c32cf881a6c8df6717462a7831fbe61e",
      "MMSI": "dkmieciak7@ehow.com",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 17.87,
      "MerShip": 109.29660154,
      "LatShip": 16.91830989,
      "TimeGetData": 0
    }, {
      "ID": "8b0e35e8b2898510d307b542304d4ee8c96e97b86a3b32152e2021da70ceb07c",
      "NameShip": "Stronsay Airport",
      "IMO": "ed0ab710886a38f522da7710c58188307207b380",
      "MMSI": "mcorbitt8@multiply.com",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.13,
      "MerShip": 109.5359799,
      "LatShip": 10.88534201,
      "TimeGetData": 0
    }, {
      "ID": "cd53e8a09006dfefd10958c1f161d4dae28d89171869f782c7dad15e816f8b6a",
      "NameShip": "Penneshaw Airport",
      "IMO": "98f5d943e5c1293747903d6f57de5dd1a3511ebb",
      "MMSI": "nubach9@weebly.com",
      "TypeShip": 7,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 20.19,
      "MerShip": 107.26676363,
      "LatShip": 17.97564639,
      "TimeGetData": null
    }, {
      "ID": "fffd3118088a8d4dbb03155a3da8f84a2d43f85510668cfad47b8a06765ffe4a",
      "NameShip": "Beatty Airport",
      "IMO": "5b1c85ed4011f40da45b07d3124c4a66a3c34a70",
      "MMSI": "bmanthorpea@google.ca",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.61,
      "MerShip": 108.4175816,
      "LatShip": 17.15702238,
      "TimeGetData": 0
    }, {
      "ID": "01817a352b318421de6d31a9828fdc249fc973ee145da3967334cdd6b78b88c9",
      "NameShip": "Macomb Municipal Airport",
      "IMO": "97720fccb25561dbad763e180d28d9322a0b4195",
      "MMSI": "lheepsb@ihg.com",
      "TypeShip": 4,
      "Country": "Thailand",
      "PortShip": 3,
      "WeightShip": 17.09,
      "MerShip": 109.25646911,
      "LatShip": 11.05609702,
      "TimeGetData": null
    }, {
      "ID": "0fd64a43327f69b59437efd054ca1889526298f10003ad1b8f6ed7e598319cbb",
      "NameShip": "Wee Waa Airport",
      "IMO": "1db8e397a7c284d9cddba1e87dd73ad36caa1875",
      "MMSI": "fvallentinc@eepurl.com",
      "TypeShip": 1,
      "Country": "Thailand",
      "PortShip": 2,
      "WeightShip": 24.84,
      "MerShip": 108.19016153,
      "LatShip": 12.81791613,
      "TimeGetData": 0
    }, {
      "ID": "4013d6af295a3047a6c3b025e931874f4e4d461053533929d568b971ff17e954",
      "NameShip": "Pender Harbour Seaplane Base",
      "IMO": "37184b1e396c9bdd2f967c9dfb8188723e17d695",
      "MMSI": "nmcbrierd@sbwire.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.4,
      "MerShip": 106.00607904,
      "LatShip": 17.92710468,
      "TimeGetData": 0
    }, {
      "ID": "ba79b1d810d0d5621d2aec8b1b21e04bca5cb497eb77c9bb3b40845411742b8a",
      "NameShip": "Voinjama Airport",
      "IMO": "611d0b529af52d84153bc40bcc8f84d7ae662d78",
      "MMSI": "rgummowe@privacy.gov.au",
      "TypeShip": 8,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 15.56,
      "MerShip": 107.05494158,
      "LatShip": 16.55592107,
      "TimeGetData": 0
    }, {
      "ID": "d4982d0f27cd4b4b32b73d975d66a9d97ce56df1c2d737906a1e0a019b1a7518",
      "NameShip": "Flotta Isle Airport",
      "IMO": "4568f62aecece4b2c802cbc5d0c69516c239fc3e",
      "MMSI": "cblantf@reference.com",
      "TypeShip": 9,
      "Country": "Vietnam",
      "PortShip": 3,
      "WeightShip": 15.59,
      "MerShip": 109.47479285,
      "LatShip": 14.85694601,
      "TimeGetData": 0
    }, {
      "ID": "b429d9871057ad58dea7e75b8c115152d162a91045b93179506de1f43472b967",
      "NameShip": "Dauphin Barker Airport",
      "IMO": "bc4401f27178bb8188ed954bcacf127ee95e15d2",
      "MMSI": "wallewayg@apache.org",
      "TypeShip": 1,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 17.89,
      "MerShip": 109.5999088,
      "LatShip": 18.69906648,
      "TimeGetData": 0
    }, {
      "ID": "3f6f38a1a3017f85ecf4809c6a19b0b47f63edeb583458e32c9d660628beae38",
      "NameShip": "Khowai Airport",
      "IMO": "3ff47cc76d3e4945ae4a7aaf9a12b14d6ddb5480",
      "MMSI": "jhardacreh@parallels.com",
      "TypeShip": 4,
      "Country": "United States",
      "PortShip": 2,
      "WeightShip": 18.06,
      "MerShip": 109.802758,
      "LatShip": 15.98917489,
      "TimeGetData": 0
    }, {
      "ID": "e8d8ede8add047dcab5938d4cb180cd03b00a6501f60df7167016231e3a3b702",
      "NameShip": "Nalchik Airport",
      "IMO": "c79b11c510b5b148b00f2195ab585aeab7e4a1e0",
      "MMSI": "wallaini@tripadvisor.com",
      "TypeShip": 7,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 15.24,
      "MerShip": 106.9116696,
      "LatShip": 18.03900772,
      "TimeGetData": 0
    }, {
      "ID": "31fdb28f1560e26800a4aecb6ee26ba34ab914f14f3c2ffb5f5fc99edce81f6e",
      "NameShip": "Gustavo Artunduaga Paredes Airport",
      "IMO": "002420513b9c6b03cc77699adb4ff4e863acb2d7",
      "MMSI": "obranstonj@aboutads.info",
      "TypeShip": 1,
      "Country": "Malaysia",
      "PortShip": 2,
      "WeightShip": 21.29,
      "MerShip": 108.25867129,
      "LatShip": 16.01180505,
      "TimeGetData": 0
    }, {
      "ID": "18e617c9b00820cc3f4448aeaefcbd828c1ebc4af6232243c197b9c0b44dafa0",
      "NameShip": "Churchill Airport",
      "IMO": "8e294112e7de8641928d9f9cc0da50e5d4942bd2",
      "MMSI": "strevillionk@sphinn.com",
      "TypeShip": 1,
      "Country": "United Kingdom",
      "PortShip": 3,
      "WeightShip": 24.96,
      "MerShip": 108.13055118,
      "LatShip": 10.9575157,
      "TimeGetData": null
    }, {
      "ID": "4b191766f082d2343061a3d2a19691cfe2813812114d3739ac9a36af28ff72f3",
      "NameShip": "Melbourne Moorabbin Airport",
      "IMO": "96ec19b8806999438561e93fa732c26bfb73bc9b",
      "MMSI": "mdolbeyl@ezinearticles.com",
      "TypeShip": 8,
      "Country": "United States",
      "PortShip": 2,
      "WeightShip": 16.53,
      "MerShip": 106.95885236,
      "LatShip": 10.48478554,
      "TimeGetData": null
    }, {
      "ID": "ba2087d815499ea42477a22c2f2712ca0c0eeb8cdcc604fb91f4df0975ea13e5",
      "NameShip": "Xanxerê Airport",
      "IMO": "af83e3f6bdf8bdcfecb49c0842088a36553487aa",
      "MMSI": "vcrathernm@cocolog-nifty.com",
      "TypeShip": 2,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 21.13,
      "MerShip": 107.21610566,
      "LatShip": 16.80158392,
      "TimeGetData": 0
    }, {
      "ID": "23b4d7a42274807379ce9decdca6a8eb8d8ecf2c3b7b9c4ed7325fc2eac9dc97",
      "NameShip": "Momote Airport",
      "IMO": "7cd60ee7f28aeb05ba5a03b62b96810adf8bbd4e",
      "MMSI": "apestricken@google.co.jp",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 24.64,
      "MerShip": 109.6273031,
      "LatShip": 16.46425521,
      "TimeGetData": 0
    }, {
      "ID": "0de55c20f9603306ded3ec221644bc1d810d15d0354a69b46afb4e4f07cd4b0b",
      "NameShip": "Osaka International Airport",
      "IMO": "2c65d4c704db896622cd30480ccb72501e4242f1",
      "MMSI": "sgeramo@addtoany.com",
      "TypeShip": 5,
      "Country": "United States",
      "PortShip": 2,
      "WeightShip": 16.22,
      "MerShip": 108.37590456,
      "LatShip": 17.15722316,
      "TimeGetData": 0
    }, {
      "ID": "cc098697d42a359ec44201e307408b657c47dfd38144e960316f849c1556d085",
      "NameShip": "Bateen Airport",
      "IMO": "415703c52be8a22eaf57f5ce98e2fee957367f07",
      "MMSI": "choldeyp@cbsnews.com",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 15.63,
      "MerShip": 108.44603104,
      "LatShip": 17.1540185,
      "TimeGetData": 0
    }, {
      "ID": "04b86c7a0ca4c537fc0b01c220860d706b3c6ab68a285406fd68a4761e7fe44c",
      "NameShip": "Kazi Nazrul Islam Airport",
      "IMO": "356f3d02d44ab109d09ce9f77cace6f5b5641cc1",
      "MMSI": "ppasseq@histats.com",
      "TypeShip": 1,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.67,
      "MerShip": 106.18587181,
      "LatShip": 17.14053848,
      "TimeGetData": 0
    }, {
      "ID": "c1b3bd630c3dabbc1cd527b2a3711f4e30fbeecb24b969d4476ae382a2464676",
      "NameShip": "Fahud Airport",
      "IMO": "b8146b4dd57f7cf9c95385cbdeb3be2dd4837f69",
      "MMSI": "adeanr@acquirethisname.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 20.77,
      "MerShip": 108.24973154,
      "LatShip": 17.15485424,
      "TimeGetData": 0
    }, {
      "ID": "d95d444d33d4368afc9114bc2d2135979ac20e3eef09a63c1bd93f196de5950b",
      "NameShip": "Kandep Airport",
      "IMO": "39ce57f87aea697161ba4a9ea97c3d277c4543b4",
      "MMSI": "mbennies@shop-pro.jp",
      "TypeShip": 5,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 22.04,
      "MerShip": 106.23857749,
      "LatShip": 17.11566398,
      "TimeGetData": null
    }, {
      "ID": "ddee6a51cc1a8f12a8b82ec6d49e8c62dfdc053e5b21d164dff03858feb13ad6",
      "NameShip": "Fianarantsoa Airport",
      "IMO": "5db970b1974811152bf830d9ed75096c011662bf",
      "MMSI": "abockettt@irs.gov",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 15.22,
      "MerShip": 109.99586782,
      "LatShip": 17.22766179,
      "TimeGetData": 0
    }, {
      "ID": "3e625e9b7015ee3e7b5fd6d2c552b6348c02497b7895b1c5d6e292c94bf1593e",
      "NameShip": "El Embrujo Airport",
      "IMO": "e7b73759a8537cade69cbcf305765b5fa53b2cb0",
      "MMSI": "ddambrosiu@dailymotion.com",
      "TypeShip": 9,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 23.64,
      "MerShip": 107.07856484,
      "LatShip": 10.20114298,
      "TimeGetData": 0
    }, {
      "ID": "c8cd644e6d1efb7934392d655e77c67995c8bc483020ee9ed31c04466da9856b",
      "NameShip": "São Jorge Airport",
      "IMO": "29862a8bbc0e4f0d574f82994ba616aa67dd9722",
      "MMSI": "jauchterloniev@tinypic.com",
      "TypeShip": 4,
      "Country": "Thailand",
      "PortShip": 1,
      "WeightShip": 24.74,
      "MerShip": 109.95553101,
      "LatShip": 17.96510026,
      "TimeGetData": 0
    }, {
      "ID": "3c6ee0cece3b11f3eedbbad48b18f8fd7e4df3a1fd904e4195bfe527fd82407a",
      "NameShip": "Agrinion Air Base",
      "IMO": "3d0619b68d5288f51e84fb46c55a3f6fdb6a3c71",
      "MMSI": "rjemisonw@prweb.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 24.94,
      "MerShip": 109.32619026,
      "LatShip": 17.81562458,
      "TimeGetData": 0
    }, {
      "ID": "7f81534f9a304182027640bcb10c38d508d3cae120f70ad63b083904cb97bc29",
      "NameShip": "Tabubil Airport",
      "IMO": "e6a2f55b3bf413b42ab7d22b4401c1f98f81667b",
      "MMSI": "mbrimilcombex@ucla.edu",
      "TypeShip": 6,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 18.43,
      "MerShip": 106.14722836,
      "LatShip": 17.15415,
      "TimeGetData": 0
    }, {
      "ID": "169b44561a1999b6b9a398921033d94661aba6663d0cca9e8cf0e2193d016c36",
      "NameShip": "La Grande-4 Airport",
      "IMO": "b160f8109cec1f21dceb67aba1be38ea848c8087",
      "MMSI": "jmiramsy@google.ca",
      "TypeShip": 1,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 20.09,
      "MerShip": 108.26052442,
      "LatShip": 11.6152355,
      "TimeGetData": null
    }, {
      "ID": "09e5d3a0de4ca4d32266881b84392d3ebdba75fb5f76d8162f67687b81e9a633",
      "NameShip": "Shahid Ashrafi Esfahani Airport",
      "IMO": "8ae8a8510b7ab0236c8ae6e8c5f63ac39f94e729",
      "MMSI": "gemmittz@ustream.tv",
      "TypeShip": 1,
      "Country": "United Kingdom",
      "PortShip": 2,
      "WeightShip": 17.47,
      "MerShip": 106.0904403,
      "LatShip": 17.1563821,
      "TimeGetData": 0
    }, {
      "ID": "f75cfc241e2f361425f22679f5d5df83cfec425dc02055bfc40dbf85e38a7e20",
      "NameShip": "Kirkuk Air Base",
      "IMO": "646c693ab6dd27e620b0fa5e6d3bcd44318771d3",
      "MMSI": "tdovington10@theatlantic.com",
      "TypeShip": 7,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 19.36,
      "MerShip": 106.33422753,
      "LatShip": 18.87457868,
      "TimeGetData": 0
    }, {
      "ID": "2ac194ff77212dd68b930feda19d326ce530e05ce2979cef13cd54a5c7eb18ed",
      "NameShip": "Monastir Habib Bourguiba International Airport",
      "IMO": "076da8c4e07cda388a49fad4a4078bab29c7baf1",
      "MMSI": "hannatt11@reuters.com",
      "TypeShip": 6,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 21.25,
      "MerShip": 106.86223007,
      "LatShip": 17.15137536,
      "TimeGetData": 0
    }, {
      "ID": "2809ec15c16b91fe4c074e2b5eb9f27e34b06a98f23080e0841fe7aa54281d9b",
      "NameShip": "Termas de Río Hondo international Airport",
      "IMO": "d2896fcfb33fb5fcac65123b807e0687f4be8a9d",
      "MMSI": "ibrass12@discovery.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 16.54,
      "MerShip": 107.4417518,
      "LatShip": 14.48794005,
      "TimeGetData": 0
    }, {
      "ID": "8bc2c58300fe056cbf91bed2cbb5850647a6d94358bc8e0868d63e32f842763b",
      "NameShip": "Adi Sutjipto International Airport",
      "IMO": "fe8f2b204c393d274df81ef510067a3f21d2408c",
      "MMSI": "clowin13@census.gov",
      "TypeShip": 8,
      "Country": "United Kingdom",
      "PortShip": 3,
      "WeightShip": 16.77,
      "MerShip": 107.08794525,
      "LatShip": 10.6991671,
      "TimeGetData": 0
    }, {
      "ID": "94a334f17a9474ba6c761ab0999ce35f78f8835c87b4df8c88e36d2f8db4551f",
      "NameShip": "Christiansted Harbor Seaplane Base",
      "IMO": "23cc34a5e406cd91fbcefab38a0c455d6079f3ca",
      "MMSI": "jexon14@spiegel.de",
      "TypeShip": 2,
      "Country": "United States",
      "PortShip": 1,
      "WeightShip": 18.78,
      "MerShip": 107.3278032,
      "LatShip": 16.06940735,
      "TimeGetData": 0
    }, {
      "ID": "67c252e6d9b3fdf1d47086fa197aa6ad88c086a34e7b6799c125ecbe7aeaacd3",
      "NameShip": "Islita Airport",
      "IMO": "5215c919e04d3c003de90b1cb1149024dc8cf18d",
      "MMSI": "dbelfitt15@sphinn.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.42,
      "MerShip": 109.76167998,
      "LatShip": 11.05735302,
      "TimeGetData": 0
    }, {
      "ID": "2647aa49ef1d541e0bdaf2658c17bdd495cd4aece9afddbd8ac930d84a8a341c",
      "NameShip": "Rocha Airport",
      "IMO": "bac79fa5c2546e6ae97697851d871e666ca4dac8",
      "MMSI": "ktomovic16@whitehouse.gov",
      "TypeShip": 6,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 24.21,
      "MerShip": 108.2003143,
      "LatShip": 14.00843506,
      "TimeGetData": null
    }, {
      "ID": "bc7d90c8fdd9178a285b1a8240491c68779968c0416627f2d8219d73a75b948e",
      "NameShip": "Bumi Airport",
      "IMO": "c0e3cf2fc81630a09d56db84999b7939f08c5877",
      "MMSI": "theinert17@ycombinator.com",
      "TypeShip": 6,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 19.05,
      "MerShip": 106.53970734,
      "LatShip": 17.98032165,
      "TimeGetData": 0
    }, {
      "ID": "dc0640f368de6a5137f866655bb15d913a9aace6626fad5b63fd4c93ab228d90",
      "NameShip": "Anglesey Airport",
      "IMO": "c685117d76795aa85124466abcd636d996c96572",
      "MMSI": "mfranzini18@t-online.de",
      "TypeShip": 8,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 24.06,
      "MerShip": 107.72828859,
      "LatShip": 16.09529366,
      "TimeGetData": 0
    }, {
      "ID": "f6654af0d6bde754fc287887b750e3b64538aa5a1e5b4847a0c3c4c8ef39fefe",
      "NameShip": "Tonghua Sanyuanpu Airport",
      "IMO": "a471896d69c353a2004c1197e1a745e7477c89c2",
      "MMSI": "lredsell19@free.fr",
      "TypeShip": 9,
      "Country": "Thailand",
      "PortShip": 3,
      "WeightShip": 17.0,
      "MerShip": 109.72573302,
      "LatShip": 16.21520944,
      "TimeGetData": 0
    }, {
      "ID": "c1d53614b8974fb97323a42c0093287a6ef2b7daa08e893cabb1fa34ddeb6f6c",
      "NameShip": "General Abelardo L. Rodríguez International Airport",
      "IMO": "1a0950d5b3ee4349749f7167f7acad952bfb0574",
      "MMSI": "chabberjam1a@zimbio.com",
      "TypeShip": 4,
      "Country": "China",
      "PortShip": 1,
      "WeightShip": 21.04,
      "MerShip": 107.02077204,
      "LatShip": 14.96082847,
      "TimeGetData": 0
    }, {
      "ID": "c44ea462b7440cd89e29b729657c04fd6c233006d67921b9463fc51dab1eaf31",
      "NameShip": "Kikwit Airport",
      "IMO": "8721ca4c7107abd014ea1a2b751a9f62dba32ebb",
      "MMSI": "creglar1b@flickr.com",
      "TypeShip": 3,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 17.51,
      "MerShip": 108.73450584,
      "LatShip": 17.76602983,
      "TimeGetData": 0
    }, {
      "ID": "547be31a37e62737bfd5ea2e00942dcc030e4f04a3d6631f300527608d186886",
      "NameShip": "Malindi Airport",
      "IMO": "9d7d5eeec164db547140ca46fef29d6d744ad1ef",
      "MMSI": "calday1c@businessinsider.com",
      "TypeShip": 9,
      "Country": "China",
      "PortShip": 3,
      "WeightShip": 23.1,
      "MerShip": 106.99825312,
      "LatShip": 17.15666212,
      "TimeGetData": 0
    }, {
      "ID": "a2311ce02d67c57ac05b1d1d848d53b1f8d6b439095133b905b6c7fe6b80d0a5",
      "NameShip": "Tianshui Maijishan Airport",
      "IMO": "278dbdcee20d8087d42cfa5dbae6d99021e19e4a",
      "MMSI": "ebucktrout1d@gmpg.org",
      "TypeShip": 1,
      "Country": "China",
      "PortShip": 2,
      "WeightShip": 16.68,
      "MerShip": 107.11585114,
      "LatShip": 17.15935567,
      "TimeGetData": 0
    }],

    //TODO: thêm list Report
    ListReports: [
      {
        id: 1,
        value: 'Danh sách 1',
        listShips: [
          {
            "ID": "547be31a37e62737bfd5ea2e00942dcc030e4f04a3d6631f300527608d186886",
            "NameShip": "Malindi Airport",
            "IMO": "9d7d5eeec164db547140ca46fef29d6d744ad1ef",
            "MMSI": "calday1c@businessinsider.com",
            "TypeShip": 9,
            "Country": "China",
            "PortShip": 3,
            "WeightShip": 23.1,
            "MerShip": 106.99825312,
            "LatShip": 17.15666212,
            "TimeGetData": 0
          }, {
            "ID": "a2311ce02d67c57ac05b1d1d848d53b1f8d6b439095133b905b6c7fe6b80d0a5",
            "NameShip": "Tianshui Maijishan Airport",
            "IMO": "278dbdcee20d8087d42cfa5dbae6d99021e19e4a",
            "MMSI": "ebucktrout1d@gmpg.org",
            "TypeShip": 1,
            "Country": "China",
            "PortShip": 2,
            "WeightShip": 16.68,
            "MerShip": 107.11585114,
            "LatShip": 17.15935567,
            "TimeGetData": 0
          }  
        ]
      },
      {
        id: 2,
        value: 'Danh sách 2',
        listShips: [
          {
            "ID": "c44ea462b7440cd89e29b729657c04fd6c233006d67921b9463fc51dab1eaf31",
            "NameShip": "Kikwit Airport",
            "IMO": "8721ca4c7107abd014ea1a2b751a9f62dba32ebb",
            "MMSI": "creglar1b@flickr.com",
            "TypeShip": 3,
            "Country": "China",
            "PortShip": 2,
            "WeightShip": 17.51,
            "MerShip": 108.73450584,
            "LatShip": 17.76602983,
            "TimeGetData": 0
          }, {
            "ID": "547be31a37e62737bfd5ea2e00942dcc030e4f04a3d6631f300527608d186886",
            "NameShip": "Malindi Airport",
            "IMO": "9d7d5eeec164db547140ca46fef29d6d744ad1ef",
            "MMSI": "calday1c@businessinsider.com",
            "TypeShip": 9,
            "Country": "China",
            "PortShip": 3,
            "WeightShip": 23.1,
            "MerShip": 106.99825312,
            "LatShip": 17.15666212,
            "TimeGetData": 0
          }
        ]
      },
    ]
  },
  getters: {
    getDataShips: state => {
      return state.DataShips;
    },
    getDataListReport: state => {
      return state.ListReports;
    }
  },
  mutations: {
    filterDataShips(state, {arr, type}) {
      if (arr.length > 0) {
        if(type == "WeightShip") {
          state.DataShips = state.DataShipsSource.filter(ship => {
            if(ship[type]*100 >= arr[0] && ship[type]*100 <= arr[1]) return ship;
          })
        } else {
          state.DataShips = state.DataShipsSource.filter(ship => {
            for(let i = 0 ; i < arr.length; i++) {
              if(ship[type] == arr[i]) return ship;
            }
          })
        }
       
      }
     else state.DataShips = state.DataShipsSource;
    },
    addListReport(state, newReport) {
      state.ListReports.push(newReport)
    },
    createNewListReport(state) {
      state.ListReports.push({
        id: state.ListReports.length + 1,
        value: `Danh sach ${state.ListReports.length + 1}`
      })
    }
  },
  actions: {
    handleFilterDataShips(context, {arr, type}) {
      context.commit('filterDataShips', {arr, type});
    },
    handleAddListReport(context, newReport) {
      context.commit('addListReport', newReport);
    },
    handleCreateNewListReport(context) {
      context.commit('createNewListReport');

    }
  },
  modules: {
  }
})
