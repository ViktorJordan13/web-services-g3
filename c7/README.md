### Povtoruvanje 

req.query -? ?carId=3  //toa sto go pisuvame direkno vo URL posle prasalnikot (?)

req.body -? { "email": "test@gmail.com", "password": 123, users[]...} // JSON objekt

req.params -> :id // toa vi se parametrite sto vie samite im go davate imeto posle :

req.auth -> express-jwt koe raboti so jsonwebtoken sharing secret //koga pravite ruti sto ocekuvaat da im pratite token(da imate vo Headers vo POSTMAN tokenite) 

req.files -> express-fileupload //koga rabotite so fajlovi