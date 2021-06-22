const { Winery } = require('../models');

const wineryData = [
  {
      Name: "Ab Astris Winery",
      Location: "320 Klein Road, Stonewall, Texas 78671",
      Website: "www.abastriswinery.com",
      Phone: "(830) 644-8369",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/AbAstrisMainImage-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Becker Vineyards",
      Location: "464 Becker Farms Rd, Fredericksburg, TX 78624, USA",
      Website: "https://www.beckervineyards.com/",
      Phone: "(830) 644-2681",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image.png",
      User_id:  1
  },
  {
      Name: "Bell Springs Winery",
      Location: "3700 Bell Springs Rd, Dripping Springs, TX 78620, USA",
      Website: "www.bellspringswinery.com",
      Phone: "(512) 643-7398",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_1937-1-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Bending Branch Winery",
      Location: "142 Lindner Branch Trail, Comfort TX 78013 USA",
      Website: "www.bendingbranchwinery.com",
      Phone: "(830) 995-2948",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_8330-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Bent Oak Winery",
      Location: "Bent Oak Winery, Cedar Park, TX, USA",
      Website: "https://www.bentoakwinery.com",
      Phone: "(512) 953-8094",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Bent-Oak-Winery-Featured-Image-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Bingham Family Vineyards",
      Location: "3915 B, US-290 E, Fredericksburg, TX 78624",
      Website: "BinghamFamilyVineyards.com",
      Phone: "(830) 304-6616",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/19.09.01_Bingham_047-1400x729b-1024x533.jpg",
      User_id:  1
  },
  {
      Name: "Blue Lotus Winery-Hye",
      Location: "8500 US-290, Hye, TX 78635, USA",
      Website: "www.bluelotuswinery.com",
      Phone: "(830) 379-9463",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Hye-Front-sign-with-mead.jpg",
      User_id:  1
  },
  {
      Name: "Chisholm Trail Winery",
      Location: "2367 Usener Rd, Fredericksburg, TX 78624, USA",
      Website: "www.chisholmtrailwinery.com",
      Phone: "",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-5.jpg",
      User_id:  1
  },
  {
      Name: "Cicada Cellars",
      Location: "14746 U.S. 290 East Stonewall, TX 78671",
      Website: "www.cicadacellars.com",
      Phone: "(830) 456-9324",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/CicadaMain-765x1024.jpg",
      User_id:  1
  },
  {
      Name: "Driftwood Estate Winery",
      Location: "4001 Elder Hill Rd, Driftwood, TX 78619, USA",
      Website: "www.DriftwoodWine.com",
      Phone: "(512) 858-9667",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-3.png",
      User_id:  1
  },
  {
      Name: "Dry Comal Creek Winery and Vineyards",
      Location: "1741 Herbelin Rd, New Braunfels, TX 78132, USA",
      Website: "www.drycomalcreekvineyards.com",
      Phone: "(830) 500-3048",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_1707-1-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Duchman Family Winery",
      Location: "13308 Farm to Market Road W 150, Driftwood, TX 78619, USA",
      Website: "www.duchmanwinery.com",
      Phone: "(512) 858-1470",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-6.jpg",
      User_id:  1
  },
  {
      Name: "Fall Creek Vineyards at Tow",
      Location: "1820 Co Rd 222, Tow, TX 78672, USA",
      Website: "www.fcv.com",
      Phone: "(325) 379-5361",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-1.png",
      User_id:  1
  },
  {
      Name: "Farmhouse Vineyards",
      Location: "402 E Main St, Johnson City, TX 78636, USA",
      Website: "www.farmhousevineyard.com",
      Phone: "(830) 282-4249",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/FHV-Cover-Photo-High-Res.png",
      User_id:  1
  },
  {
      Name: "Fiesta Vineyard & Winery at Lometa",
      Location: "18727 FM 580, Lometa, TX 76853, USA",
      Website: "www.fiestawinery.com",
      Phone: "(325) 628-3433",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Photo-Jun-13-11-52-17-AM-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Fiesta Winery Fredericksburg 290",
      Location: "6260 US Highway 290 E, Fredericksburg, TX 78624",
      Website: "www.fiestawinery.com",
      Phone: "(830) 997-4466",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/290TastingRoom-1024x680.jpg",
      User_id:  1
  },
  {
      Name: "Fiesta Winery Marble Falls",
      Location: "309 Main St, Marble Falls, TX 78654, USA",
      Website: "www.fiestawinery.com/marble-falls",
      Phone: "(830) 637-7702",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Photo-Jun-14-2-57-34-PM-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Flat Creek Estate",
      Location: "24912 Singleton Bend East, Marble Falls, TX 78654, USA",
      Website: "www.flatcreekestate.com",
      Phone: "(512) 267-6310",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW-Header-Photo-2019-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Fredricksburg Winery",
      Location: "247 West Main Street, Fredericksburg, TX 78624, USA",
      Website: "www.fbgwinery.com",
      Phone: "(830) 990-8747",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-9.jpg",
      User_id:  1
  },
  {
      Name: "Grape Creek Vineyards",
      Location: "10587 E US-290, Fredericksburg, TX 78624, USA",
      Website: "www.grapecreek.com",
      Phone: "(830) 644-2710",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Grape-Creek-Vineyards-1024x898.jpg",
      User_id:  1
  },
  {
      Name: "Grape Creek Vineyards on Main",
      Location: "223 E Main St, Fredericksburg, TX 78624, USA",
      Website: "www.grapecreek.com/taste-on-main-st-fredericksburg",
      Phone: "(830) 992-3373",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/GCV-Main-St-July-2020-2-1024x683.png",
      User_id:  1
  },
  {
      Name: "Hawks Shadow",
      Location: "7500 McGregor Lane, Dripping Springs, TX 78620, USA",
      Website: "www.hawksshadow.com",
      Phone: "(866) 551-9463",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-11.jpg",
      User_id:  1
  },
  {
      Name: "Heath Sparkling Wines",
      Location: "10591 E US-290, Fredericksburg, TX 78624, USA",
      Website: "Heathsparkling.com",
      Phone: "(830) 304-1011",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Heath-Sparkling-Wines-1024x655.jpg",
      User_id:  1
  },
  {
      Name: "Hilmy Cellars",
      Location: "12346 E. US Hwy 290, Fredericksburg, TX 78624",
      Website: "HILMYWINE.COM",
      Phone: "(830) 644-2482",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Hilmy-Cover-Image-RZ-Lisa-Sheppard-1024x535.png",
      User_id:  1
  },
  {
      Name: "Hye Meadow Winery",
      Location: "10257 West, US-290, Hye, TX 78635, USA",
      Website: "www.hyemeadow.com",
      Phone: "(830) 308-8551",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/hye-meadow-pic-1024x498.jpg",
      User_id:  1
  },
  {
      Name: "Inwood Estates Winery & Bistro",
      Location: "10303 U.S. 290, Fredericksburg, TX, USA",
      Website: "www.inwoodwines.com",
      Phone: "(830) 997-2304",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-.jpg",
      User_id:  1
  },
  {
      Name: "Kalasi Cellars",
      Location: "414 Goehmann Lane Fredericksburg, TX 78624",
      Website: "https://www.kalasicellars.com/",
      Phone: "(830) 992-3037",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Kalasi-Cellars_front-walkway-cropped-Greg-Davis-1024x533.jpg",
      User_id:  1
  },
  {
      Name: "Kerrville Hills Winery",
      Location: "3600 Fredericksburg Rd, Kerrville, TX 78028, USA",
      Website: "www.kerrvillehillswinery.com",
      Phone: "(830) 895-4233",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/tasting-room-fireplace-cropped-Carol-Milberger-1.jpg",
      User_id:  1
  },
  {
      Name: "Kfire Winery and Vineyard",
      Location: "3059 CR 212. Bertram, TX 78605",
      Website: "https://kfirewineryandvineyard.com",
      Phone: "(512) 489-2929",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/Kfire-Featured-940x1024.jpg",
      User_id:  1
  },
  {
      Name: "Kuhlman Cellars",
      Location: "18421 U.S. 290, Stonewall, TX 78671, USA",
      Website: "www.kuhlmancellars.com",
      Phone: "(512) 920-2675",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Kuhlman-Cellars-Nov-2015-Web-12-1024x576.jpg",
      User_id:  1
  },
  {
      Name: "Lewis Wines",
      Location: "3209 Hwy 290 W. Johnson City, TX 78636",
      Website: "https://www.lewiswines.com",
      Phone: "(512) 987-0660",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/LewisWinesFeaturedImage-1024x718.jpg",
      User_id:  1
  },
  {
      Name: "Limestone Terrace Vineyard",
      Location: "101 Rocky Meadows Lane, Wimberley Tx 78676",
      Website: "www.limestoneterrace.com",
      Phone: "(512) 575-2594",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/118397660_10157713071380028_4248618848357829992_n-Mody-Stovall.jpg",
      User_id:  1
  },
  {
      Name: "Longhorn Cellars",
      Location: "315 Farm to Market 1376, Fredericksburg, TX 78624, USA",
      Website: "www.longhorncellars.com",
      Phone: "(830) 990-2990",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW1651-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Los Pinos Ranch Vineyard",
      Location: "6009 U.S. 290, Fredericksburg, TX, USA",
      Website: "www.lospinosranchvineyards.com",
      Phone: "(830) 304-5778",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-wall-from-front-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Lost Draw Cellars",
      Location: "113 E Park St, Fredericksburg, TX 78624, USA",
      Website: "www.lostdrawcellars.com/",
      Phone: "(830) 992-3251",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/lost-draw-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Messina Hof Hill Country",
      Location: "9996 U.S. 290 East, Fredericksburg, TX 78624, USA",
      Website: "www.messinahof.com/hillcountry",
      Phone: "(830) 990-4653",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-19-1024x533.jpg",
      User_id:  1
  },
  {
      Name: "Narrow Path Winery at Albert",
      Location: "6331 S Ranch Rd 1623, Stonewall, TX 78671, USA",
      Website: "www.NarrowPathWinery.com",
      Phone: "(830) 644-2144",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/NP-vines-683x1024.jpeg",
      User_id:  1
  },
  {
      Name: "Pedernales Cellars",
      Location: "2916 Upper Albert Road, Stonewall, Texas 78671, USA",
      Website: "www.pedernalescellars.com",
      Phone: "(830) 644-2037",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-2-1024x533.jpg",
      User_id:  1
  },
  {
      Name: "Perissos Vineyard and Winery",
      Location: "7214 Park Road 4 West, Burnet, TX 78611, USA",
      Website: "www.perissosvineyards.com",
      Phone: "(512) 820-2950",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/DSC_5101-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Pillar Bluff Vineyards",
      Location: "300 Co Rd 111, Lampasas, TX 76550, USA",
      Website: "www.pillarblufflampasas.com",
      Phone: "(512) 556-4078",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-1-1.png",
      User_id:  1
  },
  {
      Name: "Pontotoc Vineyard Weingarten",
      Location: "320 West Main Street, Fredericksburg, Texas 78624, USA",
      Website: "www.pontotocvineyard.com",
      Phone: "(512) 658-0023",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Photo.jpg",
      User_id:  1
  },
  {
      Name: "Ron Yates",
      Location: "6676 Hwy 290, Johnson City, TX 78636, USA",
      Website: "www.ronyateswines.com",
      Phone: "(512) 585-3972",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW1651-1-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Saint Tryphon Farm & Vineyards",
      Location: "24 Wasp Creek Rd, Boerne, TX 78006, USA",
      Website: "www.SaintTryphon.com",
      Phone: "(830) 777-6704",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-12.jpg",
      User_id:  1
  },
  {
      Name: "Silver Dollar Winery Hill Country",
      Location: "8264 W Hwy 290, Johnson City, TX, USA",
      Website: "www.SilverDollarWinery.com",
      Phone: "(830) 308-7750",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/EECY36421-Richard-Bowen-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Singing Water Vineyards",
      Location: "316 Mill Dam Rd, Comfort, TX 78013, USA",
      Website: "www.singingwater.com",
      Phone: "(830) 457-9006",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/THCW-Singing-Water-1024x506.jpg",
      User_id:  1
  },
  {
      Name: "Sister Creek Vineyards",
      Location: "1142 Sisterdale Rd, Boerne, TX 78006, USA",
      Website: "sistercreekvineyards.com",
      Phone: "(830) 324-6704",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-image-1-2.png",
      User_id:  1
  },
  {
      Name: "Slate Mill Wine Collective",
      Location: "4029 Brook Hollow Dr, Schertz, TX 78154, USA",
      Website: "slatemillwinecollective.com",
      Phone: "(830) 391-8510",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/SMWC-FeaturedImage.jpg",
      User_id:  1
  },
  {
      Name: "Solaro Estate Winery",
      Location: "13111 Silver Creek Rd, Dripping Springs, TX 78620, USA",
      Website: "solaroestate.com",
      Phone: "(832) 660-8642",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/DJI_0035-1024x576.jpg",
      User_id:  1
  },
  {
      Name: "Spicewood Vineyards",
      Location: "1419 Co Rd 409, Spicewood, TX 78669, USA",
      Website: "www.spicewoodvineyards.com",
      Phone: "(830) 693-5328",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-13.jpg",
      User_id:  1
  },
  {
      Name: "Stone House Vineyard",
      Location: "24350 Haynie Flat Road, Spicewood, TX 78669, USA",
      Website: "https://stonehousevineyard.com/",
      Phone: "(512) 264-3630",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/StoneHouseTHCWpageCover-1.jpg",
      User_id:  1
  },
  {
      Name: "Stoneledge Winery & Vineyard",
      Location: "518 County Road 1403 Lometa, TX 76853",
      Website: "stoneledge.wine",
      Phone: "(512) 937-4252",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/tastingroom-1-1024x768.jpeg",
      User_id:  1
  },
  {
      Name: "Tejas Winery",
      Location: "8638 US 290 West, Hye, TX 78635",
      Website: "https://www.tejaswinery.com/",
      Phone: "(830) 399-0580",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/tejas-winery.jpg",
      User_id:  1
  },
  {
      Name: "Texas Heritage Vineyard",
      Location: "3245 US Hwy 290 E Fredericksburg, TX 78624",
      Website: "Texasheritagevineyard.com",
      Phone: "(830) 992-3323",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/TexasHeritageNewPhoto-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Texas Hills Vineyard",
      Location: "878 Ranch Road 2766, Johnson City, TX 78636, USA",
      Website: "www.texashillsvineyard.com",
      Phone: "(830) 868-2321",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-14-1024x1005.jpg",
      User_id:  1
  },
  {
      Name: "Texas Wine Collective",
      Location: "10354 E Us Hwy 290, Fredericksburg, Tx 78624",
      Website: "www.texaswinecollective.com",
      Phone: "(830) 997-7470",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/4.0-Cellars-Svetlana-Photography-low-res-27-1024x766.jpg",
      User_id:  1
  },
  {
      Name: "Torr Na Lochs Vineyard & Winery",
      Location: "7055 TX-29, Burnet, TX 78611, USA",
      Website: "https://www.torrnalochs.com/",
      Phone: "(512) 766-0555",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Torr-na-lochs-Featured-Image-1024x954.jpg",
      User_id:  1
  },
  {
      Name: "Turtle Creek Olives and Vines",
      Location: "211 Earl Garrett Street, Kerrville, TX 78028, USA",
      Website: "www.turtlecreekolivesandvines.com",
      Phone: "(830) 896-0010",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/TurtleCreekFeatured-1024x662.jpg",
      User_id:  1
  },
  {
      Name: "Wedding Oak Winery at San Saba",
      Location: "316 E Wallace St, San Saba, TX 76877, USA",
      Website: "www.WeddingOakWinery.com",
      Phone: "(325) 372-4050",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Nat-Geo-Wedding-Oak-Photo-1024x683.jpg",
      User_id:  1
  },
  {
      Name: "Wedding Oak Winery Burnet",
      Location: "229 S Pierce, Burnet, TX 78611",
      Website: "https://weddingoakwinery.com/visit-us-in-burnet",
      Phone: "(512) 715-3303",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/WeddingOakBurnetMainImage-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Wedding Oak Winery Fredericksburg",
      Location: "6009 U.S. 290, Fredericksburg, TX, USA",
      Website: "www.WeddingOakWinery.com",
      Phone: "(830) 304-9333",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/fredericksburg-entrance-1024x768.jpg",
      User_id:  1
  },
  {
      Name: "Westcave Cellars Winery",
      Location: "683 Ranch Rd 1320, Johnson City, TX 78636, USA",
      Website: "https://www.westcavecellars.com/",
      Phone: "(512) 431-1403",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/DSC_9835-1024x683.jpeg",
      User_id:  1
  },
  {
      Name: "Wildseed Vineyards",
      Location: "100 Legacy Dr, Fredericksburg, TX 78624",
      Website: "wine.wildseedfarms.com",
      Phone: "(830) 990-6684",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/HGhlyhH0-1-Dabs-Hollimon-1024x768.jpeg",
      User_id:  1
  },
  {
      Name: "William Chris Vineyards",
      Location: "10352 U.S. Highway 290 Hye, Texas 78635",
      Website: "williamchriswines.com",
      Phone: "(830) 998-7654",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/WCV-New-Tasting-Room-036-JPG-2500PX-Web-1024x512.jpg",
      User_id:  1
  },
  {
      Name: "Wimberly Valley Winery",
      Location: "2825 Lone Man Mountain Rd, Driftwood, TX 78619, USA",
      Website: "www.wimberleyvalleywine.com",
      Phone: "(512) 847-2592",
      Image: "https://his023i1nte1nls6a6qp8amc-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Featured-Image-18.jpg",
      User_id:  1
  }
];

    const seedWineries = () => Winery.bulkCreate(wineryData, {individualHooks: true});

    module.exports = seedWineries;
