//this class should also contain a geographic coordinate to determine
//distance between any two activities


class Activity{
    constructor(title, address, img, subtitle, body, type, lat, long, food, time){
        this.title = title;
        this.address = address;
        this.img = img;
        this.subtitle = subtitle;
        this.body = body;
        this.type = type;
        this.lat = lat;
        this.long = long;
        this.food = food //this should be true or false
        this.time = time //this should be an array with values of to 'm' (morning) 'a' (afternoon) or 'e' (evening)
        if (this.time == null){   //this provides a default value
            this.time = ['m', 'a', 'e'];
        }
    }
}

export default Activity;