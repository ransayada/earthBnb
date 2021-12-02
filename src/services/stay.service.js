import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// const axios = require('axios');
const KEY = 'stayDB';
// const STAY_URL = '/api/stay/'
// import Axios from 'axios'
// var axios = Axios.create({
//     withCredentials: true
// })

// const TOY_URL = '//localhost:3030/api/stay/'

// const TOY_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/stay'
//     : '//localhost:3030/api/stay';

export const stayService = {
    query,
    getById,
    remove,
    save,
    getEmptyStay
}

// const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]


_createStays()

// TODO: support paging and filtering and sorting
async function query() {
    return storageService.query(KEY)
        //  return axios.get(TOY_URL).then(res => res.data)
        // const res = await axios.get(TOY_URL)
        // return res.data
}

async function getById(id) {
    return storageService.get(KEY, id)
        // return axios.get(TOY_URL + id).then(res => res.data)
        // const res = await axios.get(TOY_URL + id)
        // return res.data
}

async function remove(id) {
    return storageService.remove(KEY, id)
        // return axios.delete(TOY_URL + id).then(res => res.data)
        // const res = await axios.delete(TOY_URL + id)
        // return res.data
}

async function save(stay) {
    const savedStay = (stay._id) ? storageService.put(KEY, stay) : storageService.post(KEY, stay)
    return savedStay;
    // if (stay._id) {
    //     console.log('i am here');
    //     // return axios.put(TOY_URL, stay).then(res => res.data)
    //     // const res = await axios.put(TOY_URL + stay._id, stay)

    //     return res.data
    // } else {
    //     // return axios.post(TOY_URL, stay).then(res => res.data)
    //     // const res = await axios.post(TOY_URL, stay)
    //     // console.log(res.data);
    //     return res.data
    // }
}

function getEmptyStay(name = '', price = 100, ) {
    return {
        _id: '',
        name,
        price,
        imgUrls: [],
        summary: '',
        createdAt: null,
        reviews: [],
        propertyType: '',
        capacity: 0,
        amenities: [],
        host: {
            _id: "",
            fullName: "",
            imgUrl: "",
        },
        loc: {
            country: "",
            countryCode: "",
            address: "",
            lat: 0,
            lng: 0
        },

    }
}


