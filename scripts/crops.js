function correct_grow_time(crop_id, days, rate){
    console.log(crop_id);
    console.log("rate: "+ rate);
    
    const cropsTable = {
        "amaranth": function(){
            return days;
        },
        "ancient_fruit": function(){
            return days
        },
        "artichoke": function(){
            return days
        },
        "beet": function(){
            return days
        },
        "blue_jazz": function(){
            return days
        },
        "blueberry": function(){
            return days
        },
        "bok_choy": function(){
            return days
        },
        "cactus_fruit": function(){
            return days
        },
        "cauliflower": function(){
            return days
        },
        "coffee_bean": function(){
            return days
        },
        "corn": function(){
            return days
        },
        "cranberries": function(){
            return days
        },
        "eggplant": function(){
            return days
        },
        "fairy_rose": function(){
            return days
        },
        "garlic": function(){
            return days
        },
        "grape": function(){
            return days
        },
        "green_bean": function(){
            return days
        },
        "hops": function(){
            return days
        },
        "hot_pepper": function(){
            return days
        },
        "kale": function(){
            return days
        },
        "melon": function(){
            return days
        },
        "parsnip": function(){
            return days
        },
        "poppy": function(){
            return days
        },
        "potato": function(){
            return days
        },
        "pumpkin": function(){
            if (rate == 0.35) {
                return days + 1;
            }
            return days
        },
        "radish": function(){
            return days
        },
        "red_cabbage": function(){
            return days
        },
        "rhubard": function(){
            return days
        },
        "starfruit": function(){
            return days
        },
        "strawberry": function(){
            return days
        },
        "summer_spangle": function(){
            return days
        },
        "sunflower": function(){
            return days
        },
        "sweet_gem_berry": function(){
            return days
        },
        "tomato": function(){
            return days
        },
        "tulip": function(){
            return days
        },
        "unmilled_rice": function(){
            return days
        },
        "wheat": function(){
            return days
        },
        "yam": function(){
            return days
        },
        
    }
    
    return cropsTable[crop_id]();
}