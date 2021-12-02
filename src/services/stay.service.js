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
async function query(filterBy = {}) {
    console.log(filterBy);
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
            _createStay2('The Penthouse/Bryant Park', { country: 'US', city: 'New-York' }, 550, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442313/sprint4_staysPics/newYork/1/fe97a4db-e382-45b0-9348-a7a3685c5e38_ny5zeq.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442313/sprint4_staysPics/newYork/1/fd1c0e19-c25f-43fb-9bb9-2df68b544800_kijzgp.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442312/sprint4_staysPics/newYork/1/f3efb163-45a5-4c3e-9726-e8a573961dd1_pwhdir.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442312/sprint4_staysPics/newYork/1/e18cb6a6-3939-464f-bf0c-e7446c816930_j95l8y.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442312/sprint4_staysPics/newYork/1/4dbd9ba6-17ef-40da-b780-ed0bcc260ca4_sqdsrr.jpg'], 'This private penthouse is a slice of heaven! You all be surrounded by luxurious 16-foot ceiling and stunning staircases. The bedroom has comfortable queen sized bed designed for better sleep, with a walk-in shower for two and jacuzzi tub. The living room has a large open space crafted with elegant furniture and flat screen smart TV. The kitchen is equipped with all necessary appliances, it has a dining table that fits up to 6 people and an extra half bath for your guests.', [], 'apartment', 5, [], {}),
            _createStay2('Brownstone Studio off Central Park!', { country: 'US', city: 'New-York' }, 245, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442326/sprint4_staysPics/newYork/2/3c2e2656_original_fglfyc.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442325/sprint4_staysPics/newYork/2/f1c5856e_original_bw03fv.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442325/sprint4_staysPics/newYork/2/c604e1c1_original_jzqpbx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442325/sprint4_staysPics/newYork/2/76a7a1ca_original_sfwrqu.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442325/sprint4_staysPics/newYork/2/7d46e1b1_original_ghjiku.jpg'], 'Special ‘By The Month’ Pricing Includes ALL!!! Right next to Central Park. June 2021 Please send message to inquire about availability and rate!', [], 'apartment', 5, [], {}),
            _createStay2('Hudson Yards Penthouse 2bedroom Penthouse!', { country: 'US', city: 'New-York' }, 1299, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442336/sprint4_staysPics/newYork/3/fb1e4a3a-b366-469f-9ede-102f411b6111_cqbibx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442336/sprint4_staysPics/newYork/3/555455a0-4db8-44cb-9e86-629b76943c11_mmqswx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442336/sprint4_staysPics/newYork/3/5c8940bc-9c25-4e33-88ef-e4fb68c80aba_y6bppj.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442336/sprint4_staysPics/newYork/3/2a5789c6-efc9-4710-af26-fc8f88a2f8ff_cjquuk.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442336/sprint4_staysPics/newYork/3/0ed5c082-14ba-4b3d-9957-b70cb1805a63_h225fy.jpg'], 'Entire condominium (condo) hosted by New York', [], 'apartment', 5, [], {}),
            _createStay2('Manhattan Executive Suite', { country: 'US', city: 'New-York' }, 999, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442347/sprint4_staysPics/newYork/4/fe5e82bc-5e3c-4d18-ae0c-99df5bffd5e5_pvhyg7.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442347/sprint4_staysPics/newYork/4/f1c671b1-b8f2-4e95-a2e9-a61fd115532c_serfix.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442347/sprint4_staysPics/newYork/4/d69092ff-a73c-49d9-a4a3-957401f5029c_gjb3hp.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442347/sprint4_staysPics/newYork/4/69e48b97-3720-46e5-a8f3-e753f75d1cc7_zcv8c5.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442347/sprint4_staysPics/newYork/4/1bda0f82-ebd7-46db-a1ef-4c0a428d7959_ggkmxt.jpg'], 'This exotic Manhattan condo boasts glowing views of the New York skyline. Top-to-bottom daring colors with a taste equivalent to black caviar, and a wide-angle shot of the Empire State Building and H&M Skyscraper, where you can watch the New Years Ball Drop from the comfort of the living room and guest bedroom.', [], 'apartment', 5, [], {}),
            _createStay2('Stylish Large SPARKLING Gramercy Loft!', { country: 'US', city: 'New-York' }, 300, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442368/sprint4_staysPics/newYork/5/178504b9-9177-43dc-812e-25b775a9d91a_omvm0f.png', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442366/sprint4_staysPics/newYork/5/59b42a86-c3a0-43e8-93ae-722d3d47af0b_zokyiq.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442366/sprint4_staysPics/newYork/5/f6e83369-4e29-4b51-bdb9-15eaefa63d67_fqhyft.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442366/sprint4_staysPics/newYork/5/d79beb16-65de-4b4e-a8c2-4f2f2e3e89e7_xg6vfr.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442365/sprint4_staysPics/newYork/5/285758b1-e91e-4502-9bad-ba165f13ca65_kerhet.jpg'], 'Clean and stylish light-filled 1BR loft apartment in a small historic building, complete with a sweet little resident cat (^_^). High ceilings, mellow vibe, great for WFH. Prime location, near Flatiron and Madison Park. Featured in The Plum Guide & The Guardian.', [], 'apartment', 5, [], {}),
            _createStay2('Authentic and Open Tribeca Loft', { country: 'US', city: 'New-York' }, 350, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442378/sprint4_staysPics/newYork/6/a5434256-1567-42bb-8ca5-19ff06f3bf15_sznz1f.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442378/sprint4_staysPics/newYork/6/67fe439a-d3bc-4e16-816b-1dce82696e2e_ico7br.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442378/sprint4_staysPics/newYork/6/43f97c55-691b-40d5-8809-9704ee4eaded_qioq1n.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442378/sprint4_staysPics/newYork/6/40d09f7d-5a34-404d-b666-093a2b22050b_bgp8wv.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442378/sprint4_staysPics/newYork/6/13f1b80d-c6d3-4d81-9464-c9b5e87c59af_ackuvz.jpg'], 'Bright and open Tribeca loft with an extremely spacious 1500 square feet. Featuring a full chefs kitchen, huge living area with Smart TV, soaring ceilings and luxurious bedding. On a quiet street in the center of it all, close to SoHo, Little Italy, Chinatown, World Trade Center, and all Subway lines.', [], 'apartment', 5, [], {}),
            //london
            _createStay2('Stunning Shoreditch Loft Conversion + Movie Screen', { country: 'GB', city: 'London' }, 898, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442426/sprint4_staysPics/london/1/5a71b408-da07-4fd5-b06c-9a021e911b34_dnppps.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442426/sprint4_staysPics/london/1/b0fa86bd-45a2-442e-9cae-dd92e2861137_midvx5.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442426/sprint4_staysPics/london/1/28674585-af4f-4480-aefb-64781b33b1af_v9qzlh.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442426/sprint4_staysPics/london/1/9380d531-d3b4-43e8-9079-d63d296fb588_ngynsd.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442426/sprint4_staysPics/london/1/3468f0b4-3099-41d9-adb7-b98dbd757a40_qva9uw.jpg'], 'The largest one bedroom apartment in Shoreditch. This unique loft conversion is on a quiet road in the centre of Shoreditch with easy access to everything. The apartment has a piano, pinball machine and a drop down movie screen with everything set up. I only rent to individuals or couples and you must have a positive review to be considered. All guests are looked after by Rosie or Debbie and on hand during your stay if you need any help with anything.', [], 'apartment', 5, [], {}),
            _createStay2('Fabulous Leicester Sq 1BR - Netflix & Nespresso', { country: 'GB', city: 'London' }, 539, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442439/sprint4_staysPics/london/2/ecf5f700-fcb9-4434-a67f-8ac43011d1fc_tb23sa.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442439/sprint4_staysPics/london/2/152195fd-186b-47d3-8651-057961b4588d_ykj2lz.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442439/sprint4_staysPics/london/2/7364ee14-86f0-49d9-b5b7-b2dde82763a9_xas4pg.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442439/sprint4_staysPics/london/2/4b586f0f-d88d-40ba-8b31-41eb582a1ca0_vd2brw.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442439/sprint4_staysPics/london/2/03ce77fb-a646-4fec-a865-fc7297322d87_gdj9gq.jpg'], 'Fabulous Leicester Sq 1BR - Netflix & Nespresso', [], 'apartment', 5, [], {}),
            _createStay2('Professionally Serviced Spacious One Bed Apartment', { country: 'GB', city: 'London' }, 394, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442452/sprint4_staysPics/london/3/d1bf5ef8-3b3d-467e-b63c-28d8716eb07a_ielwud.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442451/sprint4_staysPics/london/3/c3ecee07-0dd4-4fec-8901-c37a9696cbda_r86qmt.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442451/sprint4_staysPics/london/3/b315a687-f76c-4491-ab02-c8876f9de709_mkenu7.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442451/sprint4_staysPics/london/3/9d8f4a4c-20f4-4858-9fc0-87271d984498_lgbkr1.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442451/sprint4_staysPics/london/3/a248927e-26ce-4a23-abb0-231a5a08892d_zivzhy.jpg'], 'The Rosebery aparthotel is a beautifully restored Victorian red brick building with 58 luxurious suites, with Farringdon and Chancery Lane tube stations only a five minute walk away. The Rosebery’s suites are designed and furnished with fully fitted kitchens, beautiful bathrooms and sumptuous beds; coupled with our personalised and flexible service, we establish a level of comfort, convenience and attention to detail that is the hallmark of our family-run serviced apartments.', [], 'apartment', 5, [], {}),
            _createStay2('Rooftop Penthouse in Victoria station', { country: 'GB', city: 'London' }, 1131, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442462/sprint4_staysPics/london/4/32526163-246b-40af-8c37-b37f9f77fe69_hf3tpw.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442462/sprint4_staysPics/london/4/315e3df5-b422-47ce-98b1-3df086a500b0_xhf59i.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442462/sprint4_staysPics/london/4/78e1fd41-2fca-4195-a733-ee354a696a38_aqgjog.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442462/sprint4_staysPics/london/4/54ab4000-87c7-42d4-808e-3e5132832c35_douyjh.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442462/sprint4_staysPics/london/4/6f2b60b1-b093-473e-8991-2bb9834e5e99_ffkvdt.jpg'], '160sqm Penthouse in central London (In front of Victoria station). 80sqm panoramic rooftop terrace with BBQ, High speed fibre broadband, AV system in every room, Two master bedrooms, Two master bathrooms, Two walk-in closets, And many more', [], 'apartment', 5, [], {}),
            _createStay2('Chill Oxford Street 2BR - Netflix & Natural Light', { country: 'GB', city: 'London' }, 1061, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442475/sprint4_staysPics/london/5/ad90375a-6769-4121-a6ed-058271185506_fxbahy.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442475/sprint4_staysPics/london/5/a6aa6501-7af1-4326-bc24-d989303ef925_gg9tvc.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442475/sprint4_staysPics/london/5/8355db61-632c-4ec7-8538-d025a20ef5ab_y6qait.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442475/sprint4_staysPics/london/5/4071eeef-613e-4f91-a21f-fe911c353d39_nedgqx.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442475/sprint4_staysPics/london/5/2f7038a0-47a5-4e35-a61a-35d3d403cbb6_slqtdl.jpg'], 'The expansive apartment has two bedrooms with huge beds (super king and king) and ensuite bathrooms, ultra-fast WIFI, smart TVs, Netflix, Nespresso and all the comforts you would expect in a home away from home.', [], 'apartment', 5, [], {}),
            _createStay2('Stunning 2 Bed Duplex Flat in Central London', { country: 'GB', city: 'London' }, 619, ['https://res.cloudinary.com/sprint4rad/image/upload/v1638442490/sprint4_staysPics/london/6/dfbad59b-2731-4108-a093-8eead4fd5c51_e1jyfy.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442489/sprint4_staysPics/london/6/47aca4ba-ba49-42fe-b000-9450a03db1c1_pf4voz.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442489/sprint4_staysPics/london/6/4fde6f0b-e302-41a6-b790-7a45bd592f5d_e45x0u.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442489/sprint4_staysPics/london/6/c09d6497-2d11-411f-aaf4-5c2e0c910bae_ktyuiq.jpg', 'https://res.cloudinary.com/sprint4rad/image/upload/v1638442489/sprint4_staysPics/london/6/4e54feb3-817c-4cab-b1f7-543544b6e901_fll88y.jpg'], 'A beautiful, tranquil flat given its central location, having the benefit of the large square with its beautifully maintained formal shared garden.', [], 'apartment', 5, [], {}),

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