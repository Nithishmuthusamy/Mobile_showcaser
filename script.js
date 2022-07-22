function phone(button1,button2,button3,button4,button5,button6,button7,button8,button9,button0,display,wallpaper_object,screen){
    this.number;
    this.handler=[];
    this.display=display;
    this.create_addeventlistener=function(){
        button1.addEventListener('click',this.fun("1"))
        button2.addEventListener('click',this.fun("2"))
        button3.addEventListener('click',this.fun("3"))
        button4.addEventListener('click',this.fun("4"))
        button5.addEventListener('click',this.fun("5"))
        button6.addEventListener('click',this.fun("6"))
        button7.addEventListener('click',this.fun("7"))
        button8.addEventListener('click',this.fun("8"))
        button9.addEventListener('click',this.fun("9"))
        button0.addEventListener('click',this.fun("0"))
    }
    this.calling=function(display){
        this.display.value='calling.. '+this.number;
        button1.removeEventListener('click',this.handler[1]);
        button2.removeEventListener('click',this.handler[2]);
        button3.removeEventListener('click',this.handler[3]);
        button4.removeEventListener('click',this.handler[4]);
        button5.removeEventListener('click',this.handler[5]);
        button6.removeEventListener('click',this.handler[6]);
        button7.removeEventListener('click',this.handler[7]);
        button8.removeEventListener('click',this.handler[8]);
        button9.removeEventListener('click',this.handler[9]);
        button0.removeEventListener('click',this.handler[0]);
    }
    this.replaceappendchild=function(parent,current_child,replace_child){
        parent.replaceChild(replace_child,current_child);
        }
    this.call_decline=function(parent,current_child,replace_child){
        this.replaceappendchild(parent,current_child,replace_child);
        this.number="";
        this.display.value="";
        if(wallpaper_object===document.getElementsByClassName("wallpaper")[0]){
        button1.addEventListener('click',this.fun("1"))
        button2.addEventListener('click',this.fun("2"))
        button3.addEventListener('click',this.fun("3"))
        button4.addEventListener('click',this.fun("4"))
        button5.addEventListener('click',this.fun("5"))
        button6.addEventListener('click',this.fun("6"))
        button7.addEventListener('click',this.fun("7"))
        button8.addEventListener('click',this.fun("8"))
        button9.addEventListener('click',this.fun("9"))
        button0.addEventListener('click',this.fun("0"))
        }
        console.log(this.display.value);
    }
    this.fun = function( num) {
        this.handler[parseInt(num)] = (event)=> {
        this.number=this.number===undefined?num:this.number+num;
        if(screen.contains(this.display)===false)
            this.createappendchild();
            this.display.value=this.number;
        };
        return this.handler[parseInt(num)];
        };

    this.createappendchild = function(){
        if(wallpaper_object!==null)
            wallpaper_object.remove();
        if(screen.contains(this.display)===false)
            screen.append(this.display);
        }
}
//=====================================Android class============================================================
function android(oneplusimage,cameraiconandroid,phoneiconandroid,messageiconandroid,outerlayerandroid,oldlayer){

    var dialscreen,dialpad,numberrow1,button1,button2,button3,numberrow2,button4,button5,button6,numberrow3,button7,button8,button9,numberrow4,button0,buttondeclineimage,buttoncallimage;

    var outerlayer_new;

    this.displaytesting;
    this.display_android=document.createElement("input");
        this.display_android.type="text";
        this.display_android.setAttribute("class","text_display");

        outerlayer_new=document.createElement("div");

        dialscreen=document.createElement("div");
        dialpad=document.createElement("div");
        element_for_position=document.createElement("div");
        numberrow1=document.createElement("div");
        var button1=document.createElement("button");
        var button2=document.createElement("button");
        var button3=document.createElement("button");
        numberrow2=document.createElement("div");
        var button4=document.createElement("button");
        var button5=document.createElement("button");
        var button6=document.createElement("button");
        numberrow3=document.createElement("div");
        var button7=document.createElement("button");
        var button8=document.createElement("button");
        var button9=document.createElement("button");
        numberrow4=document.createElement("div");
        var buttonimage_call=document.createElement("button");
        buttoncallimage=document.createElement("img");
        var button0=document.createElement("button");
        var buttonimage_decline=document.createElement("button");
        buttondeclineimage=document.createElement("img");
    
        dialscreen.setAttribute("class","dialscreen_android");
        
        dialpad.setAttribute("class","dialpad_android");
     
        
        this.recover_oneplusimage=oneplusimage;
        this.cameraiconandroid=cameraiconandroid;
        this.phoneiconandroid=phoneiconandroid;
        this.messageiconandroid=messageiconandroid;
        phone.call(this,button1,button2,button3,button4,button5,button6,button7,button8,button9,button0,this.display_android,null,dialscreen);
    this.phoneclick=function(outerlayer_class){
        oldlayer.remove();
        this.creatdialpad(outerlayer_class);
    }
    var displaytummy=this.display_android;

    this.creatdialpad=function(outerlayer_class){
        console.log("entered createdialpad");
        outerlayerandroid.append(outerlayer_new);
        outerlayer_new.append(dialscreen);
        outerlayer_new.append(dialpad);
        console.log(outerlayer_class+"0000000000000000000");
        outerlayer_new.setAttribute("class",outerlayer_class)
        dialscreen.append(this.display_android);
        console.log(this.display_android);
        this.displaytesting=this.display_android;
        dialpad.append(element_for_position);
        element_for_position.append(numberrow1);
        element_for_position.append(numberrow2);
        element_for_position.append(numberrow3);
        element_for_position.append(numberrow4);
        numberrow1.append(button1);
        numberrow1.append(button2);
        numberrow1.append(button3);
        numberrow2.append(button4);
        numberrow2.append(button5);
        numberrow2.append(button6);
        numberrow3.append(button7);
        numberrow3.append(button8);
        numberrow3.append(button9);
        buttonimage_call.append(buttoncallimage);
        numberrow4.append(buttonimage_call);
        this.buttoncallimagetesting=buttoncallimage;
        numberrow4.append(button0);
        buttonimage_decline.append(buttondeclineimage);
        numberrow4.append(buttonimage_decline);
        button1.textContent="1";
        button2.textContent="2";
        button3.textContent="3";
        button4.textContent="4";
        button5.textContent="5";
        button6.textContent="6";
        button7.textContent="7";
        button8.textContent="8";
        button9.textContent="9";
        button0.textContent="0";
        element_for_position.setAttribute("class","positioning_div");
        button1.setAttribute("class","button_android");
        button2.setAttribute("class","button_android");
        button3.setAttribute("class","button_android");
        button4.setAttribute("class","button_android");
        button5.setAttribute("class","button_android");
        button6.setAttribute("class","button_android");
        button7.setAttribute("class","button_android");
        button8.setAttribute("class","button_android");
        button9.setAttribute("class","button_android");
        button0.setAttribute("class","button_android");
        buttonimage_call.setAttribute("class","button_android");
        buttonimage_decline.setAttribute("class","button_android");
        buttoncallimage.setAttribute("class","buttoncallimage_android");
        buttondeclineimage.setAttribute("class","buttonimage_android");
        buttoncallimage.src="https://static.vecteezy.com/system/resources/previews/005/755/264/original/call-answer-icon-symbol-green-call-icon-symbol-for-web-app-logo-vector.jpg";
        buttondeclineimage.src="https://flyclipart.com/thumb2/call-denied-denied-denied-folder-icon-with-png-and-vector-format-696185.png";

        this.create_addeventlistener();

        document.getElementsByClassName("buttoncallimage_android")[0].onclick=()=>{
            this.calling(this.displaytesting);
        };
        document.getElementsByClassName("buttonimage_android")[0].onclick=()=>{
            console.log("oneplus decline button clicked");
            this.call_decline(outerlayerandroid,outerlayer_new,oldlayer);
        };
        
    }
    this.cameraclick=function(){
        var camera_app=document.createElement("div");
        var camera_image=document.createElement("img");
        camera_image.src="./image/camera_black_image.jpg";
        camera_app.append(camera_image);
        camera_image.setAttribute('class',"camera_app_image");
        camera_app.setAttribute('class',"camera_layer");
        this.call_decline(outerlayerandroid,oldlayer,camera_app);
        camera_app.onclick=()=>{
            this.call_decline(outerlayerandroid,camera_app,oldlayer);
        };
    }
    this.messageclick=function(){
        var message_app=document.createElement("div");
        var message_image=document.createElement("img");
        message_image.src="./image/meassage_template.jpg";
        message_app.append(message_image);
        message_image.setAttribute('class',"message_app_image");
        message_app.setAttribute('class',"message_layer");
        this.call_decline(outerlayerandroid,oldlayer,message_app);
        message_app.onclick=()=>{
            this.call_decline(outerlayerandroid,message_app,oldlayer);
        };
    }
}
  android.prototype = Object.create(phone.prototype);
  android.prototype.constructor = android;

