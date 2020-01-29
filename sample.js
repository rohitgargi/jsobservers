(function(){
    let mutationObserver = new MutationObserver(mutationCallback);
    let options = {
        root: document.querySelector('#parent'),
        rootMargin: '0px',
        threshold: 0 //A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    }
    let observer2 = new IntersectionObserver(interSectionCallback, options);
    // Intersection observer observing target
    let target = document.querySelector("#child");


    //Mutation callback
    function mutationCallback(mutations,observer){
        mutations.forEach(mutation => {
            console.log(mutation)
            if(mutation.type == 'characterData' || mutation.type == 'attribute'){
                observer2.observe(target);
                
            }
            observer.disconnect();      
        });
    }
    const ele = document.querySelector('#sample');
    
    
    // Mutation observer observing
    mutationObserver.observe(ele,{
        attributes:true,
        subtree:true,
        childList:true,
        characterData:true
        
    });

    function interSectionCallback(value){

    }
})();
