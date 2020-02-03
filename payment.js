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
        













(function(){

	var target = document.querySelector('[drawerid="paymentDrawer"]');
    var observer = new MutationObserver(function(mutations){

		console.log($('[drawerid="paymentDrawer"]').find('.payment-container').length == 0);

		// this need to optimize
		if($('body').find('.payment-container').length == 0){
			console.log("mutation recived",mutations);
			var targetToHide = document.querySelector('#nbsTransportationPaymentControl');
			var childs = targetToHide.querySelectorAll('.ups-tile_button');
			console.log(childs);
			for (i = 0; i < childs.length; i++) {
				childs[i].style.display = "none";
			}
			addRadioButtonsOnChange();
		}
        
    });

    observer.observe(target,{
        attributes:true,
        subtree:true,
        childList:true,
        characterData:true
        
    });


    function addRadioButtonsOnChange(){
			$(`
				<div class="payment-container">
					<input id="byCard" type="radio" name="paymentRadio"></input><label for="byCard">Payment by card</label><br>
					<hr>
					<input  id="byOther" type="radio" name="paymentRadio"></input><label for="byOther">Payment by other mode</label>
				</div>
			`).insertBefore($("[drawerid='paymentDrawer']").find('.ups-drawer-content'))
            $('.payment-container').css({
                'padding': '10px',
				'background-color':"#f5f5f5",
				'margin-top':'10px'
			});
			
			$('.payment-container > hr').css({
				'margin':'5px'
			})
			
			$('.payment-container > label').css({
				'color':'#666',
				'font-size':'13px'
            })

            // function generateBooleanButtons(config){

            //     if(config && config.count && config.count>1){
            //         for(var i=0; i< parseInt(config.count); i++){
            //             var ele = document.createElement("input");
            //             var label = document.createElement("label");
            //             label.setAttribute("for","radio"+i+1);
            //             var textNode = document.createTextNode(config.labels[i]);
            //             var breakPoint = document.createElement("br");
            //             ele.setAttribute("type","radio");
            //             ele.setAttribute("id","radio"+i+1);
            //             ele.setAttribute("name", config.name);
            //             label.appendChild(textNode);
            //             containerDiv.appendChild(ele);
            //             containerDiv.appendChild(label);
            //             containerDiv.appendChild(breakPoint);
            //         }
            //     }else{
            //         return false;
            //     }

                
            // }
    }
})();
