const { Winery, User } = require("../models");

const wineryData = [
  {
    name: "Ab Astris Winery",
    location: "320 Klein Road, Stonewall, Texas 78671",
    website: "https://www.abastriswinery.com",
    phone: "(830) 644-8369",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/AbAstrisMainImage-1024x768.jpg",
    facebook: "https://www.facebook.com/abastriswinery/",
    user_id: 1,
  },
  {
    name: "Becker Vineyards",
    location: "464 Becker Farms Rd, Fredericksburg, TX 78624, USA",
    website: "https://www.beckervineyards.com/",
    phone: "(830) 644-2681",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image.png",
    facebook: '',
    user_id: 1,
  },
  {
    name: "Bell Springs Winery",
    location: "3700 Bell Springs Rd, Dripping Springs, TX 78620, USA",
    website: "https://www.bellspringswinery.com",
    phone: "(512) 643-7398",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_1937-1-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Bending Branch Winery",
    location: "142 Lindner Branch Trail, Comfort TX 78013 USA",
    website: "https://www.bendingbranchwinery.com",
    phone: "(830) 995-2948",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_8330-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Bent Oak Winery",
    location: "Bent Oak Winery, Cedar Park, TX, USA",
    website: "https://www.bentoakwinery.com",
    phone: "(512) 953-8094",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Bent-Oak-Winery-Featured-Image-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Bingham Family Vineyards",
    location: "3915 B, US-290 E, Fredericksburg, TX 78624",
    website: "https://BinghamFamilyVineyards.com",
    phone: "(830) 304-6616",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/19.09.01_Bingham_047-1400x729b-1024x533.jpg",
    user_id: 1,
  },
  {
    name: "Blue Lotus Winery-Hye",
    location: "8500 US-290, Hye, TX 78635, USA",
    website: "https://www.bluelotuswinery.com",
    phone: "(830) 379-9463",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Hye-Front-sign-with-mead.jpg",
    user_id: 1,
  },
  {
    name: "Chisholm Trail Winery",
    location: "2367 Usener Rd, Fredericksburg, TX 78624, USA",
    website: "https://www.chisholmtrailwinery.com",
    phone: "",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-5.jpg",
    user_id: 1,
  },
  {
    name: "Cicada Cellars",
    location: "14746 U.S. 290 East Stonewall, TX 78671",
    website: "https://www.cicadacellars.com",
    phone: "(830) 456-9324",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/CicadaMain-765x1024.jpg",
    user_id: 1,
  },
  {
    name: "Driftwood Estate Winery",
    location: "4001 Elder Hill Rd, Driftwood, TX 78619, USA",
    website: "https://www.DriftwoodWine.com",
    phone: "(512) 858-9667",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-3.png",
    user_id: 1,
  },
  {
    name: "Dry Comal Creek Winery and Vineyards",
    location: "1741 Herbelin Rd, New Braunfels, TX 78132, USA",
    website: "https://www.drycomalcreekvineyards.com",
    phone: "(830) 500-3048",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_1707-1-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Duchman Family Winery",
    location: "13308 Farm to Market Road W 150, Driftwood, TX 78619, USA",
    website: "https://www.duchmanwinery.com",
    phone: "(512) 858-1470",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-6.jpg",
    user_id: 1,
  },
  {
    name: "Fall Creek Vineyards at Tow",
    location: "1820 Co Rd 222, Tow, TX 78672, USA",
    website: "https://www.fcv.com",
    phone: "(325) 379-5361",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-1.png",
    user_id: 1,
  },
  {
    name: "Farmhouse Vineyards",
    location: "402 E Main St, Johnson City, TX 78636, USA",
    website: "https://www.farmhousevineyard.com",
    phone: "(830) 282-4249",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/FHV-Cover-Photo-High-Res.png",
    user_id: 1,
  },
  {
    name: "Fiesta Vineyard & Winery at Lometa",
    location: "18727 FM 580, Lometa, TX 76853, USA",
    website: "https://www.fiestawinery.com",
    phone: "(325) 628-3433",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Photo-Jun-13-11-52-17-AM-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Fiesta Winery Fredericksburg 290",
    location: "6260 US Highway 290 E, Fredericksburg, TX 78624",
    website: "https://www.fiestawinery.com",
    phone: "(830) 997-4466",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/290TastingRoom-1024x680.jpg",
    user_id: 1,
  },
  {
    name: "Fiesta Winery Marble Falls",
    location: "309 Main St, Marble Falls, TX 78654, USA",
    website: "https://www.fiestawinery.com/marble-falls",
    phone: "(830) 637-7702",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Photo-Jun-14-2-57-34-PM-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Flat Creek Estate",
    location: "24912 Singleton Bend East, Marble Falls, TX 78654, USA",
    website: "https://www.flatcreekestate.com",
    phone: "(512) 267-6310",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW-Header-Photo-2019-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Fredricksburg Winery",
    location: "247 West Main Street, Fredericksburg, TX 78624, USA",
    website: "http://www.fbgwinery.com",
    phone: "(830) 990-8747",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-9.jpg",
    user_id: 1,
  },
  {
    name: "Grape Creek Vineyards",
    location: "10587 E US-290, Fredericksburg, TX 78624, USA",
    website: "https://www.grapecreek.com",
    phone: "(830) 644-2710",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Grape-Creek-Vineyards-1024x898.jpg",
    user_id: 1,
  },
  {
    name: "Grape Creek Vineyards on Main",
    location: "223 E Main St, Fredericksburg, TX 78624, USA",
    website: "https://www.grapecreek.com/taste-on-main-st-fredericksburg",
    phone: "(830) 992-3373",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/GCV-Main-St-July-2020-2-1024x683.png",
    user_id: 1,
  },
  {
    name: "Hawks Shadow",
    location: "7500 McGregor Lane, Dripping Springs, TX 78620, USA",
    website: "https://www.hawksshadow.com",
    phone: "(866) 551-9463",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-11.jpg",
    user_id: 1,
  },
  {
    name: "Heath Sparkling Wines",
    location: "10591 E US-290, Fredericksburg, TX 78624, USA",
    website: "https://Heathsparkling.com",
    phone: "(830) 304-1011",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Heath-Sparkling-Wines-1024x655.jpg",
    user_id: 1,
  },
  {
    name: "Hilmy Cellars",
    location: "12346 E. US Hwy 290, Fredericksburg, TX 78624",
    website: "https://HILMYWINE.COM",
    phone: "(830) 644-2482",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Hilmy-Cover-Image-RZ-Lisa-Sheppard-1024x535.png",
    user_id: 1,
  },
  {
    name: "Hye Meadow Winery",
    location: "10257 West, US-290, Hye, TX 78635, USA",
    website: "https://www.hyemeadow.com",
    phone: "(830) 308-8551",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/hye-meadow-pic-1024x498.jpg",
    user_id: 1,
  },
  {
    name: "Inwood Estates Winery & Bistro",
    location: "10303 U.S. 290, Fredericksburg, TX, USA",
    website: "http://www.inwoodwines.com",
    phone: "(830) 997-2304",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-.jpg",
    user_id: 1,
  },
  {
    name: "Kalasi Cellars",
    location: "414 Goehmann Lane Fredericksburg, TX 78624",
    website: "https://www.kalasicellars.com/",
    phone: "(830) 992-3037",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Kalasi-Cellars_front-walkway-cropped-Greg-Davis-1024x533.jpg",
    user_id: 1,
  },
  {
    name: "Kerrville Hills Winery",
    location: "3600 Fredericksburg Rd, Kerrville, TX 78028, USA",
    website: "https://www.kerrvillehillswinery.com",
    phone: "(830) 895-4233",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/tasting-room-fireplace-cropped-Carol-Milberger-1.jpg",
    user_id: 1,
  },
  {
    name: "Kfire Winery and Vineyard",
    location: "3059 CR 212. Bertram, TX 78605",
    website: "https://kfirewineryandvineyard.com",
    phone: "(512) 489-2929",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/Kfire-Featured-940x1024.jpg",
    user_id: 1,
  },
  {
    name: "Kuhlman Cellars",
    location: "18421 U.S. 290, Stonewall, TX 78671, USA",
    website: "https://www.kuhlmancellars.com",
    phone: "(512) 920-2675",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Kuhlman-Cellars-Nov-2015-Web-12-1024x576.jpg",
    user_id: 1,
  },
  {
    name: "Lewis Wines",
    location: "3209 Hwy 290 W. Johnson City, TX 78636",
    website: "https://www.lewiswines.com",
    phone: "(512) 987-0660",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/LewisWinesFeaturedImage-1024x718.jpg",
    user_id: 1,
  },
  {
    name: "Limestone Terrace Vineyard",
    location: "101 Rocky Meadows Lane, Wimberley Tx 78676",
    website: "https://www.limestoneterrace.com",
    phone: "(512) 575-2594",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/118397660_10157713071380028_4248618848357829992_n-Mody-Stovall.jpg",
    user_id: 1,
  },
  {
    name: "Longhorn Cellars",
    location: "315 Farm to Market 1376, Fredericksburg, TX 78624, USA",
    website: "https://www.longhorncellars.com",
    phone: "(830) 990-2990",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW1651-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Los Pinos Ranch Vineyard",
    location: "6009 U.S. 290, Fredericksburg, TX, USA",
    website: "https://www.lospinosranchvineyards.com",
    phone: "(830) 304-5778",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-wall-from-front-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Lost Draw Cellars",
    location: "113 E Park St, Fredericksburg, TX 78624, USA",
    website: "https://www.lostdrawcellars.com/",
    phone: "(830) 992-3251",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/lost-draw-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Messina Hof Hill Country",
    location: "9996 U.S. 290 East, Fredericksburg, TX 78624, USA",
    website: "https://www.messinahof.com/hillcountry",
    phone: "(830) 990-4653",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-19-1024x533.jpg",
    user_id: 1,
  },
  {
    name: "Narrow Path Winery at Albert",
    location: "6331 S Ranch Rd 1623, Stonewall, TX 78671, USA",
    website: "https://www.NarrowPathWinery.com",
    phone: "(830) 644-2144",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/NP-vines-683x1024.jpeg",
    user_id: 1,
  },
  {
    name: "Pedernales Cellars",
    location: "2916 Upper Albert Road, Stonewall, Texas 78671, USA",
    website: "https://www.pedernalescellars.com",
    phone: "(830) 644-2037",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-2-1024x533.jpg",
    user_id: 1,
  },
  {
    name: "Perissos Vineyard and Winery",
    location: "7214 Park Road 4 West, Burnet, TX 78611, USA",
    website: "https://www.perissosvineyards.com",
    phone: "(512) 820-2950",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/DSC_5101-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Pillar Bluff Vineyards",
    location: "300 Co Rd 111, Lampasas, TX 76550, USA",
    website: "https://www.pillarblufflampasas.com",
    phone: "(512) 556-4078",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-1-1.png",
    user_id: 1,
  },
  {
    name: "Pontotoc Vineyard Weingarten",
    location: "320 West Main Street, Fredericksburg, Texas 78624, USA",
    website: "https://www.pontotocvineyard.com",
    phone: "(512) 658-0023",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Photo.jpg",
    user_id: 1,
  },
  {
    name: "Ron Yates",
    location: "6676 Hwy 290, Johnson City, TX 78636, USA",
    website: "https://www.ronyateswines.com",
    phone: "(512) 585-3972",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW1651-1-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Saint Tryphon Farm & Vineyards",
    location: "24 Wasp Creek Rd, Boerne, TX 78006, USA",
    website: "https://www.SaintTryphon.com",
    phone: "(830) 777-6704",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-12.jpg",
    user_id: 1,
  },
  {
    name: "Silver Dollar Winery Hill Country",
    location: "8264 W Hwy 290, Johnson City, TX, USA",
    website: "http://www.SilverDollarWinery.com",
    phone: "(830) 308-7750",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/EECY36421-Richard-Bowen-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Singing Water Vineyards",
    location: "316 Mill Dam Rd, Comfort, TX 78013, USA",
    website: "https://singingwater.com",
    phone: "(830) 457-9006",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW-Singing-Water-1024x506.jpg",
    user_id: 1,
  },
  {
    name: "Sister Creek Vineyards",
    location: "1142 Sisterdale Rd, Boerne, TX 78006, USA",
    website: "https://sistercreekvineyards.com",
    phone: "(830) 324-6704",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-1-2.png",
    user_id: 1,
  },
  {
    name: "Slate Mill Wine Collective",
    location: "4029 Brook Hollow Dr, Schertz, TX 78154, USA",
    website: "https://slatemillwinecollective.com",
    phone: "(830) 391-8510",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/SMWC-FeaturedImage.jpg",
    user_id: 1,
  },
  {
    name: "Solaro Estate Winery",
    location: "13111 Silver Creek Rd, Dripping Springs, TX 78620, USA",
    website: "https://solaroestate.com",
    phone: "(832) 660-8642",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/DJI_0035-1024x576.jpg",
    user_id: 1,
  },
  {
    name: "Spicewood Vineyards",
    location: "1419 Co Rd 409, Spicewood, TX 78669, USA",
    website: "https://www.spicewoodvineyards.com",
    phone: "(830) 693-5328",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-13.jpg",
    user_id: 1,
  },
  {
    name: "Stone House Vineyard",
    location: "24350 Haynie Flat Road, Spicewood, TX 78669, USA",
    website: "https://stonehousevineyard.com/",
    phone: "(512) 264-3630",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/StoneHouseTHCWpageCover-1.jpg",
    user_id: 1,
  },
  {
    name: "Stoneledge Winery & Vineyard",
    location: "518 County Road 1403 Lometa, TX 76853",
    website: "http://stoneledge.wine",
    phone: "(512) 937-4252",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/tastingroom-1-1024x768.jpeg",
    user_id: 1,
  },
  {
    name: "Tejas Winery",
    location: "8638 US 290 West, Hye, TX 78635",
    website: "https://www.tejaswinery.com/",
    phone: "(830) 399-0580",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/tejas-winery.jpg",
    user_id: 1,
  },
  {
    name: "Texas Heritage Vineyard",
    location: "3245 US Hwy 290 E Fredericksburg, TX 78624",
    website: "https://Texasheritagevineyard.com",
    phone: "(830) 992-3323",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/TexasHeritageNewPhoto-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Texas Hills Vineyard",
    location: "878 Ranch Road 2766, Johnson City, TX 78636, USA",
    website: "https://www.texashillsvineyard.com",
    phone: "(830) 868-2321",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-14-1024x1005.jpg",
    user_id: 1,
  },
  {
    name: "Texas Wine Collective",
    location: "10354 E Us Hwy 290, Fredericksburg, Tx 78624",
    website: "https://www.texaswinecollective.com",
    phone: "(830) 997-7470",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/4.0-Cellars-Svetlana-Photography-low-res-27-1024x766.jpg",
    user_id: 1,
  },
  {
    name: "Torr Na Lochs Vineyard & Winery",
    location: "7055 TX-29, Burnet, TX 78611, USA",
    website: "https://www.torrnalochs.com/",
    phone: "(512) 766-0555",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Torr-na-lochs-Featured-Image-1024x954.jpg",
    user_id: 1,
  },
  {
    name: "Turtle Creek Olives and Vines",
    location: "211 Earl Garrett Street, Kerrville, TX 78028, USA",
    website: "https://www.turtlecreekolivesandvines.com",
    phone: "(830) 896-0010",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/TurtleCreekFeatured-1024x662.jpg",
    user_id: 1,
  },
  {
    name: "Wedding Oak Winery at San Saba",
    location: "316 E Wallace St, San Saba, TX 76877, USA",
    website: "https://www.WeddingOakWinery.com",
    phone: "(325) 372-4050",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Nat-Geo-Wedding-Oak-Photo-1024x683.jpg",
    user_id: 1,
  },
  {
    name: "Wedding Oak Winery Burnet",
    location: "229 S Pierce, Burnet, TX 78611",
    website: "https://weddingoakwinery.com/visit-us-in-burnet",
    phone: "(512) 715-3303",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/WeddingOakBurnetMainImage-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Wedding Oak Winery Fredericksburg",
    location: "6009 U.S. 290, Fredericksburg, TX, USA",
    website: "https://www.WeddingOakWinery.com",
    phone: "(830) 304-9333",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/fredericksburg-entrance-1024x768.jpg",
    user_id: 1,
  },
  {
    name: "Westcave Cellars Winery",
    location: "683 Ranch Rd 1320, Johnson City, TX 78636, USA",
    website: "https://www.westcavecellars.com/",
    phone: "(512) 431-1403",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/DSC_9835-1024x683.jpeg",
    user_id: 1,
  },
  {
    name: "Wildseed Vineyards",
    location: "100 Legacy Dr, Fredericksburg, TX 78624",
    website: "https://wine.wildseedfarms.com",
    phone: "(830) 990-6684",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/HGhlyhH0-1-Dabs-Hollimon-1024x768.jpeg",
    user_id: 1,
  },
  {
    name: "William Chris Vineyards",
    location: "10352 U.S. Highway 290 Hye, Texas 78635",
    website: "http://williamchriswines.com",
    phone: "(830) 998-7654",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/WCV-New-Tasting-Room-036-JPG-2500PX-Web-1024x512.jpg",
    user_id: 1,
  },
  {
    name: "Wimberly Valley Winery",
    location: "2825 Lone Man Mountain Rd, Driftwood, TX 78619, USA",
    website: "https://www.wimberleyvalleywine.com",
    phone: "(512) 847-2592",
    image:
      "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-18.jpg",
    user_id: 1,
  },
];

const seedWineries = () => Winery.bulkCreate(wineryData);

module.exports = seedWineries;