//======================================Iphone class===========================================================


function iphone(appleimage,cameraiconapple,phoneiconapple,messageiconapple,outerlayerapple,oldlayer){
    android.call(this,appleimage,cameraiconapple,phoneiconapple,messageiconapple,outerlayerapple,oldlayer);
    this.safariclick=function(){
        var safari_app=document.createElement("div");
        var google_image=document.createElement("img");
        google_image.src="./image/google.jpeg";
        safari_app.append(google_image);
        google_image.setAttribute('class',"camera_app_image");
        safari_app.setAttribute('class',"camera_layer");
        this.call_decline(outerlayerapple,oldlayer,safari_app);
        safari_app.onclick=()=>{
            this.call_decline(outerlayerapple,safari_app,oldlayer);
        };
    }
    this.appstoreclick=function(){
        var safari_app=document.createElement("div");
        var google_image=document.createElement("img");
        google_image.src="./image/appstore.jpg";
        safari_app.append(google_image);
        google_image.setAttribute('class',"camera_app_image");
        safari_app.setAttribute('class',"camera_layer");
        this.call_decline(outerlayerapple,oldlayer,safari_app);
        safari_app.onclick=()=>{
            this.call_decline(outerlayerapple,safari_app,oldlayer);
        };
    }
    this.galleryclick=function(){
        var safari_app=document.createElement("div");
        var google_image=document.createElement("img");
        google_image.src="./image/gallery.jpg";
        safari_app.append(google_image);
        google_image.setAttribute('class',"camera_app_image");
        safari_app.setAttribute('class',"camera_layer");
        this.call_decline(outerlayerapple,oldlayer,safari_app);
        safari_app.onclick=()=>{
            this.call_decline(outerlayerapple,safari_app,oldlayer);
        };
    }
}
iphone.prototype = Object.create(android.prototype);
  iphone.prototype.constructor = iphone;