// Create Test Data:
function _createStays() {
    var stays = JSON.parse(localStorage.getItem(KEY))
    if (!stays || !stays.length) {
        stays = [
            // _createStay('Buzz'),
            // _createStay('woodie'),
            // _createStay('tmnt'),
            // _createStay('tel aviv flat'),
            // _createStay('villa of love'),
            // _createStay('leonardo motel'),
            // _createStay('paris duplex'),
            // _createStay('stam house'),
            // _createStay('dirot for sale'),
            // _createStay('alarm clock for bro'),
            // _createStay('corona bidod house'),
            // _createStay('dark house'),
            // _createStay('mabokh'),
            // _createStay('dubai hotel'),
            //telaviv
            _createStay2('inFront of the Beach house', { country: 'Israel', city: 'Tel-Aviv' }, 635, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442037/sprint4_staysPics/telAviv/1/80593570-df24-400c-aec8-c7c64099f650_ytdt0f.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442037/sprint4_staysPics/telAviv/1/e6f04176-316b-40cb-97cf-b236d13cca3a_ueggfx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442037/sprint4_staysPics/telAviv/1/46116d12-da7a-4473-9ad8-2f020643ab2d_z8bbsx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442037/sprint4_staysPics/telAviv/1/ed89a868-e41f-4c6e-9d48-646f86b56438_qwy9qd.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442037/sprint4_staysPics/telAviv/1/ed89a868-e41f-4c6e-9d48-646f86b56438_qwy9qd.jpg'], 'New Building front the Beach next the Royal Beach Hotel. Apartment freshly decorated with 2 bedrooms and 2 bathrooms. There is a fantastic sea view. The Kitchen is full equipped. There is a Lobby with a security 24/7. You will get a private parking. Good TV and WIFI. AC works perfectly. Washing machine & dryer.', [], 'apartment', 5, [], {}),
            _createStay2('Luxurious Apartment With Panoramic Sea View', { country: 'Israel', city: 'Tel-Aviv' }, 306, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442056/sprint4_staysPics/telAviv/2/44d0f05e-9886-4383-9e12-7167bcf2542f_emlxlw.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442056/sprint4_staysPics/telAviv/2/ccc5a053-627e-45d9-86b6-a6bdd0e33a62_zhwvzs.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442056/sprint4_staysPics/telAviv/2/b3b5b625-9c79-4bae-9077-cacc58232cf0_tz2ufx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442056/sprint4_staysPics/telAviv/2/6219d54c-37d1-4631-a2d5-09beff762a91_hniey9.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442056/sprint4_staysPics/telAviv/2/733d0983-abec-45ba-9aeb-eba9bf86d952_yiytkd.jpg'], 'My place is close to family-friendly activities, nightlife, and the city center. You’ll love my place because of the ambiance, the neighborhood, and the light. My place is good for couples and families (with kids).', [], 'apartment', 5, [], {}),
            _createStay2('Stunning sea view penthouse with infinity pool', { country: 'Israel', city: 'Tel-Aviv' }, 559, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442076/sprint4_staysPics/telAviv/3/2cf0dd01-cb8e-4257-b0e1-3a20b2651e56_yfalqa.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442076/sprint4_staysPics/telAviv/3/b8b6e7a2-71d4-4711-b28c-c18845433e5f_rggzpm.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442076/sprint4_staysPics/telAviv/3/56bfa190-b7ea-434d-89b5-78c739319f6c_lzvjfu.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442076/sprint4_staysPics/telAviv/3/8d92d04f-57bc-42b1-89e3-934fc93e905a_pkt1n9.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442076/sprint4_staysPics/telAviv/3/c0b31923-dbf2-4b6c-8d27-62ea307fdcd6_ja6x0i.jpg'], 'Luxury Beach front Triplex with stunning sea view in Prime location!!! Two minutes walking to the beach..! Fully equipped, 3 Master Bedrooms, Two Terrace, Accommodate up to 10 guests and is divided in 3 levels, Which have breathtaking uninterrupted views to the sea and the beach. Two Parking space and privet elevator.', [], 'apartment', 5, [], {}),
            _createStay2('Dizengoff luxury Boutique Apartment', { country: 'Israel', city: 'Tel-Aviv' }, 300, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442100/sprint4_staysPics/telAviv/4/8c2cedec-1d3c-4e4d-af8b-e124050e21fe_gr5qjd.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442099/sprint4_staysPics/telAviv/4/1d6d3f99-a137-4897-a365-198f6bc0439e_loecy1.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442099/sprint4_staysPics/telAviv/4/ee3b9432-5c3c-4a9c-a966-3330b0ffc572_hisyhu.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442099/sprint4_staysPics/telAviv/4/e1a86dcf-2432-4d59-af23-2475bf4e521b_dusdvi.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442099/sprint4_staysPics/telAviv/4/e1a86dcf-2432-4d59-af23-2475bf4e521b_dusdvi.jpg'], 'Boutique Apartment in the center of TEL AVIV, Israels liveliest city. The apartment is located in a secure building in the quiet "Old North" neighborhood.', [], 'apartment', 5, [], {}),
            _createStay2('AMAZING LUXURY 4 BEDROOM APT SEE VIEW', { country: 'Israel', city: 'Tel-Aviv' }, 600, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442128/sprint4_staysPics/telAviv/5/e537e5ed-127f-4235-bd38-abb9823eec8d_pgdatd.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442128/sprint4_staysPics/telAviv/5/ca4b15ba-e18f-4fd5-a8e7-aec263169c5d_us1xvb.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442127/sprint4_staysPics/telAviv/5/259da9e8-b56e-4d08-a7f8-d482fb1ab0e6_kruwcf.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442127/sprint4_staysPics/telAviv/5/23ad89bd-ced8-42ce-8fb7-1d5d5ae29910_texowx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442127/sprint4_staysPics/telAviv/5/f8c77d90-bfda-49be-9d4d-bac59719c33b_hr5e9l.jpg'], 'Enjoy spectacular cityscapes from the private sun balcony of this sixteenth floor luxury tower right in the heart of Tel Aviv’s best and oldest neighborhood, Neve Tsedek. This stunning 4 bedroom, 2 bathroom apartment offers guests ideal location and sumptuous decor. As it sleeps up to 8 guests comfortably, it’s ideal for families or groups of friends seeking refined lodging in the heart of the city. It’s the perfect place to unwind after a long day of sightseeing in Tel Aviv.', [], 'apartment', 5, [], {}),
            _createStay2('Beachfront Penthouse One Hundred Sqm In Old Jaffa', { country: 'Israel', city: 'Tel-Aviv' }, 667, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442144/sprint4_staysPics/telAviv/6/fc6d6109-9a8a-4e36-b9fb-7354841675fc_vkwdc2.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442144/sprint4_staysPics/telAviv/6/f58a2ea0-5e5f-40c6-ba70-f1d29d3ed470_adrdtj.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442144/sprint4_staysPics/telAviv/6/f2e92f27-8396-481c-8b86-7d64312baf50_q1cxgd.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442144/sprint4_staysPics/telAviv/6/561ee0ac-8b5f-4895-9315-6cb15fbd47f2_kcccjb.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442144/sprint4_staysPics/telAviv/6/472a477d-ea6c-4eaf-8b91-d438d5c60b6e_xjqxrr.jpg'], 'Listen to waves crashing to shore while sunbathing on the terrace, then return in the evening for a sunset BBQ. This fully modernized space within 19th-century stone walls is decorated with local ceramic tiles and a fresh blue-and-white color scheme.', [], 'apartment', 5, [], {}),
            //paris
            _createStay2('central safe and quiet marsh/goblins', { country: 'France', city: 'Paris' }, 408, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442198/sprint4_staysPics/paris/1/9388dafa-65dc-47ec-b0ed-d42c5ba8f01b_od2zap.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442197/sprint4_staysPics/paris/1/21e3e4ff-a465-404b-97c3-57afcfeaacb8_bokjcj.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442197/sprint4_staysPics/paris/1/a1b49537-3558-4b93-9add-2ffb0204d3ea_swrlmj.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442197/sprint4_staysPics/paris/1/394c6726-0b5e-4b98-bcbe-ceaf93de0fd2_sxjejb.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442197/sprint4_staysPics/paris/1/79d5bdb0-9dd5-4d7e-a056-24815d1141d1_rtcolt.jpg'], 'My place is close to Le Marais and Musée National Picasso. You all love my place because of the comfort, the kitchen, the high ceilings, the location and the view. My place is good for couples, solo, and business travellers.', [], 'apartment', 5, [], {}),
            _createStay2('Sky penthouse near Eiffel tower', { country: 'France', city: 'Paris' }, 227, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442216/sprint4_staysPics/paris/2/fc761a5d-dc5c-4ba4-a445-a6ad28a48a3e_xzpoak.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442216/sprint4_staysPics/paris/2/37c0e266-e4ec-46a3-9e29-02ef2da76b44_x8nibg.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442215/sprint4_staysPics/paris/2/3d51f920-00cd-435a-b37a-10195c3806bb_eg6xc5.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442215/sprint4_staysPics/paris/2/e343f435-4f57-47ee-89cd-110dcea29234_nrknpp.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442215/sprint4_staysPics/paris/2/8208700e-b729-438d-b4fc-265b3f95ac12_ue2yxj.jpg'], 'Beautiful modern and fully renovated apartment of 35m2. It is located on the top floor with a terrace of 16m2 and a spectacular view of the Eiffel Tower. The private room has an independent entrance.', [], 'apartment', 5, [], {}),
            _createStay2('Prestige of Louvre and Tuileries', { country: 'France', city: 'Paris' }, 302, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442231/sprint4_staysPics/paris/3/46d38496-3ecd-43d8-9e0b-312967c73837_d6futb.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442231/sprint4_staysPics/paris/3/71fb7902-56be-4ed2-9826-53d6dec1d044_odajke.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442231/sprint4_staysPics/paris/3/5ea6313f-5048-4366-bc2a-a70beeecba7b_epmahn.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442231/sprint4_staysPics/paris/3/2df33c42-29ed-418f-a494-dbbc2b39ca02_y355wv.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442231/sprint4_staysPics/paris/3/0b2eb6f4-85b9-41df-b247-7f859e7ae747_cwji3d.jpg'], 'Luxurious and light-filled apartment on the 6th floor on Rue de Rivoli, air-conditioned, Wi-Fi. 3 balconies with exceptional views of the Tuileries and Rivoli. Sleeps 4.', [], 'apartment', 5, [], {}),
            _createStay2('LOFT SAINT-HONORÉ ', { country: 'France', city: 'Paris' }, 452, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442242/sprint4_staysPics/paris/4/1640b246-77b5-4e06-956b-fc425cfd2df5_mrs35q.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442242/sprint4_staysPics/paris/4/b85ae89c-308d-46e6-abe4-bcdd4c59620e_tnpz9h.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442242/sprint4_staysPics/paris/4/b4e79b4f-fec6-4e91-8cdb-797c0adf7a8a_kn9ido.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442242/sprint4_staysPics/paris/4/468451a8-cf21-47cc-b224-640acdb9176a_dpun5s.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442242/sprint4_staysPics/paris/4/012bd591-7b6a-4bb4-a744-ce8381d920c3_faith9.jpg'], 'Exceptional atypical loft of 75m2, with 2 bedrooms, a shower room. This spacious and modern loft has a 10m2 terrace with a small garden. Located in the heart of Paris on rue Saint-Honoré. You will be surrounded by chic boutiques such as Chanel, Christian Dior and Louis Vuitton (at the bottom of the building). You can also find the largest squares of Paris nearbly such as Concorde (6 mins walk), Madeleine (6 mins walk) Vendôme (4 mins walk) and as Place or the Louvre (13 mins walk).', [], 'apartment', 5, [], {}),
            _createStay2('My House - Louvre - 2-room apartment - Deluxe', { country: 'France', city: 'Paris' }, 415, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442256/sprint4_staysPics/paris/5/fb099f7f-107c-41fc-84ee-c325af6d95e5_fhtdli.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442256/sprint4_staysPics/paris/5/8f5d1324-bed1-448e-8e99-3e558179b634_q29ypo.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442255/sprint4_staysPics/paris/5/a857b912-128f-4ca5-9b9b-19111cbd8eca_m35mzx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442255/sprint4_staysPics/paris/5/4159b247-461d-4653-8a6e-6f9225b4d4f9_wicqa8.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442255/sprint4_staysPics/paris/5/30c5f6ab-2f41-4474-b1ee-13c5b84d47fb_d77xeu.jpg'], 'Renovated in the spirit of the 50s of the food shops of the old Halles of Paris, with a touch of 70s pop-joyous, this 2 room apartment will offer you the perfect mix of modern comfort and vintage atmosphere: the kitchen takes the codes of formica and integrates all the desired equipment, the living room composed of references of the current design expertly mixed will ensure you conviviality and relaxation, the dining area will allow you to make a gourmet or studious break or both!', [], 'apartment', 5, [], {}),
            _createStay2('Unique apartment on the banks of the Seine', { country: 'France', city: 'Paris' }, 295, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442270/sprint4_staysPics/paris/6/e4f84e1e-c4c3-490a-85c8-7e5a138dcb6f_bh6poj.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442270/sprint4_staysPics/paris/6/36684e85-50a4-46e0-b13b-a1324d746533_mg9ynz.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442269/sprint4_staysPics/paris/6/906ef496-26c0-44cc-80dc-f793476e31e6_jxz2n2.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442269/sprint4_staysPics/paris/6/3e53b559-8898-42a7-94a4-0ba70f0d6e70_evy7ea.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442269/sprint4_staysPics/paris/6/2b31152d-6448-4d02-adfd-bd285346404a_fw0gaa.jpg'], 'Welcome to my refurbished apartment in front of Notre Dame. Located on the banks of the Seine, it is ideal for exploring the city of light. The apartment will seduce you with its design and typical Parisian decoration.', [], 'apartment', 5, [], {}),
            //newYork
            // _createStay2('', { country: 'US', city: 'New-York' }, , ['', '', '', '', ''], '', [], 'apartment', 5, [], {}),
            //london
            // _createStay2('', { country: 'GB', city: 'London' }, , ['', '', '', '', ''], '', [], 'apartment', 5, [], {}),

        ]
        localStorage.setItem(KEY, JSON.stringify(stays))
    }
    return stays;
}

// function _createStay(name) {
//     const stay = getEmptyStay(name, utilService.getRandomInt(80, 300))
//     stay._id = utilService.makeId()
//     stay.reviews.push({ txt: 'good stay' })
//     stay.createdAt = Date.now();
//     stay.imgUrls = ['../assets/logo.png', '../assets/logo.png', '../assets/logo.png', '../assets/logo.png', '../assets/logo.png']
//     return stay
// }

function _createStay2(name, loc, price, imgUrls, summary, reviews, propertyType, capacity, amenities, host) {
    const stay = getEmptyStay(name, price)
    stay._id = utilService.makeId()
    stay.loc = loc
    stay.imgUrls = imgUrls
    stay.summary = summary
    stay.reviews = reviews
    stay.propertyType = propertyType
    stay.capacity = capacity
    stay.amenities = amenities
    stay.host = host
    stay.createdAt = Date.now();
    return stay
}