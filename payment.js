(function(){

    var target = document.querySelector('[drawerid="paymentDrawer"]');
    var observer = new MutationObserver(function(mutations){
        console.log("mutation recived",mutations);
        var targetToHide = document.querySelector('#nbsTransportationPaymentControl');
        
        // console.log("AAAAAAAAAAAAAA",targetToHide)
            var childs = targetToHide.querySelectorAll('.ups-tile_button');
            console.log(childs)
            // var processChilds = Array.prototype.slice.call(childs);
            // processChilds.forEach(element => {
            //     element.style.display = 'none';
            // });
        

    });

    observer.observe(target,{
        attributes:true,
        subtree:true,
        childList:true,
        characterData:true
        
    });


    function addBooleanButtonsOnChange(){
        var defaultBooleanConfig = {
            "count":2,
            "labels":["Payment by card","Payment by others"],
            "name":"booleanPayment"
        };
        var containerDiv = document.createElement("div");
        containerDiv.setAttribute("class","payment-container");

        generateBooleanButtons(defaultBooleanConfig);

            document.body.appendChild(containerDiv);
            $('.payment-container').css({
                'padding': '10px',
                'background-color':"#f5f5f5"
            })

            function generateBooleanButtons(config){

                if(config && config.count && config.count>1){
                    for(var i=0; i< parseInt(config.count); i++){
                        var ele = document.createElement("input");
                        var label = document.createElement("label");
                        label.setAttribute("for","radio"+i+1);
                        var textNode = document.createTextNode(config.labels[i]);
                        var breakPoint = document.createElement("br");
                        ele.setAttribute("type","radio");
                        ele.setAttribute("id","radio"+i+1);
                        ele.setAttribute("name", config.name);
                        label.appendChild(textNode);
                        containerDiv.appendChild(ele);
                        containerDiv.appendChild(label);
                        containerDiv.appendChild(breakPoint);
                    }
                }else{
                    return false;
                }

                
            }
    }
})();
        