//===================================================Android tab=========================================================



function androidtab(androidtabimage,cameraiconandroidtab,phoneiconandroidtab,messageiconandroidtab,outerlayerandroidtab,oldlayerandroidtab){
    android.call(this,androidtabimage,cameraiconandroidtab,phoneiconandroidtab,messageiconandroidtab,outerlayerandroidtab,oldlayerandroidtab);
    this.cameraclick=function(){
        var camera_app=document.createElement("div");
        var camera_image=document.createElement("img");
        camera_image.src="https://ak.picdn.net/shutterstock/videos/1051984825/thumb/11.jpg";
        camera_app.append(camera_image);
        camera_image.setAttribute('class',"camera_app_image_androidtab");
        camera_app.setAttribute('class',"camera_layer_androidtab");
        this.call_decline(outerlayerandroidtab,oldlayerandroidtab,camera_app);
        camera_app.onclick=()=>{
            this.call_decline(outerlayerandroidtab,camera_app,oldlayerandroidtab);
        };
    }
    this.messageclick=function(){
        var message_app=document.createElement("div");
        var message_image=document.createElement("img");
        message_image.src="./image/androidtab_message_tab.png";
        message_app.append(message_image);
        message_image.setAttribute('class',"message_app_image_androidtab");
        message_app.setAttribute('class',"message_layer_androidtab");
        this.call_decline(outerlayerandroidtab,oldlayerandroidtab,message_app);
        message_app.onclick=()=>{
            this.call_decline(outerlayerandroidtab,message_app,oldlayerandroidtab);
        };
    }
}
androidtab.prototype = Object.create(android.prototype);
  androidtab.prototype.constructor = androidtab;

