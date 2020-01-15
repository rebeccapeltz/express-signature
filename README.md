# Signed Cloudinary Widgets

## Media Library Widget

create .env containing values from Console Dashboard
```
CLOUD_NAME=''
USERNAME=''
API_SECRET=''
```

## Run the server
The server is defined in /bin/www.  
 ```    
$ DEBUG=express-sig:* npm start
```
1577646371222
"b2ab0a00c068cbf26440275d6cae70568991a8c4e4ae5fb28cecff54f4364c4b"

sample
1518601863
"cloud_name=my_company&timestamp=1518601863&username=jane@mycompany.comabcd"
cloud_name=picturelcoud7&timestamp=1577646619&username=rebeccapeltz@gmail.com0gfBB6thMQGvjos7Eo-tNjLcyVk

401 sig
4382150fa86c8fdbbc858ef415fa5a61264ea52a0bf149d28b3afb16790fc2e6

Login failed Invalid Signature 4382150fa86c8fdbbc858ef415fa5a61264ea52a0bf149d28b3afb16790fc2e6. String to sign - 'cloud_name=picturecloud7&timestamp=1577648996984&username=rebeccapeltz@gmail.com'.

worked
	/console/media_library/cms?api_key=944887911222188&cloud_name=picturecloud7&ml_id=ml_0&new_cms=true&pmHost=http://127.0.0.1:5500&signature=17ad37fa48a83d4e965ae705002047c8648edef0bb22411abdc1c55d63545b7d&timestamp=1577649656713&username=rebeccapeltz%40gmail.com

no worked
    /console/media_library/cms?api_key=944887911222188&cloud_name=picturecloud7&ml_id=ml_0&new_cms=true&pmHost=http://localhost:3000&signature=2abde614052ea8d4160cff6659a1d9c35ab9aa42562f69670cd8ec91545b1276&timestamp=1577650260879&username=rebeccapeltz%40gmail.com

worked
    /console/media_library/cms?api_key=944887911222188&cloud_name=picturecloud7&ml_id=ml_0&new_cms=true&pmHost=http://127.0.0.1:5500&signature=b2a6a6709319ae5bece6466dd22f2b6276fd808280e0c25f4b628edcff6f8e98&timestamp=1577650357255&username=rebeccapeltz%40gmail.com


