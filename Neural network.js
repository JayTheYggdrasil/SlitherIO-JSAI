function net(Inum){
    this.layers=[this.CreateInputs()]

    this.CreateInputs=function(){
        this.tempInputs=[]
        for(i=0;i<Inum;i++){
            this.tempInputs.push(new input(i))
        }
    }

    this.newLayer=function(Ncount){
        this.tempLayer=[]
        for(a=0;a<Ncount;a++){
            this.tempLayer.push(new neuron())
        }
        this.layers.push(this.tempLayer)
    }

    this.eval=function(Inputs){
        Inputs=Inputs
        for(i=0;this.layers[this.layers.length].length;i++){
            Outputs.push(this.layers[this.layers.length][i].out())
        }
        return Outputs
    }

    this.train=function(Time){
        End=new Date().getTime()+Time*60
        Trainer=setInterval(function(){
            if(new Date.getTime()>End){
                clearInterval(Trainer)
            }else{

            }
        })
    }

}

function input(i){
    this.out=function(){
        return Inputs[i]
    }
}

function neuron(){
    //this.index=net.templayer.length potential indexing of neurons, can be extended to Iding the connectors
    //this.layer=net.layers.length
    this.connectors=this.C()
    this.temp=[]
    this.C=function(){
    for(i=0;i<this.layers[this.layers.length-1].length;i++){
                this.temp.push(new connector(this.layers[this.layers.length-1][i],this))
        }
        return this.temp;
    }
    this.b=Math.random()
    this.inputs=net.layers[net.layers.length]
    this.out=function(){
        Sum=0
        for(i=0;i<connectors.length;i++){
            Sum=Sum+this.connectors[i].W*this.connectors[i].In.out()
        }
        return 1/(1+Math.pow(Math.E(),Sum))
    }
}

function connector(last,next){
    this.In=last
    this.Out=next
    this.W=Math.random()
}

function CInputs(inputs){
    for(i=0;inputs.lenght;i++){
        t=new neuron();
        t.out=function(){

        }
    }
}

function scaleDown(Canvas,Area){
    Ratio=Canvas.height/Canvas.width
    Scale=Math.sqrt(Area/Ratio)/Canvas.width
    Canvas.width=Canvas.width*Scale;Canvas.height=Canvas.height*Scale;Canvas.getContext("2d").scale(Scale,Scale)
    return grayScale(Canvas.getContext("2d"),Canvas)
}

/*function record(){
    console.log("Recording")
    var keys = [];
    window.onkeyup = function(e) {keys[e.keyCode]=false;}
    window.onkeydown = function(e) {keys[e.keyCode]=true;}
    out=[]
    Recorder=setInterval(function(){
        out.push("out["+out.length+"]=["+mc.toDataURL("image/webp", 0.01)+","+keys[37]+","+keys[39]+","+keys[32] || keys[38]+"]");
        if(keys[80]==true){
            console.log(out.join(";"))
            clearInterval(Recorder);
        }
    },1500)
}record()*/

function grayScale(context, canvas) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels  = imgData.data;
        for (var i = 0, n = pixels.length; i < n; i += 4) {
            var grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
            ImgDataGray.push(grayscale)
        }   
        return ImgDataGray
  }

function UrlToInput(strDataURI) {
    var image = new Image;
    image.src = strDataURI;
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 0, 0);
	return scaleDown(canvas,500);
}