//===================================basic phone object creation=======================================================

var button1=document.getElementsByClassName("button1")[0];
var button2=document.getElementsByClassName("button2")[0];
var button3=document.getElementsByClassName("button3")[0];
var button4=document.getElementsByClassName("button4")[0];
var button5=document.getElementsByClassName("button5")[0];
var button6=document.getElementsByClassName("button6")[0];
var button7=document.getElementsByClassName("button7")[0];
var button8=document.getElementsByClassName("button8")[0];
var button9=document.getElementsByClassName("button9")[0];
var button0=document.getElementsByClassName("button0")[0];

var wallpaper_object=document.getElementsByClassName("wallpaper")[0];
var display=document.createElement("input");
display.type="text";
display.setAttribute("class","text_display");

var parent=document.getElementsByClassName("screen")[0];
var basic_phone=new phone(button1,button2,button3,button4,button5,button6,button7,button8,button9,button0,display,wallpaper_object,parent);

        basic_phone.create_addeventlistener();

        document.getElementsByClassName("call_button")[0].onclick=()=>basic_phone.calling(basic_phone.display);
        document.getElementsByClassName("call_decline")[0].onclick=()=>basic_phone.call_decline(parent,display,wallpaper_object);


//==============================UpperTab======================================================
var basicphone_reference=document.getElementsByClassName("basic_phone")[0];
var androidphone_reference=document.getElementsByClassName("redmi")[0];
var iphone_reference=document.getElementsByClassName("applephone")[0];
var androidtab_reference=document.getElementsByClassName("androidtab_width")[0];
androidtab_reference.remove();
androidphone_reference.remove();
iphone_reference.remove();
    document.getElementsByClassName("android_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("feature_phone")[0].setAttribute("style","border-color:#f56821;font-weight: bolder;")
    document.getElementsByClassName("iphone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("android_tab")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
//==================================navigation click event================================================
 document.getElementsByClassName("android_phone")[0].onclick=()=>{
    basicphone_reference.remove();
    iphone_reference.remove();
    androidtab_reference.remove();
    document.getElementsByClassName("phone")[0].append(androidphone_reference);

     //==============================Android object phone creation===============================================

    var oneplusimage=document.getElementsByClassName("oneplus_image")[0];
    var cameraiconandroid=document.getElementsByClassName("camera_icon_android")[0];
    var phoneiconandroid=document.getElementsByClassName("phone_icon_android")[0];
    var messageiconandroid=document.getElementsByClassName("message_icon_android")[0];
    var oldlayer=document.getElementsByClassName("outerlayer_redmi")[0]
    var outerlayerandroid=document.getElementsByClassName("outerlayer_width_redmi")[0];

    var oneplus=new android(oneplusimage,cameraiconandroid,phoneiconandroid,messageiconandroid,outerlayerandroid,oldlayer);
    var newlayer_androidtab="outerlayer_new_redmi";

    document.getElementsByClassName("phone_icon_android")[0].onclick=()=>oneplus.phoneclick(newlayer_androidtab);
    document.getElementsByClassName("camera_icon_android")[0].onclick=()=>oneplus.cameraclick();
    document.getElementsByClassName("message_icon_android")[0].onclick=()=>oneplus.messageclick();

    document.getElementsByClassName("android_phone")[0].setAttribute("style","border-color:#f56821;font-weight: bolder;")
    document.getElementsByClassName("feature_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("iphone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("android_tab")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
 }

//==================================Navigation tab click event==================================================== 
 document.getElementsByClassName("feature_phone")[0].onclick=()=>{
    androidphone_reference.remove();
    iphone_reference.remove();
    androidtab_reference.remove();
    document.getElementsByClassName("phone")[0].append(basicphone_reference);

    document.getElementsByClassName("android_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("feature_phone")[0].setAttribute("style","border-color:#f56821;font-weight: bolder;")
    document.getElementsByClassName("iphone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("android_tab")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
 }
 //==================================Navigation tab click event==================================================== 
 document.getElementsByClassName("iphone")[0].onclick=()=>{
    androidphone_reference.remove();
    basicphone_reference.remove();
    androidtab_reference.remove();
    document.getElementsByClassName("phone")[0].append(iphone_reference);
    //==================================Iphone object creation==================================================== 
    var appleimage=document.getElementsByClassName("apple_image")[0];
    var cameraiconapple=document.getElementsByClassName("camera_icon_apple")[0];
    var phoneiconapple=document.getElementsByClassName("phone_icon_apple")[0];
    var messageiconapple=document.getElementsByClassName("message_icon_apple")[0];
    var oldlayer=document.getElementsByClassName("outerlayer_apple")[0]
    var outerlayerapple=document.getElementsByClassName("outerlayer_width_apple")[0];

    var apple=new iphone(appleimage,cameraiconapple,phoneiconapple,messageiconapple,outerlayerapple,oldlayer);
    var newlayer_androidtab="outerlayer_new_redmi";
    document.getElementsByClassName("phone_icon_apple")[0].onclick=()=>apple.phoneclick(newlayer_androidtab);
    document.getElementsByClassName("camera_icon_apple")[0].onclick=()=>apple.cameraclick();
    document.getElementsByClassName("message_icon_apple")[0].onclick=()=>apple.messageclick();
    document.getElementsByClassName("safari_icon_apple")[0].onclick=()=>apple.safariclick();
    document.getElementsByClassName("gallery_icon_apple")[0].onclick=()=>apple.galleryclick();
    document.getElementsByClassName("appstore_icon_apple")[0].onclick=()=>apple.appstoreclick();

    document.getElementsByClassName("android_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("feature_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("iphone")[0].setAttribute("style","border-color:#f56821;font-weight: bolder;")
    document.getElementsByClassName("android_tab")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
 }

//==================================Navigation tab click event==================================================== 
 document.getElementsByClassName("android_tab")[0].onclick=()=>{
    androidphone_reference.remove();
    basicphone_reference.remove();
    iphone_reference.remove();

    document.getElementsByClassName("phone")[0].append(androidtab_reference);
    //==================================Android tab object creation================================================= 
    var androidtabimage=document.getElementsByClassName("wallpaper_androidtab")[0];
    var cameraiconandroidtab=document.getElementsByClassName("camera_icon_androidtab")[0];
    var phoneiconandroidtab=document.getElementsByClassName("phone_icon_androidtab")[0];
    var messageiconandroidtab=document.getElementsByClassName("message_icon_androidtab")[0];
    var oldlayerandroidtab=document.getElementsByClassName("outerlayer_androidtab")[0]
    var outerlayerandroidtab=document.getElementsByClassName("outerlayer_width_androidtab")[0];

    var samsung=new androidtab(androidtabimage,cameraiconandroidtab,phoneiconandroidtab,messageiconandroidtab,outerlayerandroidtab,oldlayerandroidtab);
    var newlayer_androidtab="outerlayer_new_width_androidtab";
    document.getElementsByClassName("phone_icon_androidtab")[0].onclick=()=>samsung.phoneclick(newlayer_androidtab);
    document.getElementsByClassName("camera_icon_androidtab")[0].onclick=()=>samsung.cameraclick();
    document.getElementsByClassName("message_icon_androidtab")[0].onclick=()=>samsung.messageclick();

    document.getElementsByClassName("android_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("feature_phone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("iphone")[0].setAttribute("style","border-color:#0f0f0f;font-weight: 400px;")
    document.getElementsByClassName("android_tab")[0].setAttribute("style","border-color:#f56821;font-weight: bolder;")
 }

//===========================================================================================================================
