jQuery(document).ready(()=> {
    const writableElements = document.querySelectorAll('textarea');
    jQuery(writableElements).focus(function(e){
        if(!document.getElementById("genieBtn")){
            addGenie(e.target)
        }
    })
})

const addGenie = (e) => {
let image = document.createElement("img");
image.setAttribute("id", "genieBtn")
image.src = ("https://i.postimg.cc/8cDz9B6b/genei32.png");
jQuery(image).on("click", ()=>{
    console.log(1234);
    window.wp.data.dispatch('getgenie').setSidebar({
			open: true,
			component: 'TemplateListScreen',
			
		})
})
e.after(image);
}
