//this class should also contain a geographic coordinate to determine
//distance between any two activities


class Activity{
    constructor(title, address, img, subtitle, body, type, lat, long, food){
        this.title = title;
        this.address = address;
        this.img = img;
        this.subtitle = subtitle;
        this.body = body;
        this.type = type;
        this.lat = lat;
        this.long = long;
        this.food = food //this should be true or false
    }
}

export default Activity;